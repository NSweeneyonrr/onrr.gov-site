"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[486],{1622:function(e,t,l){l.r(t),l.d(t,{default:function(){return p}});var i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("v-select",{ref:e.field.ref,attrs:{outlined:"",dense:"",multiple:"","small-chips":"",items:e.field.items,color:e.field.color,"item-color":e.field.color,"append-icon":e.field.icon,label:e.field.label,"max-width":"250px"},on:{input:function(t){return e.$emit("update",t)},change:function(t){var l;e.addParamsToLocation((l={},l[e.field.params]=e.field.selected.length>0?e.field.selected.join(","):void 0,l))}},model:{value:e.field.selected,callback:function(t){e.$set(e.field,"selected",t)},expression:"field.selected"}})],1)},n=[],d=l(4254),o={name:"MultipleSelectField",props:["fields"],data:function(){return{field:this.fields}},methods:{addParamsToLocation:function(e){var t=(0,d.Z)((0,d.Z)({path:this.$route.fullPath},this.$route.query),{},{query:e});this.$router.push(t).catch((function(){}))}},created:function(){this.$emit("fields",this.field)}},r=o,a=l(1001),c=l(3453),s=l.n(c),u=l(6364),f=(0,a.Z)(r,i,n,!1,null,null,null),p=f.exports;s()(f,{VSelect:u.Z})}}]);
//# sourceMappingURL=MultipleSelectField-legacy.49a80d21.js.map