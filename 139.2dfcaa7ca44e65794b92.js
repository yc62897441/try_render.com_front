"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[139],{"eZ+e":(e,a,l)=>{l.r(a),l.d(a,{default:()=>u});var t=l("q1tI"),n=l("raqg"),r=(l("k3EG"),l("+HrR"),l("fDUD")),i=l("fv6m");const m=[{name:"David",email:"David@gmail.com",tel:"0900-001-001",gender:"1",city:0,preference:"0;1",startDate:"2024-03-12",startTime:"15:20",endDate:"2024-03-12",endTime:"17:30",elseInfo:""},{name:"Mary",email:"Mary@gmail.com",tel:"0900-001-002",gender:"0",city:1,preference:"0;2",startDate:"2024-03-13",startTime:"15:20",endDate:"2024-03-13",endTime:"17:30",elseInfo:""},{name:"John",email:"John@gmail.com",tel:"0900-001-003",gender:"1",city:2,preference:"1;4",startDate:"2024-03-13",startTime:"15:20",endDate:"2024-03-13",endTime:"17:30",elseInfo:"no"},{name:"Lucy",email:"Lucy@gmail.com",tel:"0900-001-003",gender:"0",city:3,preference:"1;3;4",startDate:"2024-03-13",startTime:"15:20",endDate:"2024-03-13",endTime:"17:30",elseInfo:"no"}],c={name:{label:"姓名",type:"text",required:!0,readOnly:!1},email:{label:"email",type:"email"},tel:{label:"手機",type:"tel",required:!0,pattern:"[0-9]{4}-[0-9]{3}-[0-9]{3}",patternDemo:" Format: 0900-001-001"},gender:{label:"性別",type:"ratio",ratioList:[{label:"女",value:0},{label:"男",value:1},{label:"其他",value:2}]},city:{label:"居住縣市",type:"select",selectList:[{label:"台北市",value:0},{label:"新北市",value:1},{label:"桃園市",value:2},{label:"新竹縣",value:3},{label:"新竹市",value:4},{label:"基隆市",value:5},{label:"宜蘭市",value:6}]},preference:{label:"偏好",type:"checkbox",checkList:[{label:"短毛貓",value:0},{label:"長毛貓",value:1},{label:"波絲貓",value:2},{label:"玳瑁貓",value:3},{label:"虎斑貓",value:4}]},startDate:{label:"起日",type:"date",required:!0},startTime:{label:"起時",type:"time",required:!0},endDate:{label:"迄日",type:"date",required:!0},endTime:{label:"迄時",type:"time",required:!0},elseInfo:{label:"其他",type:"textarea"}},u=function(){const[e,a]=(0,n.x)({}),[l,u]=(0,n.x)({});return(0,t.useEffect)((()=>{u(m)}),[]),t.createElement("main",null,t.createElement("section",{style:{position:"relative",height:"920px"}},t.createElement(r.Z,{formData:e,formConfig:c,handleChange:function(e,l,t){a((a=>{a[l]=e}))},handleSubmit:function(){console.log("handleSubmit")},AppendComponent:function(){return t.createElement("div",{className:"formControlGroup"},"其他")}}),t.createElement("hr",null),t.createElement(i.Z,{tableData:l})))}}}]);