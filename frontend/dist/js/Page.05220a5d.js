(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Page"],{"0609":function(e,n,t){},"1b62":function(e,n,t){"use strict";t.d(n,"d",(function(){return o["a"]})),t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return u}));var o=t("c68d"),r=(t("d3b7"),t("3ca3"),t("ddb0"),function(){return t.e("EditorBlock").then(t.bind(null,"1fdb"))}),a={props:{block:Object},components:{EditorBlock:r}},i=(t("99af"),t("9911"),t("fb6a"),{data:function(){return{BASE_URL:"https://dev-onrr-cms.app.cloud.gov"}},props:{collection:[Array,Object],collectionName:String,collectionLayout:String},methods:{fileLink:function(e,n){var t;return n.file?t="".concat(e).concat(n.file.filename_download):n.link&&(t=n.link),t},accessibleFileLink:function(e,n){var t;return n.accessible_file&&(t="".concat(e).concat(n.accessible_file.filename_download)),t}},computed:{slicedCollection:function(){var e=this.collection&&this.collection.slice(0,5);return e}}}),c=t("9944"),u={methods:{getFullDate:c["d"],getYear:c["f"],getMonth:c["e"],getDay:c["c"],formatNiceDate:function(e){return"".concat(Object(c["e"])(e,"numeric"),"/").concat(Object(c["c"])(e,"numeric"),"/").concat(Object(c["f"])(e))}}}},2048:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e.$apollo.loading?t("div",{staticClass:"text-center"},[t("v-progress-circular",{attrs:{value:20}})],1):t("div",{staticClass:"page-wrap"},[t("Breadcrumbs"),e.page.title?t("div",{staticClass:"text-h1 page-title black--text text--lighten-2"},[e._v(e._s(e.page.title))]):e._e(),t("LayoutBlock",{attrs:{layoutBlocks:e.page.page_blocks}})],1)])},r=[],a=(t("d3b7"),t("3ca3"),t("ddb0"),t("7db0"),t("0306")),i=t("1b62"),c=function(){return t.e("Breadcrumbs").then(t.bind(null,"cf1b"))},u=function(){return Promise.all([t.e("Home~IBMPCollection~IndexZones~IndianGasMajorPortion~LayoutBlock~ReporterLettersCollection~Rulemakin~0c183eab"),t.e("LayoutBlock")]).then(t.bind(null,"0b83"))},l={mixins:[i["d"],i["b"]],name:"Page",metaInfo:function(){return{title:this.metaTitle||this.pageTitle,meta:[{name:"description",content:this.metaDescription},{property:"og:title",content:this.metaTitle},{property:"og:site_name",content:"Office of Natural Resources Revenue"},{property:"og:type",content:"website"},{name:"robots",content:"index,follow"}]}},components:{Breadcrumbs:c,LayoutBlock:u},data:function(){return{pages:[],pages_by_id:[],code:"",colCount:1}},apollo:{pages:{query:a["j"],loadingKey:"loading..."},pages_by_id:{query:a["i"],loadingKey:"loading...",variables:function(){return{ID:this.findPageByUrl.id}}}},props:{slug:String},computed:{findPageByUrl:function(){var e=this;return this.pages.find((function(n){return n.url===e.$route.path}))},page:function(){return this.pages_by_id},metaTitle:function(){return this.pages_by_id.meta_title},metaDescription:function(){return this.pages_by_id.meta_description},pageTitle:function(){return this.pages_by_id.title}},created:function(){}},s=l,d=(t("a860"),t("2877")),f=t("6544"),p=t.n(f),b=t("490a"),h=Object(d["a"])(s,o,r,!1,null,"f2e4baac",null);n["default"]=h.exports;p()(h,{VProgressCircular:b["a"]})},3666:function(e,n,t){(function(n,t,o){e.exports=o(),e.exports["default"]=o()})(0,0,(function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),n=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och"}}');function t(t,o){if("string"!==typeof t)throw new Error("slugify: string argument expected");o="string"===typeof o?{replacement:o}:o||{};var r=n[o.locale]||{},a=void 0===o.replacement?"-":o.replacement,i=void 0===o.trim||o.trim,c=t.normalize().split("").reduce((function(n,t){return n+(r[t]||e[t]||(t===a?" ":t)).replace(o.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"");return o.strict&&(c=c.replace(/[^A-Za-z0-9\s]/g,"")),i&&(c=c.trim()),c=c.replace(/\s+/g,a),o.lower&&(c=c.toLowerCase()),c}return t.extend=function(n){Object.assign(e,n)},t}))},9944:function(e,n,t){"use strict";t.d(n,"a",(function(){return a})),t.d(n,"g",(function(){return i})),t.d(n,"c",(function(){return c})),t.d(n,"e",(function(){return u})),t.d(n,"d",(function(){return l})),t.d(n,"f",(function(){return s})),t.d(n,"b",(function(){return d}));t("d3b7"),t("ac1f"),t("1276"),t("d81d"),t("159b"),t("fb6a"),t("5319"),t("a15b"),t("b64b");var o=t("3666"),r=t.n(o),a=function(e){var n=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e);return n},i=function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},c=function(e,n){10==e.length&&(e+="T00:00:00");var t=new Date(e);return t.toLocaleString("en-us",{day:n})},u=function(e,n){10==e.length&&(e+="T00:00:00");var t=new Date(e);return t.toLocaleString("en-us",{month:n,timeZone:"America/New_York"})},l=function(e){10==e.length&&(e+="T00:00:00");var n=new Date(e),t={weekday:"long",year:"numeric",month:"long",day:"numeric"};return n.toLocaleString("en-US",t)},s=function(e){10==e.length&&(e+="T00:00:00");var n=new Date(e);return n.toLocaleString("en-us",{year:"numeric"})},d=function(e){return r()(e,{lower:!0,remove:/[$*_+~.()'"!\:@,?]/g}).replace("-and-","-")}},a860:function(e,n,t){"use strict";t("0609")},c68d:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));t("d3b7"),t("3ca3"),t("ddb0");var o=function(){return t.e("TextBlock").then(t.bind(null,"30d2"))},r=function(){return t.e("TabsBlock").then(t.bind(null,"712c"))},a=function(){return t.e("ContentBlock").then(t.bind(null,"7d38"))},i=function(){return t.e("ListBlock").then(t.bind(null,"b134"))},c=function(){return t.e("TableBlock").then(t.bind(null,"6229"))},u=function(){return t.e("CodeBlock").then(t.bind(null,"11d9"))},l=function(){return t.e("ImageBlock").then(t.bind(null,"c7d7"))},s=function(){return t.e("CardBlock").then(t.bind(null,"f8bd"))},d=function(){return t.e("CollectionBlock").then(t.bind(null,"1ae4"))},f=function(){return t.e("HorizontalRuleBlock").then(t.bind(null,"77ae"))},p=function(){return t.e("ExpansionPanelBlock").then(t.bind(null,"afb5"))},b={data:function(){return{content:[]}},props:{blockContent:[Array,Object]},components:{TextBlock:o,TabsBlock:r,ListBlock:i,TableBlock:c,CodeBlock:u,ImageBlock:l,ContentBlock:a,CardBlock:s,CollectionBlock:d,HorizontalRuleBlock:f,ExpansionPanelBlock:p},created:function(){},methods:{pageBlock:function(e){var n;switch(e){case"tab_blocks":n=r;break;case"content_blocks":n=a;break;case"card_blocks":n=s;break;case"header":case"paragraph":n=o;break;case"list":n=i;break;case"table":n=c;break;case"code":n=u;break;case"image":n=l;break;case"collection":n=d;break;case"horizontalrule":n=f;break;case"expansion_panels":n=p;break;default:console.warn("pageBlock not found!",e),n=a;break}return n}},computed:{}}}}]);
//# sourceMappingURL=Page.05220a5d.js.map