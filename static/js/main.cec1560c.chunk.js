(this["webpackJsonpreact-graphql-client"]=this["webpackJsonpreact-graphql-client"]||[]).push([[0],{202:function(n,e,t){},345:function(n,e,t){"use strict";t.r(e);var c=t(37),r=t(0),a=t.n(r),i=t(26),l=t.n(i),s=(t(202),t(348)),u=t(186),o=t(194),d=t(191),h=t(163),j=t(349),b=t(164),p=t.n(b),O=t(84),f=t.n(O);function g(){var n=Object(h.a)(["{\n        launches(limit: 5) {\n            launch_date_utc\n            launch_success\n            rocket {\n                rocket_name\n            }\n            links {\n                video_link\n            }\n            details\n        }\n    }"]);return g=function(){return n},n}j.a.Column,j.a.ColumnGroup;var v=f()(g()),x=function(){var n=Object(s.useQuery)(v,{fetchPolicy:"network-only"}),e=n.data,t=n.error;if(n.loading)return Object(c.jsx)("p",{children:"Loading..."});if(t)return Object(c.jsx)("p",{children:"Error :("});var r=e.launches.map((function(n,e){var t=n.launch_date_utc,r=n.launch_success,a=n.rocket,i=n.links,l=n.details;return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h2",{children:["Le d\xe9coollage du ",t," est ",r?"r\xe9ussi":"rat\xe9"," \xe0 bord de la ",a.rocket_name]}),Object(c.jsx)(p.a,{url:i.video_link},e),Object(c.jsx)("p",{children:l||"pas de d\xe9tails"})]},e)}));return Object(c.jsx)(c.Fragment,{children:r})},k=new o.a({uri:"https://api.spacex.land/graphql/"}),_=new u.a({link:k,cache:new d.a});var m=function(){return Object(c.jsx)(s.ApolloProvider,{client:_,children:Object(c.jsx)("div",{children:Object(c.jsx)(x,{})})})},w=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,350)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),c(n),r(n),a(n),i(n)}))};l.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),w()}},[[345,1,2]]]);
//# sourceMappingURL=main.cec1560c.chunk.js.map