(this.webpackJsonpcovid_vaccine_slot=this.webpackJsonpcovid_vaccine_slot||[]).push([[0],{21:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),s=n(15),a=n.n(s),i=(n(21),n.p+"static/media/logo.6ce24c58.svg"),l=n(3),j=n.n(l),o=n(4),d=n(6),u=n(0);var b=function(e){var t=e.centers,n=function(e,t){return e.filter((function(e){var n=e.sessions.filter((function(e){return e.min_age_limit===t&&e.available_capacity>0&&e}));return!!n.length&&n}))},c=n(t,18),r=n(t,45),s=function(e){return Object(u.jsx)(u.Fragment,{children:e.map((function(e){var t;return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.fee_type}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:null!==(t=e.vaccine)&&void 0!==t?t:"unknown"}),a(e.sessions)]},e.center_id)}))})},a=function(e){return e.map((function(e){return Object(u.jsxs)("td",{children:[e.date," / ",e.available_capacity]})}))},i=function(e){var t=-1/0;e.forEach((function(e){e.sessions.length>t&&(t=e.sessions.length)})),console.log(t,"max");for(var n=[],c=0;c<t;c++)n.push(Object(u.jsx)("th",{className:"cvs_date",children:"Date / Available Vaccines"},"".concat(c,"_}")));return console.log(n,"th"),n.map((function(e,t){return Object(u.jsx)(u.Fragment,{children:e})}))},l=function(e){return Object(u.jsxs)(u.Fragment,{children:[t.length?Object(u.jsx)("table",{className:"styled-table",children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"State"}),Object(u.jsx)("th",{children:"District"}),Object(u.jsx)("th",{children:" Pincode  "})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t[0].state_name}),Object(u.jsxs)("td",{children:[" ",t[0].district_name," "]}),Object(u.jsx)("td",{children:t[0].pincode})]},e.center_id)]})}):null,Object(u.jsx)("br",{}),e.length?Object(u.jsx)("div",{children:Object(u.jsxs)("table",{className:"styled-table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Fees"}),Object(u.jsx)("th",{children:"Center Name"}),Object(u.jsx)("th",{children:"Vaccine Type"}),i(e)]})}),Object(u.jsx)("tbody",{children:s(e)})]})}):Object(u.jsxs)("div",{className:"cvs_no_vc",children:[Object(u.jsx)("br",{}),"NO VACCINE CENTER AVAILABLE"]})]})};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Vaccine Center for 18+"}),l(c),Object(u.jsx)("br",{className:"cvs_br"}),Object(u.jsx)("h1",{children:"Vaccine Center for 45+"}),l(r)]})},h=n(16),O=n.n(h),x=function(){var e=Object(o.a)(j.a.mark((function e(t,n){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=".concat(t,"&date=").concat(n));case 3:return c=e.sent,r=c.data,e.abrupt("return",r.centers);case 8:return e.prev=8,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();var p=function(){var e=Object(c.useRef)(),t=Object(c.useState)([]),n=Object(d.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(!1),i=Object(d.a)(a,2),l=i[0],h=i[1],O=function(){var t=Object(o.a)(j.a.mark((function t(n){var c,r,a,i,l,o,d;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),c=new Date,r=new Intl.DateTimeFormat("en",{year:"numeric"}).format(c),a=new Intl.DateTimeFormat("en",{month:"2-digit"}).format(c),i=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(c),l="".concat(i,"-").concat(a,"-").concat(r),o=e.current.value,t.next=9,x(o,l);case 9:(d=t.sent).length?(s(d),h(!0)):s([]);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsxs)("form",{onSubmit:O,children:[Object(u.jsx)("input",{type:"text",ref:e,className:"cvs_search_input",placeholder:"Enter the pincode to search"}),Object(u.jsx)("input",{className:"cvs_search_button",type:"submit",value:"Submit"})]}),l?Object(u.jsx)(b,{centers:r}):null]})};n(42);var m=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"App-header",children:Object(u.jsx)("img",{src:i,className:"App-logo",alt:"logo"})}),Object(u.jsx)(p,{})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),v()}},[[43,1,2]]]);
//# sourceMappingURL=main.4406aa4d.chunk.js.map