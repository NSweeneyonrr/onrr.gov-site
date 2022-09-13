"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[883],{6428:function(){},3121:function(e,t,n){n(6699),n(6428);var a=n(144),r=n(5218),l=n(5598);const s=["sm","md","lg","xl"],i=(()=>s.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),o=(()=>s.reduce(((e,t)=>(e["offset"+(0,l.jC)(t)]={type:[String,Number],default:null},e)),{}))(),d=(()=>s.reduce(((e,t)=>(e["order"+(0,l.jC)(t)]={type:[String,Number],default:null},e)),{}))(),c={col:Object.keys(i),offset:Object.keys(o),order:Object.keys(d)};function u(e,t,n){let a=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");a+=`-${n}`}return"col"!==e||""!==n&&!0!==n?(a+=`-${n}`,a.toLowerCase()):a.toLowerCase()}}const p=new Map;t["Z"]=a.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...d,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:n,children:a,parent:l}){let s="";for(const r in t)s+=String(t[r]);let i=p.get(s);if(!i){let e;for(e in i=[],c)c[e].forEach((n=>{const a=t[n],r=u(e,n,a);r&&i.push(r)}));const n=i.some((e=>e.startsWith("col-")));i.push({col:!n||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),p.set(s,i)}return e(t.tag,(0,r.ZP)(n,{class:i}),a)}})},6643:function(e,t,n){n.d(t,{Z:function(){return s}});n(9941),n(6428);var a=n(144);function r(e){return a.Z.extend({name:`v-${e}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:n,data:a,children:r}){a.staticClass=`${e} ${a.staticClass||""}`.trim();const{attrs:l}=a;if(l){a.attrs={};const e=Object.keys(l).filter((e=>{if("slot"===e)return!1;const t=l[e];return e.startsWith("data-")?(a.attrs[e]=t,!1):t||"string"===typeof t}));e.length&&(a.staticClass+=` ${e.join(" ")}`)}return n.id&&(a.domProps=a.domProps||{},a.domProps.id=n.id),t(n.tag,a,r)}})}var l=n(5218),s=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:n,children:a}){let r;const{attrs:s}=n;return s&&(n.attrs={},r=Object.keys(s).filter((e=>{if("slot"===e)return!1;const t=s[e];return e.startsWith("data-")?(n.attrs[e]=t,!1):t||"string"===typeof t}))),t.id&&(n.domProps=n.domProps||{},n.domProps.id=t.id),e(t.tag,(0,l.ZP)(n,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(r||[])}),a)}})},4722:function(e,t,n){n(6699),n(6428);var a=n(144),r=n(5218),l=n(5598);const s=["sm","md","lg","xl"],i=["start","end","center"];function o(e,t){return s.reduce(((n,a)=>(n[e+(0,l.jC)(a)]=t(),n)),{})}const d=e=>[...i,"baseline","stretch"].includes(e),c=o("align",(()=>({type:String,default:null,validator:d}))),u=e=>[...i,"space-between","space-around"].includes(e),p=o("justify",(()=>({type:String,default:null,validator:u}))),f=e=>[...i,"space-between","space-around","stretch"].includes(e),g=o("alignContent",(()=>({type:String,default:null,validator:f}))),m={align:Object.keys(c),justify:Object.keys(p),alignContent:Object.keys(g)},h={align:"align",justify:"justify",alignContent:"align-content"};function y(e,t,n){let a=h[e];if(null!=n){if(t){const n=t.replace(e,"");a+=`-${n}`}return a+=`-${n}`,a.toLowerCase()}}const b=new Map;t["Z"]=a.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d},...c,justify:{type:String,default:null,validator:u},...p,alignContent:{type:String,default:null,validator:f},...g},render(e,{props:t,data:n,children:a}){let l="";for(const r in t)l+=String(t[r]);let s=b.get(l);if(!s){let e;for(e in s=[],m)m[e].forEach((n=>{const a=t[n],r=y(e,n,a);r&&s.push(r)}));s.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),b.set(l,s)}return e(t.tag,(0,r.ZP)(n,{staticClass:"row",class:s}),a)}})},3253:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pt-4"},[n("v-card",[n("v-data-table",{staticClass:"collection-data-table",attrs:{headers:e.headers,items:e.collectionItems,"item-key":"title"},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("SelectField",{attrs:{fields:e.designatedAreaInputField}})],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("MultipleSelectField",{attrs:{fields:e.ibmpYearsInputField}})],1)],1)],1)]},proxy:!0},{key:"item.designatedArea",fn:function(t){var n=t.item;return[e._v(" "+e._s(n.designatedArea)+" ")]}},{key:"item.year",fn:function(t){var n=t.item;return[e._v(" "+e._s(n.year)+" ")]}},{key:"item.month",fn:function(t){var n=t.item;return[e._v(" "+e._s(e.formatMonth(n.month))+" ")]}},{key:"item.price",fn:function(t){var n=t.item;return[e._v(" "+e._s(e.formatToDollarInt(n.price))+" ")]}}],null,!0)})],1)],1)},r=[],l=(n(6699),n(8930));const s=()=>Promise.all([n.e(860),n.e(248)]).then(n.bind(n,9571)),i=()=>n.e(486).then(n.bind(n,1622));var o={name:"IndexZonesCollection",data:()=>({designatedAreaInputField:{items:[],label:"All Areas",ref:"designatedAreaSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",params:"designated_area",clearable:!0},ibmpYearsInputField:{items:[],label:"All Years",ref:"indexZoneSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",params:"years"}}),props:{collection:[Array,Object]},components:{SelectField:s,MultipleSelectField:i},methods:{getMonth:l.jw,getYear:l.So,formatToDollarInt:l.Pl,formatMonth(e){return(0,l.jw)(e,"long")},formatYear(e){return(0,l.So)(e)},formatPrice(e){return(0,l.Pl)(e)},designatedAreaList(){let e=[];this.collectionItems&&this.collectionItems.map((t=>{t.designatedArea&&(e.includes(t.designatedArea)||e.push(t.designatedArea))})),this.designatedAreaInputField.items=[...e.sort()]},yearList(){let e=[];this.collectionItems&&this.collectionItems.map((t=>{t.year&&(e.includes(t.year)||e.push(t.year))})),this.ibmpYearsInputField.items=[...e.sort()].reverse()},designatedAreaFilter(e){return console.log("designatedFilter: ",e),!this.designatedAreaInputField.selected||null===this.designatedAreaInputField.selected||0===this.designatedAreaInputField.selected.length||e.toLowerCase()===this.designatedAreaInputField.selected.toLowerCase()},yearFilter(e){return!this.ibmpYearsInputField.selected||null===this.ibmpYearsInputField.selected||0===this.ibmpYearsInputField.selected.length||this.ibmpYearsInputField.selected.indexOf(e)>=0}},computed:{headers(){return[{text:"Designated Area",align:"start",sortable:!0,value:"designatedArea",filter:this.designatedAreaFilter},{text:"Year",align:"start",sortable:!0,value:"year",filter:this.yearFilter},{text:"Month",align:"start",sortable:!1,value:"month"},{text:"Condensate (02)",align:"end",sortable:!1,value:"condensate02"},{text:"Sweet (61)",align:"end",sortable:!1,value:"sweet61"},{text:"Sour (62)",align:"end",sortable:!1,value:"sour62"},{text:"Asphaltic (63)",align:"end",sortable:!1,value:"asphaltic63"},{text:"Black Wax (64)",align:"end",sortable:!1,value:"blackWax64"},{text:"Yellow Wax (65)",align:"end",sortable:!1,value:"yellowWax65"}]},collectionItems(){let e=[];return this.collection&&this.collection.map((t=>{t.ibmp_line_items.forEach((n=>{let a={};a.year=this.formatYear(t.date),a.month=t.date,a.designatedArea=n.designatedArea,a.condensate02=isNaN(n.condensate02)?n.condensate02:(0,l.Pl)(n.condensate02),a.sweet61=isNaN(n.sweet61)?n.sweet61:this.formatToDollarInt(n.sweet61),a.sour62=isNaN(n.sour62)?n.sour62:this.formatToDollarInt(n.sour62),a.asphaltic63=isNaN(n.asphaltic63)?n.asphaltic63:this.formatToDollarInt(n.asphaltic63),a.blackWax64=isNaN(n.blackWax64)?n.blackWax64:this.formatToDollarInt(n.blackWax64),a.yellowWax65=isNaN(n.yellowWax65)?n.yellowWax65:this.formatToDollarInt(n.yellowWax65),e.push(a)}))})),e}},created(){setTimeout((()=>{this.designatedAreaList(),this.yearList()}),300)},mounted(){const e=this.$route.query.designated_area,t=this.$route.query.years&&this.$route.query.years.split(",");this.designatedAreaInputField.selected=e||null,this.ibmpYearsInputField.selected=t||null}},d=o,c=n(1001),u=n(3453),p=n.n(u),f=n(9391),g=n(3121),m=n(6643),h=n(9049),y=n(4722),b=(0,c.Z)(d,a,r,!1,null,"c31d53b2",null),v=b.exports;p()(b,{VCard:f.Z,VCol:g.Z,VContainer:m.Z,VDataTable:h.Z,VRow:y.Z})}}]);
//# sourceMappingURL=IBMPCollection.7b499e2a.js.map