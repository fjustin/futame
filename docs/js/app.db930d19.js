(function(t){function e(e){for(var a,s,o=e[0],c=e[1],l=e[2],f=0,d=[];f<o.length;f++)s=o[f],r[s]&&d.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0110":function(t,e,n){},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"0f67":function(t,e,n){"use strict";var a=n("0110"),r=n.n(a);r.a},"16c3":function(t,e,n){},"19ed":function(t,e,n){},2010:function(t,e,n){},"253b":function(t,e,n){},"2bce":function(t,e,n){"use strict";var a=n("19ed"),r=n.n(a);r.a},"2cf3":function(t,e,n){t.exports=n.p+"img/research.b52913c1.png"},"337d":function(t,e,n){"use strict";var a=n("d044"),r=n.n(a);r.a},"381e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HelloWorld")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("profile-img"),n("introduce"),n("contact"),n("name"),n("birthday"),n("history"),n("school"),n("skill"),n("works"),n("academy"),n("blog"),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"credit",staticStyle:{color:"gray","font-size":"10px","font-weight":"bold",position:"absolute",bottom:"0",right:"0","margin-right":"10px"}},[t._v("\n      © 2018 Daiki Futami(fjustin).\n    ")])])}],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"profile-img"}},[n("img",{attrs:{src:t.image_src,alt:"profile image"}})])},l=[],u={data:function(){return{image_src:n("ca4a")}}},f=u,d=(n("2bce"),n("2877")),m=Object(d["a"])(f,c,l,!1,null,"4f1a4d86",null),p=m.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"birthday"}},[n("h2",[t._v("Birthday")]),n("p",[t._v(t._s(t.birthday))])])},v=[],_={data:function(){return{birthday:"1997/01/15"}}},b=_,g=(n("bddb"),Object(d["a"])(b,h,v,!1,null,"63eb9b0b",null)),y=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"name"}},[n("h2",[t._v("Name")]),n("p",[t._v(t._s(t.myname))])])},k=[],x={data:function(){return{myname:"二見 大揮 (Futami Daiki)"}}},j=x,C=(n("c032"),Object(d["a"])(j,w,k,!1,null,"084a0de2",null)),O=C.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"school"}},[n("h2",[t._v("School")]),t._l(t.schools,function(e){return n("p",{key:e},[t._v(t._s(e.name))])})],2)},S=[],$={data:function(){return{schools:[{name:"Edith Cowan University Environmental faculty"},{name:"東京都市大学環境学部環境創生学科"},{name:"横浜創英高等学校"},{name:"千葉市立幕張本郷中学校"},{name:"横浜市立葛野小学校"}]}}},T=$,N=(n("6be3"),Object(d["a"])(T,E,S,!1,null,"6dd750d2",null)),P=N.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"history"}},[n("h2",[t._v("Work History")]),t._l(t.jobs,function(e){return n("p",{key:e,staticClass:"step-title"},[t._v(t._s(e.name))])})],2)},R=[],A={data:function(){return{jobs:[{name:"Retty.inc Data Analyst"},{name:"ex CyberAgent.inc Marketing"},{name:"ex SPUR.inc Engineer"},{name:"ex GameTrade.inc SEO/GrowthHack"}]}}},B=A,D=(n("337d"),Object(d["a"])(B,M,R,!1,null,"0111d6e6",null)),V=D.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"skill"},[n("h2",[t._v("Skills")]),t._l(t.skills,function(e){return n("li",{key:e},[n("button",{staticClass:"button-primary-outlined"},[t._v(t._s(e.name))])])})],2)},F=[],W={data:function(){return{skills:[{name:"データ分析"},{name:"SEO"},{name:"コンテンツマーケティング"},{name:"SQL"},{name:"BigQuery"},{name:"jupyter"},{name:"統計学"},{name:"グロースハック"},{name:"Vue.js"},{name:"Ruby"},{name:"Ruby on Rails"},{name:"Python"}]}}},q=W,H=(n("6019"),Object(d["a"])(q,z,F,!1,null,"85a1bb9a",null)),Q=H.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"blogs"}},[n("h2",[t._v("Blog")]),t._l(t.links,function(e){return n("p",{key:e},[n("a",{attrs:{href:e.url}},[t._v(t._s(e.name))])])})],2)},I=[],J={data:function(){return{links:[{name:"はてなブログ",url:"http://nimi0370376.hatenablog.com/"},{name:"note",url:"https://note.mu/fjustin"},{name:"Qiita",url:"https://qiita.com/daiki-futami"}]}}},G=J,L=(n("0f67"),Object(d["a"])(G,U,I,!1,null,"277f32ee",null)),X=L.exports,Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"academy"}},[n("h2",[t._v("Research at Univ")]),n("div",{staticClass:"stepper"},[n("div",{staticClass:"step"},[n("p",{staticClass:"step-number"},[t._v("1")]),n("p",{staticClass:"step-title"},[t._v("事例研究")]),n("p",[t._v("ドローンによる低コスト農業の提案とそのコスト計算")]),n("a",{attrs:{href:"https://docs.google.com/document/d/1Nl_DkXMyToXKNQ25NGhuBs7zlY1aTVLkz1uenrEWCV0/edit?usp=sharing"}},[t._v("論文リンク")])]),n("div",{staticClass:"step"},[n("p",{staticClass:"step-number"},[t._v("2")]),n("p",{staticClass:"step-title"},[t._v("卒業研究")]),n("p",[t._v("機械学習に夜植物の病気の自動判別システムの開発")]),n("a",{attrs:{href:"https://docs.google.com/document/d/1Z0WumC9_zPDVZVioFss_hq08rdkxNuyUQD54Upry0gI/edit?usp=sharing"}},[t._v("論文リンク")])])])])}],Y={data:function(){return{}}},tt=Y,et=(n("cc4a"),Object(d["a"])(tt,Z,K,!1,null,"73460c20",null)),nt=et.exports,at=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"contact"}},[n("h2",[t._v("SNS Links")]),n("a",{staticStyle:{color:"#55acee"},attrs:{href:"https://twitter.com/Justin0370"}},[n("i",{staticClass:"fab fa-twitter fa-2x"})]),n("a",{staticStyle:{color:"#3B5998"},attrs:{href:"https://www.facebook.com/daiki.futami"}},[n("i",{staticClass:"fab fa-facebook-square fa-2x"})]),n("a",{staticStyle:{color:"#333"},attrs:{href:"https://github.com/fjustin"}},[n("i",{staticClass:"fab fa-github-alt fa-2x"})])])}],it={data:function(){return{}}},st=it,ot=(n("67cb"),Object(d["a"])(st,at,rt,!1,null,"4818e13a",null)),ct=ot.exports,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"works"}},[n("a",{on:{click:t.toggle}},[n("h2",[t._v("Tap to enjoy works▼")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showText,expression:"showText"}],staticClass:"momiji"},[n("a",{attrs:{href:t.momia}},[n("img",{attrs:{src:t.momiji}})]),n("div",{staticClass:"link"},[t._v("画像タップでサイトへ")]),n("p",[t._v(t._s(t.text))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showText,expression:"showText"}],staticClass:"kek"},[n("img",{attrs:{src:t.kek}}),n("p",[t._v(t._s(t.des))])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showText,expression:"showText"}],staticClass:"drone-site"},[n("a",{attrs:{href:t.sitedrone}},[n("img",{staticStyle:{width:"auto",height:"400px"},attrs:{src:t.shinz}})]),n("div",{staticClass:"link"},[t._v("画像タップでサイトへ")]),n("p",[t._v(t._s(t.drone))])])])},ut=[],ft={data:function(){return{text:"MOMIJIは、和菓子専門のメディアです。Ruby on Rails、Bootstrapを利用しています。",des:"Python3とOpenCV3を用いたドローン画像の解析を行いました。",momiji:n("d58b"),kek:n("2cf3"),momia:"https://tranquil-hollows-79901.herokuapp.com/",shinz:n("73dd"),drone:"大学の研究室用にドローンの飛ばし方ガイドサイトを作成しました。vue.jsを使ったモダンなサイトになっています。",sitedrone:"https://fjustin.github.io/drone-repo/#/",showText:!1}},methods:{toggle:function(){this.showText=!this.showText}}},dt=ft,mt=(n("9518"),Object(d["a"])(dt,lt,ut,!1,null,"9c37723c",null)),pt=mt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"introduce"}},[n("div",{staticClass:"panel"},[t._m(0),n("div",{staticClass:"panel-body"},[n("p",[t._v(t._s(t.message)),n("br"),t._v(t._s(t.message2)),n("br"),n("br"),t._v(t._s(t.message3))])])])])},vt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panel-head"},[n("h3",{staticClass:"panel-title",staticStyle:{"margin-left":"4.8rem"}},[t._v("About Me")])])}],_t={data:function(){return{message:"はじめまして:) 二見と申します。麻布十番のグルメサービス会社でアプリのデータ分析をしています。",message2:"記述統計を勉強中で、Python,Ruby,Vueも趣味で書いてます。",message3:"趣味はクッキー作りです:D"}},methods:{}},bt=_t,gt=(n("f2db"),Object(d["a"])(bt,ht,vt,!1,null,"4bef11a2",null)),yt=gt.exports,wt={name:"HelloWorld",components:{"profile-img":p,birthday:y,name:O,school:P,history:V,skill:Q,blog:X,academy:nt,contact:ct,works:pt,introduce:yt},props:["image_src"],data:function(){return{}}},kt=wt,xt=(n("6225"),Object(d["a"])(kt,s,o,!1,null,"74553072",null)),jt=xt.exports,Ct={name:"app",components:{HelloWorld:jt}},Ot=Ct,Et=(n("034f"),Object(d["a"])(Ot,r,i,!1,null,null,null)),St=Et.exports,$t=n("ecee"),Tt=n("c074"),Nt=n("7a55"),Pt=n("9483");Object(Pt["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),$t["library"].add(Tt["a"]),a["a"].component("font-awesome-icon",Nt["FontAwesomeIcon"]),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(St)}}).$mount("#app")},"5d8d":function(t,e,n){},6019:function(t,e,n){"use strict";var a=n("5d8d"),r=n.n(a);r.a},6225:function(t,e,n){"use strict";var a=n("2010"),r=n.n(a);r.a},"64a9":function(t,e,n){},"67cb":function(t,e,n){"use strict";var a=n("9262"),r=n.n(a);r.a},"6be3":function(t,e,n){"use strict";var a=n("381e"),r=n.n(a);r.a},"73dd":function(t,e,n){t.exports=n.p+"img/site.b25d6ad8.png"},9262:function(t,e,n){},9518:function(t,e,n){"use strict";var a=n("253b"),r=n.n(a);r.a},"97c1":function(t,e,n){},bddb:function(t,e,n){"use strict";var a=n("c6dd"),r=n.n(a);r.a},c032:function(t,e,n){"use strict";var a=n("97c1"),r=n.n(a);r.a},c22a:function(t,e,n){},c6dd:function(t,e,n){},ca4a:function(t,e,n){t.exports=n.p+"img/pro.22a400c6.jpg"},cc4a:function(t,e,n){"use strict";var a=n("16c3"),r=n.n(a);r.a},d044:function(t,e,n){},d58b:function(t,e,n){t.exports=n.p+"img/momiji.37571da3.png"},f2db:function(t,e,n){"use strict";var a=n("c22a"),r=n.n(a);r.a}});
//# sourceMappingURL=app.db930d19.js.map