"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[952],{6428:function(){},3121:function(t,e,n){n(6699),n(6428);var r=n(144),a=n(5218),l=n(5598);const o=["sm","md","lg","xl"],s=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),i=(()=>o.reduce(((t,e)=>(t["offset"+(0,l.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["order"+(0,l.jC)(e)]={type:[String,Number],default:null},t)),{}))(),u={col:Object.keys(s),offset:Object.keys(i),order:Object.keys(c)};function d(t,e,n){let r=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");r+=`-${n}`}return"col"!==t||""!==n&&!0!==n?(r+=`-${n}`,r.toLowerCase()):r.toLowerCase()}}const f=new Map;e["Z"]=r.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...s,offset:{type:[String,Number],default:null},...i,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:r,parent:l}){let o="";for(const a in e)o+=String(e[a]);let s=f.get(o);if(!s){let t;for(t in s=[],u)u[t].forEach((n=>{const r=e[n],a=d(t,n,r);a&&s.push(a)}));const n=s.some((t=>t.startsWith("col-")));s.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),f.set(o,s)}return t(e.tag,(0,a.ZP)(n,{class:s}),r)}})},6643:function(t,e,n){n.d(e,{Z:function(){return o}});n(9941),n(6428);var r=n(144);function a(t){return r.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:r,children:a}){r.staticClass=`${t} ${r.staticClass||""}`.trim();const{attrs:l}=r;if(l){r.attrs={};const t=Object.keys(l).filter((t=>{if("slot"===t)return!1;const e=l[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(r.staticClass+=` ${t.join(" ")}`)}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),e(n.tag,r,a)}})}var l=n(5218),o=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:r}){let a;const{attrs:o}=n;return o&&(n.attrs={},a=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,(0,l.ZP)(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(a||[])}),r)}})},4722:function(t,e,n){n(6699),n(6428);var r=n(144),a=n(5218),l=n(5598);const o=["sm","md","lg","xl"],s=["start","end","center"];function i(t,e){return o.reduce(((n,r)=>(n[t+(0,l.jC)(r)]=e(),n)),{})}const c=t=>[...s,"baseline","stretch"].includes(t),u=i("align",(()=>({type:String,default:null,validator:c}))),d=t=>[...s,"space-between","space-around"].includes(t),f=i("justify",(()=>({type:String,default:null,validator:d}))),p=t=>[...s,"space-between","space-around","stretch"].includes(t),g=i("alignContent",(()=>({type:String,default:null,validator:p}))),h={align:Object.keys(u),justify:Object.keys(f),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,n){let r=y[t];if(null!=n){if(e){const n=e.replace(t,"");r+=`-${n}`}return r+=`-${n}`,r.toLowerCase()}}const b=new Map;e["Z"]=r.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:d},...f,alignContent:{type:String,default:null,validator:p},...g},render(t,{props:e,data:n,children:r}){let l="";for(const a in e)l+=String(e[a]);let o=b.get(l);if(!o){let t;for(t in o=[],h)h[t].forEach((n=>{const r=e[n],a=v(t,n,r);a&&o.push(a)}));o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),b.set(l,o)}return t(e.tag,(0,a.ZP)(n,{staticClass:"row",class:o}),r)}})},4824:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-data-table",{attrs:{headers:t.headers,items:t.collection,search:t.searchInputField.text,"hide-default-header":""},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("TextField",{attrs:{fields:t.searchInputField}})],1)],1)],1)]},proxy:!0},{key:"header",fn:function(e){var r=e.props.headers;return[n("thead",[n("tr",t._l(r,(function(e){return n("th",{key:e.title},[n("span",{staticClass:"black--text text-h5"},[t._v(t._s(e.text))])])})),0)])]}},{key:"item.toc_page",fn:function(e){var r=e.item;return[n("div",[n("a",{attrs:{href:t.handbookLink(r.url,r.actual_page),target:"_blank"}},[t._v(t._s(r.toc_page))])])]}}],null,!0)})],1)],1)},a=[];n(6699);const l=()=>n.e(707).then(n.bind(n,392));var o={name:"HandbooksCollection",data:()=>({searchInputField:{label:"Search table of contents",text:"",ref:"searchInput",color:"secondary",icon:"mdi-magnify"}}),props:{collection:[Array,Object]},components:{TextField:l},methods:{searchFilter(t){return!this.searchInputField.text||t.toLowerCase().includes(this.searchInputField.text.toLowerCase())},handbookLink(t,e){return e?`${t}#page=${e}`:t}},computed:{headers(){return[{text:"Chapter",align:"start",sortable:!1,value:"chapter"},{text:"Section",align:"start",sortable:!1,value:"section"},{text:"Title",align:"start",sortable:!0,value:"title"},{text:"Page",align:"start",sortable:!1,value:"toc_page"}]}}},s=o,i=n(1001),c=n(3453),u=n.n(c),d=n(9391),f=n(3121),p=n(6643),g=n(9049),h=n(4722),y=(0,i.Z)(s,r,a,!1,null,"d132c190",null),v=y.exports;u()(y,{VCard:d.Z,VCol:f.Z,VContainer:p.Z,VDataTable:g.Z,VRow:h.Z})}}]);
//# sourceMappingURL=SolidMineralsReporterHandbook.fa02dc30.js.map