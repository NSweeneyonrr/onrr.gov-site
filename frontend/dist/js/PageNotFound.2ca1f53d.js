(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["PageNotFound"],{"13d7":function(a,e,t){"use strict";t("afeb")},a5b5:function(a,e,t){"use strict";t.r(e);var n=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[a.$apolloData.loading?t("div",[t("div",{staticClass:"text-center"},[t("v-progress-circular",{attrs:{value:20}})],1)]):t("v-container",{staticClass:"page__wrap"},[t("h2",{staticClass:"title"},[a._v(a._s(a.page.title))]),t("div",{domProps:{innerHTML:a._s(a.page.content)}})])],1)},o=[],i=t("0306"),s={name:"PageNotFound",metaInfo:{title:"Page not found"},data:function(){return{page:null}},apollo:{pages_by_id:{query:i["e"],loadingKey:"loading...",variables:function(){return{ID:"53"}},result:function(a){var e=a.data;e&&(console.debug("404 data---------\x3e ",e),this.page=e.pages_by_id)}}}},r=s,l=(t("13d7"),t("2877")),u=t("6544"),c=t.n(u),d=t("a523"),p=t("490a"),g=Object(l["a"])(r,n,o,!1,null,"2ea01359",null);e["default"]=g.exports;c()(g,{VContainer:d["a"],VProgressCircular:p["a"]})},afeb:function(a,e,t){}}]);
//# sourceMappingURL=PageNotFound.2ca1f53d.js.map