webpackJsonp([1],{"6+1I":function(e,s){},NHnr:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("7+uW"),n={render:function(){var e=this.$createElement,s=this._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var r=t("VU/8")({name:"App"},n,!1,function(e){t("rfsl")},null,null).exports,o=t("/ocq"),c={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"welcome container"},[t("div",{staticClass:"card  blue-grey darken-4 z-depth-5"},[t("div",{staticClass:"card-content center-align"},[t("h2",[e._v("WELCOME")]),e._v(" "),t("hr",{staticClass:"style-2"}),e._v(" "),t("br"),e._v(" "),t("form",{on:{submit:function(s){return s.preventDefault(),e.enterChat(s)}}},[t("label",{attrs:{for:"name"}},[e._v("Enter Credentials:")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name",autocomplete:"off",placeholder:"Name"},domProps:{value:e.name},on:{input:function(s){s.target.composing||(e.name=s.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text",placeholder:"Password",name:"password",autocomplete:"off"},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}}),e._v(" "),e.feedback?t("p",{staticClass:"red-text"},[e._v(e._s(e.feedback))]):e._e(),e._v(" "),t("br"),t("br"),e._v(" "),t("button",{staticClass:"btn black"},[e._v("Enter Chat")])])])])])},staticRenderFns:[]};var i=t("VU/8")({name:"Welcome",data:function(){return{name:null,feedback:null,password:null}},methods:{enterChat:function(){this.name&&"8520"==this.password?(this.$router.push({name:"Chat",params:{name:this.name}}),this.name=null):this.feedback="Enter correct name and passcode you moron"}}},c,!1,function(e){t("QsR5")},"data-v-32853f0e",null).exports,l=t("kxiW"),m=t.n(l).a.initializeApp({apiKey:"AIzaSyCOLpYYcG0-rTS49v_43jst4UKa1HUV7N0",authDomain:"geochatavneetsng.firebaseapp.com",databaseURL:"https://geochatavneetsng.firebaseio.com",projectId:"geochatavneetsng",storageBucket:"geochatavneetsng.appspot.com",messagingSenderId:"614953809076",appId:"1:614953809076:web:2ccf38900112441c"}).firestore(),u={name:"NewMessage",data:function(){return{newMessage:null,feedback:null}},props:["name"],methods:{addMessage:function(){this.newMessage?(m.collection("messages").add({content:this.newMessage,name:this.name,timeStamp:Date.now()}).catch(function(e){return console.log(e)}),this.newMessage=null,this.feedback=null):this.feedback="You dumbass , you have to write a text in order to send it "}}},j={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"newMessage"},[t("form",{on:{submit:function(s){return s.preventDefault(),e.addMessage(s)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newMessage,expression:"newMessage"}],attrs:{type:"text",name:"newMessage",autocomplete:"off",placeholder:"Type a message here"},domProps:{value:e.newMessage},on:{input:function(s){s.target.composing||(e.newMessage=s.target.value)}}}),e._v(" "),t("br"),e._v(" "),e.feedback?t("p",{staticClass:"red-text center-align"},[e._v(e._s(e.feedback))]):e._e()])])},staticRenderFns:[]};var d=t("VU/8")(u,j,!1,function(e){t("bemq")},"data-v-326bfcf2",null).exports,p=t("PJh5"),v=t.n(p),h={name:"Chat",data:function(){return{messages:[]}},props:["name"],components:{NewMessage:d},created:function(){var e=this;m.collection("messages").orderBy("timeStamp").onSnapshot(function(s){s.docChanges().forEach(function(s){if("added"==s.type){var t=s.doc;e.messages.push({id:t.id,name:t.data().name,content:t.data().content,timeStamp:v()(t.data().timeStamp).format("LT")})}})})}},f={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"chat container"},[t("h2",{staticClass:"center-align  teal-text text-accent-4"},[e._v("CHAT ROOM")]),e._v(" "),t("hr",{staticClass:"style-2"}),e._v(" "),t("br"),e._v(" "),t("div",{staticClass:"card blue-grey darken-4"},[t("div",{staticClass:"card-content"},[t("ul",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll"}],staticClass:"messages"},e._l(e.messages,function(s){return t("li",{key:s.id},[t("span",{staticClass:"teal-text"},[e._v(e._s(s.name)+" :")]),e._v(" "),t("span",{staticClass:"grey-text "},[e._v(e._s(s.content))]),e._v(" "),t("span",{staticClass:"grey-text time text-darken-1"},[e._v(e._s(s.timeStamp))])])}),0)]),e._v(" "),t("div",{staticClass:"card-action  blue-grey darken-3"},[t("NewMessage",{attrs:{name:e.name}})],1)])])},staticRenderFns:[]};var g=t("VU/8")(h,f,!1,function(e){t("6+1I")},"data-v-09bca58a",null).exports;a.a.use(o.a);var b=new o.a({mode:"history",routes:[{path:"/",name:"Welcome",component:i},{path:"/chat",name:"Chat",component:g,props:!0,beforeEnter:function(e,s,t){e.params.name?t():t({name:"Welcome"})}}]}),w=t("bNL2"),k=t.n(w);a.a.use(k.a),a.a.config.productionTip=!1,new a.a({el:"#app",router:b,components:{App:r},template:"<App/>"})},QsR5:function(e,s){},bemq:function(e,s){},rfsl:function(e,s){},uslO:function(e,s,t){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(e){return t(r(e))}function r(e){var s=a[e];if(!(s+1))throw new Error("Cannot find module '"+e+"'.");return s}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.0226b33f7ac449196826.js.map