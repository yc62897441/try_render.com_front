"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5],{VNqU:(e,t,n)=>{n.d(t,{oR:()=>a});var s=n("q1tI"),r=n("ejks");const{useDebugValue:o}=s,{useSyncExternalStoreWithSelector:i}=r;let c=!1;const u=e=>e;function a(e,t=u,n){n&&!c&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),c=!0);const s=i(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,n);return o(s),s}},a5vB:(e,t,n)=>{function s(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[n,s]of e)if(!Object.is(s,t.get(n)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const n of e)if(!t.has(n))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let s=0;s<n.length;s++)if(!Object.prototype.hasOwnProperty.call(t,n[s])||!Object.is(e[n[s]],t[n[s]]))return!1;return!0}n.d(t,{X:()=>s})},oWg6:(e,t,n)=>{n.d(t,{M:()=>r});const s=e=>{let t;const n=new Set,s=(e,s)=>{const r="function"==typeof e?e(t):e;if(!Object.is(r,t)){const e=t;t=(null!=s?s:"object"!=typeof r||null===r)?r:Object.assign({},t,r),n.forEach((n=>n(t,e)))}},r=()=>t,o={setState:s,getState:r,getInitialState:()=>i,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},i=t=e(s,r,o);return o},r=e=>e?s(e):s}}]);