(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c,s,i,a,r,o,l,u,b=n(0),j=n(1),m=n(8),h=n.n(m),d=(n(18),n(19),n(3)),p=Object(d.c)((function(e){var t=e.item,n=e.diff,c=e.view,s=e.onItemClick;return Object(b.jsx)("li",{className:"item",children:Object(b.jsxs)("div",{className:"item_box",onClick:function(){s(t)},children:[Object(b.jsx)("a",{href:"#",className:"thumb",children:Object(b.jsx)("img",{src:t.snippet.thumbnails.medium.url,alt:"thumb"})}),Object(b.jsxs)("div",{className:"meta",children:[Object(b.jsx)("a",{className:"title",href:"#",children:t.snippet.title}),Object(b.jsx)("div",{className:"channel_title",children:t.snippet.channelTitle}),Object(b.jsxs)("div",{className:"meta_data item_meta_data",children:[Object(b.jsxs)("span",{children:["\uc870\ud68c\uc218 ",c,"\ud68c"]}),Object(b.jsxs)("span",{children:[n," \uc804"]})]})]})]})})})),f=Object(d.c)((function(e){var t=e.items,n=e.onItemClick,c=Object(j.useCallback)((function(e){var t=e.statistics.viewCount;if(t>=1e4)return parseInt(t/1e4)+"\ub9cc"}),[]),s=Object(j.useCallback)((function(e){var t=(new Date).getTime()-new Date(e.snippet.publishedAt).getTime();return(t=parseInt(t/36e5%24))>=24?"1\uc77c":t+"\uc2dc\uac04"}),[]);return Object(b.jsx)("ul",{className:"item_list",children:t.map((function(e){return Object(b.jsx)(p,{item:e,diff:s(e),view:e.statistics&&c(e),onItemClick:n},e.id+t.indexOf(e))}))})})),O=Object(d.c)((function(e){var t=e.onSubmit,n=e.inputRef,c=e.onSearchBar;return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsxs)("a",{href:"https://seheeyun.github.io/youtube-clone/",className:"logo",children:[Object(b.jsx)("img",{src:"./images/logo.png",alt:"logo"}),Object(b.jsx)("span",{children:"YunTube"})]}),Object(b.jsx)("div",{className:"search_box",children:Object(b.jsxs)("form",{className:"search_form",onSubmit:t,children:[Object(b.jsx)("button",{type:"button",className:"back_btn",onClick:c,children:Object(b.jsx)("i",{className:"fas fa-arrow-left"})}),Object(b.jsx)("input",{ref:n,stype:"text",placeholder:"\uac80\uc0c9"}),Object(b.jsx)("button",{type:"submit",className:"search_btn",children:Object(b.jsx)("i",{className:"fas fa-search"})})]})}),Object(b.jsxs)("div",{className:"top_bar",children:[Object(b.jsx)("button",{type:"button",className:"search_btn",onClick:c,children:Object(b.jsx)("i",{className:"fas fa-search"})}),Object(b.jsx)("button",{className:"avatar_btn",children:Object(b.jsx)("i",{className:"fas fa-user"})})]})]})})),x=Object(d.c)((function(e){var t=e.item;return Object(b.jsxs)("div",{className:"player_box",children:[Object(b.jsx)("div",{className:"player_video_box",children:Object(b.jsx)("div",{className:"player_video",children:Object(b.jsx)("iframe",{title:"video",id:"player",type:"text/html",allowFullScreen:!0,src:"https://www.youtube.com/embed/".concat(t.id)})})}),Object(b.jsxs)("div",{className:"video_info_box",children:[Object(b.jsxs)("div",{className:"video_info",children:[Object(b.jsx)("h1",{className:"title",children:t.snippet.title}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"meta_data",children:[Object(b.jsxs)("span",{children:["\uc870\ud68c\uc218 ",parseInt(t.statistics.viewCount).toLocaleString(),"\ud68c"]}),Object(b.jsx)("span",{children:t.snippet.publishedAt.substr(0,10)})]}),Object(b.jsxs)("div",{className:"like_disLike",children:[Object(b.jsxs)("button",{children:[Object(b.jsx)("i",{className:"fas fa-thumbs-up"})," ",t.statistics.likeCount]}),Object(b.jsxs)("button",{children:[Object(b.jsx)("i",{className:"fas fa-thumbs-down"})," ",t.statistics.dislikeCount]})]})]})]}),Object(b.jsxs)("div",{className:"video_meta",children:[Object(b.jsx)("div",{className:"meta_thumb",children:t.snippet.channelTitle.substr(0,1)}),Object(b.jsxs)("div",{className:"meta",children:[Object(b.jsx)("span",{children:t.snippet.channelTitle}),Object(b.jsx)("span",{children:t.snippet.description})]})]})]})]})})),v=Object(d.b)("store")(Object(d.c)((function(e){var t=e.store,n=Object(j.useRef)(),c=Object(j.useCallback)((function(e){e.preventDefault(),window.scrollTo({top:0});var c=n.current.value;c&&t.addPage(c),s()}),[]),s=Object(j.useCallback)((function(){document.querySelector(".search_box").classList.toggle("on_search_box")}),[]);Object(j.useEffect)((function(){t.addPage()}),[t]),Object(j.useEffect)((function(){return window.addEventListener("scroll",i,{passive:!0}),function(){return window.removeEventListener("scroll",i,{passive:!0})}}),[]);var i=function(){var e=document.documentElement;e.scrollTop+e.clientHeight===e.scrollHeight&&(n.current.value?t.addNextPage(n.current.value):t.addNextPage())};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{onSubmit:c,onSearchBar:s,inputRef:n}),Object(b.jsxs)("div",{className:"content ".concat(t.item?"on_player":""),children:[t.item&&Object(b.jsx)(x,{item:t.item}),t.items&&Object(b.jsx)(f,{items:t.items,onItemClick:t.onItemClick})]})]})}))),g=(n(20),n(5)),k=n(9),N=n(12),y=n(4),_=(n(24),n(2)),w=n(6),T=n.n(w),I=n(11),P=new function e(t){var n=this;Object(k.a)(this,e),this.fetchData=function(){var e=Object(I.a)(T.a.mark((function e(t,c){var s,i,a;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=encodeURIComponent,i=Object.keys(t).map((function(e){return s(e)+"="+s(t[e])})).join("&"),e.prev=2,e.next=5,fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&maxResults=20&key=".concat(n.key,"&")+i+(c?"&pageToken=".concat(c):""),n.getRequestOptions);case 5:return a=e.sent,e.next=8,a.json();case 8:return e.abrupt("return",e.sent);case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",console.log("error",e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}(),this.getItemsId=function(){var e=Object(I.a)(T.a.mark((function e(t,c){var s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=".concat(t,"&type=video&key=").concat(n.key)+(c?"&pageToken=".concat(c):""),n.getRequestOptions);case 3:return s=e.sent,e.next=6,s.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",console.log("error",e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),this.key=t,this.getRequestOptions={method:"GET",redirect:"follow"}}("AIzaSyAi9SltLLmkqtHmP_KFFSONcQ2wYTFw_V4"),C=new(c=_.o.ref,s=_.o.ref,i=function(){function e(){Object(k.a)(this,e),Object(g.a)(this,"_items",a,this),Object(g.a)(this,"item",r,this),Object(g.a)(this,"addPage",o,this),Object(g.a)(this,"addNextPage",l,this),Object(g.a)(this,"onItemClick",u,this),Object(_.n)(this),this.popular={chart:"mostPopular",regionCode:"KR"},this.search={id:null},this.nextPageToken=null}return Object(N.a)(e,[{key:"items",get:function(){return Object(_.q)(this._items)}}]),e}(),a=Object(y.a)(i.prototype,"_items",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Object(y.a)(i.prototype,"items",[_.g],Object.getOwnPropertyDescriptor(i.prototype,"items"),i.prototype),r=Object(y.a)(i.prototype,"item",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),o=Object(y.a)(i.prototype,"addPage",[_.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){t?P.getItemsId(t).then((function(t){return Object(_.p)((function(){e.nextPageToken=t.nextPageToken})),t.items.map((function(e){return e.id.videoId})).join()})).then((function(t){e.search.id=t,P.fetchData(e.search).then((function(t){Object(_.p)((function(){e._items=t.items,e.onItemClick(null)}))}))})):P.fetchData(e.popular).then((function(t){Object(_.p)((function(){e._items=t.items,e.nextPageToken=t.nextPageToken}))}))}}}),l=Object(y.a)(i.prototype,"addNextPage",[_.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){t?P.getItemsId(t,e.nextPageToken).then((function(t){return Object(_.p)((function(){e.nextPageToken=t.nextPageToken})),t.items.map((function(e){return e.id.videoId})).join()})).then((function(t){e.search.id=t,P.fetchData(e.search).then((function(t){return Object(_.p)((function(){e._items=e._items.concat(t.items)}))}))})):P.fetchData(e.popular,e.nextPageToken).then((function(t){Object(_.p)((function(){e._items=e._items.concat(t.items),e.nextPageToken=t.nextPageToken}))}))}}}),u=Object(y.a)(i.prototype,"onItemClick",[_.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.item=t}}}),i);h.a.render(Object(b.jsx)(d.a,{store:C,children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.b20a536b.chunk.js.map