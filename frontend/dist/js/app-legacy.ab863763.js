(function(){"use strict";var n={9985:function(n,e,t){t.d(e,{qH:function(){return D},Qs:function(){return nn},xT:function(){return J},yk:function(){return ln},jI:function(){return rn},M4:function(){return sn},id:function(){return G},tv:function(){return en},sI:function(){return Y},KY:function(){return W},$S:function(){return U},dw:function(){return tn},KT:function(){return on},Nm:function(){return an},cR:function(){return $}});var o,a,r,i,l,s,c,u,d,A,f,m,p,b,g,_,h,v,k,C,y,I,B,Z,w,P,F,E,x,S,T,O=t(7909),L=t(9989),q=(0,L.ZP)(o||(o=(0,O.Z)(["\n  fragment contentBlocks on content_blocks {\n    content\n  }\n"]))),N=(0,L.ZP)(a||(a=(0,O.Z)(["\n  fragment contentBlockFields on content_blocks {\n    id\n    block_label\n    block_v_col\n    block_content\n  }\n"]))),Q=(0,L.ZP)(r||(r=(0,O.Z)(["\n  fragment layoutColumnBlockFields on layout_column_blocks {\n    id\n    layoutCol: block_v_col\n  }\n"]))),V=(0,L.ZP)(i||(i=(0,O.Z)(["\n  fragment cardBlockFields on card_blocks {\n    id\n    block_color\n    block_label\n    block_v_col\n    block_content\n    equal_col_height\n    card_content_blocks {\n      id\n      item {\n        ...contentBlockFields\n      }\n    }\n  }\n"]))),R=(0,L.ZP)(l||(l=(0,O.Z)(["\n  fragment tabBlockLabelFields on tab_block_label {\n    id\n    tab_block_label\n  }\n"]))),j=((0,L.ZP)(s||(s=(0,O.Z)(["\n  fragment sectionHeadingBlocks on section_heading_blocks {\n    section_heading\n    section_heading_type\n  }\n"]))),(0,L.ZP)(c||(c=(0,O.Z)(["\n  fragment expansionPanelBlockLabel on expansion_panel_block_label {\n    id\n    block_label\n  }\n"])))),H=(0,L.ZP)(u||(u=(0,O.Z)(["\n  ","\n  ","\n  ","\n  fragment expansionPanelBlockFields on expansion_panels {\n    id\n    block_label\n    open_by_default {\n      id\n    }\n    expansion_panel_blocks {\n      id\n      item {\n        __typename\n        ...expansionPanelBlockLabel\n        ...contentBlockFields\n        ...cardBlockFields\n      }\n    }\n  }\n"])),j,N,V),M=(0,L.ZP)(d||(d=(0,O.Z)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  fragment nestedNestedTabBlockFields on tab_blocks {\n    id\n    tab_blocks {\n        id\n        item {\n          __typename\n          ...tabBlockLabelFields\n          ...contentBlockFields\n          ...cardBlockFields\n          ...expansionPanelBlockFields\n          ...layoutColumnBlockFields\n        }\n    }\n  }\n"])),R,N,V,H,Q),K=(0,L.ZP)(A||(A=(0,O.Z)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  fragment nestedTabBlockFields on tab_blocks {\n    id\n    tab_blocks {\n        id\n        item {\n          __typename\n          ...tabBlockLabelFields\n          ...contentBlockFields\n          ...cardBlockFields\n          ...nestedNestedTabBlockFields\n          ...expansionPanelBlockFields\n          ...layoutColumnBlockFields\n        }\n    }\n  }\n"])),R,N,V,M,Q),z=(0,L.ZP)(f||(f=(0,O.Z)(["\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  fragment tabBlockFields on tab_blocks {\n    id\n    tab_blocks {\n      id\n      item {\n        __typename\n        ...tabBlockLabelFields\n        ...contentBlockFields\n        ...cardBlockFields\n        ...nestedTabBlockFields\n        ...expansionPanelBlockFields\n        ...layoutColumnBlockFields\n      }\n    }\n  }\n"])),R,N,V,K,H,Q),X=(0,L.ZP)(m||(m=(0,O.Z)(["\n ","\n ","\n ","\n ","\n ","\n  fragment pageFields on pages {\n    id\n    title\n    slug\n    hero_image {\n      id\n    }\n    hero_title\n    page_blocks {\n      id\n      item {\n        __typename\n        ...contentBlockFields\n        ...tabBlockFields\n        ...cardBlockFields\n        ...expansionPanelBlockFields\n        ...layoutColumnBlockFields\n      }\n    }\n    meta_title\n    meta_description\n  }\n"])),N,z,V,H,Q),G=((0,L.ZP)(p||(p=(0,O.Z)(["\n  ","\n  fragment cardBlocks on card_blocks {\n    card_title\n    card_subtitle\n    card_content_block {\n      item {\n        __typename\n        ...contentBlocks\n      }\n    }\n  }\n"])),q),(0,L.ZP)(b||(b=(0,O.Z)(["\n  fragment fileCollectionFields on reporter_letters {\n    id\n    title\n    date\n    file {\n        id\n    }\n  }\n"]))),(0,L.ZP)(g||(g=(0,O.Z)(["query {\n  menus {\n    id\n    custom_url\n    link_to_page {\n      id\n      slug\n      url\n    }\n    menu\n    menu_children {\n      pages_id {\n        id\n        title\n        url\n      }\n    }\n    menu_icon\n    menu_label\n  }\n}"])))),D=(0,L.ZP)(_||(_=(0,O.Z)(["query {\n  announcements {\n    id\n    title \n    content\n    status\n  }\n}"]))),W=(0,L.ZP)(h||(h=(0,O.Z)(["\nquery {\n  pages(limit: -1) {\n    id\n    slug\n    title\n    url\n    template\n    parent {\n      id\n    }\n  }\n}"]))),U=((0,L.ZP)(v||(v=(0,O.Z)(["\nquery {\n  redirects {\n    id\n    from \n    to\n  }  \n}\n"]))),(0,L.ZP)(k||(k=(0,O.Z)(["\nquery {\n  pages(limit: -1) {\n    id\n    slug\n    title\n    url\n  }\n  redirects {\n    id\n    from \n    to\n  }  \n}\n"])))),Y=(0,L.ZP)(C||(C=(0,O.Z)(["\n","\nquery PagesById($ID: ID!) {\n  pages_by_id (id: $ID) {\n    ...pageFields\n  }\n}"])),X),J=(0,L.ZP)(y||(y=(0,O.Z)(["\n","\nquery PagesById($ID: ID!) {\n  pages_by_id (id: $ID) {\n    ...pageFields\n    sidebar_blocks\n  }\n}"])),X),$=((0,L.ZP)(I||(I=(0,O.Z)(["\n  query {\n    files {\n      id\n      storage\n      filename_disk\n      title\n      filesize\n      location\n      folder {\n        id \n        name\n      }\n    }\n    folders {\n      id\n      name\n    }\n  }\n"]))),(0,L.ZP)(B||(B=(0,O.Z)(['\n  query {\n    revenue_fiscal_years: period(\n      distinct_on: fiscal_year, \n      where: {revenues: {revenue: {_is_null: false}, period: {period: {_eq: "Fiscal Year"}}}}, \n      order_by: {fiscal_year: asc}) {\n        fiscal_year\n    }\n\n    disbursement_fiscal_years: period(\n      distinct_on: fiscal_year, \n      where: {disbursements: {disbursement: {_is_null: false}, period: {period: {_eq: "Fiscal Year"}}}}, \n      order_by: {fiscal_year: asc}) {\n        fiscal_year\n    }\n    total_yearly_fiscal_revenue(where: {year: {_eq: 2020}}) {\n      sum\n    }\n\n    total_yearly_fiscal_disbursement(where: {year: {_eq: 2020}}) {\n      sum\n    }\n    disbursement_gomesa: disbursement_source_summary(\n      where: {fiscal_year: {_eq: "2020"}, source: {_eq: "GOMESA offshore"}, state_or_area: {_eq: "NF"}}, \n      order_by: {fiscal_year: asc, total: desc}\n      ) {\n      source\n      sum: total\n    }\n  }\n'])))),nn=(0,L.ZP)(Z||(Z=(0,O.Z)(['\n  query {\n    contacts(sort: ["header", "letter"], limit: -1) {\n      id\n      status\n      page\n      tab\n      accordion\n      company_yn\n      letter\n      header\n      company_name\n      operator_number\n      agency\n      primary_contact\n      primary_role\n      email\n      phone\n      fax\n      contact_2\n      role_2\n      email_2\n      phone_2\n      contact_3\n      role_3\n      email_3\n      phone_3\n      contact_4\n      role_4\n      email_4\n      phone_4\n      contact_5\n      role_5\n      email_5\n      phone_5\n      contact_6\n      role_6\n      email_6\n      phone_6\n    }\n  }   \n']))),en=(0,L.ZP)(w||(w=(0,O.Z)(["\n  query {\n    NYMEX(limit: -1) {\n      id\n      status\n      date\n      average\n      roll\n      Spreadsheet {\n        id,\n        filename_download\n      }\n    }\n  }\n"]))),tn=(0,L.ZP)(P||(P=(0,O.Z)(["\n  query {\n    press_releases(limit: -1) {\n      id\n      title\n      date\n      file {\n        id\n        filename_download\n        title\n      }\n      link\n      excerpt\n      status\n    }\n  }\n"]))),on=(0,L.ZP)(F||(F=(0,O.Z)(["\n  query {\n    reporter_letters(limit: -1) {\n      id\n      title\n      date\n      file {\n        id\n        filename_download\n        title\n        type\n      }\n      accessible_file {\n        id\n        filename_download\n        title\n        type\n      }\n      link\n      status\n      topics\n    }\n  }\n"]))),an=(0,L.ZP)(E||(E=(0,O.Z)(["\n  query {\n    rulemakings {\n      id\n      status\n      final_publication_date\n      rin\n      rule_title\n      informal_title\n      commodity_subject_matter\n      webpage_link\n    }\n  }\n"]))),rn=(0,L.ZP)(x||(x=(0,O.Z)(['\n  query {\n    index_zones(sort: ["sort", "-date"], limit: -1) {\n      id\n      status\n      date\n      spreadsheet {\n        id\n      }\n      index_zones\n    }\n  }\n']))),ln=(0,L.ZP)(S||(S=(0,O.Z)(['\n  query {\n    ibmp(sort: ["sort", "-date"], limit: -1) {\n      id\n      status\n      date\n      spreadsheet {\n          id\n      }\n      ibmp_line_items\n    }\n  }\n']))),sn=(0,L.ZP)(T||(T=(0,O.Z)(['\n  query {\n    indian_gas_major_portion(sort: ["sort", "-date"], limit: -1) {\n      id\n      status\n      date\n      spreadsheet {\n        id\n      }\n      index_zones\n    }\n  }\n'])))},1723:function(n,e,t){t.d(e,{l:function(){return En}});t(6992),t(8674),t(9601),t(7727);var o=t(144),a=t(7356),r=(t(1539),t(8783),t(3948),t(4747),t(7941),t(9714),t(9826),t(8309),t(8345)),i=t(9985);o.Z.use(r.Z);var l=[{path:"/",name:"Home",component:function(){return Promise.all([t.e(343),t.e(268)]).then(t.bind(t,9111))},meta:{breadcrumb:"Home"},props:!0},{path:"/404",name:"PageNotFound",component:function(){return t.e(892).then(t.bind(t,7290))},meta:{breadcrumb:"Page Not Found"}},{path:"/:slug",name:"TwoColumnLeft",component:function(){return Promise.all([t.e(343),t.e(121)]).then(t.bind(t,2648))},props:!0,meta:{breadcrumb:""},children:[{path:"/",component:function(){return t.e(439).then(t.bind(t,53))}},{path:":slug1",component:function(){return t.e(439).then(t.bind(t,53))},props:!0,meta:{breadcrumb:""},children:[{path:":slug2",component:function(){return t.e(439).then(t.bind(t,53))},props:!0,meta:{breadcrumb:""},children:[{path:":slug3",component:function(){return t.e(439).then(t.bind(t,53))},props:!0,meta:{breadcrumb:""},children:[{path:":slug4",component:function(){return t.e(439).then(t.bind(t,53))},props:!0,meta:{breadcrumb:""},children:[{path:":slug5",component:function(){return t.e(439).then(t.bind(t,53))},props:!0,meta:{breadcrumb:""}}]}]}]}]}]},{path:"/:catchAll(.*)",redirect:"/404"}],s=new r.Z({mode:"history",linkExactActiveClass:"nav-active-class",routes:l,scrollBehavior:function(n,e,t){return console.log("scrollBehavior to, from, savedPosition: ",n,e,t),n.hash?{selector:n.hash,behavior:"smooth"}:t||void 0}});function c(n){setTimeout((function(){n.forEach((function(n){var e={};e.path=n.from,e.redirect=n.to,e.children=[{path:":slug",redirect:n.to}],s.addRoute(e)}))}),1e3)}function u(n){return!!Object.keys(n.query).length}s.beforeEach((function(n,e,t){En.query({query:i.$S}).then((function(e){if(null!==e&&void 0!==e&&e.data){var o=e.data.pages,a=e.data.redirects;c(a);var r=location.pathname.toString(),i=o.find((function(e){return e.url===n.path})),l=a.find((function(n){return n.from===r}));void 0===i&&t({path:"/404"}),l?t({path:l.to,replace:!0}):i&&t()}})).catch((function(n){return console.error(n)})),!u(n)&&u(e)?t({name:n.name,query:e.query}):t()}));var d=s,A=t(2489),f=t(6495),m=t(5543),p=t(4153),b=t(3300),g=t.n(b),_=t(443);o.Z.use(_.Z);var h=new _.Z({theme:{themes:{dark:{primary:"#121212",secondary:"#19642a9",anchor:"#0076a3"},light:{primary:{base:"#1a227e",lighten9:"#e8eaf5",lighten8:"#c5c9e8",lighten7:"#9ea7d8",lighten6:"#7885c8",lighten5:"#5b6abc",lighten4:"#3f50b1",lighten3:"#3948a7",lighten2:"#303e9b",lighten1:"#28348f",darken1:"#000051"},secondary:{base:"#0076a3",lighten8:"#e1f4f9",lighten7:"#b3e4f0",lighten6:"#83d2e7",lighten5:"#57c0de",lighten4:"#38b3da",lighten3:"#19a6d6",lighten2:"#0f98c9",lighten1:"#0086b6",darken1:"#005682"},anchor:"#0076a3",accent:"#534aae",black:"#000000",green:{base:"#097d4d",lighten1:"#4aad79",darken1:"#005024"},purple:{base:"#650d79",lighten1:"#960d79",lighten2:"#dfdcef",darken1:"#36004c"},yellow:{base:"#b6890f",lighten1:"#ecb947",darken1:"#825c10"},white:"#ffffff",neutrals:{base:"#262431",lighten1:"#484554",lighten2:"#ebebed"},expansionPanel:"#ebebed"}},options:{customProperties:!0}}}),v=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-app",[t("AppToolbar"),t("v-main",[t("router-view",{key:n.$route.path})],1),t("Footer")],1)},k=[],C=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",[o("v-system-bar",{staticClass:"system-bar",class:{"hidden-system-bar":!n.showSystemBar},attrs:{app:"",height:"30"}},[o("div",{staticClass:"banner-wrap"},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"U.S. Flag",contain:"",src:t(7838),transition:"scale-transition",width:"20"}}),n._v(" An official website of the U.S. government ")],1)]),o("v-app-bar",{staticClass:"v-app-bar-wrap",class:{"hidden-system-bar":!n.showSystemBar},attrs:{app:"",color:"primary darken-1",dark:"",height:n.showSystemBar?"80px":"60px"},scopedSlots:n._u([n.isMobile?null:{key:"extension",fn:function(){return[o("div",{staticClass:"d-none d-lg-block"},[o("MainMenu")],1)]},proxy:!0}],null,!0)},[o("div",{staticClass:"d-flex logo"},[o("router-link",{attrs:{to:"/"}},[o("v-img",{staticClass:"logo shrink mr-2",attrs:{alt:"Office of Natural Resources and Revenue (ONRR) Logo",contain:"",src:t(9271),transition:"scale-transition"}})],1),o("router-link",{attrs:{to:"/"}},[o("v-toolbar-title",[o("div",{staticClass:"logo-content"},[o("span",[n._v("U.S. Department of the Interior")]),o("span",[n._v("Office of Natural")]),o("span",[n._v("Resources Revenue (ONRR)")])])])],1)],1),o("v-spacer"),o("HeaderMenu"),o("div",{staticClass:"d-lg-none"},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),n.drawer=!n.drawer}}})],1)],1),o("v-navigation-drawer",{attrs:{app:"",absolute:"",right:"",temporary:""},model:{value:n.drawer,callback:function(e){n.drawer=e},expression:"drawer"}},[o("v-list",n._l(n.menuItems,(function(e){return o("v-list-group",{key:e.id,attrs:{"no-action":""},scopedSlots:n._u([{key:"activator",fn:function(){return[o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:n._s(e.menu_label)}})],1)]},proxy:!0}],null,!0)},[o("v-list",[o("v-list-item",{staticClass:"child-item",attrs:{to:"/"+e.link_to_page.url}},[n._v(" "+n._s(e.menu_label+" Home")+" ")]),n._l(e.menu_children,(function(e){return o("v-list-item",{key:e.id,staticClass:"child-item",attrs:{to:e.pages_id.url}},[o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:n._s(e.menu_label)}})],1)],1)}))],2)],1)})),1)],1),o("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:n.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:n.fab,expression:"fab"}],attrs:{color:"primary",dark:"",fab:"",fixed:"",bottom:"",left:"",elevation:"2"},on:{click:n.toTop}},[o("v-icon",{attrs:{color:"white"}},[n._v("mdi-chevron-up")])],1)],1)},y=[],I=(t(7327),function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"d-none d-lg-block header-menu"},[n._l(n.menuItems,(function(e){return t("v-btn",{key:e.id,staticClass:"no-btn-hover",attrs:{to:e.link_to_page&&e.link_to_page.url,href:e.custom_url&&e.custom_url,text:"",dark:""}},[t("span",{staticClass:"v-btn__content"},[e.menu_icon?t("v-icon",{staticClass:"mr-1",attrs:{color:"white"}},[n._v(n._s(e.menu_icon))]):n._e(),e.menu_label?t("span",{staticClass:"mr-2"},[n._v(n._s(e.menu_label))]):n._e()],1)])})),"localhost"===n.hostname||"192.168.0.22"===n.hostname?t("v-btn",{attrs:{plain:""}},[t("v-switch",{attrs:{flat:"",color:"anchor",label:""},model:{value:n.themeSwitch,callback:function(e){n.themeSwitch=e},expression:"themeSwitch"}})],1):n._e()],2)}),B=[],Z={name:"HeaderMenu",data:function(){return{hostname:location.hostname,menus:[],themeSwitch:!1}},apollo:{menus:{query:i.id,loadingKey:"loading..."}},computed:{menuItems:function(){return this.menus.filter((function(n){return"header"===n.menu}))}},watch:{themeSwitch:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},w=Z,P=t(1001),F=t(3453),E=t.n(F),x=t(2774),S=t(9639),T=t(9342),O=(0,P.Z)(w,I,B,!1,null,"09b412fa",null),L=O.exports;E()(O,{VBtn:x.Z,VIcon:S.Z,VSwitch:T.Z});var q=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[n.$apollo.loading?t("label",{attrs:{text:""}}):t("nav",{staticClass:"primary",attrs:{id:"main-menu"}},[t("ul",[n._l(n.menuItems,(function(e){return t("li",{key:e.id},[t("v-menu",{attrs:{"open-on-hover":"","offset-y":""},scopedSlots:n._u([{key:"activator",fn:function(o){var a=o.on,r=o.attrs;return[t("v-btn",n._g(n._b({staticClass:"menu-btn",attrs:{color:"white",text:"",dark:""}},"v-btn",r,!1),a),[n._v(" "+n._s(e.menu_label)+" ")])]}}],null,!0)},[t("v-list",[t("v-list-item",{staticClass:"menu-btn",attrs:{to:e.link_to_page.url}},[n._v(" "+n._s(e.menu_label+" Home")+" ")]),n._l(e.menu_children,(function(e,o){return t("v-list-item",{key:o,staticClass:"menu-btn",attrs:{link:"",to:""+e.pages_id.url}},[n._v(" "+n._s(e.pages_id.title)+" ")])}))],2)],1)],1)})),t("li",[t("v-text-field",{staticClass:"search-input",attrs:{"solo-inverted":"",dense:"",label:"Search","prepend-inner-icon":"mdi-magnify"}})],1)],2)])])},N=[],Q={name:"MainMenu",data:function(){return{menus:[],cItems:[]}},apollo:{menus:{query:i.id,loadingKey:"loading..."}},methods:{onClick:function(n){n&&console.debug("You clicked ".concat(n))},childItems:function(n){this.cItems=this.menus&&this.menus.filter((function(e){return e.id===n}))[0].menu_children}},computed:{menuItems:function(){return this.menus.filter((function(n){return"main"===n.menu}))}}},V=Q,R=t(1317),j=t(5243),H=t(3346),M=t(4690),K=(0,P.Z)(V,q,N,!1,null,"409f5ab8",null),z=K.exports;E()(K,{VBtn:x.Z,VList:R.Z,VListItem:j.Z,VMenu:H.Z,VTextField:M.Z});var X=30,G=150,D={name:"AppToolbar",data:function(){return{showSystemBar:!0,lastScrollPosition:0,scrollValue:0,drawer:!1,group:null,isMobile:!1,fab:!1,menus:[]}},apollo:{menus:{query:i.id,loadingKey:"loading..."}},components:{HeaderMenu:L,MainMenu:z},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll),"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})},mounted:function(){this.lastScrollPosition=window.pageYOffset,window.addEventListener("scroll",this.onScroll);var n=document.createElement("meta");n.name="viewport",n.content="width=device-width, initial-scale=1",document.head.appendChild(n),this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},watch:{group:function(){this.drawer=!1}},methods:{toggleTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark},onScroll:function(n){if("undefined"!==typeof window){var e=window.pageYOffset||n.target.scrollTop||0;this.fab=e>G,window.pageYOffset<0||Math.abs(window.pageYOffset-this.lastScrollPosition)<X||(this.showSystemBar=window.pageYOffset<this.lastScrollPosition,this.lastScrollPosition=window.pageYOffset)}},toTop:function(){this.$vuetify.goTo(0)},onResize:function(){this.isMobile=window.innerWidth<1264}},computed:{menuItems:function(){return this.menus.filter((function(n){return"main"===n.menu}))},height:function(){switch(this.$vuetify.breakpoint.name){case"lg":return 50;default:return 50}}}},W=D,U=t(4977),Y=t(4549),J=t(9937),$=t(9485),nn=t(1033),en=t(6774),tn=t(1453),on=t(4078),an=t(3201),rn=t(6392),ln=t.n(rn),sn=t(1638),cn=(0,P.Z)(W,C,y,!1,null,"09bb42ba",null),un=cn.exports;E()(cn,{VAppBar:U.Z,VAppBarNavIcon:Y.Z,VBtn:x.Z,VIcon:S.Z,VImg:J.Z,VList:R.Z,VListGroup:$.Z,VListItem:j.Z,VListItemContent:nn.km,VListItemTitle:nn.V9,VNavigationDrawer:en.Z,VSpacer:tn.Z,VSystemBar:on.Z,VToolbarTitle:an.qW}),ln()(cn,{Scroll:sn.Z});var dn=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("v-footer",{staticClass:"footer",attrs:{padless:""}},[o("v-toolbar",{staticClass:"top",attrs:{tag:"div",dense:"",elevation:"0"}},[o("v-toolbar-items",n._l(n.menuItemsTop,(function(e){return o("v-btn",{key:e.id,attrs:{to:e.custom_url?e.custom_url:e.link_to_page.url,target:e.custom_url?"_blank":"_self",plain:"",color:"white"}},[n._v(" "+n._s(e.menu_label)+" ")])})),1)],1),o("v-toolbar",{staticClass:"bottom",attrs:{dense:"",elevation:"0",tag:"div"}},[o("v-toolbar-items",n._l(n.menuItemsBottom,(function(e){return o("v-btn",{key:e.id,attrs:{to:e.custom_url?e.custom_url:e.link_to_page.url,target:e.custom_url?"_blank":"_self",plain:"",color:"white"}},[n._v(" "+n._s(e.menu_label)+" ")])})),1)],1),o("v-toolbar",{staticClass:"abs-bottom",attrs:{tag:"div",height:"120px",elevation:"0"}},[o("v-toolbar-title",[o("div",{staticClass:"footer-logo-wrap"},[o("router-link",{attrs:{to:"/"}},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"ONNR Logo",contain:"",src:t(9271),transition:"scale-transition",width:"70"}})],1),o("router-link",{attrs:{to:"/"}},[o("div",{staticClass:"logo-content"},[o("span",[n._v("U.S. Department of the Interior")]),o("span",[n._v("Office of Natural")]),o("span",[n._v("Resources Revenue (ONRR)")])])])],1)]),o("v-spacer"),o("v-toolbar-items",{staticClass:"social-menu"},n._l(n.socialMenuItems,(function(e){return o("v-btn",{key:e.id,staticClass:"no-btn-hover",attrs:{to:e.custom_url?e.custom_url:e.link_to_page.url,text:"",dark:"",target:e.custom_url?"_blank":"_self"}},[o("span",{staticClass:"v-btn__content"},[e.menu_icon?o("v-icon",{attrs:{color:"white"}},[n._v(n._s(e.menu_icon))]):n._e(),"Contact Us"===e.menu_label?o("span",{staticClass:"mr-2",staticStyle:{color:"white"}},[n._v(n._s(e.menu_label))]):n._e()],1)])})),1)],1)],1)},An=[],fn={name:"FooterNav",data:function(){return{menus:[]}},apollo:{menus:{query:i.id,loadingKey:"loading..."}},computed:{menuItemsTop:function(){var n=this.menus.filter((function(n){return"footer"===n.menu}));return n.filter((function(n,e){return e<5}))},menuItemsBottom:function(){var n=this.menus.filter((function(n){return"footer"===n.menu}));return n.filter((function(n,e){return e>4}))},socialMenuItems:function(){return this.menus.filter((function(n){return"social"===n.menu}))}}},mn=fn,pn=t(2022),bn=t(5666),gn=(0,P.Z)(mn,dn,An,!1,null,"239b8520",null),_n=gn.exports;E()(gn,{VBtn:x.Z,VFooter:pn.Z,VIcon:S.Z,VImg:J.Z,VSpacer:tn.Z,VToolbar:bn.Z,VToolbarItems:an.lj,VToolbarTitle:an.qW});var hn={name:"App",metaInfo:function(){return{title:"Office of Natural Resources Revenue",titleTemplate:"%s | Office of Natual Resources Revenue",meta:[{property:"og:site_name",content:"Office of Natural Resources Revenue"},{property:"og:type",content:"website"},{name:"robots",content:"index,follow"}]}},components:{AppToolbar:un,Footer:_n},data:function(){return{}},created:function(){}},vn=hn,kn=t(4819),Cn=t(213),yn=(0,P.Z)(vn,v,k,!1,null,null,null),In=yn.exports;E()(yn,{VApp:kn.Z,VMain:Cn.Z});var Bn=JSON.parse('{"card_blocks_card_content_blocks_item_union":["content_blocks"],"expansion_panels_expansion_panel_blocks_item_union":["card_blocks","content_blocks","expansion_panel_block_label"],"pages_page_blocks_item_union":["content_blocks","tab_blocks","card_blocks","expansion_panels","layout_column_blocks"],"tab_blocks_tab_blocks_item_union":["card_blocks","content_blocks","tab_blocks","tab_block_label","expansion_panels","layout_column_blocks"]}'),Zn=new f.h({possibleTypes:Bn}),wn=(0,m.L)({uri:"".concat("https://dev-onrr-frontend.app.cloud.gov","/graphql")}),Pn=(0,m.L)({uri:"".concat("https://dev-onrr-frontend.app.cloud.gov","/graphql/system")}),Fn=(0,m.L)({uri:"".concat("https://hasura-dev.app.cloud.gov","/v1/graphql")}),En=new p.f({fetch:g(),link:wn,cache:Zn,resolvers:{}}),xn=new p.f({fetch:g(),link:Pn,cache:Zn,resolvers:{}}),Sn=new p.f({fetch:g(),link:Fn,cache:Zn,resolvers:{}}),Tn=new A.ZP({defaultClient:En,clients:{a:xn,b:Sn}});o.Z.config.productionTip=!1,o.Z.use(A.ZP),o.Z.use(a.Z),new o.Z({vuetify:h,apolloProvider:Tn,router:d,render:function(n){return n(In)}}).$mount("#app")},7838:function(n){n.exports="data:image/png;base64,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"},9271:function(n,e,t){n.exports=t.p+"img/ONRR-mark-200x200.9b6d4ee1.png"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={exports:{}};return n[o].call(r.exports,r,r.exports,t),r.exports}t.m=n,function(){var n=[];t.O=function(e,o,a,r){if(!o){var i=1/0;for(u=0;u<n.length;u++){o=n[u][0],a=n[u][1],r=n[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&r||i>=r)&&Object.keys(t.O).every((function(n){return t.O[n](o[s])}))?o.splice(s--,1):(l=!1,r<i&&(i=r));if(l){n.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=n.length;u>0&&n[u-1][2]>r;u--)n[u]=n[u-1];n[u]=[o,a,r]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,o){return t.f[o](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/"+({21:"Sidemenu",62:"NYMEXCollection",121:"TwoColumnLeft",124:"AnnouncementsCollection",156:"Breadcrumbs",167:"CompaniesCollection",169:"HorizontalRuleBlock",184:"TabsBlock",229:"TableBlock",248:"SelectField",266:"ExpansionPanelBlock",268:"Home",315:"Contacts",345:"CodeBlock",364:"CollectionFilterToolbar",409:"ContentBlock",429:"ListBlock",439:"Page",441:"ImageBlock",486:"MultipleSelectField",495:"EventsCollection",496:"LayoutBlock",505:"CollectionBlock",520:"Rulemakings",567:"IndexZones",669:"EditorBlock",674:"CardBlock",675:"ContactsSearch",707:"TextField",738:"TextBlock",758:"IndianGasMajorPortion",793:"ReporterLettersCollection",795:"HeroImage",824:"CustomBlock",883:"IBMPCollection",892:"PageNotFound",943:"ContactsSearchResults"}[n]||n)+"-legacy."+{21:"a82b15de",62:"430acda3",121:"b1b1d0b9",124:"9b06c02e",156:"78b3ca2f",167:"fad3f8fb",169:"13759191",184:"338575c0",229:"2f38323f",248:"2cb5fc06",266:"65ce685c",268:"64dd3856",315:"a80d7c33",343:"d516ddc4",345:"4532efb1",354:"4547d099",364:"c21ad98b",409:"b2de3008",429:"50d21b8a",439:"9e6760a9",441:"6a2fdab9",472:"ea069fd9",486:"039161c4",495:"2f11900c",496:"61e052d1",502:"a7211d64",505:"88760fe7",520:"877d90cf",567:"ca5712d7",669:"6f5eab61",674:"2f5c35ff",675:"946c7900",707:"979d96fd",738:"4a0bff8d",758:"578af0b8",793:"1bb10284",795:"aa5e444d",824:"60f7c510",826:"5bf1aeeb",883:"cb834d0f",892:"92e09994",921:"6545e8ce",943:"8fef46db"}[n]+".js"}}(),function(){t.miniCssF=function(n){return"css/"+({21:"Sidemenu",62:"NYMEXCollection",121:"TwoColumnLeft",124:"AnnouncementsCollection",156:"Breadcrumbs",184:"TabsBlock",229:"TableBlock",248:"SelectField",266:"ExpansionPanelBlock",268:"Home",315:"Contacts",409:"ContentBlock",439:"Page",441:"ImageBlock",496:"LayoutBlock",520:"Rulemakings",567:"IndexZones",669:"EditorBlock",674:"CardBlock",675:"ContactsSearch",738:"TextBlock",758:"IndianGasMajorPortion",793:"ReporterLettersCollection",795:"HeroImage",883:"IBMPCollection",892:"PageNotFound"}[n]||n)+"."+{21:"6d0cf9b0",62:"983a2551",121:"1374d866",124:"9abd241d",156:"79a7979b",184:"62d5dac1",229:"2cf9c9d3",248:"3628f417",266:"4b9955b6",268:"aeaedfec",315:"6f45e55f",354:"12f2cce6",409:"a61247d1",439:"2d412673",441:"7e912d80",472:"34f48156",496:"6ee01548",520:"eb409a5d",567:"eb409a5d",669:"703aaa53",674:"01112680",675:"c1cbab27",738:"35bbf2b3",758:"eb409a5d",793:"d369e83c",795:"f35257ad",826:"587f79bc",883:"eb409a5d",892:"db148cb4"}[n]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="onrr-frontend-app-vue:";t.l=function(o,a,r,i){if(n[o])n[o].push(a);else{var l,s;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+r){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,t.nc&&l.setAttribute("nonce",t.nc),l.setAttribute("data-webpack",e+r),l.src=o),n[o]=[a];var A=function(e,t){l.onerror=l.onload=null,clearTimeout(f);var a=n[o];if(delete n[o],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(n){return n(t)})),e)return e(t)},f=setTimeout(A.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=A.bind(null,l.onerror),l.onload=A.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var n=function(n,e,t,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var r=function(r){if(a.onerror=a.onload=null,"load"===r.type)t();else{var i=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.href||e,s=new Error("Loading CSS chunk "+n+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,a.parentNode.removeChild(a),o(s)}};return a.onerror=a.onload=r,a.href=e,document.head.appendChild(a),a},e=function(n,e){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var a=t[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===n||r===e))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===n||r===e)return a}},o=function(o){return new Promise((function(a,r){var i=t.miniCssF(o),l=t.p+i;if(e(i,l))return a();n(o,l,a,r)}))},a={143:0};t.f.miniCss=function(n,e){var t={21:1,62:1,121:1,124:1,156:1,184:1,229:1,248:1,266:1,268:1,315:1,354:1,409:1,439:1,441:1,472:1,496:1,520:1,567:1,669:1,674:1,675:1,738:1,758:1,793:1,795:1,826:1,883:1,892:1};a[n]?e.push(a[n]):0!==a[n]&&t[n]&&e.push(a[n]=o(n).then((function(){a[n]=0}),(function(e){throw delete a[n],e})))}}(),function(){var n={143:0};t.f.j=function(e,o){var a=t.o(n,e)?n[e]:void 0;if(0!==a)if(a)o.push(a[2]);else if(472!=e){var r=new Promise((function(t,o){a=n[e]=[t,o]}));o.push(a[2]=r);var i=t.p+t.u(e),l=new Error,s=function(o){if(t.o(n,e)&&(a=n[e],0!==a&&(n[e]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,a[1](l)}};t.l(i,s,"chunk-"+e,e)}else n[e]=0},t.O.j=function(e){return 0===n[e]};var e=function(e,o){var a,r,i=o[0],l=o[1],s=o[2],c=0;if(i.some((function(e){return 0!==n[e]}))){for(a in l)t.o(l,a)&&(t.m[a]=l[a]);if(s)var u=s(t)}for(e&&e(o);c<i.length;c++)r=i[c],t.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return t.O(u)},o=self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(1723)}));o=t.O(o)})();
//# sourceMappingURL=app-legacy.ab863763.js.map