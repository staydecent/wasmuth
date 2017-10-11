"use strict";function partial(r,e){return e=[r].concat(Array.prototype.slice.call(e)),r.bind.apply(r,e)}function assoc(r,e,t){if(arguments.length<3)return partial(assoc,arguments);checkArgTypes_1(arguments,["string","-any","object"]);for(var n={},a=Object.keys(t),o=0;o<a.length;o++)n[a[o]]=t[a[o]];return n[r]=e,n}function diffObj(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};checkArgTypes_1(arguments,["object","object"]);for(var t={},n=Object.keys(r),a=0;a<n.length;a++){var o=n[a];r[o]!==e[o]&&(t[o]=e[o])}for(var c=Object.keys(e),p=0;p<c.length;p++)r[c[p]]||(t[c[p]]=e[c[p]]);return t}function filter(r,e){return arguments.length<2?partial(filter,arguments):(checkArgTypes_1(arguments,["function",["array","object"]]),"array"===toType$1(e)?Array.prototype.filter.call(e,r):objFilter(r,e))}function objFilter(r,e){for(var t=Object.keys(e),n=t.length,a={},o=0;o<n;o++)r(e[t[o]])&&(a[t[o]]=e[t[o]]);return a}function last(r){return checkArgTypes_1([arguments[0]],["array"]),r[r.length?r.length-1:0]}function map(r,e){return arguments.length<2?partial(map,arguments):(checkArgTypes_1(arguments,["function",["array","object"]]),"array"===toType$2(e)?Array.prototype.map.call(e,r):objMap(r,e))}function objMap(r,e){for(var t=Object.keys(e),n=t.length,a={},o=0;o<n;o++){var c=t[o];a[c]=r(c,e[c])}return a}function merge(){if(arguments&&arguments.length){for(var r={},e=0;e<arguments.length;e++){if("object"!==toType$3(arguments[e]))throw new TypeError("All arguments must be objects");r=_extends({},r,arguments[e])}return r}}function path(r,e){if(arguments.length<2)return partial(path,arguments);checkArgTypes_1(arguments,["array",["array","object"]]);for(var t=e,n=0;n<r.length;n++){if(null==t)return;t=t[r[n]]}return t}function pathEq(r,e,t){return arguments.length<3?partial(pathEq,arguments):path(r,t)===e}function pathOr(r,e,t){return arguments.length<3?partial(pathOr,arguments):path(e,t)||r}function pathSet(r,e,t){if(arguments.length<3)return partial(pathSet,arguments);checkArgTypes_1(arguments,["array","-any","object"]);var n=merge({},t);return r.reduce(function(t,n,a){return t[n]=t[n]||{},r.length===a+1&&(t[n]=e),t[n]},n),n}function pick(r,e){if(arguments.length<2)return partial(pick,arguments);checkArgTypes_1(arguments,["array","object"]);for(var t={},n=0;n<r.length;n++){var a=r[n];e[a]&&(t[a]=e[a])}return t}function pipe(){if(arguments&&arguments.length){var r=arguments,e=r.length;return function(t){for(var n=0;n<e;n++)r[n]&&(t=r[n](t));return t}}}function range(r,e){checkArgTypes_1(arguments,["number","number"]);for(var t=[],n=r;n<e;)t.push(n),n+=1;return t}function reduce(r,e,t){return arguments.length<3?partial(reduce,arguments):(checkArgTypes_1(arguments,["function","-any","array"]),Array.prototype.reduce.call(t,r,e))}function some(r,e){return arguments.length<2?partial(some,arguments):(checkArgTypes_1(arguments,["function",["array","object"]]),"array"===toType$4(e)?Array.prototype.some.call(e,r):objSome(r,e))}function objSome(r,e){for(var t=Object.keys(e),n=t.length,a=0;a<n;a++)if(r(e[t[a]]))return!0;return!1}function toPairs(r){checkArgTypes_1(arguments,["object"]);for(var e=Object.keys(r),t=e.length,n=[],a=0;a<t;a++)n.push([e[a],r[e[a]]]);return n}function fromPairs(r){checkArgTypes_1(arguments,["array"]);for(var e={},t=0;t<r.length;t++)e[r[t][0]]=r[t][1];return e}function uniq(r){checkArgTypes_1(arguments,["array"]);for(var e=[],t=0;t<r.length;t++)-1===e.indexOf(r[t])&&e.push(r[t]);return e}function where(r,e,t){return arguments.length<3?partial(where,arguments):(checkArgTypes_1(Array.prototype.slice.call(arguments,0,3),["string","-any","object"]),t[r]===e)}function without(r,e){return arguments.length<2?partial(without,arguments):pick(filter(function(e){return-1===r.indexOf(e)},Object.keys(e)),e)}var toType=function(r){return{}.toString.call(r).toLowerCase().slice(8,-1)},checkArgTypes=function(r,e){for(var t,n,a=0,o=(r=Array.prototype.slice.call(r)).length;a<o;++a)if(t=toType(r[a]),"-any"!==(n=e[a]))if("array"===toType(n)){for(var c=!1,p=0,i=n.length;p<i;++p)c=c||t===n[p];if(!c)throw new TypeError("Expected one of ["+n.join(", ")+"] given '"+t+"' for argument at index "+a)}else if(t!==n)throw new TypeError("Expected '"+n+"' given '"+t+"' for argument at index "+a)};checkArgTypes.prototype.toType=toType;var checkArgTypes_1=checkArgTypes,toType$1=checkArgTypes_1.prototype.toType,toType$2=checkArgTypes_1.prototype.toType,_extends=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},toType$3=checkArgTypes_1.prototype.toType,toType$4=checkArgTypes_1.prototype.toType,wasmuth={assoc:assoc,diffObj:diffObj,filter:filter,last:last,map:map,merge:merge,path:path,pathEq:pathEq,pathOr:pathOr,pathSet:pathSet,pick:pick,pipe:pipe,range:range,reduce:reduce,some:some,toPairs:toPairs,fromPairs:fromPairs,uniq:uniq,where:where,without:without};module.exports=wasmuth;
