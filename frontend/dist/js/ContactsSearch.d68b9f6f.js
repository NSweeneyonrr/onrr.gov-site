"use strict";(self["webpackChunkonrr_frontend_app_vue"]=self["webpackChunkonrr_frontend_app_vue"]||[]).push([[675],{6428:function(){},3121:function(t,e,s){s(6699),s(6428);var n=s(144),i=s(5218),a=s(5598);const l=["sm","md","lg","xl"],r=(()=>l.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),c=(()=>l.reduce(((t,e)=>(t["offset"+(0,a.jC)(e)]={type:[String,Number],default:null},t)),{}))(),o=(()=>l.reduce(((t,e)=>(t["order"+(0,a.jC)(e)]={type:[String,Number],default:null},t)),{}))(),h={col:Object.keys(r),offset:Object.keys(c),order:Object.keys(o)};function u(t,e,s){let n=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");n+=`-${s}`}return"col"!==t||""!==s&&!0!==s?(n+=`-${s}`,n.toLowerCase()):n.toLowerCase()}}const d=new Map;e["Z"]=n.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...r,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...o,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:n,parent:a}){let l="";for(const i in e)l+=String(e[i]);let r=d.get(l);if(!r){let t;for(t in r=[],h)h[t].forEach((s=>{const n=e[s],i=u(t,s,n);i&&r.push(i)}));const s=r.some((t=>t.startsWith("col-")));r.push({col:!s||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),d.set(l,r)}return t(e.tag,(0,i.ZP)(s,{class:r}),n)}})},6643:function(t,e,s){s.d(e,{Z:function(){return l}});s(9941),s(6428);var n=s(144);function i(t){return n.Z.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:n,children:i}){n.staticClass=`${t} ${n.staticClass||""}`.trim();const{attrs:a}=n;if(a){n.attrs={};const t=Object.keys(a).filter((t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(n.staticClass+=` ${t.join(" ")}`)}return s.id&&(n.domProps=n.domProps||{},n.domProps.id=s.id),e(s.tag,n,i)}})}var a=s(5218),l=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:n}){let i;const{attrs:l}=s;return l&&(s.attrs={},i=Object.keys(l).filter((t=>{if("slot"===t)return!1;const e=l[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,(0,a.ZP)(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(i||[])}),n)}})},4722:function(t,e,s){s(6699),s(6428);var n=s(144),i=s(5218),a=s(5598);const l=["sm","md","lg","xl"],r=["start","end","center"];function c(t,e){return l.reduce(((s,n)=>(s[t+(0,a.jC)(n)]=e(),s)),{})}const o=t=>[...r,"baseline","stretch"].includes(t),h=c("align",(()=>({type:String,default:null,validator:o}))),u=t=>[...r,"space-between","space-around"].includes(t),d=c("justify",(()=>({type:String,default:null,validator:u}))),p=t=>[...r,"space-between","space-around","stretch"].includes(t),m=c("alignContent",(()=>({type:String,default:null,validator:p}))),f={align:Object.keys(h),justify:Object.keys(d),alignContent:Object.keys(m)},g={align:"align",justify:"justify",alignContent:"align-content"};function S(t,e,s){let n=g[t];if(null!=s){if(e){const s=e.replace(t,"");n+=`-${s}`}return n+=`-${s}`,n.toLowerCase()}}const I=new Map;e["Z"]=n.Z.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:o},...h,justify:{type:String,default:null,validator:u},...d,alignContent:{type:String,default:null,validator:p},...m},render(t,{props:e,data:s,children:n}){let a="";for(const i in e)a+=String(e[i]);let l=I.get(a);if(!l){let t;for(t in l=[],f)f[t].forEach((s=>{const n=e[s],i=S(t,s,n);i&&l.push(i)}));l.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),I.set(a,l)}return t(e.tag,(0,i.ZP)(s,{staticClass:"row",class:l}),n)}})},1378:function(t,e,s){s.r(e),s.d(e,{default:function(){return C}});var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"pa-0"},[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{staticClass:"mr-1",attrs:{cols:"12",sm:"10"}},[s("v-autocomplete",{attrs:{items:t.contactsSearchField.items,label:t.contactsSearchField.label,color:t.contactsSearchField.color,"append-icon":t.contactsSearchField.icon,"search-input":t.contactsSearchField.search,loading:t.loading,outlined:"",clearable:"","hide-no-data":""},on:{"update:searchInput":function(e){return t.$set(t.contactsSearchField,"search",e)},"update:search-input":function(e){return t.$set(t.contactsSearchField,"search",e)},change:function(e){return t.submitSearch(e,t.contactsSearchField.select||t.contactsSearchField.search)}},scopedSlots:t._u([{key:"selection",fn:function(e){var n=e.item;return[s("v-list-item-content",[s("v-list-item-title",{domProps:{innerHTML:t._s(n)}})],1)]}},{key:"item",fn:function(e){var n=e.item;return[s("v-list-item-content",[s("v-list-item-title",{domProps:{innerHTML:t._s(n)}})],1)]}}]),model:{value:t.contactsSearchField.select,callback:function(e){t.$set(t.contactsSearchField,"select",e)},expression:"contactsSearchField.select"}})],1),s("v-col",{attrs:{cols:"12",sm:"1"}},[s("v-btn",{staticClass:"contacts-search-button",attrs:{large:"",color:"secondary"},on:{click:function(e){return t.submitSearch(e,t.contactsSearchField.select||t.contactsSearchField.search)}}},[s("v-icon",[t._v(" mdi-magnify ")])],1)],1)],1)],1)},i=[],a={name:"ContactsSearch",data:()=>({contactsSearchField:{items:[],select:null,search:null,label:"Search by operator or payor company, contact name, or category",ref:"contactsSearchInput",color:"secondary",icon:"mdi-chevron-down"},loading:!1}),props:{blockItems:[Object,Array]},computed:{searchItems(){let t=[];return this.blockItems&&this.blockItems.contacts.map((e=>{e?.header&&t.push(e.header),e?.company_name&&t.push(e.company_name),e?.operator_number&&t.push(e.operator_number),e?.agency&&t.push(e.agency),e?.page&&t.push(e.page),e?.primary_contact&&t.push(e.primary_contact),e?.contact_2&&t.push(e.contact_2),e?.contact_3&&t.push(e.contact_3),e?.contact_4&&t.push(e.contact_4),e?.contact_5&&t.push(e.contact_5),e?.contact_6&&t.push(e.contact_6)})),t}},watch:{"contactsSearchField.search":function(t){t&&t!==this.contactsSearchField.select&&this.querySelections(t)},searchItems:{deep:!0,handler:function(t){this.contactsSearchField.search=t[0],this.contactsSearchField.items=t}}},methods:{querySelections(t){this.loading=!0,setTimeout((()=>{this.contactsSearchField.items=this.searchItems.filter((e=>(e||"").toLowerCase().indexOf((t||"").toLowerCase())>-1)),this.loading=!1}),500)},submitSearch(t,e){console.log("submit search yo -------\x3e ",t,e);const s={path:"/about/contact/search-results",...this.$route.query,query:{q:encodeURIComponent(e)||void 0}};this.$router.push(s).catch((()=>{}))}}},l=a,r=s(1001),c=s(3453),o=s.n(c),h=(s(6699),s(1921)),u=s(4690),d=s(5218),p=s(5598);const m={...h.l,offsetY:!0,offsetOverflow:!0,transition:!1};var f=h.Z.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(t,e,s)=>s.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:h.Z.options.props.menuProps.type,default:()=>m},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...h.Z.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map((t=>this.getValue(t)))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some((t=>!this.hasItem(t))):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((t=>{const e=(0,p.qF)(t,this.itemText),s=null!=e?String(e):"";return this.filter(t,String(this.internalSearch),s)}))},internalSearch:{get(){return this.lazySearch},set(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const t=h.Z.options.computed.$_menuProps.call(this);return t.contentClass=`v-autocomplete__content ${t.contentClass||""}`.trim(),{...m,...t}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find((t=>this.valueComparator(this.getValue(t),this.getValue(this.internalValue))))},listData(){const t=h.Z.options.computed.listData.call(this);return t.props={...t.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(t){!t&&this.hasSlot&&(this.lazySearch=null)},items(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(t,e){if(t!==e){if(!this.autoSelectFirst){const s=e[this.$refs.menu.listIndex];s?this.setMenuIndex(t.findIndex((t=>t===s))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((()=>{this.internalSearch&&(1===t.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&t.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))}))}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(t){this.searchIsDirty||(this.multiple&&t===p.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===p.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==p.Do.backspace&&t!==p.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem(){const t=this.selectedIndex,e=this.selectedItems[t];if(!this.isInteractive||this.getDisabled(e))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const n=this.selectedItems.length,i=t!==n-1?t:t-1,a=this.selectedItems[i];a?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i},clearableCallback(){this.internalSearch=null,h.Z.options.methods.clearableCallback.call(this)},genInput(){const t=u.Z.options.methods.genInput.call(this);return t.data=(0,d.ZP)(t.data,{attrs:{"aria-activedescendant":(0,p.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,p.vO)(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot(){const t=h.Z.options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections(){return this.hasSlot||this.multiple?h.Z.options.methods.genSelections.call(this):[]},onClick(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput(t){if(this.selectedIndex>-1||!t.target)return;const e=t.target,s=e.value;e.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=e.validity&&e.validity.badInput},onKeyDown(t){const e=t.keyCode;!t.ctrlKey&&[p.Do.home,p.Do.end].includes(e)||h.Z.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown(t){},onTabDown(t){h.Z.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown(t){t.preventDefault(),this.activateMenu()},selectItem(t){h.Z.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems(){h.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick((()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))}))},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy(t){var e,s;if(-1===this.selectedIndex)return;const n=this.selectedItems[this.selectedIndex],i=this.getText(n);null==(e=t.clipboardData)||e.setData("text/plain",i),null==(s=t.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}}),g=s(2774),S=s(3121),I=s(6643),y=s(9639),v=s(1033),b=s(4722),x=(0,r.Z)(l,n,i,!1,null,"d5117d56",null),C=x.exports;o()(x,{VAutocomplete:f,VBtn:g.Z,VCol:S.Z,VContainer:I.Z,VIcon:y.Z,VListItemContent:v.km,VListItemTitle:v.V9,VRow:b.Z})}}]);
//# sourceMappingURL=ContactsSearch.d68b9f6f.js.map