'use strict';

var shortContent = function shortContent(job) {
    var idx = job.content.indexOf('<!--more-->');
    return idx >= 0 ? job.content.substring(0, idx) + jobReadMoreTemplate(job) : job.content;
};

var jobReadMoreTemplate = function jobReadMoreTemplate(job) {
    return '<a href="job-detail#' + job.path + '">Plus de d\xE9tails...</a>';
};

// Should substring at
var jobTemplate = function jobTemplate(job) {
    return '\n<div class="job" id="' + job.path + '">\n    <a href="#' + job.path + '">\n        <span><img alt="' + job.title + '" src="' + job.image + '"></span>\n        <div class="title">\n            <div>' + job.title + '</div>\n        </div>\n        <div class="techno">\n            ' + job.techno.map(function (elt) {
        return '<span>' + elt + '</span>';
    }).join('') + '\n        </div>\n        <div class="open">\n            <i class="fa fa-chevron-right"></i>\n        </div>\n        <div class="close">\n            <i class="fa fa-chevron-down"></i>\n        </div>\n    </a>\n    <div class="content">\n    ' + marked.parse(shortContent(job)) + '\n    </div>\n</div>';
};

var jobDetailTemplate = function jobDetailTemplate(job) {
    return '\n  <img class="profile" alt="' + job.title + '" src="' + job.image + '">\n  <article>' + marked.parse(job.content) + '</article>\n';
};

var config = {
    apiKey: "AIzaSyAbCztPKyK2JKZKexKcT5mTjjB5vwAUXhg",
    authDomain: "sitemkp.firebaseapp.com",
    databaseURL: "https://sitemkp.firebaseio.com",
    projectId: "sitemkp",
    storageBucket: "sitemkp.appspot.com"
};

var jobsList = document.querySelector(".jobs .list");
if (jobsList) {
    var app = firebase.initializeApp(config);
    var database = firebase.database();

    database.ref('jobs').once('value').then(function (elt) {
        var jobs = elt.val();
        jobs.sort(function (a, b) {
            return a.order - b.order;
        });
        // console.info({elt, jobs});
        jobsList.innerHTML = jobs.map(jobTemplate).join('\n');
    });
}

var jobDetail = document.querySelector('section.job-detail');
var hash = document.location.hash;
// console.log({jobDetail, hash});

if (jobDetail && hash) {

    var _app = firebase.initializeApp(config);
    var _database = firebase.database();
    _database.ref('jobs').once('value').then(function (elt) {
        var jobs = elt.val();
        jobs.forEach(function (job) {
            if (hash === '#' + job.path) {
                jobDetail.innerHTML = jobDetailTemplate(job);
                document.title = job.title;
            }
        });
    });
} else {
    // console.warn('Oops');
    var back = document.querySelector('#top a');
    if (back) back.click();
}
