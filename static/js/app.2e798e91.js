(function(e){function t(t){for(var n,a,s=t[0],c=t[1],u=t[2],f=0,p=[];f<s.length;f++)a=s[f],i[a]&&p.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},i={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://wenbatman33.github.io/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"21bb":function(e,t,r){"use strict";var n=r("bcc9"),i=r.n(n);i.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("8bbf"),i=r.n(n),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Home")],1)},a=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("div",{staticClass:"hover"},[r("p",[e._v(e._s(e.prizeArray))])]),r("div",{staticClass:"container-fluid h-100"},[r("div",{staticClass:"main"},[e.show?r("el-carousel",{attrs:{"indicator-position":"none",hover:"false",trigger:"none",loop:e.loop,interval:e.interval,arrow:"arrow"}},e._l(e.tempArray,function(t,n){return t.length>0?r("el-carousel-item",{key:n},[r("div",{staticClass:"content"},[r("div",{staticClass:"PrizeTitle"},[r("img",{attrs:{src:"/static/img/t_"+n+".png"}})]),r("div",{staticClass:"PrizeList d-flex justify-content-center align-content-center flex-column"},e._l(t,function(t,n){return r("div",{key:n,staticClass:"PrizeMember my-3"},[r("span",[e._v(e._s(t.member.gid)+" "+e._s(t.member.name))])])}),0)]),r("div",{staticClass:"bg prizeBG",class:"p"+n})]):e._e()}),1):e._e()],1)])])},c=[],u=(r("ac6a"),{data:function(){return{firestorePrizeTitle:["加碼獎","1獎","2獎","3獎","4獎","5獎","6獎","7獎","8獎","9獎","10獎","新生買回"],firestorePrize:{},tempArray:[],loop:!0,interval:5e3,arrow:"never",show:!0}},firestore:function(){return{firestorePrize:P.collection("prize").orderBy("time","desc")}},watch:{firestorePrize:function(e){var t=this;console.log(e),this.tempArray=[],setTimeout(function(){t.tempArray=t.getData()},300)}},methods:{getData:function(){var e=this;console.log("getData");var t,r=this,n=[];return this.firestorePrizeTitle.forEach(function(r){t=e.firestorePrize.filter(function(e){return-1!=e.prizeTitle.indexOf(r)}),n.push(t)}),r.show=!0,r.tempArray=n,n}},mounted:function(){this.$nextTick(function(){console.log("nextTick")})}}),l=u,f=(r("21bb"),r("2877")),p=Object(f["a"])(l,s,c,!1,null,null,null);p.options.__file="Home.vue";var d=p.exports,v={name:"app",components:{Home:d}},m=v,b=(r("5c0b"),Object(f["a"])(m,o,a,!1,null,null,null));b.options.__file="App.vue";var h=b.exports,y=r("5f72"),g=r.n(y),_=r("0ff2"),w=r("59ca"),x=r.n(w);r("ea7b"),r("e71f");r.d(t,"db",function(){return P}),i.a.use(_["a"]),i.a.use(g.a),x.a.initializeApp({apiKey:"AIzaSyClxyWJX8P7ex5H53G0ymwlN0-6ycORxdw",authDomain:"party-dd1e4.firebaseapp.com",databaseURL:"https://party-dd1e4.firebaseio.com",projectId:"party-dd1e4",storageBucket:"party-dd1e4.appspot.com",messagingSenderId:"853310015177"}),x.a.firestore().settings({timestampsInSnapshots:!0}),i.a.config.productionTip=!1;var P=x.a.firestore();i.a.config.ignoredElements=["qrcode-reader","QrcodeReader"],new i.a({render:function(e){return e(h)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("5e27"),i=r.n(n);i.a},"5e27":function(e,t,r){},"5f72":function(e,t){e.exports=ELEMENT},"8bbf":function(e,t){e.exports=Vue},bcc9:function(e,t,r){}});
//# sourceMappingURL=app.2e798e91.js.map