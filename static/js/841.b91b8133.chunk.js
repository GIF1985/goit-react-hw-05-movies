"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[841],{5700:function(e,t,n){n.d(t,{W:function(){return i}});n(2791);var r="Container_container__VVOCq",a=n(184),i=function(e){var t=e.children;return(0,a.jsx)("div",{className:r,children:t})}},4841:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(9439),a=n(2791),i=n(7689),c=n(7596),o=n(5700),s=n(2639),d=n(1087),l="BackButton_backButton__SI3qJ",u="BackButton_button__5Jmp+",v=n(184);function _(){var e=(0,i.TH)().state;return(null===e||void 0===e?void 0:e.from)&&(0,v.jsx)(d.rU,{to:e.from,className:l,children:(0,v.jsx)("button",{className:u,type:"button",children:(0,v.jsx)("span",{children:"Go back"})})})}var h="MovieCard_card__info_general__mKYtd",m="MovieCard_img_wrapper__gpezp",p="MovieCard_details_wrapper__5s34Z",f="MovieCard_card_info_additional__xbYUb",g="MovieCard_link__EvibY";function j(e){var t,n=e.movie,r=n.id,a=n.poster_path,c=n.title,o=n.release_date,s=n.vote_average,l=n.overview,u=n.genres,_=10*s.toFixed(1),j=(0,i.TH)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:h,children:[(0,v.jsx)("div",{className:m,children:(0,v.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:c,width:250})}),(0,v.jsxs)("div",{className:p,children:[(0,v.jsxs)("h2",{children:[(0,v.jsx)("span",{children:c}),(0,v.jsxs)("span",{children:["(",x(o),")"]})]}),(0,v.jsxs)("p",{children:[" User score: ",(t=_,Math.round(t))," %"]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:l}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:w(u)})]})]}),(0,v.jsxs)("div",{className:f,children:[(0,v.jsx)("h3",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(d.rU,{to:"/movies/".concat(r,"/cast"),state:j.state,className:g,children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(d.rU,{to:"/movies/".concat(r,"/reviews"),state:j.state,className:g,children:"Reviews"})})]})]})]})}function x(e){return new Date(e).getFullYear()}function w(e){return e.map((function(e){return e.name})).join(", ")}var b=n(8898);function k(){var e=(0,i.UO)().movieId,t=(0,a.useState)(),n=(0,r.Z)(t,2),d=n[0],l=n[1],u=(0,a.useState)(!1),h=(0,r.Z)(u,2),m=h[0],p=h[1],f=(0,a.useState)(null),g=(0,r.Z)(f,2),x=g[0],w=g[1];return(0,a.useEffect)((function(){p(!0);try{(0,b.BG)(e).then((function(e){var t=e.data,n=t.id,r=t.poster_path,a=t.title,i=t.release_date,c=t.vote_average,o=t.overview,s=t.genres;l({id:n,poster_path:r,title:a,release_date:i,vote_average:c,overview:o,genres:s})}))}catch(x){w(x)}finally{p(!1)}}),[e]),(0,v.jsxs)(v.Fragment,{children:[x&&c.Am.error("Whoops, something went wrong: ".concat(x.message)),(0,v.jsxs)(v.Fragment,{children:[m&&(0,v.jsx)(s.Z,{color:"#3f51b5",size:32}),(0,v.jsx)(_,{}),(0,v.jsx)(o.W,{children:d&&(0,v.jsx)(j,{movie:d})}),(0,v.jsx)(i.j3,{})]})]})}},8898:function(e,t,n){n.d(t,{y:function(){return u},vw:function(){return s},BG:function(){return l},oi:function(){return d},Bt:function(){return v}});var r=n(1243),a={get:r.Z.get,post:r.Z.post},i={BASE_URL:"https://api.themoviedb.org/3",API_KEY:"130c258b890c78df3c038a7826c7abd4",DEFAULT_LANGUAGE:"en-US"},c=i.BASE_URL,o=i.API_KEY,s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return a.get("".concat(c,"/trending/movie/day?api_key=").concat(o,"&page=").concat(e))},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a.get("".concat(c,"/search/movie?api_key=").concat(o,"&page=").concat(t,"&query=").concat(e))},l=function(e){return a.get("".concat(c,"/movie/").concat(e,"?api_key=").concat(o))},u=function(e){return a.get("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(o))},v=function(e){return a.get("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(o))}}}]);
//# sourceMappingURL=841.b91b8133.chunk.js.map