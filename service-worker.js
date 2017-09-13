"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/mozan/index.html","6644d3c34bd5aed677f143d91a94aa08"],["/mozan/static/css/main.c90ca496.css","8c4af36327eca33d980c0bcd1341bf95"],["/mozan/static/js/main.d491912a.js","31944fe808bd450916db2f8d7b536a0f"],["/mozan/static/media/2123_03.2adc7b5c.png","2adc7b5c2cb35027efe054bdbb34555c"],["/mozan/static/media/bg1_03.4f707e4b.jpg","4f707e4b37f6c878bd80c6b361f0ec30"],["/mozan/static/media/bj_03.b5c080d7.jpg","b5c080d7e386229a4377a43a06a04b16"],["/mozan/static/media/erweima_07.17b1da2d.png","17b1da2d8c6b019f1e3184b776c67408"],["/mozan/static/media/iconfont.058c86f3.eot","058c86f3d72b8daba91a75a3dc9950bf"],["/mozan/static/media/iconfont.21f07be2.svg","21f07be299e9016b7a63bed7e49aef83"],["/mozan/static/media/iconfont.83e9f80c.ttf","83e9f80c7f256580a54b6277d0383c6c"],["/mozan/static/media/iconfont.e5dcbd82.woff","e5dcbd822bbdf66b1def5431deaaf477"],["/mozan/static/media/img1_03.775b9122.png","775b9122e57772f0ebdaa5f6277e3d95"],["/mozan/static/media/img2_03.d13b1eb4.png","d13b1eb43beb7191e21c66a6d7daa97a"],["/mozan/static/media/img3_03.e00e3df1.png","e00e3df119b637f7a4a63e45fe6f1805"],["/mozan/static/media/img_03.0eb9fd63.png","0eb9fd63a00c9104f7fee3f003f75db8"],["/mozan/static/media/img_04_03.a53f5c4e.png","a53f5c4e6b4cc1b4b9a07afc2bbf33eb"],["/mozan/static/media/iphone_03.ef5eb07d.png","ef5eb07d51d3ff1c3b3f03b749123913"],["/mozan/static/media/line3_03.37b9a521.jpg","37b9a52179e1d85ab234901b55915d34"],["/mozan/static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/mozan/static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/mozan/static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/mozan/static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["/mozan/static/media/success_03.dd00b452.png","dd00b452c3e545bcc36ebf20881e36f6"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var n=new Request(t,{credentials:"same-origin"});return fetch(n).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/mozan/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});