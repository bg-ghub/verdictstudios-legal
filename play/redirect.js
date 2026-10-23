'use strict';
const target = document.getElementById('redirect-target');
const destination = new URL(target.getAttribute('href'), location.origin);
destination.search = location.search;
destination.hash = location.hash;
target.href = destination.href;
location.replace(destination.href);
