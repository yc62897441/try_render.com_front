"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[295],{XF0d:(e,t,l)=>{l.r(t),l.d(t,{default:()=>E});var a=l("q1tI"),n=l("vvQw"),c=l("raqg"),r=l("blgG"),o=l("Tkux"),u=l("U9Tv"),s=l("fDUD"),i=l("DuBu"),m=l("wTN4"),d=l("KJq9");const p={startDate:{label:"起日",type:"date",required:!0},startTime:{label:"起時",type:"time",required:!0},endDate:{label:"迄日",type:"date",required:!0},endTime:{label:"迄時",type:"time",required:!0}},E=function(){const e=(0,n.I0)(),t=(0,n.v9)((e=>e.persistedControlReducer.reFetch)),l=(0,n.v9)((e=>e.persistedControlReducer.keepFetch)),[E,f]=(0,a.useState)(0),[h,g]=(0,a.useState)([]),[v,D]=(0,c.x)({}),b=100;function C(){return async e=>{try{e((0,m.a)(!1));const n={offset:E,limit:b,timeSpanFormData:v};console.log("postData",n);const c=await(0,d.l)("post",i.r+"/api/catslist",n);var t,a;l?(g(h.concat(null==c||null===(t=c.data)||void 0===t?void 0:t.catsData)),e((0,m.$e)(!1))):(g((null==c||null===(a=c.data)||void 0===a?void 0:a.catsData)||[]),e((0,m.Gg)(!1))),e((0,m.a)(!1))}catch(t){e((0,m.a)(!1)),console.log(t)}}}return(0,a.useEffect)((()=>{e(C())}),[E]),(0,a.useEffect)((()=>{l&&f((e=>e+b))}),[l]),(0,a.useEffect)((()=>{t&&f(0)}),[t]),a.createElement("main",null,a.createElement("h1",null,"貓咪宅急便"),a.createElement("section",{className:"pageSection"},a.createElement("h2",null,"服務介紹"),a.createElement("p",null,"歡迎使用「貓咪宅急便」，我們提供簡便的線上預訂服務，讓您輕鬆享受親切可愛的貓咪送上門的體驗，擁有多款品種、健康檢查完備的貓咪，確保您和貓咪共度美好時光，是打造美好回憶的首選。")),a.createElement("section",{className:"pageSection"},a.createElement("h2",null,"服務流程"),a.createElement("ol",null,a.createElement("li",null,"選擇您想預約的時間"),a.createElement("li",null,"選擇喜歡的貓咪"),a.createElement("li",null,"填寫您的預定地址"),a.createElement("li",null,"依付款資訊進行付款"),a.createElement("li",null,"等待貓咪上門♥"))),a.createElement("section",{className:"pageSection"},a.createElement(s.Z,{formData:v,formConfig:p,handleChange:function(e,t,l){D((l=>{l[t]=e}))},handleSubmit:()=>{e((0,m.Gg)(!0)),e(C())}})),a.createElement(r.Z,{propData:h,PropCard:u.y,PropModalContent:o.Xd}))}}}]);