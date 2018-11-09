#!/usr/bin/env bash

set -euo pipefail
basedir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"


function __with_docker() {
  docker run -ti --rm -v "${basedir}:/data" -u "$(id -u):$(id -g)" -p 4000:4000 loganmzz/jekyll:1.0.0 "$@"
}

function __with_jekyll() {
  __with_docker bundle install
  __with_docker bundle exec jekyll "$@"
}

function __cmd_build() {
  echo "Build"
  __with_jekyll build "$@"
}

function __cmd_serve() {
  echo "Serve"
  __with_jekyll serve -H 0.0.0.0 "$@"
}

function __cmd_deploy() {
  DEST="${basedir}_master"

  # Clean
  pushd "${basedir}"
    [[ ! -d "$DEST" ]] || {
      rm -rf "${DEST}"
      git worktree prune
    }

    git worktree add "${DEST}" 'master'

    __cmd_build --drafts
  popd

  pushd "${DEST}"
    git pull
    echo "Clean old files"
    find . -maxdepth 1 ! -name '.' ! -name '..' ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;
  popd

  echo "Copy new files"
  mv "${basedir}/_site"/* "${DEST}"

  pushd "${DEST}"
    echo "Commit"
    git add -fA
    git commit -m "Update site at $(date)"
    git push
  popd

  pushd "${basedir}"
    git worktree remove "${DEST}"
  popd

  echo "Deployed Successfully!"
}


command="${1:-}"
shift

case "${command}" in
  build|serve|deploy)
    "__cmd_${command}" "$@"
    ;;

  *)
    echo "Unknown command: ${command}" >&2
    exit 1
    ;;
esac
