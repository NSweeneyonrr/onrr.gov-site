(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SelectField"],{a924:function(e,t,l){"use strict";l.r(t);var i=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("v-select",{ref:e.field.ref,attrs:{outlined:"",dense:"",clearable:"",items:e.field.items,value:e.field.selected,color:e.field.color,"append-icon":e.field.icon,label:e.field.label},on:{input:function(t){return e.$emit("update",t)},change:function(t){var l;return e.addParamsToLocation((l={},l[e.field.params]=e.field.selected||void 0,l))}},model:{value:e.field.selected,callback:function(t){e.$set(e.field,"selected",t)},expression:"field.selected"}})],1)},n=[],a=l("5530"),d={name:"SelectField",props:["fields"],data:function(){return{field:this.fields}},methods:{addParamsToLocation:function(e){var t=Object(a["a"])(Object(a["a"])({path:this.$route.fullPath},this.$route.query),{},{query:e});this.$router.push(t).catch((function(){}))}},created:function(){this.$emit("fields",this.field)}},c=d,o=l("2877"),s=l("6544"),r=l.n(s),u=l("b974"),f=Object(o["a"])(c,i,n,!1,null,null,null);t["default"]=f.exports;r()(f,{VSelect:u["a"]})}}]);
//# sourceMappingURL=SelectField.ad0663f5.js.map