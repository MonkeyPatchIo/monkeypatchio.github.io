MonkeyPatch Web Site
===

## Design

Site is published through GitHub pages and using Jekyll. However, for Jekyll pluging incompatibilities, generation is not done by GitHub but locally generated, copy/push to `master` branch.

## Tools

`make.sh` script has been written to help regarding Web Site development. It encapsalutes Jekyll into Docker and provides three commands.

Usage: `./make.sh <command> <options>`

### `build`

Generates Web Site under `_site` directory.

You can passed any Jekyll options.

### `serve`

Generates and serve Web Site locally on port 4000. Open browser at `http://localhost:4000`.

You can passed any Jekyll options.

### `deploy`

Generates (with drafts) Web Site and then publish generated content to `master` branch.
