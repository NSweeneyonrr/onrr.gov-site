(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Page"],{2048:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.$apollo.loading?n("div",{staticClass:"text-center"},[n("v-progress-circular",{attrs:{value:20}})],1):n("div",{staticClass:"page-wrap"},[n("Breadcrumbs"),e.page.page_blocks?n("div",e._l(e.page.page_blocks,(function(t){return n("div",{key:t.id},["three_column"===t.item.block_layout?n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"4"}},e._l(t.item.block_content_column_one.blocks,(function(t){return n("div",{key:t.id},[n("keep-alive",[n(e.pageBlock(t.type),{key:t.id,tag:"component",staticClass:"block-component",attrs:{block:t}})],1)],1)})),0),n("v-col",{attrs:{cols:"12",sm:"4"}},e._l(t.item.block_content_column_two.blocks,(function(t){return n("div",{key:t.id},[n("keep-alive",[n(e.pageBlock(t.type),{key:t.id,tag:"component",staticClass:"block-component",attrs:{block:t}})],1)],1)})),0),n("v-col",{attrs:{cols:"12",sm:"4"}},e._l(t.item.block_content_column_three.blocks,(function(t){return n("div",{key:t.id},[n("keep-alive",[n(e.pageBlock(t.type),{key:t.id,tag:"component",staticClass:"block-component",attrs:{block:t}})],1)],1)})),0)],1)],1):e._e(),"two_column"===t.item.block_layout?n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},e._l(t.item.block_content_column_one.blocks,(function(t){return n("div",{key:t.id},[n("keep-alive",[n(e.pageBlock(t.type),{key:t.id,tag:"component",staticClass:"block-component",attrs:{block:t}})],1)],1)})),0),n("v-col",{attrs:{cols:"12",sm:"6"}},e._l(t.item.block_content_column_two.blocks,(function(t){return n("div",{key:t.id},[n("keep-alive",[n(e.pageBlock(t.type),{key:t.id,tag:"component",staticClass:"block-component",attrs:{block:t}})],1)],1)})),0)],1)],1):e._e(),"one_column"===t.item.block_layout&&"content_block"===t.item.block_type?n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12"}},e._l(t.item.block_content_column_one.blocks,(function(t){return n("div",{key:t.id},[n("keep-alive",[n(e.pageBlock(t.type),{key:t.id,tag:"component",staticClass:"block-component",attrs:{block:t}})],1)],1)})),0)],1)],1):e._e()],1)})),0):e._e()],1)])},c=[],a=(n("d3b7"),n("3ca3"),n("ddb0"),n("ac1f"),n("5319"),n("7db0"),n("0306")),i=function(){return n.e("Breadcrumbs").then(n.bind(null,"cf1b"))},l=function(){return n.e("TextBlock").then(n.bind(null,"30d2"))},s=function(){return n.e("TabsBlock").then(n.bind(null,"712c"))},r=function(){return n.e("ListBlock").then(n.bind(null,"b134"))},u=function(){return n.e("TableBlock").then(n.bind(null,"6229"))},p=function(){return n.e("CodeBlock").then(n.bind(null,"11d9"))},k=function(){return n.e("ImageBlock").then(n.bind(null,"c7d7"))},d={name:"Page",metaInfo:function(){return{title:this.metaTitle||this.pageTitle,meta:[{name:"description",content:this.metaDescription},{property:"og:title",content:this.metaTitle},{property:"og:site_name",content:"Office of Natural Resources Revenue"},{property:"og:type",content:"website"},{name:"robots",content:"index,follow"}]}},components:{Breadcrumbs:i,TextBlock:l,TabsBlock:s,ListBlock:r,TableBlock:u,CodeBlock:p,ImageBlock:k},data:function(){return{pages:[],pages_by_id:[],code:"",colCount:1}},apollo:{pages:{query:a["f"],loadingKey:"loading..."},pages_by_id:{query:a["e"],loadingKey:"loading...",variables:function(){return{ID:this.findPageBySlug.id}}}},props:{slug:String},created:function(){this.$apollo.queries.pages_by_id.refetch()},methods:{pageBlock:function(e){var t;switch(e){case"header":case"paragraph":t=l;break;case"tabs":t=s;break;case"list":t=r;break;case"table":t=u;break;case"code":t=p;break;case"image":t=k;break;default:t=l;break}return t}},computed:{findPageBySlug:function(){var e,t=this,n=this.$route.path,o=n.replace(/\//g,"");return this.pages&&(e=this.slug?this.pages.find((function(e){return e.slug===t.slug})):this.pages.find((function(e){return e.slug===o}))),e},page:function(){return this.pages_by_id},metaTitle:function(){return this.pages_by_id.meta_title},metaDescription:function(){return this.pages_by_id.meta_description},pageTitle:function(){return this.pages_by_id.title}}},b=d,g=(n("7282"),n("2877")),m=n("6544"),_=n.n(m),f=n("62ad"),y=n("a523"),v=n("490a"),h=n("0fd9"),B=Object(g["a"])(b,o,c,!1,null,"1ca13afe",null);t["default"]=B.exports;_()(B,{VCol:f["a"],VContainer:y["a"],VProgressCircular:v["a"],VRow:h["a"]})},7282:function(e,t,n){"use strict";n("75ea")},"75ea":function(e,t,n){}}]);
//# sourceMappingURL=Page.666ce70e.js.map