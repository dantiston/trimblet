(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e){e.exports={info:{name:"T.J. Trimble",phone:"425.218.7467",email:"trimblet@me.com"},experience:[{name:"PRO Unlimited @ Facebook",start_date:"07-2017",end_date:"current",title:"Linguistic Tools Engineering Lead",description:"Led a team of three computational linguists to develop tools for data annotation, quality management, and metrics.",accomplishments:[{description:"Designed and implemented an annotation widget in React used by thousands of annotators to enable unique annotation task."},{description:"Coordinated standards and efforts across team to increase data quality and tool quality across the pipeline."}]}],education:[{name:"University of Washington",start_date:"09-2012",end_date:"12-2014",title:"Masters of Science in Computational Linguistics",description:"NLP, data science, rule based systems.",accomplishments:[{description:"Developed an awesome thesis."},{description:"Wrote some cool code."}]}],skills:[{title:"Natural languages",values:["English (Native)","French (Intermediate)","Japanese (Beginner)","Italian (Beginner)"]},{title:"Programming languages",values:["Python","Java","JavaScript/React","PHP/Hack"]},{title:"Software and packages",values:{"NLP Packages":["nltk","coreNLP"],VCS:["git","svn","mercurial"],IDE:["Atom/Nuclide","Eclipse"]}}]}},function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t),n.d(t,"Header",function(){return u});var a=n(1),i=n(2),r=n(4),o=n(3),s=n(5),c=n(0),l=n.n(c),u=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("div",{style:{fontSize:"32pt"}},this.props.info.name),l.a.createElement("div",null,l.a.createElement("span",null,this.props.info.email),l.a.createElement("span",null," \u2022\xa0"),l.a.createElement("span",null,this.props.info.phone)))}}]),t}(c.Component)},function(e,t,n){"use strict";n.r(t),n.d(t,"Experience",function(){return u});var a=n(1),i=n(2),r=n(4),o=n(3),s=n(5),c=n(0),l=n.n(c),u=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,this.props.entries.map(function(e){return l.a.createElement("div",{style:{margin:"10px 0"}},l.a.createElement("div",null,l.a.createElement("span",{style:{fontWeight:"bold"}},e.name),l.a.createElement("span",{style:{fontStyle:"italic",float:"right"}},e.title)),l.a.createElement("div",null,e.start_date," to ",e.end_date),l.a.createElement("div",null,e.description),l.a.createElement("ul",null,e.accomplishments.map(function(e){return l.a.createElement("li",null,e.description)})))}))}}]),t}(c.Component)},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),o=n.n(r),s=(n(15),n(1)),c=n(2),l=n(4),u=n(3),m=n(5),d=(n(17),n(19).Header),p=n(20).Experience,f=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,{info:this.props.resume.get("info")}),i.a.createElement(p,{entries:this.props.resume.get("experience")}),i.a.createElement(p,{entries:this.props.resume.get("education")}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=n(8),g=n(21).Map;o.a.render(i.a.createElement(f,{resume:g(h)}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.65308e0b.chunk.js.map