(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e){e.exports={path:"kea/3-sem/exam/admin/"}},238:function(e,t,a){e.exports=a.p+"static/media/background-line-grey-half.d91dde73.svg"},241:function(e,t,a){e.exports=a.p+"static/media/user-picture.71af8441.png"},244:function(e,t,a){e.exports=a(493)},447:function(e,t,a){},493:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(237),l=a.n(o),s=a(5),c=a(6),i=a(8),m=a(7),u=a(9),d=a(497),h=a(498),p=a(494),E=a(99),v=a(238),b=a.n(v),g=a(13),f=a(496),y=function(e){return Object(g.b)(function(e){return{auth:e.firebase.auth}})(function(t){return console.log(t),t.auth.uid?r.a.createElement(f.a,{to:"/dashboard/"}):r.a.createElement(e,t)})},N=a(254),O=a(14),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:null,password:null},a.handleSubmit=function(){a.props.signIn(a.state)},a.handleInputChange=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.handleInputChangeEmail=function(e){a.setState({email:e.target.value})},a.handleInputChangePassword=function(e){a.setState({password:e.target.value})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"login"},r.a.createElement("div",{className:"background"},r.a.createElement("div",null,r.a.createElement("img",{src:b.a,alt:"background shape"}))),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Admin Login"),r.a.createElement("form",null,r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"email",name:"email",placeholder:" ",onChange:this.handleInputChangeEmail}),r.a.createElement("label",null,"E-mail"),r.a.createElement("div",{className:"underline"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"password",name:"password",placeholder:" ",onChange:this.handleInputChangePassword}),r.a.createElement("label",null,"Password"),r.a.createElement("div",{className:"underline"})),r.a.createElement("div",{className:"forgot"},r.a.createElement("p",null,"Forgot email/password?")),r.a.createElement("div",{className:"submit",onClick:this.handleSubmit},r.a.createElement(N.a,{to:"./dashboard"},r.a.createElement("input",{type:"submit",value:"Login",className:"submit-button"}))))),r.a.createElement("div",{className:"return"},r.a.createElement("a",{href:"../index.html"},"< return to Polyeco")))}}]),t}(n.Component),w=Object(O.d)(Object(g.b)(function(e){return{authError:e.auth.authError}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}}),y)(j),C=a(495),S=a(241),A=a.n(S),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showMobileMenu:!1},a.handleLogout=function(){a.props.signOut()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"navbar"},r.a.createElement("div",{id:"burger-menu",onClick:this.props.toggleMobileMenu,className:this.props.showMobileMenu?"active":""},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("div",{className:["container",this.props.showMobileMenu?"mobile-menu-active":""].join(" ")},r.a.createElement("div",{className:"logo"},r.a.createElement("h3",null,"Polyeco")),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(C.a,{exact:!0,to:"/dashboard/",activeClassName:"active"},"Overview",r.a.createElement("div",{className:"active-background"},r.a.createElement("div",null)))),r.a.createElement("li",null,r.a.createElement(C.a,{to:"/dashboard/donations",activeClassName:"active"},"Donations",r.a.createElement("div",{className:"active-background"},r.a.createElement("div",null)))),r.a.createElement("li",null,r.a.createElement(C.a,{to:"/dashboard/messages",activeClassName:"active"},"Messages",r.a.createElement("div",{className:"active-background"},r.a.createElement("div",null)))))),r.a.createElement("div",{className:"user"},r.a.createElement("img",{src:A.a,alt:"Profile"}),r.a.createElement("p",{className:"name"},"Johnny"),r.a.createElement("p",{className:"logout-button",onClick:this.handleLogout},"Logout"))))}}]),t}(n.Component),M=Object(g.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}},void 0,{pure:!1})(k),B=a(70),R=a(242),L=a.n(R),I=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){console.log(this.props.overview);var e=this.props.overview.currency,t={labels:this.props.overview.donationsByMonth.map(function(e){return e.month}),datasets:[{label:"Donation in "+e,fill:!1,lineTension:0,backgroundColor:"#F2EA2A",borderColor:"#F2EA2A",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"white",pointBackgroundColor:"#00ABD6",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#F2EA2A",pointHoverBorderColor:"white",pointHoverBorderWidth:2,pointRadius:5,pointHitRadius:10,data:this.props.overview.donationsByMonth.map(function(e){return e.amount})}]},a={maintainAspectRatio:!0,tooltips:{mode:"label",callbacks:{label:function(t,a){return"Donation: "+t.yLabel+e}},backgroundColor:"#f6f6f6",borderColor:"green",titleFontColor:"#464646",bodyFontColor:"#464646"},scales:{yAxes:[{ticks:{min:0,beginAtZero:!0},gridLines:{display:!0,color:["rgba(0,0,0,0)"]}}],xAxes:[{gridLines:{display:!1}}]}};return console.log(this.props.overview),r.a.createElement("div",{className:"summary card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("header",null,r.a.createElement("h3",null,"Donations")),r.a.createElement("div",{className:"this-week"},r.a.createElement("h4",null,"Donated this week"),r.a.createElement("p",null,this.props.overview.thisWeek+this.props.overview.currency)),r.a.createElement("div",{className:"this-month"},r.a.createElement("h4",null,"Donated this month"),r.a.createElement("p",null,this.props.overview.thisMonth+this.props.overview.currency)),r.a.createElement("div",{className:"total"},r.a.createElement("h4",null,"Donated in total"),r.a.createElement("p",null,this.props.overview.inTotal+this.props.overview.currency)),r.a.createElement("div",{className:"month-graph"},r.a.createElement("h4",null,"Donated by month"),r.a.createElement(L.a,{minDeviceWidth:600},function(e){return e?r.a.createElement(B.b,{data:t,options:a,width:1600,height:600}):r.a.createElement(B.b,{data:t,options:a,width:600,height:600})}))))}}]),t}(n.Component),_=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={labels:["One-time","Monthly","Yearly"],datasets:[{data:[this.props.overview.donationsByType.oneTime,this.props.overview.donationsByType.monthly,this.props.overview.donationsByType.yearly],backgroundColor:["#0F718C","rgba(89, 192, 217, 1)","#94E8FF"],hoverBackgroundColor:["rgba(15, 113, 140, 0.66)","rgba(89, 192, 217, 0.66)","rgba(148, 232, 255, 0.67)"]}]};return r.a.createElement("div",{className:"donations-by-type card"},r.a.createElement("h2",null,"Donations by type"),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",null,r.a.createElement(B.a,{data:e,options:{maintainAspectRatio:!0,responsive:!0,legend:{position:"bottom",labels:{boxWidth:20,padding:20}}},width:100,height:100}))))}}]),t}(n.Component),D=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"top-donors card"},r.a.createElement("h2",null,"Top donors"),r.a.createElement("div",{className:"card-content"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,this.props.overview.topDonors[0].amount+this.props.overview.currency),r.a.createElement("td",null,this.props.overview.topDonors[0].name)),r.a.createElement("tr",null,r.a.createElement("td",null,this.props.overview.topDonors[1].amount+this.props.overview.currency),r.a.createElement("td",null,this.props.overview.topDonors[1].name)),r.a.createElement("tr",null,r.a.createElement("td",null,this.props.overview.topDonors[2].amount+this.props.overview.currency),r.a.createElement("td",null,this.props.overview.topDonors[2].name))))))}}]),t}(n.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.messages?this.props.messages.map(function(e,t){return t<3?r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.date),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.institute)):null}):r.a.createElement("tr",null,r.a.createElement("th",null,"Loading"));return r.a.createElement("div",{className:"latest-messages card"},r.a.createElement("h2",null,"Latest messages"),r.a.createElement("div",{className:"card-content"},r.a.createElement("table",null,r.a.createElement("tbody",null,e))))}}]),t}(n.Component),F=a(24),U=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.overview&&this.props.messages?r.a.createElement("div",{className:"container"},r.a.createElement(I,{overview:this.props.overview[0]}),r.a.createElement(_,{overview:this.props.overview[0]}),r.a.createElement(D,{overview:this.props.overview[0]}),r.a.createElement(x,{messages:this.props.messages})):r.a.createElement("p",null,"Loading");return r.a.createElement("div",{id:"overview"},r.a.createElement("h2",{className:"dashboard-title"},"Overview"),e)}}]),t}(n.Component),H=Object(O.d)(Object(g.b)(function(e,t){return{overview:e.firestore.ordered.overview,messages:e.firestore.ordered.messages}}),Object(F.firestoreConnect)([{collection:"overview"},{collection:"messages"}]))(U),T=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("tr",{className:"donator"},r.a.createElement("td",{className:"date"},this.props.donation.date),r.a.createElement("td",{className:"name"},this.props.donation.name),r.a.createElement("td",{className:"email"},this.props.donation.email),r.a.createElement("td",{className:"type"},this.props.donation.type),r.a.createElement("td",{className:"amount"},this.props.donation.amount+this.props.donation.currency))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSearchChange=function(e){a.props.searchByName(e.target.value)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){console.log(this.props.donationsSearch);var e=!this.props.donationsSearch||!!this.props.donationsSearch.searchByName&&this.props.donationsSearch.searchByName.length>0?this.props.donationsSearch.searchByName.map(function(e){return r.a.createElement(T,{key:Math.random(),donation:e})}):this.props.donations?this.props.donations.map(function(e){return r.a.createElement(T,{key:e.id,donation:e})}):r.a.createElement("tr",{className:"donator"},r.a.createElement("td",{className:"date"},"Loading"));return r.a.createElement("div",null,r.a.createElement("div",{className:"donator-list"},r.a.createElement("div",{className:"card list"},r.a.createElement("div",{className:"card-content"},r.a.createElement("header",null,r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",name:"search",placeholder:" ",onChange:this.handleSearchChange}),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 96 109",className:"magnifier"},r.a.createElement("path",{d:"M96 102L64 62a37 37 0 1 0-9 7l32 40a1 1 0 0 0 2 0l6-5a1 1 0 0 0 1-2zM18 52a24 24 0 1 1 34 4 24 24 0 0 1-34-4z"})),r.a.createElement("label",null,"Search by exact names..."),r.a.createElement("div",{className:"underline"}))),r.a.createElement("div",{className:"filter clearfix"},r.a.createElement("p",null,"Filter by:"),r.a.createElement("select",null,r.a.createElement("option",{value:"date"},"Date"),r.a.createElement("option",{value:"name"},"Name"),r.a.createElement("option",{value:"email"},"E-mail"),r.a.createElement("option",{value:"type"},"Type"),r.a.createElement("option",{value:"amount"},"Amount")))),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"date active"},"Date"),r.a.createElement("th",{className:"name"},"Name"),r.a.createElement("th",{className:"email"},"E-mail"),r.a.createElement("th",{className:"type"},"Type"),r.a.createElement("th",{className:"amount"},"Amount")),e))))))}}]),t}(n.Component),W=Object(O.d)(Object(g.b)(function(e,t){return{donations:e.firestore.ordered.donations,donationsSearch:e.donations}},function(e){return{searchByName:function(t){return e(function(e){return function(t,a,n){var r=(0,n.getFirestore)(),o=[];e.length>0?r.collection("donations").where("name","==",e).get().then(function(e){e.forEach(function(e){console.log(e.data()),o.push(e.data())}),t({type:"SEARCH_NAME_SUCCESS",searchNameResults:o})}).catch(function(e){t({type:"SEARCH_NAME_ERROR"},e)}):t({type:"SEARCH_NAME_UNAIVALABLE",searchNameResults:o})}}(t))}}}),Object(F.firestoreConnect)([{collection:"donations",orderBy:["timestamp","desc"]}]))(P),G=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"donations"},r.a.createElement("h2",{className:"dashboard-title"},"Donations"),r.a.createElement(W,null))}}]),t}(n.Component),z=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("tr",{className:"messenger"},r.a.createElement("td",{className:"date"},this.props.message.date),r.a.createElement("td",{className:"email"},this.props.message.email),r.a.createElement("td",{className:"institute"},this.props.message.institute),r.a.createElement("td",{className:"name"},this.props.message.name),r.a.createElement("td",{className:"message"},this.props.message.message))}}]),t}(n.Component),J=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleSearchChange=function(e){a.props.searchByName(e.target.value)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=!!this.props.messagesSearch&&(!!this.props.messagesSearch.searchByName&&this.props.messagesSearch.searchByName.length>0)?this.props.messagesSearch.searchByName.map(function(e){return r.a.createElement(z,{key:Math.random(),message:e})}):this.props.messages?this.props.messages.map(function(e){return r.a.createElement(z,{key:e.id,message:e})}):r.a.createElement("tr",{className:"message"},r.a.createElement("td",{className:"date"},"Loading"));return r.a.createElement("div",null,r.a.createElement("div",{id:"message-list"},r.a.createElement("div",{className:"card list"},r.a.createElement("div",{className:"card-content"},r.a.createElement("header",null,r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",name:"search",placeholder:" ",onChange:this.handleSearchChange}),r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 96 109",className:"magnifier"},r.a.createElement("path",{d:"M96 102L64 62a37 37 0 1 0-9 7l32 40a1 1 0 0 0 2 0l6-5a1 1 0 0 0 1-2zM18 52a24 24 0 1 1 34 4 24 24 0 0 1-34-4z"})),r.a.createElement("label",null,"Search by exact name..."),r.a.createElement("div",{className:"underline"}))),r.a.createElement("div",{className:"filter clearfix"},r.a.createElement("p",null,"Filter by:"),r.a.createElement("select",null,r.a.createElement("option",{value:"date"},"Date"),r.a.createElement("option",{value:"name"},"Name"),r.a.createElement("option",{value:"email"},"E-mail"),r.a.createElement("option",{value:"institute"},"Institute")))),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"date active"},"Date"),r.a.createElement("th",{className:"email"},"E-mail"),r.a.createElement("th",{className:"institute"},"Institute"),r.a.createElement("th",{className:"name"},"Name"),r.a.createElement("th",{className:"message"},"Message")),e))))))}}]),t}(n.Component),V=Object(O.d)(Object(g.b)(function(e,t){return console.log(e),{messages:e.firestore.ordered.messages,messagesSearch:e.messages}},function(e){return{searchByName:function(t){return e(function(e){return function(t,a,n){var r=(0,n.getFirestore)(),o=[];e.length>0?r.collection("messages").where("name","==",e).get().then(function(e){e.forEach(function(e){console.log(e.data()),o.push(e.data())}),t({type:"SEARCH_NAME_SUCCESS",searchNameResults:o})}).catch(function(e){t({type:"SEARCH_NAME_ERROR"},e)}):t({type:"SEARCH_NAME_UNAIVALABLE",searchNameResults:o})}}(t))}}}),Object(F.firestoreConnect)([{collection:"messages",orderBy:["timestamp","desc"]}]))(J),K=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"dashboard-title"},"Messages"),r.a.createElement(V,null))}}]),t}(n.Component),X=a(71),Z=a.n(X),Y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={date:"",time:""},a.tick=function(){Z.a.locale();var e=Z()().format("L"),t=Z()().format("LT");a.setState({date:e,time:t})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timeInterval=setInterval(function(){return e.tick()},1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timeInterval)}},{key:"render",value:function(){return r.a.createElement("div",{className:"date-and-time"},r.a.createElement("p",null,this.state.date," - ",this.state.time))}}]),t}(n.Component),$=function(e){return Object(g.b)(function(e){return{auth:e.firebase.auth}})(function(t){return t.auth.uid?r.a.createElement(e,t):r.a.createElement(f.a,{to:"/"})})},q=a(102),Q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showMobileMenu:!1},a.toggleMobileMenu=function(){a.state.showMobileMenu?console.log("Close it"):console.log("Open it"),a.setState({showMobileMenu:!a.state.showMobileMenu})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log(this.props.location),r.a.createElement(d.a,{basename:q.path},r.a.createElement("div",{id:"dashboard"},r.a.createElement(Y,null),r.a.createElement(M,{showMobileMenu:this.state.showMobileMenu,toggleMobileMenu:this.toggleMobileMenu}),r.a.createElement("div",{id:"dashboard-components",className:this.state.showMobileMenu?"mobile-menu-active":""},r.a.createElement("div",{className:"main-content"},r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/dashboard/",component:H}),r.a.createElement(p.a,{path:"/dashboard/donations",component:G}),r.a.createElement(p.a,{path:"/dashboard/messages",component:K}))))))}}]),t}(n.Component),ee=Object(O.d)(Object(g.b)(function(e){return{auth:e.firebase.auth}}),$)(Q),te=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log(this.props.location),r.a.createElement(d.a,{basename:q.path},r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:w}),r.a.createElement(p.a,{path:"/dashboard",component:ee}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(447);var ae={},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae;arguments.length>1&&arguments[1];return e},re=a(25),oe={searchByName:[]},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_NAME_SUCCESS":return console.log("Search successfull",t),Object(re.a)({},e,{searchByName:t.searchNameResults});case"LOGIN_SUCCESS":return console.log("Error searching for name: ",t.err),Object(re.a)({},e,{searchByName:t.err});case"SEARCH_NAME_UNAVAILABLE":return console.log("Search unavailable",t),Object(re.a)({},e,{searchByName:void 0});default:return e}},se={searchByName:[]},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_NAME_SUCCESS":return console.log("Search successfull",t),Object(re.a)({},e,{searchByName:t.searchNameResults});case"LOGIN_SUCCESS":return console.log("Error searching for name: ",t.err),Object(re.a)({},e,{searchByName:t.err});case"SEARCH_NAME_UNAVAILABLE":return console.log("Search unavailable",t),Object(re.a)({},e,{searchByName:void 0});default:return e}},ie={authError:null},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie;switch((arguments.length>1?arguments[1]:void 0).type){case"LOGIN_ERROR":return console.log("Login error."),Object(re.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("Login successfull"),Object(re.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("Signout success"),e;default:return e}},ue=a(72),de=Object(O.c)({auth:me,overview:ne,donations:le,messages:ce,firestore:ue.firestoreReducer,firebase:F.firebaseReducer}),he=a(243),pe=a(103),Ee=a.n(pe);a(486),a(491);Ee.a.initializeApp({apiKey:"AIzaSyBrTXlPTks8CPKRbZBSDnTXpPaotL4Wpwg",authDomain:"polyeco-eda86.firebaseapp.com",databaseURL:"https://polyeco-eda86.firebaseio.com",projectId:"polyeco-eda86",storageBucket:"polyeco-eda86.appspot.com",messagingSenderId:"86781747630"}),Ee.a.firestore().settings({timestampsInSnapshots:!0});var ve=Ee.a,be=Object(O.e)(de,Object(O.d)(Object(O.a)(he.a.withExtraArgument({getFirebase:F.getFirebase,getFirestore:ue.getFirestore})),Object(ue.reduxFirestore)(ve),Object(F.reactReduxFirebase)(ve,{attachAuthIsReady:!0})));be.firebaseAuthIsReady.then(function(){l.a.render(r.a.createElement(g.a,{store:be},r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[244,2,1]]]);
//# sourceMappingURL=main.078f14aa.chunk.js.map