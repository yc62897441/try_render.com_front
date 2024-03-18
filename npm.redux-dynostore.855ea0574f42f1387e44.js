"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[556],{Sbgq:(e,r,t)=>{t.d(r,{S:()=>O,ZP:()=>g});var n=t("ANjH");function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var i=function(e){return"object"==typeof e&&null!=e&&!Array.isArray(e)},a=function e(r,t,n,c){return void 0!==c?c(e)(r,t,n):{}},f=function(e){var r=e.slice(-1)[0];return i(r)?[e.slice(0,-1),r]:[e,{}]},d=function(e){return{createEmpty:function(){return{}},getKeys:function(e){return i(e)?Object.keys(e):[]},getValue:function(e,r){return e[r]},setValue:function(e,r,t){return e[r]=t,e},canMerge:i,merge:e}}(function(e){return function(r,t){if(null==r||r===t||typeof r!=typeof t||!i(r)||!i(t))return t;var n=!1,c={},u=new Set;return Object.keys(t).forEach((function(o){var i=r[o],a=t[o],f=e(i,a);c[o]=f,u.add(o),n=n||f!==i})),n?(Object.keys(r).forEach((function(e){u.has(e)||(c[e]=r[e])})),c):r}}((function(e,r){return r}))),v={type:"@@FILTER/INIT"},s="@@DYNOSTORE/DETACH_REDUCER",l=function(e){return{type:s,identifier:e}},p=function(e){return function(r){return function(t,n){return n.type!==s||n.identifier!==e?r(t,n):void 0}}},y=function e(r){var t=r.reducer,n=r.children,c=r.options,u=Object.entries(n);if(!u.length)return t;var o={};u.forEach((function(r){var t=r[0],n=r[1];o[t]=e(n)}));var i,a,f,l,p,y,h,b=(i=o,f=(void 0===(a=c)?{}:a).stateHandler,l=(f=void 0===f?d:f).createEmpty,p=f.getValue,y=f.setValue,h=Object.entries(i),function(e,r){void 0===e&&(e=l());var t=l(),n=!1;return h.forEach((function(c){var u=c[0],o=c[1],i=p(e,u),a=o(i,r);t=y(t,u,a),n=n||a!==i})),n?t:e});if(!t)return b;var O=function(e,r){var t=(void 0===r?{}:r).stateHandler,n=(t=void 0===t?d:t).createEmpty,c=t.getKeys,u=t.getValue,o=t.setValue,i=e(void 0,v),a=c(i);return function(r,t){if(void 0===r)return i;var f=r;a.length&&(f=n(),a.forEach((function(e){var t=u(r,e);f=o(f,e,t)})));var d=e(f,t);return d===f?r:(a=c(d),c(r).forEach((function(e){if(!a.includes(e)){var t=u(r,e);d=o(d,e,t)}})),d)}}(t,c),g=function(e,r){var t=(void 0===r?{}:r).stateHandler,n=(t=void 0===t?d:t).createEmpty,c=t.merge;return function(r,t){return e.reduce((function(e,n){var u=n(void 0!==r?e:void 0,t);return c(e,u)}),r)||n()}}([O,b],c),E=function(e,r){var t=(void 0===r?{}:r).stateHandler,n=(t=void 0===t?d:t).createEmpty,c=t.getKeys,u=t.getValue,o=t.setValue;return function(r,t){var i=e(r,t);if(t.type==s&&i!==r){var a=!1,f=n();return c(i).forEach((function(e){var r=u(i,e);void 0!==r?f=o(f,e,r):a=!0})),a?f:i}return i}}(g,c);return E},h=function(e,r,t,n){void 0===t&&(t={});var c=function(e,r,t,n){var c={reducer:e,children:{},options:n};return Object.entries(r).forEach((function(e){var r=e[0],u=e[1],o=r.split("."),i=c;o.forEach((function(e){i.children[e]||(i.children[e]={children:{},options:n}),i=i.children[e]})),i.reducer=u,i.options=t[r]})),c}(e,r,t,n);return y(c)},b=function e(r,t){var n;return"function"==typeof r?((n={})[t.replace(/\//g,".")]=r,n):Object.keys(r).reduce((function(n,c){return o(o({},n),e(r[c],t?t+"."+c:c))}),{})},O=function(e){var r=(void 0===e?{}:e).stateHandler;return function(e){return function(t,n){for(var c=t.dynostoreOptions||{},u={stateHandler:r||c.stateHandler||d},i={},a={},f=function(){return h(n,i,a,u)},v=arguments.length,s=new Array(v>2?v-2:0),y=2;y<v;y++)s[y-2]=arguments[y];return o(o({},e.apply(void 0,[t,n].concat(s))),{},{attachReducers:function(e,r){void 0===r&&(r={}),Object.entries(b(e)).forEach((function(e){var t=e[0],n=e[1];i[t]=p(t)(n),a[t]=o(o({},u),r)})),t.replaceReducer(f())},detachReducers:function(e){e.filter((function(e){return i[e]})).forEach((function(e){delete i[e],delete a[e],t.dispatch(l(e))})),t.replaceReducer(f())}})}}};const g=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){return function(t,c){var u=f(r),i=u[0],d=u[1],v=o(o({},e(t,c)),{},{dynostoreOptions:d}),s=a(v,t,c,n.qC.apply(void 0,i));return o(o({},v),s)}}}}}]);