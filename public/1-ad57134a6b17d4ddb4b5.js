(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{134:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(133),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var u=a(139),l=a.n(u);a.d(t,"PageRenderer",function(){return l.a});var d=a(43);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},136:function(e,t,a){"use strict";var n=a(140),r=a(0),i=a.n(r),s=a(4),o=a.n(s),c=a(141),u=a.n(c),l=a(134),d=(a(135),a(6)),m=a.n(d),p=[{title:"Home",link:"/"},{title:"Projetos",link:"/projects"},{title:"Stack",link:"/stack"},{title:"Posts",link:"/posts"}],f=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleMenu=function(){a.setState(function(e){return{isMenuOpen:!e.isMenuOpen}})},a.render=function(){var e=a.props.siteTitle,t=a.state.isMenuOpen?"is-active":"";return i.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement(l.Link,{className:"navbar-item is-size-4",to:"/"},e),i.a.createElement("button",{className:"navbar-burger has-text-light "+t,type:"button","aria-label":"menu",onClick:a.handleMenu},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))),i.a.createElement("div",{className:"navbar-menu "+t},i.a.createElement("div",{className:"navbar-end"},p.map(function(e){return i.a.createElement(l.Link,{className:"navbar-item is-size-5",to:e.link,key:e.title},e.title)})))))},a.state={isMenuOpen:!1},a}return m()(t,e),t}(r.Component),h=(a(154),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Densenvolvedor FullStack, criando apps e sistemas web "},{name:"keywords",content:"JavaScript, Dotnet Core, React, Angular, API, PWA, Node, Asp .Net Core"}]},i.a.createElement("html",{lang:"pt"}),i.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/brands.css",integrity:"sha384-QT2Z8ljl3UupqMtQNmPyhSPO/d5qbrzWmFxJqmY7tqoTuT2YrQLEqzvVOP2cT5XW",crossorigin:"anonymous"}),i.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.5.0/css/fontawesome.css",integrity:"sha384-u5J7JghGz0qUrmEsWzBQkfvc8nK3fUT7DCaQzNQ+q4oEXhGSx+P2OqjWsfIRB8QT",crossorigin:"anonymous"})),i.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),t)},data:n})});h.propTypes={children:o.a.node.isRequired};t.a=h},139:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},140:function(e){e.exports={data:{site:{siteMetadata:{title:"Eduardo Acacio"}}}}},152:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(63),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=u},154:function(e,t,a){}}]);
//# sourceMappingURL=1-ad57134a6b17d4ddb4b5.js.map