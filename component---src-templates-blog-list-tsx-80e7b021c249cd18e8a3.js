(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"NXx+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a("V13v"),l=a("soUV"),o=a("hizP"),c=a("Wbzz"),i=a("vOnD"),s=a("rB5o"),u=a("gN6P");var d=i.b.div.withConfig({displayName:"ArticleCard__Style",componentId:"sc-1g17l0j-0"})(["h3{margin-bottom:",";}"],Object(s.a)(.25)),p=function(e){var t=e.title,a=e.tags,r=e.slug,l=e.date,o=e.excerpt;return n.createElement(d,null,n.createElement("h3",null,n.createElement(c.Link,{style:{boxShadow:"none"},to:"/"+r},t)),n.createElement("small",null,l),n.createElement("p",{dangerouslySetInnerHTML:{__html:o}}),n.createElement(u.a,{tags:a.map((function(e){return{value:e}}))}))},m=a("rksZ");a.d(t,"pageQuery",(function(){return g}));t.default=function(e){var t=e.data,a=e.location,c=e.pageContext,i=t.site.siteMetadata.title,s=t.posts.edges;return n.createElement(l.a,{location:a,title:i},n.createElement(o.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),n.createElement(r.a,null),s.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return n.createElement(p,{key:t.fields.slug,title:a,slug:t.fields.slug,excerpt:t.excerpt,date:t.frontmatter.date,tags:t.frontmatter.tags})})),n.createElement(m.a,{current:c.currentPage||1,last:c.numPages||1}))};var g="1152601065"},rksZ:function(e,t,a){"use strict";var n=a("q1tI"),r=a("vOnD"),l=a("Wbzz"),o=a("ytc1"),c=Object(r.b)(l.Link).withConfig({displayName:"Pagination__Button",componentId:"sc-1k2prwj-0"})([""," border-radius:4px;padding:0 16px;margin:0 2px;"],o.a),i=function(e){return 1===e?"/":"/page/"+e};var s=r.b.div.withConfig({displayName:"Pagination__Style",componentId:"sc-1k2prwj-1"})(["display:flex;margin-top:8px;justify-content:flex-end;> span{"," border-radius:4px;margin:0 2px;color:#937caf;border-color:#937caf;&:hover{color:#937caf;border-color:#937caf;}}"],o.a);t.a=function(e){var t=e.current,a=e.last,r=e.prefix,l=void 0===r?"":r,o=1!==t&&t-1,u=t!==a&&t+1;return 1===a?null:n.createElement(s,null,o&&n.createElement(c,{to:l+i(o)},"<<"),n.createElement("span",null,t),u&&n.createElement(c,{to:l+i(u)},">>"))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-tsx-80e7b021c249cd18e8a3.js.map