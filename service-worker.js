"use strict";var precacheConfig=[["/index.html","ee27be16e14c8eca0e51f0987d574459"],["/static/css/main.097afafc.css","917bcb864d663141f46c2542912fd986"],["/static/js/main.5bdf194b.js","66442520650e56bae15c9c2807740c1b"],["/static/media/beer.67783b9b.gif","67783b9b1f26435759bf77a33b437cb7"],["/static/media/briColourCircle.a069d638.png","a069d6388d61f5ae7234e9b9111bd7e7"],["/static/media/bubblesA3.712d2f02.gif","712d2f02c3e8c29589781604a048b7f5"],["/static/media/code.3ccfe650.svg","3ccfe6508758f5292265c43011723c22"],["/static/media/counter.03f5a899.gif","03f5a8998345541510c5206bb27dc201"],["/static/media/directory1.671af60a.png","671af60aa8f9b444fae3223f2aa8e83f"],["/static/media/directory2.755dd3a8.png","755dd3a8f34305a753e3bd8375625208"],["/static/media/directory3.7d031d3b.png","7d031d3b45d15695ffa137984947735e"],["/static/media/email.e2bdb339.svg","e2bdb33912609adc330b50a51300cebc"],["/static/media/github.37e9c22d.svg","37e9c22d55724f38840f1859dac3072a"],["/static/media/linkedin.7e738a82.svg","7e738a8229f992c90f9ce53dac679ac4"],["/static/media/partEz1.004cfa43.jpg","004cfa4302cdd6021fc373a26258d057"],["/static/media/partEz2.01a19f7c.jpg","01a19f7cea6807b833cd672aa94e12b3"],["/static/media/partEz3.5494139f.jpg","5494139fb27f001a16a04bdef61216a5"],["/static/media/partEz4.c0c27f0b.jpg","c0c27f0b882e67a9b3beab0f0f41e36e"],["/static/media/robotA3.0bb59738.gif","0bb59738f9485098b1660f0de1e9c029"],["/static/media/shapesA2.700c7c12.gif","700c7c125cc753a86577ccb8ac7c29bd"],["/static/media/water.7fb4d55b.gif","7fb4d55b78d4b1ce0e8e00c4c3e1724e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});