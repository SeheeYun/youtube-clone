(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c,s,i,a,r,o,l,u,b,j,h=n(0),m=n(1),d=n(8),p=n.n(d),f=(n(19),n(13)),O=(n(20),n(3)),x=Object(O.c)((function(e){var t,n=e.item,c=e.onItemClick,s=Object(m.useCallback)((function(e){var t=(new Date).getTime()-new Date(e).getTime();return(t=parseInt(t/36e5))<24?t+"\uc2dc\uac04":t>=24&&t<168?parseInt(t/24)+"\uc77c":t>=168&&t<672?parseInt(t/168)+"\uc8fc":t>=672&&t<8760?parseInt(t/672)+"\uac1c\uc6d4":t>=8760?parseInt(t/8760)+"\ub144":void 0}),[]);return Object(h.jsx)("li",{className:"item",children:Object(h.jsxs)("div",{className:"item_box",onClick:function(){c(n)},children:[Object(h.jsx)("a",{href:"#",className:"thumb",children:Object(h.jsx)("img",{src:n.snippet.thumbnails.medium.url,alt:"thumb"})}),Object(h.jsxs)("div",{className:"meta",children:[Object(h.jsx)("a",{className:"title",href:"#",children:n.snippet.title}),Object(h.jsx)("div",{className:"channel_title",children:n.snippet.channelTitle}),Object(h.jsxs)("div",{className:"meta_data item_meta_data",children:[Object(h.jsxs)("span",{children:["\uc870\ud68c\uc218 ",(t=n.statistics.viewCount,t>=1e4?parseInt(t/1e4)+"\ub9cc":t),"\ud68c"]}),Object(h.jsxs)("span",{children:[s(n.snippet.publishedAt)," \uc804"]})]})]})]})})})),v=Object(O.c)((function(e){var t=e.items,n=e.onItemClick;return Object(h.jsx)("ul",{className:"item_list",children:t.map((function(e){return Object(h.jsx)(x,{item:e,onItemClick:n},e.id+t.indexOf(e))}))})})),g=Object(O.c)((function(e){var t=e.onSubmit,n=e.inputRef,c=e.onSearchBar;return Object(h.jsxs)("header",{className:"header",children:[Object(h.jsxs)("a",{href:"https://seheeyun.github.io/youtube-clone/",className:"logo",children:[Object(h.jsx)("img",{src:"./images/logo.png",alt:"logo"}),Object(h.jsx)("span",{children:"YunTube"})]}),Object(h.jsx)("div",{className:"search_box",children:Object(h.jsxs)("form",{className:"search_form",onSubmit:t,children:[Object(h.jsx)("button",{type:"button",title:"\ub4a4\ub85c",className:"back_btn",onClick:c,children:Object(h.jsx)("i",{className:"fas fa-arrow-left"})}),Object(h.jsx)("input",{ref:n,stype:"text",placeholder:"\uac80\uc0c9"}),Object(h.jsx)("button",{type:"submit",title:"\uac80\uc0c9",className:"search_btn",children:Object(h.jsx)("i",{className:"fas fa-search"})})]})}),Object(h.jsxs)("div",{className:"top_bar",children:[Object(h.jsx)("button",{type:"button",title:"\uac80\uc0c9",className:"search_btn",onClick:c,children:Object(h.jsx)("i",{className:"fas fa-search"})}),Object(h.jsx)("button",{title:"\ub85c\uadf8\uc778",className:"avatar_btn",children:Object(h.jsx)("i",{className:"fas fa-user"})})]})]})})),k=Object(O.c)((function(e){var t=e.item;return Object(h.jsxs)("div",{className:"player_box",children:[Object(h.jsx)("div",{className:"player_video_box",children:Object(h.jsx)("div",{className:"player_video",children:Object(h.jsx)("iframe",{title:"video",id:"player",type:"text/html",allowFullScreen:!0,allow:"autoplay",src:"https://www.youtube.com/embed/".concat(t.id,"?autoplay=1")})})}),Object(h.jsxs)("div",{className:"video_info_box",children:[Object(h.jsxs)("div",{className:"video_info",children:[Object(h.jsx)("h1",{className:"title",children:t.snippet.title}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"meta_data",children:[Object(h.jsxs)("span",{children:["\uc870\ud68c\uc218 ",parseInt(t.statistics.viewCount).toLocaleString(),"\ud68c"]}),Object(h.jsx)("span",{children:t.snippet.publishedAt.substr(0,10)})]}),Object(h.jsxs)("div",{className:"like_disLike",children:[Object(h.jsxs)("button",{title:"\uc88b\uc544\uc694",children:[Object(h.jsx)("i",{className:"fas fa-thumbs-up"})," ",t.statistics.likeCount]}),Object(h.jsxs)("button",{title:"\uc2eb\uc5b4\uc694",children:[Object(h.jsx)("i",{className:"fas fa-thumbs-down"})," ",t.statistics.dislikeCount]})]})]})]}),Object(h.jsxs)("div",{className:"video_meta",children:[Object(h.jsx)("div",{className:"meta_thumb",children:t.snippet.channelTitle.substr(0,1)}),Object(h.jsxs)("div",{className:"meta",children:[Object(h.jsx)("span",{children:t.snippet.channelTitle}),Object(h.jsx)("span",{children:t.snippet.description})]})]})]})]})})),y=Object(O.b)("store")(Object(O.c)((function(e){var t=e.store,n=Object(m.useRef)(),c=Object(m.useRef)(),s=Object(m.useCallback)((function(e){e.preventDefault(),window.scrollTo({top:0});var c=n.current.value;c&&t.addPage(c),i()}),[]),i=Object(m.useCallback)((function(){document.querySelector(".search_box").classList.toggle("on_search_box")}),[]);Object(m.useEffect)((function(){t.addPage(),t.loaded(!0)}),[t]),Object(m.useEffect)((function(){var e;return c.current&&(e=new IntersectionObserver(a,{threshold:0})).observe(c.current),function(){return e&&e.disconnect()}}),[c.current]);var a=function(e){Object(f.a)(e,1)[0].isIntersecting&&(n.current.value?t.addNextPage(n.current.value):t.addNextPage())};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{onSubmit:s,onSearchBar:i,inputRef:n}),Object(h.jsxs)("div",{className:"content ".concat(t.item?"on_player":""),children:[t.item&&Object(h.jsx)(k,{item:t.item}),t.items&&Object(h.jsx)(v,{items:t.items,onItemClick:t.onItemClick}),t.load&&Object(h.jsx)("div",{ref:c,className:"load"})]})]})}))),N=(n(21),n(5)),_=n(9),w=n(12),I=n(4),P=(n(25),n(2)),T=n(6),C=n.n(T),R=n(11),S=new function e(t){var n=this;Object(_.a)(this,e),this.fetchData=function(){var e=Object(R.a)(C.a.mark((function e(t,c){var s,i,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=encodeURIComponent,i=Object.keys(t).map((function(e){return s(e)+"="+s(t[e])})).join("&"),e.prev=2,e.next=5,fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&maxResults=20&key=".concat(n.key,"&")+i+(c?"&pageToken=".concat(c):""),n.getRequestOptions);case 5:return a=e.sent,e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",console.log("error",e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}(),this.getItemsId=function(){var e=Object(R.a)(C.a.mark((function e(t,c){var s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=".concat(t,"&type=video&key=").concat(n.key)+(c?"&pageToken=".concat(c):""),n.getRequestOptions);case 3:return s=e.sent,e.next=6,s.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",console.log("error",e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),this.key=t,this.getRequestOptions={method:"GET",redirect:"follow"}}("AIzaSyAi9SltLLmkqtHmP_KFFSONcQ2wYTFw_V4"),D=new(c=P.o.ref,s=P.o.ref,i=function(){function e(){Object(_.a)(this,e),Object(N.a)(this,"_items",a,this),Object(N.a)(this,"item",r,this),Object(N.a)(this,"addPage",o,this),Object(N.a)(this,"addNextPage",l,this),Object(N.a)(this,"onItemClick",u,this),Object(N.a)(this,"load",b,this),Object(N.a)(this,"loaded",j,this),Object(P.n)(this),this.popular={chart:"mostPopular",regionCode:"KR"},this.search={id:null},this.nextPageToken=null}return Object(w.a)(e,[{key:"items",get:function(){return Object(P.q)(this._items)}}]),e}(),a=Object(I.a)(i.prototype,"_items",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(I.a)(i.prototype,"items",[P.g],Object.getOwnPropertyDescriptor(i.prototype,"items"),i.prototype),r=Object(I.a)(i.prototype,"item",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),o=Object(I.a)(i.prototype,"addPage",[P.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){t?S.getItemsId(t).then((function(t){return Object(P.p)((function(){e.nextPageToken=t.nextPageToken})),t.items.map((function(e){return e.id.videoId})).join()})).then((function(t){e.search.id=t,S.fetchData(e.search).then((function(t){Object(P.p)((function(){e._items=t.items,e.onItemClick(null)}))}))})):S.fetchData(e.popular).then((function(t){Object(P.p)((function(){e._items=t.items,e.nextPageToken=t.nextPageToken}))}))}}}),l=Object(I.a)(i.prototype,"addNextPage",[P.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){t?S.getItemsId(t,e.nextPageToken).then((function(t){return Object(P.p)((function(){e.nextPageToken=t.nextPageToken})),t.items.map((function(e){return e.id.videoId})).join()})).then((function(t){e.search.id=t,S.fetchData(e.search).then((function(t){return Object(P.p)((function(){e._items=e._items.concat(t.items)}))}))})):S.fetchData(e.popular,e.nextPageToken).then((function(t){Object(P.p)((function(){e._items=e._items.concat(t.items),e.nextPageToken=t.nextPageToken}))}))}}}),u=Object(I.a)(i.prototype,"onItemClick",[P.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.item=t}}}),b=Object(I.a)(i.prototype,"load",[P.o],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),j=Object(I.a)(i.prototype,"loaded",[P.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.load=!!t}}}),i);p.a.render(Object(h.jsx)(O.a,{store:D,children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.272df209.chunk.js.map