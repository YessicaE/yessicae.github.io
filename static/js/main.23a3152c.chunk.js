(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{15:function(e,s,t){},19:function(e,s,t){},21:function(e,s,t){"use strict";t.r(s);var a=t(1),c=t(10),i=t.n(c),n=(t(15),t(2)),r=t(3),l=t(6),o=t(5),j=t(4),d=t(7),h=t.n(d),b=t(8),p=t.n(b),m=(t(19),t(0)),u=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data&&this.props.labels){var e=this.props.data.name,s=this.props.data.occupation,t=this.props.data.description,a=this.props.data.address.city,c=this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsxs)("a",{href:e.url,children:[" ",Object(m.jsx)("i",{className:e.className})]})},e.name)}));return Object(m.jsxs)("header",{id:"home",children:[Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsx)("select",{className:"language-selector minimal",onChange:this.props.LanguageHandle,children:Object(m.jsx)("option",{value:"spanish",children:"Espa\xf1ol"})}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:this.props.labels.home})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:this.props.labels.about})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#resume",children:this.props.labels.resume})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:this.props.labels.testimonials})})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsx)("h1",{className:"responsive-headline",children:e}),Object(m.jsxs)("h3",{children:[this.props.labels.live," ",a,", ",this.props.labels.occupation," ",Object(m.jsx)("span",{children:s}),". ",t,"."]}),Object(m.jsx)("hr",{}),Object(m.jsx)("ul",{className:"social",children:c})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})}return Object(m.jsx)("header",{id:"home",children:Object(m.jsx)("nav",{id:"nav-wrap",children:Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(m.jsxs)("li",{children:[Object(m.jsx)("a",{className:"smoothscroll",href:"#about"}),"About"]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("a",{className:"smoothscroll",href:"#resume"}),"Resume"]}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#testimonials",children:"Testimonials"})})]})})})}}]),t}(a.Component),O=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("i",{className:e.className})})},e.name)}));return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"twelve columns",children:Object(m.jsx)("ul",{className:"social-links",children:e})}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),t}(a.Component),x=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data&&this.props.labels){var e=this.props.data.name,s="images/"+this.props.data.image,t=this.props.data.bio,a=this.props.data.address.street,c=this.props.data.address.city,i=this.props.data.address.state,n=this.props.data.address.zip,r=this.props.data.phone,l=this.props.data.email,o=this.props.data.resumedownload;return Object(m.jsx)("section",{id:"about",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:s,alt:"Tim Baker Profile Pic"})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:this.props.labels.me}),Object(m.jsx)("p",{children:t}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"columns contact-details",children:[Object(m.jsx)("h2",{children:this.props.labels.contact_details}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsx)("span",{children:e}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:[a,Object(m.jsx)("br",{}),c," ",i,", ",n]}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:r}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:l})]})]}),Object(m.jsx)("div",{className:"columns download",children:Object(m.jsx)("p",{children:Object(m.jsxs)("a",{href:o,className:"button",download:"daniel_resume",children:[Object(m.jsx)("i",{className:"fa fa-download"}),this.props.labels.download]})})})]})]})]})})}return Object(m.jsx)("section",{id:"about"})}}]),t}(a.Component),f=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data&&this.props.labels){this.props.data.skillmessage;var e=this.props.labels.certificate,s=this.props.data.education.map((function(s){return Object(m.jsxs)("div",{id:"certificate-a",children:[Object(m.jsx)("h3",{children:s.school}),Object(m.jsxs)("p",{className:"info",children:[s.degree," ",Object(m.jsx)("span",{children:"\u2022"}),Object(m.jsx)("em",{className:"date",children:s.graduated})]}),Object(m.jsx)("a",{href:s.certificate,download:!0,children:e}),Object(m.jsx)("p",{id:"certificate-p",children:s.description})]},s.school)})),t=this.props.data.work.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.company}),Object(m.jsxs)("p",{className:"info",children:[e.title,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsx)("em",{className:"date",children:e.years})]}),Object(m.jsx)("p",{children:e.description})]},e.company)})),a=(this.props.data.skills.map((function(e){var s="bar-expand "+e.name.toLowerCase();return Object(m.jsxs)("li",{children:[" ",Object(m.jsx)("span",{style:{width:e.level},className:s}),"  ",Object(m.jsxs)("em",{id:"skill-list",children:[" ",e.name]})," "]},e.name)})),this.props.data.volunteer.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.company}),Object(m.jsxs)("p",{className:"info",children:[e.title,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsx)("em",{className:"date",children:e.years})]}),Object(m.jsx)("p",{children:e.description})]},e.company)})),this.props.data.certificates.map((function(s){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:s.company}),Object(m.jsxs)("p",{className:"info",children:[s.title,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsx)("em",{className:"date",children:s.obtained})]}),Object(m.jsx)("a",{href:s.certificate,download:!0,children:e})]},s.company)})),this.props.data.courses.map((function(s){return Object(m.jsxs)("div",{id:"certificate-a",children:[Object(m.jsx)("h3",{children:s.school}),Object(m.jsxs)("p",{className:"info",children:[s.degree," ",Object(m.jsx)("span",{children:"\u2022"}),Object(m.jsx)("em",{className:"date",children:s.graduated})]}),Object(m.jsx)("a",{href:s.certificate,download:!0,children:e}),Object(m.jsx)("p",{id:"certificate-p",children:s.description})]},s.degree)})));return Object(m.jsxs)("section",{id:"resume",children:[Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:this.props.labels.experience})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:t})]}),Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:this.props.labels.education})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:Object(m.jsx)("div",{className:"row item",children:Object(m.jsx)("div",{className:"twelve columns",children:s})})})]}),Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:this.props.labels.courses})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:Object(m.jsx)("div",{className:"row item",children:Object(m.jsx)("div",{className:"twelve columns",children:a})})})]})]})}return Object(m.jsx)("section",{id:"resume"})}}]),t}(a.Component),v=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(){return Object(n.a)(this,t),s.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){if(this.props.data&&this.props.labels){var e=this.props.data.testimonials.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsxs)("blockquote",{children:[Object(m.jsx)("p",{children:e.name}),e.description," ",Object(m.jsx)("span",{children:"\u2022"})," ",e.type,Object(m.jsx)("br",{}),e.phone," ",Object(m.jsx)("span",{children:"\u2022"})," ",e.email]})},e.name)}));return Object(m.jsx)("section",{id:"testimonials",children:Object(m.jsx)("div",{className:"text-container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"two columns header-col",children:Object(m.jsx)("h1",{children:this.props.labels.testimonials})}),Object(m.jsx)("div",{className:"ten columns flex-container",children:Object(m.jsx)("ul",{children:e})})]})})})}return Object(m.jsx)("section",{id:"testimonials"})}}]),t}(a.Component),N=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(e){var a;return Object(n.a)(this,t),(a=s.call(this,e)).state={resumeData:{},labels:{},data_loading:!1,labels_loading:!1},h.a.initialize("UA-110570651-1"),h.a.pageview(window.location.pathname),a.LanguageHandle=a.LanguageHandle.bind(Object(l.a)(a)),a}return Object(r.a)(t,[{key:"LanguageHandle",value:function(e){this.getResumeData(e.target.value),this.getLabelsData(e.target.value)}},{key:"getResumeData",value:function(e){p.a.ajax({url:"/resume_"+e+".json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e}),this.setState({data_loading:!0})}.bind(this),error:function(e,s,t){console.log(t)}})}},{key:"getLabelsData",value:function(e){p.a.ajax({url:"/labels_"+e+".json",dataType:"json",cache:!1,success:function(e){this.setState({labels:e}),this.setState({labels_loading:!0})}.bind(this),error:function(e,s,t){console.log(t)}})}},{key:"componentDidMount",value:function(){this.getLabelsData("spanish"),this.getResumeData("spanish")}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(u,{data:this.state.resumeData.main,LanguageHandle:this.LanguageHandle,labels:this.state.labels.header}),Object(m.jsx)(x,{data:this.state.resumeData.main,labels:this.state.labels.about}),Object(m.jsx)(f,{data:this.state.resumeData.resume,labels:this.state.labels.resume}),Object(m.jsx)(v,{data:this.state.resumeData.testimonials,labels:this.state.labels.testimonials}),Object(m.jsx)(O,{data:this.state.resumeData.main})]})}}]),t}(a.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var s=e.installing;s.onstatechange=function(){"installed"===s.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(m.jsx)(N,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");g?function(e){fetch(e).then((function(s){404===s.status||-1===s.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):w(e)}))}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.23a3152c.chunk.js.map