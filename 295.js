"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[295],{6295:(e,t,l)=>{l.r(t),l.d(t,{default:()=>m});var a=l(7294),n=l(5998),c=l(134),r=l(5456),s=l(3351),o=l(7455),u=l(4236),i=l(8029);const m=function(){const e=(0,n.I0)(),t=(0,n.v9)((e=>e.persistedControlReducer.reFetch)),l=(0,n.v9)((e=>e.persistedControlReducer.keepFetch)),[m,E]=(0,a.useState)(0),[d,p]=(0,a.useState)([]);return(0,a.useEffect)((()=>{e((async e=>{try{e((0,u.a)(!1));const n=await(0,i.l)("post",o.r+"/api/catslist",{offset:m,limit:100});var t,a;l?p(d.concat(null==n||null===(t=n.data)||void 0===t?void 0:t.catsData)):(p((null==n||null===(a=n.data)||void 0===a?void 0:a.catsData)||[]),e((0,u.Gg)(!1))),e((0,u.a)(!1))}catch(t){e((0,u.a)(!1)),console.log(t)}}))}),[m]),(0,a.useEffect)((()=>{l&&E((e=>e+100))}),[l]),(0,a.useEffect)((()=>{t&&E(0)}),[t]),a.createElement("main",null,a.createElement("h1",null,"貓咪宅急便"),a.createElement("section",{className:"pageSection"},a.createElement("h2",null,"服務介紹"),a.createElement("p",null,"歡迎使用「貓咪宅急便」，我們提供簡便的線上預訂服務，讓您輕鬆享受親切可愛的貓咪送上門的體驗，擁有多款品種、健康檢查完備的貓咪，確保您和貓咪共度美好時光，是打造美好回憶的首選。")),a.createElement("section",{className:"pageSection"},a.createElement("h2",null,"服務流程"),a.createElement("ol",null,a.createElement("li",null,"選擇喜歡的貓咪"),a.createElement("li",null,"填寫您的地址與及預約時間"),a.createElement("li",null,"依付款資訊進行付款"),a.createElement("li",null,"等待貓咪上門"))),a.createElement(c.Z,{propData:d,PropCard:s.y,PropModalContent:r.Xd}))}}}]);