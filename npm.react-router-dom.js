/*! For license information please see npm.react-router-dom.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[216],{9655:(e,t,n)=>{n.d(t,{UT:()=>c,rU:()=>u});var r=n(7294),o=n(9250),a=n(2599);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}const i=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function c(e){let{basename:t,children:n,window:l}=e,i=r.useRef();null==i.current&&(i.current=(0,a.q_)({window:l,v5Compat:!0}));let c=i.current,[s,u]=r.useState({action:c.action,location:c.location});return r.useLayoutEffect((()=>c.listen(u)),[c]),r.createElement(o.F0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:c})}const s="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,u=r.forwardRef((function(e,t){let n,{onClick:c,relative:u,reloadDocument:f,replace:p,state:v,target:d,to:h,preventScrollReset:w}=e,m=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,i),g=!1;if(s&&"string"==typeof h&&/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(h)){n=h;let e=new URL(window.location.href),t=h.startsWith("//")?new URL(e.protocol+h):new URL(h);t.origin===e.origin?h=t.pathname+t.search+t.hash:g=!0}let R=(0,o.oQ)(h,{relative:u}),b=function(e,t){let{target:n,replace:l,state:i,preventScrollReset:c,relative:s}=void 0===t?{}:t,u=(0,o.s0)(),f=(0,o.TH)(),p=(0,o.WU)(e,{relative:s});return r.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,n)){t.preventDefault();let n=void 0!==l?l:(0,a.Ep)(f)===(0,a.Ep)(p);u(e,{replace:n,state:i,preventScrollReset:c,relative:s})}}),[f,u,p,l,i,n,e,c,s])}(h,{replace:p,state:v,target:d,preventScrollReset:w,relative:u});return r.createElement("a",l({},m,{href:n||R,onClick:g||f?c:function(e){c&&c(e),e.defaultPrevented||b(e)},ref:t,target:d}))}));var f,p;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(f||(f={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(p||(p={}))}}]);