(this["webpackJsonpfun-with-flags"]=this["webpackJsonpfun-with-flags"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(6),i=n.n(c),a=n(13),s=n.n(a),r=(n(21),n(8)),o=n.p+"static/media/logo.6ce24c58.svg",u=(n(22),n(16)),j=n(5),l=function(e){var t=e.event,n=i.a.useState(null),c=Object(r.a)(n,2),a=c[0],s=c[1],o=i.a.useState(!1),l=Object(r.a)(o,2),d=l[0],b=l[1];return i.a.useEffect((function(){var e=Object(u.a)({core:{authorizationKey:"in9qidn1upmnq6bi8ffums1tm5lakagp8jn0",key:t,trafficType:"event"},startup:{readyTimeout:1.5}}).client();e.on(e.Event.SDK_READY,(function(){s(e)}))}),[t]),i.a.useEffect((function(){b(a&&a.getTreatment("eventFeature",{account:"123456",email:"gilad@bizzabo.com",event:"456"}))}),[t]),Object(j.jsxs)("div",{style:{border:"1px solid black",margin:"50px"},children:[Object(j.jsx)("h1",{children:"This is from Split.io"}),Object(j.jsxs)("div",{children:["eventFeature is: ",Object(j.jsxs)("strong",{children:[" ",d?"on":"off"," "]}),"  for event: ",t]})]})},d=n(15),b=function(e){var t=e.event,n=i.a.useState(null),c=Object(r.a)(n,2),a=c[0],s=c[1],o=i.a.useState(!1),u=Object(r.a)(o,2),l=u[0],b=u[1];return i.a.useEffect((function(){var e={key:t,name:"user in:".concat(t),email:"".concat(t,"@bizzabo.com"),custom:{eventId:t,accountId:"".concat(t,"000")}},n=d.a("60be2087cafd2b0e04da8ce4",e);n.on("ready",(function(){s(n)}))}),[t]),i.a.useEffect((function(){b(a&&a.variation("new-feature"))}),[a]),Object(j.jsxs)("div",{style:{border:"1px solid black",margin:"50px"},children:[Object(j.jsx)("h1",{children:"This is from LaunchDarkly"}),Object(j.jsxs)("div",{children:["newFeature is: ",Object(j.jsxs)("strong",{children:[" ",l?"on":"off"," "]})," for event: ",t]})]})},f="123",v="456",h="789";var O=function(){var e=i.a.useState(f),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App-header",children:Object(j.jsx)("img",{src:o,className:"App-logo",alt:"logo"})}),Object(j.jsxs)("nav",{children:[Object(j.jsxs)("button",{onClick:function(){return c(f)},children:["Event ",f]}),Object(j.jsxs)("button",{onClick:function(){return c(v)},children:["Event ",v]}),Object(j.jsxs)("button",{onClick:function(){return c(h)},children:["Event ",h]}),Object(j.jsxs)("div",{children:["eventId: ",n]}),Object(j.jsxs)("div",{children:["accountId: ",n,"000"]}),Object(j.jsxs)("div",{children:["email: ",n,"@bizzabo.com"]})]}),Object(j.jsx)(l,{event:n}),Object(j.jsx)(b,{event:n})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),x()}},[[26,1,2]]]);
//# sourceMappingURL=main.0a83e1c3.chunk.js.map