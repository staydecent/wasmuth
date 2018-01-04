"use strict";function partial(e,r){return r=[e].concat(Array.prototype.slice.call(r)),e.bind.apply(e,r)}function assoc(e,r,t){if(arguments.length<3)return partial(assoc,arguments);checkArgTypes_1(arguments,["string","-any","object"]);for(var n={},o=Object.keys(t),a=0;a<o.length;a++)n[o[a]]=t[o[a]];return n[e]=r,n}function merge(){if(arguments&&arguments.length){for(var e={},r=0;r<arguments.length;r++){if("object"!==toType$1(arguments[r]))throw new TypeError("All arguments must be objects");e=_extends({},e,arguments[r])}return e}}function pick(e,r){if(arguments.length<2)return partial(pick,arguments);checkArgTypes_1(arguments,["array","object"]);for(var t={},n=0;n<e.length;n++){var o=e[n];t[o]=r[o]}return t}function createAction(e,r,t){if(1===arguments.length)return partial(createAction,arguments);checkArgTypes_1(arguments,["string","-any",["object","undefined"]]);var n={type:e,payload:r};return void 0!==t?merge(n,pick(["meta","error"],t)):n}function diffObj(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};checkArgTypes_1(arguments,["object","object"]);for(var t={},n=Object.keys(e),o=0;o<n.length;o++){var a=n[o];e[a]!==r[a]&&(t[a]=r[a])}for(var c=Object.keys(r),i=0;i<c.length;i++)e[c[i]]||(t[c[i]]=r[c[i]]);return t}function filter(e,r){return arguments.length<2?partial(filter,arguments):(checkArgTypes_1(arguments,["function",["array","object"]]),"array"===toType$2(r)?Array.prototype.filter.call(r,e):objFilter(e,r))}function objFilter(e,r){for(var t=Object.keys(r),n=t.length,o={},a=0;a<n;a++)e(r[t[a]])&&(o[t[a]]=r[t[a]]);return o}function without(e,r){return arguments.length<2?partial(without,arguments):pick(filter(function(r){return-1===e.indexOf(r)},Object.keys(r)),r)}function dissoc(e,r){return arguments.length<2?partial(dissoc,arguments):(checkArgTypes_1(arguments,["string","object"]),without([e],r))}function find(e,r){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("function"!=typeof e)throw new TypeError("predicate must be a function");if(null==r)throw new TypeError("Array.prototype.find called on null or undefined");for(var n=r.length||0,o=void 0,a=0;a<n;a++)if(o=r[a],e(o,a,r))return t?a:o}function findIndex(e,r){return find(e,r,!0)}function fromPairs(e){checkArgTypes_1(arguments,["array"]);for(var r={},t=0;t<e.length;t++)r[e[t][0]]=e[t][1];return r}function last(e){return checkArgTypes_1([arguments[0]],["array"]),e[e.length?e.length-1:0]}function map(e,r){return arguments.length<2?partial(map,arguments):(checkArgTypes_1(arguments,["function",["array","object"]]),"array"===toType$3(r)?Array.prototype.map.call(r,e):objMap(e,r))}function objMap(e,r){for(var t=Object.keys(r),n=t.length,o={},a=0;a<n;a++){var c=t[a];o[c]=e(c,r[c])}return o}function path(e,r){if(arguments.length<2)return partial(path,arguments);checkArgTypes_1(arguments,["array",["array","object"]]);for(var t=r,n=0;n<e.length;n++){if(null==t)return;t=t[e[n]]}return t}function pathEq(e,r,t){return arguments.length<3?partial(pathEq,arguments):path(e,t)===r}function pathOr(e,r,t){return arguments.length<3?partial(pathOr,arguments):path(r,t)||e}function pathSet(e,r,t){if(arguments.length<3)return partial(pathSet,arguments);checkArgTypes_1(arguments,["array","-any","object"]);var n=merge({},t);return e.reduce(function(t,n,o){return t[n]=t[n]||{},e.length===o+1&&(t[n]=r),t[n]},n),n}function pipe(){if(arguments&&arguments.length){var e=arguments,r=e.length;return function(t){for(var n=0;n<r;n++)e[n]&&(t=e[n](t));return t}}}function range(e,r){checkArgTypes_1(arguments,["number","number"]);for(var t=[],n=e;n<r;)t.push(n),n+=1;return t}function reduce(e,r,t){return arguments.length<3?partial(reduce,arguments):(checkArgTypes_1(arguments,["function","-any","array"]),Array.prototype.reduce.call(t,e,r))}function reject(e,r){return arguments.length<2?partial(reject,arguments):(checkArgTypes_1(arguments,["function",["array","object"]]),"array"===toType$4(r)?arrReject(e,r):objReject(e,r))}function arrReject(e,r){for(var t=r.length,n=[],o=0;o<t;o++)e(r[o])||n.push(r[o]);return n}function objReject(e,r){for(var t=Object.keys(r),n=t.length,o={},a=0;a<n;a++)e(r[t[a]])||(o[t[a]]=r[t[a]]);return o}function request(e){var r=e.url,t=e.method,n=void 0===t?"GET":t,o=e.data,a=void 0===o?null:o,c=e.headers,i=new window.XMLHttpRequest,p=new Promise(function(e,t){i.open(n,r),i.onload=function(){return i.status>=400?t(i.statusText):e(safelyParse(i.responseText))},i.onerror=function(){return t(i.statusText)},i.setRequestHeader("Content-Type","application/json"),c&&"object"===toType$5(c)&&map(function(e,r){return i.setRequestHeader(e,r)},c),i.send("object"===toType$5(a)?JSON.stringify(a):a)});return{xhr:i,promise:p}}function safelyParse(e){try{return JSON.parse(e)}catch(r){return e}}function slice(e,r,t){return arguments.length<2?partial(slice,arguments):(checkArgTypes_1(arguments,["number","number",["array","string"]]),"array"===toType$6(t)?Array.prototype.slice.call(t,e,r):String.prototype.slice.call(t,e,r))}function some(e,r){return arguments.length<2?partial(some,arguments):(checkArgTypes_1(arguments,["function",["array","object"]]),"array"===toType$7(r)?Array.prototype.some.call(r,e):objSome(e,r))}function objSome(e,r){for(var t=Object.keys(r),n=t.length,o=0;o<n;o++)if(e(r[t[o]]))return!0;return!1}function toPairs(e){checkArgTypes_1(arguments,["object"]);for(var r=Object.keys(e),t=r.length,n=[],o=0;o<t;o++)n.push([r[o],e[r[o]]]);return n}function uniq(e){checkArgTypes_1(arguments,["array"]);for(var r=[],t=0;t<e.length;t++)-1===r.indexOf(e[t])&&r.push(e[t]);return r}function watchStore(e,r,t){if(arguments.length<3)return partial(watchStore,arguments);checkArgTypes_1(arguments,["object","array","function"]);var n=e.getState,o=e.subscribe,a=r.join(","),c=path(r),i=function(){var e=c(n());if(void 0!==e){var r=cache[a];void 0!==r&&r===e||("object"===toType$8(e)?cache[a]=merge({},e):cache[a]=e,t(e,r))}};i(),o(i)}function where(e,r,t){return arguments.length<3?partial(where,arguments):(checkArgTypes_1(Array.prototype.slice.call(arguments,0,3),["string","-any","object"]),t[e]===r)}var fastDeepEqual=function e(r,t){if(r===t)return!0;var n,o=Array.isArray(r),a=Array.isArray(t);if(o&&a){if(r.length!=t.length)return!1;for(n=0;n<r.length;n++)if(!e(r[n],t[n]))return!1;return!0}if(o!=a)return!1;if(r&&t&&"object"==typeof r&&"object"==typeof t){var c=Object.keys(r);if(c.length!==Object.keys(t).length)return!1;var i=r instanceof Date,p=t instanceof Date;if(i&&p)return r.getTime()==t.getTime();if(i!=p)return!1;var u=r instanceof RegExp,f=t instanceof RegExp;if(u&&f)return r.toString()==t.toString();if(u!=f)return!1;for(n=0;n<c.length;n++)if(!Object.prototype.hasOwnProperty.call(t,c[n]))return!1;for(n=0;n<c.length;n++)if(!e(r[c[n]],t[c[n]]))return!1;return!0}return!1},toType=function(e){return{}.toString.call(e).toLowerCase().slice(8,-1)},checkArgTypes=function(e,r){for(var t,n,o=0,a=(e=Array.prototype.slice.call(e)).length;o<a;++o)if(t=toType(e[o]),"-any"!==(n=r[o]))if("array"===toType(n)){for(var c=!1,i=0,p=n.length;i<p;++i)c=c||t===n[i];if(!c)throw new TypeError("Expected one of ["+n.join(", ")+"] given '"+t+"' for argument at index "+o)}else if(t!==n)throw new TypeError("Expected '"+n+"' given '"+t+"' for argument at index "+o)};checkArgTypes.prototype.toType=toType;var checkArgTypes_1=checkArgTypes,_extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},toType$1=checkArgTypes_1.prototype.toType,toType$2=checkArgTypes_1.prototype.toType,guid=function(){var e=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},toType$3=checkArgTypes_1.prototype.toType,toType$4=checkArgTypes_1.prototype.toType,toType$5=checkArgTypes_1.prototype.toType,toType$6=checkArgTypes_1.prototype.toType,toType$7=checkArgTypes_1.prototype.toType,toType$8=checkArgTypes_1.prototype.toType,cache={},wasmuth={assoc:assoc,createAction:createAction,diffObj:diffObj,dissoc:dissoc,equal:fastDeepEqual,filter:filter,find:find,findIndex:findIndex,fromPairs:fromPairs,guid:guid,last:last,map:map,merge:merge,partial:partial,path:path,pathEq:pathEq,pathOr:pathOr,pathSet:pathSet,pick:pick,pipe:pipe,range:range,reduce:reduce,reject:reject,request:request,slice:slice,some:some,toPairs:toPairs,uniq:uniq,watchStore:watchStore,where:where,without:without};module.exports=wasmuth;
