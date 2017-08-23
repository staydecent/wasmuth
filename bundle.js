"use strict";function partial(e,r){return r=[e].concat(Array.prototype.slice.call(r)),e.bind.apply(e,r)}function assoc(e,r,t){if(arguments.length<3)return partial(assoc,arguments);checkArgTypes_1(arguments,["string","-any","object"]);for(var n={},o=Object.keys(t),a=0;a<o.length;a++)n[o[a]]=t[o[a]];return n[e]=r,n}function diffObj(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};checkArgTypes_1(arguments,["object","object"]);for(var t={},n=Object.keys(e),o=0;o<n.length;o++){var a=n[o];e[a]!==r[a]&&(t[a]=r[a])}for(var c=Object.keys(r),p=0;p<c.length;p++)e[c[p]]||(t[c[p]]=r[c[p]]);return t}function filter(e,r){return arguments.length<2?partial(filter,arguments):(checkArgTypes_1(arguments,["function",["array","object"]]),"array"===toType$1(r)?Array.prototype.filter.call(r,e):objFilter(e,r))}function objFilter(e,r){for(var t=Object.keys(r),n=t.length,o={},a=0;a<n;a++)e(r[t[a]])&&(o[t[a]]=r[t[a]]);return o}function last(e){return checkArgTypes_1([arguments[0]],["array"]),e[e.length?e.length-1:0]}function map(e,r){return arguments.length<2?partial(map,arguments):(checkArgTypes_1(arguments,["function",["array","object"]]),"array"===toType$2(r)?Array.prototype.map.call(r,e):objMap(e,r))}function objMap(e,r){for(var t=Object.keys(r),n=t.length,o={},a=0;a<n;a++){var c=t[a];o[c]=e(c,r[c])}return o}function merge(){if(arguments&&arguments.length){for(var e={},r=0;r<arguments.length;r++){if("object"!==toType$3(arguments[r]))throw new TypeError("All arguments must be objects");e=_extends({},e,arguments[r])}return e}}function path(e,r){if(arguments.length<2)return partial(path,arguments);checkArgTypes_1(arguments,["array","object"]);for(var t=r,n=0;n<e.length;n++){if(null==t)return;t=t[e[n]]}return t}function pathEq(e,r,t){return arguments.length<3?partial(pathEq,arguments):path(e,t)===r}function pathOr(e,r,t){return arguments.length<3?partial(pathOr,arguments):path(r,t)||e}function pathSet(e,r,t){if(arguments.length<3)return partial(pathSet,arguments);checkArgTypes_1(arguments,["array","-any","object"]);var n=merge({},t);return e.reduce(function(t,n,o){return t[n]=t[n]||{},e.length===o+1&&(t[n]=r),t[n]},n),n}function pick(e,r){if(arguments.length<2)return partial(pick,arguments);checkArgTypes_1(arguments,["array","object"]);for(var t={},n=0;n<e.length;n++){var o=e[n];r[o]&&(t[o]=r[o])}return t}function pipe(){if(arguments&&arguments.length){var e=arguments,r=e.length;return function(t){for(var n=0;n<r;n++)e[n]&&(t=e[n](t));return t}}}function range(e,r){checkArgTypes_1(arguments,["number","number"]);for(var t=[],n=e;n<r;)t.push(n),n+=1;return t}function reduce(e,r,t){return arguments.length<3?partial(reduce,arguments):(checkArgTypes_1(arguments,["function","-any","array"]),Array.prototype.reduce.call(t,e,r))}function some(e,r){return arguments.length<2?partial(some,arguments):(checkArgTypes_1(arguments,["function",["array","object"]]),"array"===toType$4(r)?Array.prototype.some.call(r,e):objSome(e,r))}function objSome(e,r){for(var t=Object.keys(r),n=t.length,o=0;o<n;o++)if(e(r[t[o]]))return!0;return!1}function toPairs(e){checkArgTypes_1(arguments,["object"]);for(var r=Object.keys(e),t=r.length,n=[],o=0;o<t;o++)n.push([r[o],e[r[o]]]);return n}function where(e,r,t){return arguments.length<3?partial(where,arguments):(checkArgTypes_1(Array.prototype.slice.call(arguments,0,3),["string","-any","object"]),t[e]===r)}function without(e,r){return arguments.length<2?partial(without,arguments):pick(filter(function(r){return-1===e.indexOf(r)},Object.keys(r)),r)}var toType=function(e){return{}.toString.call(e).toLowerCase().slice(8,-1)},checkArgTypes=function(e,r){for(var t,n,o=0,a=(e=Array.prototype.slice.call(e)).length;o<a;++o)if(t=toType(e[o]),"-any"!==(n=r[o]))if("array"===toType(n)){for(var c=!1,p=0,i=n.length;p<i;++p)c=c||t===n[p];if(!c)throw new TypeError("Expected one of ["+n.join(", ")+"] given '"+t+"' for argument at index "+o)}else if(t!==n)throw new TypeError("Expected '"+n+"' given '"+t+"' for argument at index "+o)};checkArgTypes.prototype.toType=toType;var checkArgTypes_1=checkArgTypes,toType$1=checkArgTypes_1.prototype.toType,toType$2=checkArgTypes_1.prototype.toType,_extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},toType$3=checkArgTypes_1.prototype.toType,toType$4=checkArgTypes_1.prototype.toType,wasmuth={assoc:assoc,diffObj:diffObj,filter:filter,last:last,map:map,merge:merge,path:path,pathEq:pathEq,pathOr:pathOr,pathSet:pathSet,pick:pick,pipe:pipe,range:range,reduce:reduce,some:some,toPairs:toPairs,where:where,without:without};module.exports=wasmuth;
