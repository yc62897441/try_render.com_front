(self.webpackChunk=self.webpackChunk||[]).push([[179],{wTN4:(e,t,a)=>{"use strict";a.d(t,{$e:()=>u,B2:()=>n,CK:()=>c,Gg:()=>m,JB:()=>s,PC:()=>o,SY:()=>l,a:()=>p,aQ:()=>d,ld:()=>i,rz:()=>r,tS:()=>h});const n="SWITCH_LOGIN",r="SWITCH_ADMIN",l="SWITCH_LOADING",o="SWITCH_REFETCH",i="SWITCH_KEEP_FETCH",d="SWITCH_USER_DATA",s=e=>({type:n,payload:e}),c=e=>({type:r,payload:e}),p=e=>({type:l,payload:e}),m=e=>({type:o,payload:e}),u=e=>({type:i,payload:e}),h=e=>({type:d,payload:e})},fDUD:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a("q1tI"),r=(a("+HrR"),a("SOLs"));const l=function(e){var t;let{formData:a,formConfig:l,handleChange:o,handleSubmit:i,AppendComponent:d}=e;return n.createElement("form",{onSubmit:e=>{e.preventDefault(),i&&i()}},(null===(t=Object.keys(l))||void 0===t?void 0:t.length)>0&&Object.keys(l).map(((e,t)=>{var i,d,s,c,p,m,u,h,g,x,f,b,v,y,w,E,k;return"selectDistrict"===(null===(i=l[e])||void 0===i?void 0:i.type)?(null===(d=l[e])||void 0===d||null===(d=d.selectList)||void 0===d?void 0:d[Number(null==a?void 0:a.city)])&&n.createElement("div",{className:"formGroup",key:t+e+Number(null==a?void 0:a.city)},n.createElement("label",{htmlFor:e},null===(s=l[e])||void 0===s?void 0:s.label),n.createElement(r.Ph,{selectList:null===(c=l[e])||void 0===c||null===(c=c.selectList)||void 0===c?void 0:c[Number(null==a?void 0:a.city)],onChangeFunc:o,onChangeKey:e,name:null,defaultValue:null,datumIndex:null,disabled:!1,id:null})):"select"===(null===(p=l[e])||void 0===p?void 0:p.type)?n.createElement("div",{className:"formGroup",key:t+e},n.createElement("label",{htmlFor:e},null===(m=l[e])||void 0===m?void 0:m.label),n.createElement(r.Ph,{selectList:null===(u=l[e])||void 0===u?void 0:u.selectList,onChangeFunc:o,onChangeKey:e,name:null,defaultValue:a[e],datumIndex:null,disabled:!1,id:null})):"ratio"===(null===(h=l[e])||void 0===h?void 0:h.type)?n.createElement("div",{className:"formGroup",key:t+e},n.createElement("label",{htmlFor:e},null===(g=l[e])||void 0===g?void 0:g.label),n.createElement(r.T_,{ratioList:null===(x=l[e])||void 0===x?void 0:x.ratioList,onChangeFunc:o,onChangeKey:e,defaultValue:a[e]})):"checkbox"===(null===(f=l[e])||void 0===f?void 0:f.type)?n.createElement("div",{className:"formGroup",key:t+e},n.createElement("label",{htmlFor:e},null===(b=l[e])||void 0===b?void 0:b.label),n.createElement(r.XZ,{checkList:null===(v=l[e])||void 0===v?void 0:v.checkList,onChangeFunc:o,onChangeKey:e,defaultValue:a[e]})):"textarea"===(null===(y=l[e])||void 0===y?void 0:y.type)?n.createElement("div",{className:"formGroup",key:t+e},n.createElement("label",{htmlFor:e},null===(w=l[e])||void 0===w?void 0:w.label),n.createElement(r.gx,{type:null===(E=l[e])||void 0===E?void 0:E.type,name:e,id:e,rows:"6",onChange:t=>o(t.target.value,e)})):n.createElement("div",{className:"formGroup",key:t+e},n.createElement("label",{htmlFor:e},l[e].label),n.createElement(r.II,{type:l[e].type,name:e,id:e,onChange:t=>o(t.target.value,e),autoComplete:l[e].autoComplete,required:l[e].required,readOnly:null===(k=l[e])||void 0===k?void 0:k.readOnly}))})),n.createElement("div",{className:"formControlGroup"},n.createElement(r.zx,{name:"送出",type:"submit"})),d&&n.createElement(d,null))}},SOLs:(e,t,a)=>{"use strict";a.d(t,{zx:()=>b,XZ:()=>k,II:()=>v,T_:()=>E,Ph:()=>w,gx:()=>y});var n=a("q1tI"),r=a("LboF"),l=a.n(r),o=a("5Hnr"),i=a.n(o),d=a("shRe"),s=a.n(d),c=a("3c4z"),p=a.n(c),m=a("3mzb"),u=a.n(m),h=a("Hd6Y"),g=a.n(h),x=a("NHu6"),f={};function b(e){let{name:t,isActive:a,onClick:r}=e,l="button";return a&&(l+=" isActive"),n.createElement("button",{className:l,onClick:r},t)}function v(e){let{type:t,name:a,id:r,onChange:l,autoComplete:o,required:i,readOnly:d}=e;return n.createElement("input",{type:t,name:a,id:r,onChange:l,autoComplete:o,required:i,readOnly:d})}function y(e){let{type:t,name:a,id:r,onChange:l,rows:o}=e;return n.createElement("textarea",{type:t,name:a,id:r,rows:o||"6",onChange:l})}function w(e){let{name:t,defaultValue:a,selectList:r,onChangeFunc:l,datumIndex:o,onChangeKey:i,disabled:d,id:s}=e;return(0,n.useEffect)((()=>{var e,t;l&&i&&!a&&(null==o?l(null===(e=r[0])||void 0===e?void 0:e.value,i):l(null===(t=r[0])||void 0===t?void 0:t.value,i,o))}),[]),n.createElement("select",{className:"selectWrapper",name:t,onChange:e=>{!function(e){l&&i&&(null==o?l(e.target.value,i):l(e.target.value,i,o))}(e)},value:0===r.length?"無資料":a,disabled:d,id:s},!a&&r.length>0&&n.createElement("option",{className:"option",key:"請選擇",value:"",disabled:!0},"請選擇"),r.length>0&&r.map((e=>n.createElement("option",{className:"option",key:e.label,value:e.value},e.label))),0===r.length&&n.createElement("option",{className:"option",key:"無資料",value:"無資料",selected:!0,disabled:!0},"無資料"))}function E(e){let{defaultValue:t,ratioList:a,onChangeFunc:r,datumIndex:l,onChangeKey:o,disabled:i}=e;return(0,n.useEffect)((()=>{var e,n;r&&o&&!t&&(null==l?r(null===(e=a[0])||void 0===e?void 0:e.value,o):r(null===(n=a[0])||void 0===n?void 0:n.value,o,l))}),[]),n.createElement("fieldset",{disabled:i},a.length>0&&a.map(((e,a)=>n.createElement("div",{className:"fieldsetItemWrapper",key:a+e.label},n.createElement("label",{htmlFor:e.label},e.label),n.createElement("input",{type:"radio",id:e.label,name:"radio",value:e.value,onChange:e=>{!function(e){r&&o&&(null==l?r(e.target.value,o):r(e.target.value,o,l))}(e)},checked:(null==t?void 0:t.toString())===e.value.toString()})))))}function k(e){let{defaultValue:t,checkList:a,onChangeFunc:r,datumIndex:l,onChangeKey:o,disabled:i}=e;(0,n.useEffect)((()=>{var e,n;r&&o&&!t&&(null==l?r(null===(e=a[0])||void 0===e?void 0:e.value,o):r(null===(n=a[0])||void 0===n?void 0:n.value,o,l))}),[]);const d=null==t?void 0:t.toString().split(";");return n.createElement("fieldset",{disabled:i},a.length>0&&a.map(((e,t)=>n.createElement("div",{className:"fieldsetItemWrapper",key:t+e.label},n.createElement("label",{htmlFor:e.label},e.label),n.createElement("input",{type:"checkbox",id:e.label,value:e.value,onChange:e=>{!function(e){if(r&&o){const t=function(e){let t="";return null!=d&&d.includes(e)?d.forEach((a=>{a!==e&&a&&(t+=a.toString()+";")})):(d.forEach((e=>{e&&(t+=e.toString()+";")})),t+=e.toString()),t}(e.target.value.toString());null==l?r(t,o):r(t,o,l)}}(e)},checked:null==d?void 0:d.includes(e.value.toString())})))))}f.styleTagTransform=g(),f.setAttributes=p(),f.insert=s().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=u(),l()(x.Z,f),x.Z&&x.Z.locals&&x.Z.locals},DuBu:(e,t,a)=>{"use strict";var n;a.d(t,{K:()=>l,r:()=>r});let r,l=!0;switch(null!==(n=location)&&void 0!==n&&null!==(n=n.host)&&void 0!==n&&n.includes("localhost")||(l=!1),l){case!0:r="http://localhost:3001";break;case!1:r="https://try-render-com.onrender.com"}},Sr2H:(e,t,a)=>{"use strict";var n=a("q1tI"),r=a("EbEg"),l=a("vvQw"),o=a("KMx9"),i=a("ANjH"),d=a("wTN4");const s={isLogin:!1,isAdmin:!1,isLoading:!1,reFetch:!1,keepFetch:!1,userData:{}};var c=a("iny9"),p=a("sINF"),m=a("Sbgq"),u=a("JkAH"),h=a("3uGm");const g=(0,a("OpwI").m)({secretKey:"your-secret-key",onError:function(e){console.error("redux-persist-transform-encrypt error",e)}}),x={key:"controlReducer",storage:h.Z,whitelist:["userData","isLogin","isAdmin"],transforms:[g]},f=(0,u.OJ)(x,(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.B2:return{...e,isLogin:t.payload};case d.rz:return{...e,isAdmin:t.payload};case d.SY:return{...e,isLoading:t.payload};case d.PC:return{...e,reFetch:t.payload};case d.ld:return{...e,keepFetch:t.payload};case d.aQ:return{...e,userData:t.payload};default:return e}})),b=(0,i.UY)({persistedControlReducer:f}),v=(0,i.MT)(b,(0,i.qC)((0,c.md)(p.Z),(0,m.ZP)((0,m.S)()))),y=(0,u.p5)(v),w=v;var E=a("SOjZ"),k=a("V4z/"),C=a("LboF"),S=a.n(C),W=a("5Hnr"),z=a.n(W),I=a("shRe"),A=a.n(I),N=a("3c4z"),L=a.n(N),T=a("3mzb"),Z=a.n(T),P=a("Hd6Y"),F=a.n(P),j=a("A/YU"),M={};M.styleTagTransform=F(),M.setAttributes=L(),M.insert=A().bind(null,"head"),M.domAPI=z(),M.insertStyleElement=Z(),S()(j.Z,M),j.Z&&j.Z.locals&&j.Z.locals,a("k3EG");const H={title:"貓咪宅急便",paragraphs:["歡迎使用「貓咪宅急便」，我們是專為喜愛貓咪的您打造的線上服務。無論您是忙碌的上班族、老年人、或是希望短期體驗養貓樂趣的朋友，我們都能提供便利的貓咪配送服務。","透過「貓咪宅急便」，您只需進行簡單的線上預訂，即可享受到親切可愛的貓咪送上門的服務。我們擁有多款不同品種、個性各異的貓咪，讓您可以依照自己的喜好和需求進行挑選。","我們的宅急便團隊以貓咪的福祉為首要考量，確保貓咪在配送過程中感受到最大程度的舒適和安心。所有貓咪均經過嚴格的健康檢查，並提供完整的疫苗接種紀錄，以確保它們的身體狀態良好。","不僅如此，我們的服務團隊也提供貓咪相關的專業建議和資訊，以確保您在貓咪陪伴的過程中能夠擁有愉快、無憂無慮的體驗。讓「貓咪宅急便」成為您和貓咪之間美好回憶的開始，隨時為您打開擁抱愛貓的大門。"],link:{url:"/delivery",name:"線上預訂"}},q={title:"貓咪餐廳",paragraphs:["歡迎來到「貓咪餐廳」系列，我們匯聚了各地最迷人的貓咪餐廳，提供多樣風格的料理，同時還有可愛的貓迷陪伴您共享用餐時光。","探索我們的菜單，您將發現來自不同地方的獨特料理風味，從精緻的西式點心到道地的亞洲美食，每一口都彷彿是一場美味的旅行。我們致力於打造一個讓您在用餐的同時感受到美味和愉悅的綜合體驗。","更特別的是，「貓咪餐廳」每一家都有親切友善的貓咪伴侶，這些可愛的貓咪將在您用餐的過程中陪伴著您，為整個用餐體驗增添愉快的氛圍。這些貓咪都是經過挑選，並接受細心的照顧，確保牠們的愉快性格能夠為您的用餐體驗帶來愜意和歡樂。","無論您是獨自享受寧靜用餐，與摯愛共度浪漫時光，或與朋友聚餐，「貓咪餐廳」系列都將成為您尋找美食和貓咪陪伴的理想場所。讓我們一同探索，用美味和愛貓共同為生活增添色彩。"],link:{url:"/delivery",name:"了解更多"}},D={title:"線上認養",paragraphs:["歡迎參與「線上認養」，這是一個讓您透過定期信用卡捐款的方式，支援無家可歸的貓咪，為牠們帶來溫暖和希望的緊急計畫。","在現今社會，許多貓咪流浪無依，面臨飢寒交迫的情況。透過「線上認養」，您有機會成為這些無助生靈的贊助者，提供牠們穩定的食物、溫暖的庇護所，以及及時的醫療照護。","參與方式非常簡單，只需進行線上信用卡捐款設定，您的愛心就能持續地幫助這些需要幫助的貓咪。我們承諾，您的捐款將用於改善貓咪的生活狀況，提供牠們愉快、健康的生存環境。","除了捐款，我們也會不定期提供捐助者專屬的貓咪故事、照片更新，讓您能更深切地感受到您的善行所帶來的改變。這是一個共同努力，讓愛心凝聚成為改變生命的力量的機會。","加入「線上認養」，讓我們攜手為這些無辜的生靈帶來光明和關愛。感謝您的支持，讓我們共同努力，讓每一隻貓咪都有機會擁有一個幸福的家。"],link:{url:"/delivery",name:"立即認養"}};function R(e){var t;let{sectionData:a}=e;return n.createElement("div",{className:"homepageSectionMain"},n.createElement("div",{className:"homepageSectionContent"},n.createElement("h1",null,null==a?void 0:a.title),(null==a||null===(t=a.paragraphs)||void 0===t?void 0:t.length)>0&&a.paragraphs.map(((e,t)=>n.createElement("p",{key:t},e))),(null==a?void 0:a.link)&&n.createElement(E.rU,{to:a.link.url},a.link.name)))}const _=function(){return n.createElement("main",null,n.createElement("section",{className:"homepageSection"},n.createElement("div",{className:"backgroundImageWrapper backgroundImageWrapper1"}),n.createElement(R,{sectionData:H})),n.createElement("section",{className:"homepageSection"},n.createElement("div",{className:"backgroundImageWrapper backgroundImageWrapper2"}),n.createElement(R,{sectionData:q})),n.createElement("section",{className:"homepageSection"},n.createElement("div",{className:"backgroundImageWrapper backgroundImageWrapper3"}),n.createElement(R,{sectionData:D})))};var J=a("+9dH"),G=(a("vDqi"),a("BRa9")),K={};K.styleTagTransform=F(),K.setAttributes=L(),K.insert=A().bind(null,"head"),K.domAPI=z(),K.insertStyleElement=Z(),S()(G.Z,K),G.Z&&G.Z.locals&&G.Z.locals;const O=a.p+"1b5e077b846885bf5fb5.png";var U=a("m1zK"),B={};B.styleTagTransform=F(),B.setAttributes=L(),B.insert=A().bind(null,"head"),B.domAPI=z(),B.insertStyleElement=Z(),S()(U.Z,B),U.Z&&U.Z.locals&&U.Z.locals;const Y=function(e){let{text:t}=e;return n.createElement("div",{className:"loadingModalWrapper"},n.createElement("div",{className:"modalLoadingMain"},n.createElement("div",{className:"modalLoadingMainText"},t||"Loading..."),n.createElement("div",{className:"lds-roller"},n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null),n.createElement("div",null))),n.createElement("div",{className:"mask"}))};var V=a("fDUD"),Q=a("DuBu"),X=a("KJq9");const $={account:{label:"帳號",type:"text",required:!0},password:{label:"密碼",type:"password",autoComplete:!0,required:!0}},ee={account:{label:"帳號",type:"text",required:!0},password:{label:"密碼",type:"password",autoComplete:!1,required:!0},passwordCheck:{label:"密碼確認",type:"password",autoComplete:!1,required:!0}},te={account:{label:"帳號",type:"text",required:!0},email:{label:"email",type:"email",required:!0}},ae={login:{path:"/auth/signin",method:"post"},register:{path:"/auth/register",method:"post"},forgetPassword:{path:"/auth/forgetPassword",method:"post"}};async function ne(){try{var e=document.createElement("form");e.setAttribute("method","GET"),e.setAttribute("action","https://accounts.google.com/o/oauth2/v2/auth");var t={client_id:"819935947341-j354gvs8ivkoc7fr5pn8d62a0jjh7i4h.apps.googleusercontent.com",redirect_uri:"https://yc62897441.github.io/try_render.com_front",response_type:"token",scope:"https://www.googleapis.com/auth/drive.metadata.readonly",include_granted_scopes:"true",state:"pass-through value"};for(var a in t){var n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("name",a),n.setAttribute("value",t[a]),e.appendChild(n)}document.body.appendChild(e),e.submit()}catch(e){console.log(e)}}function re(){return n.createElement("div",{className:"loginMarquee"},n.createElement("h1",{className:"loginMarqueeItem loginMarqueeItem1"},"Cat Express Delivered with Love"),n.createElement("h1",{className:"loginMarqueeItem loginMarqueeItem2"},"Dining Delights with Feline Friends"),n.createElement("h1",{className:"loginMarqueeItem loginMarqueeItem3"},"A Lifeline of Love for Furry Souls"))}const le=(oe=function(e){let{formType:t,changeFormType:a,formConfig:r,reCaptchaSubmit:o}=e;const i=(0,l.I0)(),[s,c]=(0,n.useState)({});function p(){return async e=>{try{e((0,d.a)(!0));const n=ae[t],r=await(0,X.l)(n.method,Q.r+n.path,{...s});var a;if(console.log("response",r),"login"===t)if(null!=r&&null!==(a=r.data)&&void 0!==a&&a.token){let t=r.data.token;sessionStorage.setItem("token",t),e((0,d.JB)(!0)),"t"===r.data.user.isAdmin&&e((0,d.CK)(!0)),e((0,d.tS)({...r.data.user}))}else window.alert("登入失敗");"register"===t&&console.log("register"),"forgetPassword"===t&&console.log("forgetPassword"),e((0,d.a)(!1))}catch(t){e((0,d.a)(!1)),console.log(t)}}}let m="";switch(t){case"login":m="登入";break;case"register":m="註冊";break;case"forgetPassword":m="忘記密碼";break;default:m=""}return n.createElement("div",{className:"loginSectionMain"},n.createElement("h2",null,m),n.createElement(V.Z,{formData:s,formConfig:r,handleChange:function(e,t){c({...s,[t]:e})},handleSubmit:function(){o?o(p):i(p())},AppendComponent:function(){return n.createElement("div",{className:"formControlGroup"},"login"===t&&n.createElement("div",{onClick:ne},"使用 Google login"),"login"!==t&&n.createElement("div",{onClick:()=>a("login")},"登入"),"register"!==t&&n.createElement("div",{onClick:()=>a("register")},"註冊"),"forgetPassword"!==t&&n.createElement("div",{onClick:()=>a("forgetPassword")},"忘記密碼"))}}))},function(e){const t=(0,l.I0)(),[a,r]=(0,n.useState)(!1);function o(e){t(e())}return(0,n.useEffect)((()=>{const e=document.createElement("script");e.src="https://www.google.com/recaptcha/api.js?render=explicit";const t=()=>{r(!0)};return e.addEventListener("load",t),document.body.appendChild(e),()=>{e.removeEventListener("load",t)}}),[]),(0,n.useEffect)((()=>{!0===a&&window.grecaptcha.ready((function(){window.grecaptcha.render("submit",{sitekey:"6LfolpMlAAAAAKu-7uQoX4Y7uF7K3t_nLyO3dghn",callback:o})}))}),[a]),n.createElement(n.Fragment,null,n.createElement(oe,(0,J.Z)({},e,{reCaptchaSubmit:o})),n.createElement("button",{className:"reCaptchaButton",id:"submit"}))});var oe;const ie=function(){const e=(0,l.I0)(),t=(0,l.v9)((e=>e.persistedControlReducer.isLoading)),[a,r]=(0,n.useState)("login");let o="";switch(a){case"login":o=$;break;case"register":o=ee;break;case"forgetPassword":o=te}if(location.href.includes("state")){const t=location.href.split("/?")[1],a={};t.split("&").forEach((e=>{const[t,n]=e.split("=");a[t]=n})),async function(t){try{var a;e((0,d.a)(!0));const n=await(0,X.l)("post",Q.r+"/auth/google_signin",{access_token:t});if(null!=n&&null!==(a=n.data)&&void 0!==a&&a.token){let t=n.data.token;sessionStorage.setItem("token",t),e((0,d.JB)(!0)),"t"===n.data.user.isAdmin&&e((0,d.CK)(!0)),e((0,d.tS)({...n.data.user}))}e((0,d.a)(!1))}catch(t){e((0,d.a)(!1)),console.log(t)}}(a.access_token)}return n.createElement("main",null,t&&n.createElement(Y,{text:""}),n.createElement("section",{className:"loginSection"},n.createElement("div",{className:"loginBackgroundImageWrapper"}),n.createElement(re,null),n.createElement(le,{formType:a,changeFormType:function(e){r(e)},formConfig:o}),n.createElement("div",{className:"loginLogoWrapper"},n.createElement("img",{src:O,alt:"貓咪 icon",srcSet:""}))))},de=function(){return n.createElement("div",null,"Loading...")},se=function(){return n.createElement("main",null,n.createElement("button",{onClick:async function(){try{const e="ya29.a0Ad52N3_sHVO9EMsx8D9Z_SroH-X2D2yHWBn3327O0m6e9Rm8_rYyedKaI0mLxk8GJhG9T7uMYtX4w42CaQiAdc5ZZIh8vW3bBnMGreZHqcM_7vo-LOFOO4Fwm5tfaRPEPinDcNPohOxvzAbthh2ua3d3mI73xvi7ITAaCgYKAT0SARASFQHGX2Mi8HtY8rgMRCvFj9oW8ZB0cA0170";console.log("fetchGoogleUserInfo",e);const t=await(0,X.l)("post",Q.r+"/auth/google_signin",{access_token:e});console.log("response",t)}catch(e){console.log(e)}}},"模擬傳送 Google access_token 到後端"),n.createElement("button",{onClick:async function(){try{const e=await(0,X.l)("get",Q.r+"/default/userController");console.log("北台灣行政區",e)}catch(e){console.log(e)}}},"取得北台灣行政區"))};var ce=a("4Hap"),pe={};pe.styleTagTransform=F(),pe.setAttributes=L(),pe.insert=A().bind(null,"head"),pe.domAPI=z(),pe.insertStyleElement=Z(),S()(ce.Z,pe),ce.Z&&ce.Z.locals&&ce.Z.locals;var me=a("QdmU"),ue={};ue.styleTagTransform=F(),ue.setAttributes=L(),ue.insert=A().bind(null,"head"),ue.domAPI=z(),ue.insertStyleElement=Z(),S()(me.Z,ue),me.Z&&me.Z.locals&&me.Z.locals;const he=[{name:"Home",url:"/"},{name:"貓咪宅急便",url:"/delivery"},{name:"貓咪餐廳",url:"/restaurant"},{name:"線上認養",url:"/contribution"},{name:"購物車",url:"/cart",isCart:!0}],ge=[{name:"Reactflow",url:"/reactflow"},{name:"訂單管理",url:"/backstage/orders"}],xe=[{name:"MiniComponent",url:"/miniComponent"},{name:"TryApi",url:"/tryApi"}],fe=function(){const e=(0,l.v9)((e=>e.persistedControlReducer.isAdmin)),[t,a]=(0,n.useState)("non-dropdown"),r=JSON.parse(localStorage.getItem("cart")),o=(null==r?void 0:r.cartList)||{},i=Object.keys(o).length,d=(0,n.useMemo)((()=>{const t=[...he];return e&&(t.push(...ge),Q.K&&t.push(...xe)),t}),[e]);return n.createElement("div",{className:"headerWrapper"},n.createElement("div",{className:"logoWrapper"},n.createElement(E.rU,{to:"/"},n.createElement("img",{src:O,alt:"貓咪 icon",srcSet:""}))),n.createElement("div",{className:"barsWrapper",onClick:function(){a("non-dropdown"===t?"dropdown":"non-dropdown")}},n.createElement("div",{className:"bar bar1 "+t}),n.createElement("div",{className:"bar bar2 "+t}),n.createElement("div",{className:"bar bar3 "+t})),n.createElement("div",{className:"urlsWrapper "+t},d.length>0&&d.map((e=>n.createElement("div",{key:e.name,className:"urlWrapper"},n.createElement(E.rU,{to:e.url},n.createElement("div",null,e.name),e.isCart&&i>0&&n.createElement("div",{className:"cartItemsNum"},i)))))),n.createElement("div",{className:"urlsWrapperPc"},d.length>0&&d.map((e=>n.createElement("div",{key:e.name,className:"urlWrapper"},n.createElement(E.rU,{to:e.url},e.name,e.isCart&&i>0&&n.createElement("div",{className:"cartItemsNum"},i)))))))},be=function(e){let{children:t}=e;const a=(0,l.v9)((e=>e.persistedControlReducer.isLoading));return n.createElement("div",{className:"layoutWrapper"},a&&n.createElement(Y,{text:""}),n.createElement(fe,null),t)},ve=(0,n.lazy)((()=>Promise.all([a.e(183),a.e(895),a.e(913),a.e(295)]).then(a.bind(a,"XF0d")))),ye=(0,n.lazy)((()=>Promise.all([a.e(913),a.e(585)]).then(a.bind(a,"5mFt")))),we=(0,n.lazy)((()=>a.e(356).then(a.bind(a,"oWBe")))),Ee=(0,n.lazy)((()=>Promise.all([a.e(25),a.e(531),a.e(15),a.e(326),a.e(787),a.e(187),a.e(525),a.e(5),a.e(308),a.e(654),a.e(152),a.e(869),a.e(113),a.e(457),a.e(146)]).then(a.bind(a,"pjJJ")))),ke=(0,n.lazy)((()=>Promise.all([a.e(183),a.e(895),a.e(913),a.e(534)]).then(a.bind(a,"dSSS")))),Ce=(0,n.lazy)((()=>Promise.all([a.e(183),a.e(895),a.e(913),a.e(403)]).then(a.bind(a,"5L65")))),Se=(0,n.lazy)((()=>Promise.all([a.e(183),a.e(895),a.e(913),a.e(41)]).then(a.bind(a,"8VF8")))),We=(0,n.lazy)((()=>a.e(678).then(a.bind(a,"oj0u")))),ze=function(e){let{basename:t}=e;const a=(0,l.v9)((e=>e.persistedControlReducer.isLogin)),r=(0,l.v9)((e=>e.persistedControlReducer.isAdmin));return n.createElement(E.UT,null,a?n.createElement(be,null,n.createElement(n.Suspense,{fallback:n.createElement(de,null)},n.createElement(k.Z5,null,n.createElement(k.AW,{path:"/",element:n.createElement(_,null)}),n.createElement(k.AW,{path:"/delivery",element:n.createElement(ve,null)}),n.createElement(k.AW,{path:"/restaurant",element:n.createElement(ye,null)}),n.createElement(k.AW,{path:"/contribution",element:n.createElement(we,null)}),n.createElement(k.AW,{path:"/cart",element:n.createElement(ke,null)}),r&&n.createElement(n.Fragment,null,n.createElement(k.AW,{path:"/reactflow",element:n.createElement(Ee,null)}),n.createElement(k.AW,{path:"/backstage/orders",element:n.createElement(Ce,null)})),r&&Q.K&&n.createElement(n.Fragment,null,n.createElement(k.AW,{path:"/miniComponent",element:n.createElement(Se,null)}),n.createElement(k.AW,{path:"/tryApi",element:n.createElement(We,null)}))))):n.createElement(k.Z5,null,Q.K&&n.createElement(k.AW,{path:"/tryApi",element:n.createElement(se,null)}),n.createElement(k.AW,{path:"*",element:n.createElement(ie,null)})))},Ie=document.querySelector("#root"),Ae=r.createRoot(Ie);window.location.href.includes("#state")&&(window.location.href=window.location.href.replace("/#state","?state")),Ae.render(n.createElement(n.StrictMode,null,n.createElement(l.zt,{store:w},n.createElement(o.r,{persistor:y},n.createElement(ze,{basename:"/try_render.com_front"})))))},KJq9:(e,t,a)=>{"use strict";a.d(t,{l:()=>i});var n=a("vDqi"),r=a.n(n),l=a("DuBu");const o=r().create({mainUrl:l.r});async function i(e,t,a){try{return await o({method:e,url:t,data:a}).then((e=>e)).catch((e=>{alert(e)}))}catch(e){console.log(e)}}o.interceptors.request.use((e=>{const t=sessionStorage.getItem("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(e=>Promise.reject(e)))},QdmU:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a("J8ja"),r=a.n(n),l=a("JPst"),o=a.n(l)()(r());o.push([e.id,".headerWrapper{position:relative;display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;height:100px;padding:0 25px;background-color:#43766c;border-bottom:4px solid #f8fae5;font-size:16px;font-weight:600;color:#17202a}.logoWrapper{width:50px;height:50px}.logoWrapper img{width:100%;height:100%;object-fit:contain}.barsWrapper{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;width:24px;height:24px;cursor:pointer}.barsWrapper .bar{display:block;width:24px;height:3px;margin:2px 0;background-color:#17202a;transition:all .2s}@media(min-width: 768px){.barsWrapper{position:absolute;z-index:-9999;opacity:0}}.bar1.dropdown{position:absolute;transform:rotate(45deg)}.bar2.dropdown{position:absolute;opacity:0;z-index:-9999}.bar3.dropdown{position:absolute;transform:rotate(-45deg)}.urlsWrapper{position:absolute;top:100px;left:0;z-index:-9999;opacity:0;display:flex;flex-direction:column;width:100%;background-color:#b19470;padding:5px 15px}@media(min-width: 768px){.urlsWrapper{position:absolute;z-index:-9999;opacity:0}}.urlsWrapper.dropdown{z-index:2;opacity:1;transition:opacity .5s}@media(min-width: 768px){.urlsWrapper.dropdown{position:absolute;z-index:-9999;opacity:0}}.urlsWrapperPc{position:absolute;z-index:-9999;opacity:0;display:flex;flex-direction:row}@media(min-width: 768px){.urlsWrapperPc{position:relative;z-index:0;opacity:1}}.urlWrapper{margin:3px 0;padding:3px 0;border-bottom:2px solid #f8fae5}.urlWrapper a{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;margin:0;text-decoration:none}.urlWrapper a:hover{text-decoration:underline}@media(min-width: 768px){.urlWrapper{margin:0 10px;padding:0;border:none}}.cartItemsNum{width:17px;height:17px;padding:1px 0 0;margin:0 0 0 3px;background-color:#43766c;border-radius:50%;text-align:center;vertical-align:baseline;font-weight:600;font-size:14px;color:#fff}@media(min-width: 768px){.cartItemsNum{background-color:#b19470}}",""]),o.locals={textPrimaryColor:"#17202a",mainThemeColor:"#43766c",mainThemeColorDark:"#f8fae5",mainThemeColorLight:"#b19470",mainThemeColorComplement:"#76453b"};const i=o},"4Hap":(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a("J8ja"),r=a.n(n),l=a("JPst"),o=a.n(l)()(r());o.push([e.id,".layoutWrapper{width:100%;min-height:100vh}",""]),o.locals={};const i=o},m1zK:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a("J8ja"),r=a.n(n),l=a("JPst"),o=a.n(l)()(r());o.push([e.id,'.loadingModalWrapper{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;background-color:rgba(0,0,0,0)}.mask{position:absolute;top:0;left:0;width:100%;height:100%;z-index:0;background-color:#17202a;opacity:.1}.modalLoadingMain{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:150px;height:150px;z-index:1}@media(min-width: 576px){.modalLoadingMain{width:300px;height:300px}}.modalLoadingMainText{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);font-size:20px;z-index:1}@media(min-width: 576px){.modalLoadingMainText{font-size:28px}}.lds-roller{display:inline-block;position:absolute;top:0;left:0;width:150px;height:150px;z-index:0}@media(min-width: 576px){.lds-roller{width:300px;height:300px}}.lds-roller div{animation:lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;transform-origin:75px 75px}@media(min-width: 576px){.lds-roller div{transform-origin:150px 150px}}.lds-roller div:after{content:" ";display:block;position:absolute;width:10px;height:10px;border-radius:50%;background-color:#43766c;opacity:1;margin:-5px 0 0 -5px}@media(min-width: 576px){.lds-roller div:after{width:20px;height:20px;margin:-10px 0 0 -10px}}.lds-roller div:nth-child(1){animation-delay:-0.036s}.lds-roller div:nth-child(1):after{top:135px;left:118px}@media(min-width: 576px){.lds-roller div:nth-child(1):after{top:274px;left:232px}}.lds-roller div:nth-child(2){animation-delay:-0.072s}.lds-roller div:nth-child(2):after{top:142px;left:105px}@media(min-width: 576px){.lds-roller div:nth-child(2):after{top:287px;left:207px}}.lds-roller div:nth-child(3){animation-delay:-0.108s}.lds-roller div:nth-child(3):after{top:147px;left:90px}@media(min-width: 576px){.lds-roller div:nth-child(3):after{top:297px;left:180px}}.lds-roller div:nth-child(4){animation-delay:-0.144s}.lds-roller div:nth-child(4):after{top:149px;left:75px}@media(min-width: 576px){.lds-roller div:nth-child(4):after{top:300px;left:150px}}.lds-roller div:nth-child(5){animation-delay:-0.18s}.lds-roller div:nth-child(5):after{top:148px;left:60px}@media(min-width: 576px){.lds-roller div:nth-child(5):after{top:297px;left:120px}}.lds-roller div:nth-child(6){animation-delay:-0.216s}.lds-roller div:nth-child(6):after{top:144px;left:46px}@media(min-width: 576px){.lds-roller div:nth-child(6):after{top:289px;left:94px}}.lds-roller div:nth-child(7){animation-delay:-0.252s}.lds-roller div:nth-child(7):after{top:137px;left:34px}@media(min-width: 576px){.lds-roller div:nth-child(7):after{top:276px;left:69px}}.lds-roller div:nth-child(8){animation-delay:-0.288s}.lds-roller div:nth-child(8):after{top:129px;left:23px}@media(min-width: 576px){.lds-roller div:nth-child(8):after{top:260px;left:48px}}@keyframes lds-roller{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}',""]),o.locals={textPrimaryColor:"#17202a",mainThemeColor:"#43766c",mainThemeColorDark:"#f8fae5",mainThemeColorLight:"#b19470",mainThemeColorComplement:"#76453b"};const i=o},NHu6:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a("J8ja"),r=a.n(n),l=a("JPst"),o=a.n(l)()(r());o.push([e.id,".button{display:inline-block;padding:8px 13px;border:1px solid #ddd;border-radius:4px;background-color:#fff;color:#24292e;font-size:14px;transition:background-color .3s ease;cursor:pointer}.button:hover{background-color:#eee}.button.isActive{border:1px solid #088a6b;color:#088a6b}.selectWrapper{width:100%;padding:5px 10px;background-color:#fff;border:1px solid #ddd;border-radius:4px;font-size:16px;cursor:pointer}.option{padding:10px 50px;background-color:#fff;font-size:16px}fieldset{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:wrap;width:100%;padding:5px 10px;background-color:#fff;border:1px solid #ddd;border-radius:4px;font-size:16px;cursor:pointer}.fieldsetItemWrapper{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;margin:0 10px 0 0}.fieldsetItemWrapper label{margin:0 5px 0 0;padding:0}.fieldsetItemWrapper input{width:auto;margin:0;padding:0}",""]),o.locals={};const i=o},"20WP":(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var n=a("J8ja"),r=a.n(n),l=a("JPst"),o=a.n(l),i=a("HeW1"),d=a.n(i),s=new URL(a("7X8/"),a.b),c=new URL(a("DnAn"),a.b),p=new URL(a("8GQe"),a.b),m=new URL(a("lL13"),a.b),u=new URL(a("ahze"),a.b),h=new URL(a("Ajk8"),a.b),g=o()(r()),x=d()(s),f=d()(c),b=d()(p),v=d()(m),y=d()(u),w=d()(h);g.push([e.id,".homepageSection{position:relative;height:920px}.homepageSectionMain{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0);z-index:1}.homepageSectionContent{position:absolute;bottom:100px;left:0;width:100%;padding:0 20px}@media(min-width: 576px){.homepageSectionContent{max-width:920px;padding:0 50px}}@media(min-width: 992px){.homepageSectionContent{bottom:150px;padding:0 80px}}@media(min-width: 1440px){.homepageSectionContent{left:150px}}.backgroundImageWrapper{position:absolute;top:0;left:0;width:100%;height:100%;background-repeat:no-repeat;background-position:center;opacity:.5;z-index:0}.backgroundImageWrapper1{background-image:url("+x+")}@media(min-width: 768px){.backgroundImageWrapper1{background-image:url("+f+")}}.backgroundImageWrapper2{background-image:url("+b+")}@media(min-width: 768px){.backgroundImageWrapper2{background-image:url("+v+")}}.backgroundImageWrapper3{background-image:url("+y+")}@media(min-width: 768px){.backgroundImageWrapper3{background-image:url("+w+")}}",""]),g.locals={};const E=g},BRa9:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a("J8ja"),r=a.n(n),l=a("JPst"),o=a.n(l),i=a("HeW1"),d=a.n(i),s=new URL(a("3Ju5"),a.b),c=o()(r()),p=d()(s);c.push([e.id,".loginSection{position:relative;width:100%;height:100%;min-height:100vh}.loginBackgroundImageWrapper{position:absolute;top:0;left:0;width:100%;height:100%;background-repeat:no-repeat;background-position:center;opacity:.5;z-index:0;background-image:url("+p+")}.loginMarquee{position:absolute;top:10%;left:50%;transform:translate(-50%, -50%);width:80%;background-color:rgba(0,0,0,0);z-index:1}@media(min-width: 576px){.loginMarquee{top:15%}}.loginMarqueeItem{position:absolute;top:0;left:0;width:100%;animation:show 6s cubic-bezier(0.5, 0, 0.5, 1) infinite;transform-origin:top}.loginMarqueeItem1{animation-delay:-6s}.loginMarqueeItem2{animation-delay:-4s}.loginMarqueeItem3{animation-delay:-2s}@keyframes show{0%{transform:scale(1, 0)}17%{transform:scale(1, 1)}33%{transform:scale(1, 1)}34%{transform:scale(1, 0)}100%{transform:scale(1, 0)}}.loginSectionMain{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);display:flex;flex-direction:column;justify-content:center;width:100%;background-color:rgba(0,0,0,0);z-index:1}@media(min-width: 576px){.loginSectionMain{top:45%}}.loginLogoWrapper{position:absolute;opacity:0;z-index:-9999}@media(min-width: 576px){.loginLogoWrapper{bottom:5%;left:50%;transform:translate(-50%, -50%);width:150px;height:150px;opacity:1;z-index:0}.loginLogoWrapper img{width:100%;height:100%;object-fit:contain}}.reCaptchaButton{position:absolute;opacity:0;z-index:-9999}",""]),c.locals={textPrimaryColor:"#17202a",mainThemeColor:"#43766c",mainThemeColorDark:"#f8fae5",mainThemeColorLight:"#b19470",mainThemeColorComplement:"#76453b"};const m=c},rinP:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a("J8ja"),r=a.n(n),l=a("JPst"),o=a.n(l)()(r());o.push([e.id,".miniComponentDemoWrapper{margin:10px 0}",""]),o.locals={};const i=o},"A/YU":(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a("J8ja"),r=a.n(n),l=a("JPst"),o=a.n(l)()(r());o.push([e.id,"*{color:#17202a}body{background-color:#fefefe}main{width:100%;background-color:#fefefe}article{width:100%}section{width:100%}.pageSection{display:flex;flex-direction:column;align-items:center;width:100%;margin:0 auto 10px;padding:0 20px}@media(min-width: 576px){.pageSection{max-width:500px}}@media(min-width: 992px){.pageSection{max-width:920px;margin:0 auto 20px}}h1{margin:0 0 10px;font-size:30px;font-weight:600;text-align:center;color:#43766c}@media(min-width: 576px){h1{margin:0 0 20px;font-size:48px}}h2{margin:0 0 10px;font-size:24px;font-weight:600;text-align:center;color:#b19470}@media(min-width: 576px){h2{margin:0 0 20px;font-size:36px}}h3{margin:0 0 10px;font-size:20px;font-weight:600;text-align:center}@media(min-width: 576px){h3{margin:0 0 20px;font-size:24px}}p{margin:0 0 20px;font-size:16px;font-weight:600;line-height:20px}@media(min-width: 576px){p{margin:0 0 20px;font-size:20px;line-height:28px}}form{display:flex;flex-direction:column;width:100%;max-width:320px;margin:0 auto;padding:20px;border-radius:20px;box-shadow:rgba(0,0,0,.05) 0px 6px 24px 0px,rgba(0,0,0,.08) 0px 0px 0px 1px}@media(min-width: 576px){form{max-width:420px}}.formGroup{display:flex;flex-direction:column;margin:0 0 10px}@media(min-width: 576px){.formGroup{margin:0 0 20px}}.formControlGroup{display:flex;flex-direction:row;margin:0 0 10px}.formControlGroup div{width:auto;margin:0 5px 0 0;cursor:pointer;text-decoration:underline}label{margin:0 0 5px;font-size:14px}@media(min-width: 576px){label{margin:0 0 10px;font-size:16px}}input{width:100%;padding:5px 10px;font-size:14px;border:1px solid #ddd;border-radius:4px}@media(min-width: 576px){input{font-size:16px}}small{font-size:12px}@media(min-width: 576px){small{font-size:14px}}textarea{resize:none}.tableWrapper{display:flex;flex-direction:row;justify-content:center}.tableContainer{width:auto;max-width:100%;margin:0 auto;max-height:80vh;overflow-x:scroll;flex-grow:0;flex-shrink:1}table{border-radius:5px;box-shadow:rgba(0,0,0,.05) 0px 6px 24px 0px,rgba(0,0,0,.08) 0px 0px 0px 1px;font-size:14px}@media(min-width: 576px){table{font-size:16px}}thead{background-color:#43766c;font-weight:600}tbody tr:hover{background-color:#ddd}tr{border-bottom:1px solid #ddd}th,td{padding:10px}@media(min-width: 576px){th,td{padding:15px}}th span{display:flex;flex-direction:row;align-items:center;cursor:pointer}th span img{transform:rotate(-180deg) translateY(-2px);width:20px;height:20px;object-fit:contain;opacity:0}th span:hover img{opacity:1}th .isSort img{opacity:1}th .acs img{transform:rotate(0deg) translateY(2px)}ol li{list-style-type:decimal}ul li{list-style-type:disc}li{font-size:16px;font-weight:600;line-height:20px}@media(min-width: 576px){li{font-size:20px;line-height:28px}}",""]),o.locals={textPrimaryColor:"#17202a",mainThemeColor:"#43766c",mainThemeColorDark:"#f8fae5",mainThemeColorLight:"#b19470",mainThemeColorComplement:"#76453b"};const i=o},k3EG:(e,t,a)=>{"use strict";var n=a("LboF"),r=a.n(n),l=a("5Hnr"),o=a.n(l),i=a("shRe"),d=a.n(i),s=a("3c4z"),c=a.n(s),p=a("3mzb"),m=a.n(p),u=a("Hd6Y"),h=a.n(u),g=a("20WP"),x={};x.styleTagTransform=h(),x.setAttributes=c(),x.insert=d().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=m(),r()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals},"+HrR":(e,t,a)=>{"use strict";var n=a("LboF"),r=a.n(n),l=a("5Hnr"),o=a.n(l),i=a("shRe"),d=a.n(i),s=a("3c4z"),c=a.n(s),p=a("3mzb"),m=a.n(p),u=a("Hd6Y"),h=a.n(u),g=a("rinP"),x={};x.styleTagTransform=h(),x.setAttributes=c(),x.insert=d().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=m(),r()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals},DnAn:(e,t,a)=>{"use strict";e.exports=a.p+"1e2ed684390963e246f9.jpg"},"7X8/":(e,t,a)=>{"use strict";e.exports=a.p+"63e81f5718b5f364da72.jpg"},lL13:(e,t,a)=>{"use strict";e.exports=a.p+"b8d3e79f4c53ee9c92b4.jpg"},"8GQe":(e,t,a)=>{"use strict";e.exports=a.p+"dc0ce6b501b7b59c14f0.jpg"},"3Ju5":(e,t,a)=>{"use strict";e.exports=a.p+"b2796cc20b91d009f451.jpg"},Ajk8:(e,t,a)=>{"use strict";e.exports=a.p+"46e4a7762868000dde35.jpg"},ahze:(e,t,a)=>{"use strict";e.exports=a.p+"322775852458690efab9.jpg"},kVev:()=>{}},e=>{e.O(0,[25,278,794,945,491,335,774,105,642,738,917,655,220,612,593,623,103,617,216,261,303,556],(()=>("Sr2H",e(e.s="Sr2H")))),e.O()}]);