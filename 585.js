"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[585],{3585:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(7294),n=a(5998),s=a(8393),r=a(6133),c=a(626),o=a(7455),u=a(4236),i=a(8029);const p=function(){const e=(0,n.I0)(),t=(0,n.v9)((e=>e.persistedControlReducer.reFetch)),a=(0,n.v9)((e=>e.persistedControlReducer.keepFetch)),[p,d]=(0,l.useState)(0),[f,m]=(0,l.useState)([]);return(0,l.useEffect)((()=>{e((async e=>{try{e((0,u.a)(!1));const n=await(0,i.l)("post",o.r+"/api/restaurantlist",{offset:p,limit:100});var t,l;console.log("api catslist response",n),a?m(f.concat(null==n||null===(t=n.data)||void 0===t?void 0:t.restaurantsData)):(m((null==n||null===(l=n.data)||void 0===l?void 0:l.restaurantsData)||[]),e((0,u.Gg)(!1))),e((0,u.a)(!1))}catch(t){e((0,u.a)(!1)),console.log(t)}}))}),[p]),(0,l.useEffect)((()=>{a&&d((e=>e+100))}),[a]),(0,l.useEffect)((()=>{t&&d(0)}),[t]),l.createElement("main",null,l.createElement("h1",null,"貓咪餐廳"),l.createElement("section",{className:"pageSection"},l.createElement("h2",null,"服務介紹"),l.createElement("p",null,"歡迎蒞臨「貓咪餐廳」系列，匯聚世界各地迷人的貓咪餐廳，提供多樣風格料理，並搭配可愛的貓迷陪伴您共享美好用餐時光。一同探索菜單，品味來自不同地方的美味，讓每一口都成為一場風味之旅，打造美味和愛貓共同為生活增添色彩的獨特體驗。")),l.createElement(s.Z,{propData:f,PropCard:c.P,PropModalContent:r._l}))}}}]);