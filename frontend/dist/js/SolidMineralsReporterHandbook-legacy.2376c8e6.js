"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[952],{4824:function(t,e,n){n.r(e),n.d(e,{default:function(){return b}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card",[n("v-data-table",{attrs:{headers:t.headers,items:t.collection,search:t.searchInputField.text,"hide-default-header":""},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("TextField",{attrs:{fields:t.searchInputField}})],1)],1)],1)]},proxy:!0},{key:"header",fn:function(e){var a=e.props.headers;return[n("thead",[n("tr",t._l(a,(function(e){return n("th",{key:e.title},[n("span",{staticClass:"black--text text-h5"},[t._v(t._s(e.text))])])})),0)])]}},{key:"item.toc_page",fn:function(e){var a=e.item;return[n("div",[n("a",{attrs:{href:t.handbookLink(a.url,a.actual_page),target:"_blank"}},[t._v(t._s(a.toc_page))])])]}}],null,!0)})],1)],1)},r=[],o=(n(1539),n(8783),n(3948),n(6699),n(2023),n(2222),function(){return n.e(707).then(n.bind(n,392))}),l={name:"HandbooksCollection",data:function(){return{searchInputField:{label:"Search table of contents",text:"",ref:"searchInput",color:"secondary",icon:"mdi-magnify"}}},props:{collection:[Array,Object]},components:{TextField:o},methods:{searchFilter:function(t){return!this.searchInputField.text||t.toLowerCase().includes(this.searchInputField.text.toLowerCase())},handbookLink:function(t,e){return e?"".concat(t,"#page=").concat(e):t}},computed:{headers:function(){return[{text:"Chapter",align:"start",sortable:!1,value:"chapter"},{text:"Section",align:"start",sortable:!1,value:"section"},{text:"Title",align:"start",sortable:!0,value:"title"},{text:"Page",align:"start",sortable:!1,value:"toc_page"}]}}},c=l,s=n(1001),i=n(3453),u=n.n(i),d=n(9391),h=n(3121),p=n(6643),f=n(9049),v=n(4722),_=(0,s.Z)(c,a,r,!1,null,"d132c190",null),b=_.exports;u()(_,{VCard:d.Z,VCol:h.Z,VContainer:p.Z,VDataTable:f.Z,VRow:v.Z})}}]);
//# sourceMappingURL=SolidMineralsReporterHandbook-legacy.2376c8e6.js.map