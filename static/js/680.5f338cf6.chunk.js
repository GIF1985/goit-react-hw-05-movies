"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[680],{5700:function(n,t,e){e.d(t,{W:function(){return o}});e(2791);var c="Container_container__VVOCq",r=e(184),o=function(n){var t=n.children;return(0,r.jsx)("div",{className:c,children:t})}},2845:function(n,t,e){e.d(t,{Z:function(){return s}});var c=e(1087),r="MovieGallery_galleryList__JyKHn",o="MovieGallery_galleryListItem__06ZOy",i="MovieGallery_link__CmVj8",a=e(184),s=function(n){var t=n.movies,e=n.prevLocation;return(0,a.jsx)("div",{children:(0,a.jsx)("ul",{className:r,children:t?t.map((function(n){var t=n.id,r=n.title;return(0,a.jsx)("li",{className:o,children:(0,a.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:e},className:i,children:r})},t)})):null})})}},680:function(n,t,e){e.r(t);var c=e(9439),r=e(2791),o=e(7689),i=e(7596),a=e(5700),s=e(2845),u=e(8898),l=e(2639),v=e(184);t.default=function(){var n=(0,r.useState)([]),t=(0,c.Z)(n,2),e=t[0],f=t[1],_=(0,r.useState)(!1),d=(0,c.Z)(_,2),m=d[0],h=d[1],g=(0,r.useState)(null),p=(0,c.Z)(g,2),y=p[0],j=p[1],x=(0,o.TH)();return(0,r.useEffect)((function(){h(!0);try{(0,u.vw)().then((function(n){var t=n.data.results.map((function(n){return{id:n.id,title:n.title}}));f(t)}))}catch(y){j(y)}finally{h(!1)}}),[]),(0,v.jsxs)(v.Fragment,{children:[m&&(0,v.jsx)(l.Z,{}),y&&i.Am.error("Whoops, something went wrong: ".concat(y.message)),(0,v.jsxs)(a.W,{children:[y&&i.Am.error("Whoops, something went wrong: ".concat(y.message)),(0,v.jsx)("h1",{children:"Trending today"}),(0,v.jsx)(s.Z,{movies:e,prevLocation:x}),(0,v.jsx)(i.Ix,{autoClose:3e3})]})]})}},8898:function(n,t,e){e.d(t,{y:function(){return v},vw:function(){return s},BG:function(){return l},oi:function(){return u},Bt:function(){return f}});var c=e(1243),r={get:c.Z.get,post:c.Z.post},o={BASE_URL:"https://api.themoviedb.org/3",API_KEY:"130c258b890c78df3c038a7826c7abd4",DEFAULT_LANGUAGE:"en-US"},i=o.BASE_URL,a=o.API_KEY,s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return r.get("".concat(i,"/trending/movie/day?api_key=").concat(a,"&page=").concat(n))},u=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return r.get("".concat(i,"/search/movie?api_key=").concat(a,"&page=").concat(t,"&query=").concat(n))},l=function(n){return r.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(a))},v=function(n){return r.get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(a))},f=function(n){return r.get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(a))}}}]);
//# sourceMappingURL=680.5f338cf6.chunk.js.map