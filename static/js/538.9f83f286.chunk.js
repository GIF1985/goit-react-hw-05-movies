"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[538],{5700:function(e,t,n){n.d(t,{W:function(){return a}});n(2791);var r="Container_container__VVOCq",c=n(184),a=function(e){var t=e.children;return(0,c.jsx)("div",{className:r,children:t})}},2845:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(1087),c="MovieGallery_galleryList__JyKHn",a="MovieGallery_galleryListItem__06ZOy",o="MovieGallery_link__CmVj8",i=n(184),u=function(e){var t=e.movies,n=e.prevLocation;return(0,i.jsx)("div",{children:(0,i.jsx)("ul",{className:c,children:t?t.map((function(e){var t=e.id,c=e.title;return(0,i.jsx)("li",{className:a,children:(0,i.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:n},className:o,children:c})},t)})):null})})}},538:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(3433),c=n(9439),a=n(2791),o=n(1087),i=n(7689),u=n(7596),s=n(5700),l=n(2639),f="Searchbar_form__D-hp5",h="Searchbar_input__19umw",_="Searchbar_button__nkcjk",v=n(184),m=function(e){var t=e.onSearch,n=(0,a.useState)(""),r=(0,c.Z)(n,2),o=r[0],i=r[1];return(0,v.jsx)("header",{children:(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),i("")):alert("Search field is empty!")},className:f,children:[(0,v.jsx)("input",{type:"text",name:"searchRequest",value:o,onChange:function(e){i(e.currentTarget.value.toLowerCase())},autoComplete:"off",autoFocus:!0,className:h}),(0,v.jsx)("button",{type:"submit",className:_,children:"Search"})]})})},d=n(2845),p=n(8898);function g(){var e=(0,o.lr)(),t=(0,c.Z)(e,2),n=t[0],f=t[1],h=(0,a.useState)([]),_=(0,c.Z)(h,2),g=_[0],y=_[1],j=(0,a.useState)(null),S=(0,c.Z)(j,2),x=S[0],b=S[1],k=(0,a.useState)(!1),Z=(0,c.Z)(k,2),w=Z[0],L=Z[1],A=n.get("query"),C=(0,i.TH)();(0,a.useEffect)((function(){if(A){""!==A&&function(e){L(!0);try{(0,p.oi)(e).then((function(e){if(e.data.results.length){var t=e.data.results.map((function(e){return{id:e.id,title:e.title}}));y((0,r.Z)(t))}else alert("There is no movies found with that search request")}))}catch(x){b(x)}finally{L(!1)}}(A)}}),[A]);return(0,v.jsxs)(s.W,{children:[(0,v.jsx)(m,{onSearch:function(e){f({query:"".concat(e)})}}),x&&u.Am.error("Whoops, something went wrong: ".concat(x.message)),w&&(0,v.jsx)(l.Z,{}),g.length>0&&(0,v.jsx)(d.Z,{movies:g,prevLocation:C})]})}},8898:function(e,t,n){n.d(t,{y:function(){return f},vw:function(){return u},BG:function(){return l},oi:function(){return s},Bt:function(){return h}});var r=n(1243),c={get:r.Z.get,post:r.Z.post},a={BASE_URL:"https://api.themoviedb.org/3",API_KEY:"130c258b890c78df3c038a7826c7abd4",DEFAULT_LANGUAGE:"en-US"},o=a.BASE_URL,i=a.API_KEY,u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return c.get("".concat(o,"/trending/movie/day?api_key=").concat(i,"&page=").concat(e))},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c.get("".concat(o,"/search/movie?api_key=").concat(i,"&page=").concat(t,"&query=").concat(e))},l=function(e){return c.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(i))},f=function(e){return c.get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(i))},h=function(e){return c.get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(i))}}}]);
//# sourceMappingURL=538.9f83f286.chunk.js.map