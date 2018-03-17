"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","386aadde68756000ba89f918a70c62c6"],["/static/css/main.2b84f8a8.css","e0f2c45083f64a7359f490a1e563a666"],["/static/js/main.2e5f8ded.js","3b606666f260418466a1a9ea12c78115"],["/static/media/bri_colour.9251b770.jpg","9251b770feb0d679e32679c1f41ef125"],["/static/media/bubblesA3.712d2f02.gif","712d2f02c3e8c29589781604a048b7f5"],["/static/media/code.3ccfe650.svg","3ccfe6508758f5292265c43011723c22"],["/static/media/directory1.26229387.png","262293873739c0bf24862f4f529949cf"],["/static/media/directory2.28df1417.png","28df1417046a44012dcb792cbe8428a7"],["/static/media/directory3.ff1cfcbb.png","ff1cfcbb6c78ca4d379b0f271a2ca283"],["/static/media/email.e2bdb339.svg","e2bdb33912609adc330b50a51300cebc"],["/static/media/github.37e9c22d.svg","37e9c22d55724f38840f1859dac3072a"],["/static/media/linkedin.7e738a82.svg","7e738a8229f992c90f9ce53dac679ac4"],["/static/media/partEz1.004cfa43.JPG","004cfa4302cdd6021fc373a26258d057"],["/static/media/partEz2.01a19f7c.JPG","01a19f7cea6807b833cd672aa94e12b3"],["/static/media/partEz3.5494139f.JPG","5494139fb27f001a16a04bdef61216a5"],["/static/media/partEz4.c0c27f0b.JPG","c0c27f0b882e67a9b3beab0f0f41e36e"],["/static/media/robotA3.0bb59738.gif","0bb59738f9485098b1660f0de1e9c029"],["/static/media/shapesA2.700c7c12.gif","700c7c125cc753a86577ccb8ac7c29bd"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});