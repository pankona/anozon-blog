(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{C3qf:function(e,t,n){"use strict";var a=n("q1tI"),r=n("Wbzz"),o=n("vOnD"),l=n("rB5o"),i=n("gN6P");var c=o.b.div.withConfig({displayName:"ArticleCard__Style",componentId:"sc-1g17l0j-0"})(["border-bottom:solid 1px #d5d5d5;padding:12px 0;h3{margin-top:",";margin-bottom:",";border:none;}"],Object(l.a)(1/4),Object(l.a)(1/4));t.a=function(e){var t=e.title,n=e.topics,o=e.slug,l=e.date,s=e.excerpt;return a.createElement(c,null,a.createElement("h3",null,a.createElement(r.Link,{style:{boxShadow:"none"},to:"/"+o},t)),a.createElement("small",null,l),a.createElement("p",{dangerouslySetInnerHTML:{__html:s}}),a.createElement(i.a,{topics:n.map((function(e){return{value:e}}))}))}},RLWu:function(e,t,n){"use strict";n.r(t);var a=n("N1om"),r=n.n(a),o=n("q1tI"),l=n("C3qf"),i=n("soUV"),c=n("rksZ"),s=n("hizP");t.default=function(e){var t=e.data,n=e.pageContext,a=e.location,p=t.pages,d=t.site.siteMetadata.title,u=n.tag,m=o.createElement(c.a,{prefix:"/topics/"+r()(u),current:n.currentPage||1,last:n.numPages||1});return o.createElement(i.a,{location:a,title:d},o.createElement(s.a,{title:u+" - "+d,description:u+"の記事一覧"}),o.createElement("h1",null,u),n.currentPage>1&&m,p.edges.map((function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return o.createElement(l.a,{key:t.fields.slug,title:n,slug:t.fields.slug,excerpt:t.excerpt,date:t.frontmatter.date,topics:t.frontmatter.topics})})),m)}},rksZ:function(e,t,n){"use strict";var a=n("q1tI"),r=n("vOnD"),o=n("Wbzz"),l=n("ytc1"),i=Object(r.b)(o.Link).withConfig({displayName:"Pagination__Button",componentId:"sc-1k2prwj-0"})([""," border-radius:4px;padding:0 16px;margin:0 2px;"],l.a),c=function(e){return 1===e?"/":"/page/"+e};var s=r.b.div.withConfig({displayName:"Pagination__Style",componentId:"sc-1k2prwj-1"})(["display:flex;margin-top:8px;justify-content:flex-end;> span{"," border-radius:4px;margin:0 2px;color:#937caf;border-color:#937caf;&:hover{color:#937caf;border-color:#937caf;}}"],l.a);t.a=function(e){var t=e.current,n=e.last,r=e.prefix,o=void 0===r?"":r,l=1!==t&&t-1,p=t!==n&&t+1;return 1===n?null:a.createElement(s,null,l&&a.createElement(i,{to:o+c(l)},"<<"),a.createElement("span",null,t),p&&a.createElement(i,{to:o+c(p)},">>"))}}}]);
//# sourceMappingURL=component---src-templates-tag-page-tsx-bd4df4755f96ef8a6e58.js.map