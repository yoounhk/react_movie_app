(this.webpackJsonpreact_movie_app=this.webpackJsonpreact_movie_app||[]).push([[0],{28:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(30),c=n.n(i),r=(n(38),n(8)),o=n(2),l=(n(39),n(1));var u=function(){return Object(l.jsxs)("div",{className:"about__container",children:[Object(l.jsx)("span",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur cupiditate dolorem esse eveniet explicabo facere fugiat illo labore laborum, molestias non praesentium quia sequi. Ea iure molestias nesciunt possimus veniam."}),Object(l.jsx)("span",{children:"- Lorem -"})]})},m=n(17),j=n.n(m),d=n(31),p=n(11),b=n(12),v=n(14),h=n(13),O=n(32),x=n.n(O);n(28);var f=function(e){e.id;var t=e.year,n=e.title,a=e.summary,s=e.poster,i=e.genres;return Object(l.jsx)("div",{className:"movie",children:Object(l.jsxs)(r.b,{to:{pathname:"/movie-detail",state:{year:t,title:n,summary:a,poster:s,genres:i}},children:[Object(l.jsx)("img",{src:s,alt:n,title:n}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie_title",children:n}),Object(l.jsx)("h5",{className:"movie__year",children:t}),Object(l.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]}),Object(l.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))})]})]})})},y=(n(65),function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(p.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(j.a.mark((function t(){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:n.map((function(e){return Object(l.jsx)(f,{poster:e.medium_cover_image,summary:e.summary,year:e.year,id:e.id,title:e.title,genres:e.genres},e.id)}))})})}}]),n}(s.a.Component));n(66);var g=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(r.b,{to:"/",children:"Home"}),Object(l.jsx)(r.b,{to:"/about",children:"About"})]})},_=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component);var N=function(){return Object(l.jsxs)(r.a,{children:[Object(l.jsx)(g,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:y}),Object(l.jsx)(o.a,{path:"/about",component:u}),Object(l.jsx)(o.a,{path:"/movie-detail",component:_})]})};c.a.render(Object(l.jsx)(N,{}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.ca19894b.chunk.js.map