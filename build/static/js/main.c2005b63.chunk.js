(this["webpackJsonpreact-github-searcher"]=this["webpackJsonpreact-github-searcher"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/company.d330db22.svg"},19:function(e,t,a){e.exports=a.p+"static/media/location.a4e1e7d6.svg"},20:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),s=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__inner container"},r.a.createElement("a",{href:"index.html",className:"header__logo"},"Github Finder")))},i=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer__inner container"},r.a.createElement("div",{className:"footer__made-by"},"Made by ",r.a.createElement("a",{href:"https://github.com/arsenyNebozhenko",target:"_blank",rel:"noopener noreferrer",className:"footer__link"},"Arseny Nebozhenko"))))},o=a(2),m=a(3),u=a(5),f=a(4),h=a(6),d=a(17),p=a.n(d),_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){var t=e.target.value;p()("https://api.github.com/users/".concat(t),{client_id:"ee9941260d6933f409e6",client_secret:"776c596bb8671f9f6793ddb7ac9c412c0211142f"}).then((function(e){return a.props.handler(e.data)})).catch((function(e){return console.log(e)}))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"search-form"},r.a.createElement("h1",{className:"search-form__title"},"Search Github Users"),r.a.createElement("div",{className:"search-form__subtitle"},"Enter a username to fetch a user profile and repos"),r.a.createElement("input",{type:"text",className:"search-form__input",onChange:this.handleChange}))}}]),t}(n.Component),b=a(18),E=a.n(b),v=a(19),N=a.n(v),g=function(e){var t=e.user,a=[{text:t.company,icon:E.a},{text:t.location,icon:N.a}];a=a.filter((function(e){return e.text}));var n=0,c=a.map((function(e){return r.a.createElement("li",{className:"profile__details-item",key:n++},r.a.createElement("img",{src:e.icon,alt:"",className:"profile__details-icon"}),r.a.createElement("div",{className:"profile__details-text"},e.text))}));return r.a.createElement("ul",{className:"profile__details"},c)},y=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.user;return e?r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"profile__col"},r.a.createElement("img",{src:e.avatar_url,className:"profile__avatar",alt:"arsenyNebozhenko avatar"})),r.a.createElement("div",{className:"profile__col"},r.a.createElement("div",{className:"profile__name"},e.name),r.a.createElement("div",{className:"profile__login"},e.login),r.a.createElement(g,{user:e}),r.a.createElement("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer",className:"profile__link"},"Go to profile"))):null}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={result:""},a.handler=function(e){a.setState({result:e})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"finder"},r.a.createElement("div",{className:"finder__inner container"},r.a.createElement(_,{handler:this.handler}),r.a.createElement(y,{user:this.state.result})))}}]),t}(n.Component);a(42);var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(j,null),r.a.createElement(i,null))};l.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.c2005b63.chunk.js.map