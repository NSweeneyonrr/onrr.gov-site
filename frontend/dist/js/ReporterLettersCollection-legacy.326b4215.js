"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[793],{2478:function(t,e,i){i.d(e,{P:function(){return n},h:function(){return l}});var o=i(144),l=o.Z.observable({collections:{searchQuery:"",year:(new Date).getFullYear(),queryParams:{}},queryParams:{tabs:[],panel:""}}),n={updateCollections:function(t,e){console.log("updateCollectionsSearchQuery --------\x3e ",e),l.collections[t]=e},updateQueryParams:function(t,e){console.log("updateQueryParams --------\x3e ",e),l.queryParams[t]=e}}},5684:function(t,e,i){i.r(e),i.d(e,{default:function(){return g}});var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",["basic"===t.collectionLayout?i("div",[i("v-list",{attrs:{dense:""}},[i("v-list-item-group",{attrs:{color:"secondary"}},t._l(t.slicedCollection,(function(e,o){return i("v-list-item",{key:o,staticClass:"pa-0",attrs:{href:t.fileLink(t.API+"/press-releases/",e),target:"_blank"}},[i("v-list-item-icon",{staticClass:"mr-1"},[i("v-icon",{attrs:{color:"secondary"}},[t._v("mdi-file-pdf-box")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"secondary--text text-body-1 text-wrap text-decoration-underline",domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),i("div",{staticClass:"text-center"},[i("v-btn",{staticClass:"mx-auto",attrs:{color:"secondary",href:"/about/public-affairs"}},[t._v("View All")])],1)],1):t._e(),"full"===t.collectionLayout?i("div",[i("CollectionFilterToolbar",{ref:"collectionFilterToolbar",attrs:{collection:t.collection,searchResults:t.filterCollection}}),t._l(t.filterCollection,(function(e,o){return i("v-card",{key:o,staticClass:"ml-1 mr-1 mt-1 mb-4",attrs:{elevation:"1",transition:"fade-transition"}},[i("v-list-item",{staticClass:"pa-2",attrs:{"three-line":""}},[i("v-list-item-avatar",{staticClass:"d-flex flex-column justify-start mr-2",attrs:{tile:"",size:"80"}},[i("div",{staticClass:"secondary--text font-weight-bold text-h1"},[t._v(t._s(t.getDay(e.date,"numeric")))]),i("div",{staticClass:"font-weight-bold text-uppercase"},[t._v(t._s(t.getMonth(e.date,"short")))])]),i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-h5 mb-1 text-wrap"},[t._v(" "+t._s(e.title)+" "),"archived"===e.status?i("v-chip",{attrs:{small:"",color:"orange",outlined:""}},[t._v(t._s(e.status))]):t._e()],1),i("v-list-item-subtitle",{staticClass:"mb-2 black--text"},[i("v-icon",[t._v("mdi-calendar-month")]),t._v(" "+t._s(t.getFullDate(e.date))+" ")],1),e.excerpt?i("div",{staticClass:"mb-2 text-body-1",domProps:{innerHTML:t._s(e.excerpt)}}):t._e(),t.fileLink(t.API+"/press-releases/",e)?i("div",[i("a",{attrs:{href:t.fileLink(t.API+"/press-releases/",e),target:"_blank"}},[t._v("View press release document ")]),i("v-icon",{attrs:{color:"secondary"}},[t._v("mdi-file-pdf-box")])],1):t._e()],1)],1)],1)}))],2):t._e()])},l=[],n=i(7174),r=(i(1539),i(8783),i(3948),i(2707),i(9653),i(7327),i(4916),i(3123),i(6699),i(2023),i(2478)),s=i(5183),c=function(){return i.e(364).then(i.bind(i,3811))},a={name:"PressReleasesCollection",mixins:[s.DV,s.Gn],data:function(){return{API:"https://dev-onrr-frontend.app.cloud.gov"}},props:{showToolbar:Boolean},components:{CollectionFilterToolbar:c},computed:{filterCollection:function(){var t=this.collection&&(0,n.Z)(this.collection).sort((function(t,e){return t.date<e.date?1:-1})),e=Number(r.h.collections.year)?this.filterCollectionByYear(this.filterCollectionBySearch(t)):this.filterCollectionBySearch(t);return e&&0!==e.length?e:t}},methods:{filterCollectionBySearch:function(t){var e=r.h.collections.searchQuery||"",i=""!==e?t.filter((function(t){return e.toLowerCase().split(" ").every((function(e){return t.title.toLowerCase().includes(e)}))})):t;return i},filterCollectionByYear:function(t){var e=this,i=r.h.collections.year,o=t&&t.filter((function(t){return e.getYear(t.date)===i}));return o}}},u=a,d=i(1001),f=i(3453),p=i.n(f),v=i(2774),m=i(9391),h=i(5844),y=i(9639),_=i(1317),x=i(5243),b=i(6796),C=i(1033),I=i(4674),k=i(9565),L=(0,d.Z)(u,o,l,!1,null,"43594e40",null),g=L.exports;p()(L,{VBtn:v.Z,VCard:m.Z,VChip:h.Z,VIcon:y.Z,VList:_.Z,VListItem:x.Z,VListItemAvatar:b.Z,VListItemContent:C.km,VListItemGroup:I.Z,VListItemIcon:k.Z,VListItemSubtitle:C.oZ,VListItemTitle:C.V9})},8836:function(t,e,i){i.r(e),i.d(e,{default:function(){return T}});var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",["basic"===t.collectionLayout?i("div",[i("v-list",{attrs:{dense:""}},[i("v-list-item-group",{attrs:{color:"secondary"}},t._l(t.filteredCollection,(function(e,o){return i("v-list-item",{key:o,staticClass:"pa-0",attrs:{href:t.fileLink(t.API+"/reporter-letters/",e),target:"_blank"}},[i("v-list-item-icon",{staticClass:"mr-1"},[i("v-icon",{attrs:{color:"secondary"}},[t._v(t._s(t.fileIcon(e.file.type)))])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"secondary--text text-body-1 text-wrap text-decoration-underline",domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),i("div",{staticClass:"text-center"},[i("v-btn",{staticClass:"mx-auto",attrs:{color:"secondary",href:t.viewAllLink}},[t._v("View All")])],1)],1):t._e(),"full"===t.collectionLayout?i("div",[i("v-card",[i("v-data-table",{attrs:{headers:t.headers,items:t.collection,"item-key":"title"},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6"}},[i("MultipleSelectField",{attrs:{fields:t.topicsInputField}})],1),i("v-col",{attrs:{cols:"12",sm:"6"}},[i("TextField",{attrs:{fields:t.titleInputField}})],1)],1)],1)]},proxy:!0},{key:"header.title",fn:function(e){var o=e.header;return[i("div",{staticClass:"text-h6 text-capitalize"},[t._v(t._s(o.text))])]}},{key:"header.date",fn:function(e){var o=e.header;return[i("div",{staticClass:"text-h6 text-capitalize"},[t._v(t._s(o.text))])]}},{key:"header.topics",fn:function(e){var o=e.header;return[i("div",{staticClass:"text-h6 text-capitalize"},[t._v(t._s(o.text))])]}},{key:"item.title",fn:function(e){var o=e.item;return[i("div",[i("a",{staticClass:"link-item",attrs:{href:t.fileLink(t.API+"/reporter-letters/",o),target:"_blank"}},[t._v(t._s(o.title))]),i("v-icon",{attrs:{color:"secondary"}},[t._v(t._s(t.fileIcon(o.file.type)))])],1),o.accessible_file?i("div",[i("a",{staticClass:"link-item",attrs:{href:t.accessibleFileLink(t.API+"/reporter-letters/",o),target:"_blank"}},[t._v(t._s(o.accessible_file.title))]),i("v-icon",{attrs:{color:"secondary"}},[t._v(t._s(t.fileIcon(o.accessible_file.type)))])],1):t._e()]}},{key:"item.date",fn:function(e){var i=e.item;return[t._v(" "+t._s(t.formatNiceDate(i.date))+" ")]}},{key:"item.topics",fn:function(e){var i=e.item;return[t._v(" "+t._s(t.getTopics(i.topics))+" ")]}}],null,!0)})],1)],1):t._e()])},l=[],n=i(4254),r=i(7174),s=(i(1539),i(8783),i(3948),i(9600),i(1249),i(6699),i(2707),i(2023),i(7327),i(7042),i(4916),i(3123),i(5183)),c=i(8930),a=function(){return i.e(486).then(i.bind(i,1622))},u=function(){return i.e(707).then(i.bind(i,392))},d={name:"ReporterLettersCollection",mixins:[s.DV,s.Gn],data:function(){return{API:"https://dev-onrr-frontend.app.cloud.gov",titleInputField:{label:"Search",text:"",ref:"searchInput",color:"secondary",icon:"mdi-magnify"},topicsInputField:{items:[],label:"All Topics",ref:"topicSelectInput",selected:null,color:"secondary",icon:"mdi-chevron-down",params:"topic"},filteredByTopicCollection:null}},props:{collection:[Array,Object],collectionName:String,collectionLayout:String,collectionTopics:Array},components:{MultipleSelectField:a,TextField:u},methods:{getTopics:function(t){var e;return e=t.length>1?t.join(", "):t[0],e},topicList:function(){var t=[];this.collection.map((function(e){e.topics&&e.topics.length>0?e.topics.map((function(e){t.includes(e)||t.push(e)})):t.includes(e)||t.push(e)})),this.topicsInputField.items=(0,r.Z)(t.sort())},titleFilter:function(t){return!this.titleInputField.text||t.toLowerCase().includes(this.titleInputField.text.toLowerCase())},topicsFilter:function(t){var e=this;return console.log("topcis filter value --------\x3e ",t),!this.topicsInputField.selected||null===this.topicsInputField.selected||0===this.topicsInputField.selected.length||t.some((function(t){return e.topicsInputField.selected.indexOf(t)>=0}))},addParamsToLocation:function(t){var e=(0,n.Z)((0,n.Z)({path:this.$route.fullPath},this.$route.query),{},{query:t});this.$router.push(e).catch((function(){}))},formattedLabel:function(t){return(0,c.lx)(t)},fileIcon:function(t){var e;switch(t){case"application/pdf":case"pdf":e="mdi-file-pdf-box";break;case"application/vnd.openxmlformats-officedocument.wordprocessingml.document":e="mdi-file-word-box";break;case"xls":case"xlsx":case"vnd.openxmlformats-officedocument.spreadsheetml.sheet":e="mdi-file-excel-box";break;case"vnd.openxmlformats-officedocument.presentationml.presentation":e="mdi-file-powerpoint-box";break;case"plain":e="mdi-text-box";break;default:e=void 0;break}return e},filterCollectionByTopic:function(){var t=this;return this.collectionTopics.map((function(e){return t.collection.filter((function(t){var i=t.topics;return i.includes(e)}))}))}},computed:{headers:function(){return[{text:"Reporter Letters",align:"start",sortable:!1,value:"title",filter:this.titleFilter},{text:"Date",align:"start",sortable:!0,value:"date"},{text:"Topics",align:"start",sortable:!1,value:"topics",filter:this.topicsFilter}]},filteredCollection:function(){var t=this.filteredByTopicCollection?this.filteredByTopicCollection[0].slice(0,5):this.collection&&this.collection.slice(0,5);return t},viewAllLink:function(){var t=this.filteredByTopicCollection?"/references/reporter-letters?topic=".concat(encodeURIComponent(this.collectionTopics.join(","))):"/references/reporter-letters";return t}},created:function(){setTimeout(function(){this.topicList(),this.filteredByTopicCollection=this.filterCollectionByTopic()}.bind(this),500)},mounted:function(){var t=this.$route.query.topic&&this.$route.query.topic.split(",");this.topicsInputField.selected=t||null}},f=d,p=i(1001),v=i(3453),m=i.n(v),h=i(2774),y=i(9391),_=i(3121),x=i(6643),b=i(9049),C=i(9639),I=i(1317),k=i(5243),L=i(1033),g=i(4674),V=i(9565),Z=i(4722),F=(0,p.Z)(f,o,l,!1,null,"1c79ce60",null),T=F.exports;m()(F,{VBtn:h.Z,VCard:y.Z,VCol:_.Z,VContainer:x.Z,VDataTable:b.Z,VIcon:C.Z,VList:I.Z,VListItem:k.Z,VListItemContent:L.km,VListItemGroup:g.Z,VListItemIcon:V.Z,VListItemTitle:L.V9,VRow:Z.Z})}}]);
//# sourceMappingURL=ReporterLettersCollection-legacy.326b4215.js.map