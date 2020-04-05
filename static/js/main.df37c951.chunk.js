(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(22)},22:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),r=a.n(l),i=a(4),s=a.n(i),o=a(7),m=a(2),u=a(8),v=a(9),h=a(12),d=a(10),p=a(13),g=a(11),f=a(1),W=a.n(f),b=function(e){var t,a=Object(n.useState)(!1),l=Object(g.a)(a,2),r=l[0],i=l[1],s=e.willWatchClick,o=e.removeWillWatchClick,m=e.removeHandler,u=e.data,v=u.title,h=u.poster_path,d=u.vote_average,p=u.id,f=c.a.createElement("button",{type:"button",className:W()("btn","mt-2",{"btn-success":r,"btn-secondary":!r}),onClick:function(){r?o(e.data):s(e.data),i(!r)}},r?"Remove Will Watch":"Add Will Watch");return c.a.createElement("div",{className:"card",style:{maxWidth:"16rem"}},c.a.createElement("img",{className:"card-img-top",src:(t=h,t?"https://image.tmdb.org/t/p/w500".concat(t):"".concat("/reactwarriors-movies-app","/images/404.jpg")),alt:v}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title",title:v},v.length>15?"".concat(v.slice(0,15),"..."):v),c.a.createElement("p",{className:"mb-0"},"Rating: ",d),f),c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return m(p)}},"Remove movie"))},E=function(e){var t=e.list,a=e.removeWillWatchClick,n=e.willWatchClick,l=e.onDelete;return t.map(function(e){return c.a.createElement("div",{className:"col-4 mb-4",key:e.id},c.a.createElement(b,{data:e,removeHandler:l,removeWillWatchClick:a,willWatchClick:n}))})},k=function(e){return c.a.createElement("section",null,c.a.createElement("div",{className:"text-center h5"},"Will watch: ",e.list.length," movies"),c.a.createElement("ul",{className:"list-group mb-4"},e.list.map(function(e){return c.a.createElement("li",{key:e.id,className:"list-group-item"},e.title)})),c.a.createElement("button",{type:"button",className:"btn btn-primary btn-block",onClick:e.clearWillWatchClick},"Clear list"))},y=a(3),N="popularity.desc",C=function(e){var t,a=e.makeActive,n=e.onChange,l=(t={},Object(y.a)(t,N,"Popularity"),Object(y.a)(t,"release_date.desc","Release date"),Object(y.a)(t,"revenue.desc","Revenue"),t),r=Object.keys(l).map(function(e){return c.a.createElement("li",{className:"nav-item",key:e},c.a.createElement("div",{className:(t=e,W()("btn","nav-link",{active:t===a})),onClick:n(e)},l[e]));var t});return c.a.createElement("ul",{className:"tabs nav nav-pills"},r)},w=function(e){var t=e.total,a=e.currentPage,n=e.changePage,l=t,r=function(e){return W()("page-item",{disabled:a===e})},i=function(e){return W()("page-item",{active:a===e})},s=Object(m.a)(Array(l).keys()).map(function(e){var t=null,r=e+1;return 1!==r&&r!==l&&r!==a&&r!==a-1&&r!==a+1||(t=c.a.createElement("li",{className:i(r),key:r},c.a.createElement("a",{className:"page-link",href:"#".concat(r),onClick:n(r)},r))),t}).filter(function(e,t,a){return e||!e&&a[t-1]}).map(function(e,t){return e||c.a.createElement("li",{className:"page-item disabled",key:"dots-".concat(t)},c.a.createElement("a",{className:"page-link"},"..."))});return c.a.createElement("nav",{"aria-label":"\u0421\u0442\u0430\u0442\u044c\u0438 \u043f\u043e Bootstrap 4"},c.a.createElement("ul",{className:"pagination justify-content-center"},c.a.createElement("li",{className:r(1)},c.a.createElement("a",{className:"page-link",href:"#Prev",onClick:n(a-1)},"Prev")),s,c.a.createElement("li",{className:r(l)},c.a.createElement("a",{className:"page-link",href:"#Next",onClick:n(a+1)},"Next"))))},P=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={sortBy:N,currentPage:1,totalPages:1,movies:[],moviesWillWatch:[]},a.removeMovie=function(e){a.setState({movies:a.state.movies.filter(function(t){return t.id!==e})})},a.addToWillWatch=function(e){a.setState({moviesWillWatch:[].concat(Object(m.a)(a.state.moviesWillWatch),[e])})},a.removeFromWillWatch=function(e){a.setState({moviesWillWatch:a.state.moviesWillWatch.filter(function(t){return t.id!==e.id})})},a.tabChangeHandler=function(e){return function(){a.setState({sortBy:e})}},a.changePage=function(e){return function(t){t.preventDefault(),a.setState({currentPage:e})}},a.clearWillWatch=function(){a.setState({moviesWillWatch:[]})},a}return Object(p.a)(t,e),Object(v.a)(t,[{key:"getMoviesData",value:function(){var e=Object(o.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3","/").concat("discover/movie","?api_key=").concat("3f4ca4f3a9750da53450646ced312397","&sort_by=").concat(this.state.sortBy,"&page=").concat(this.state.currentPage)).then(function(e){return e.json()}).catch(console.error);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=this;this.getMoviesData().then(function(t){var a=t.total_pages,n=t.results;e.setState({movies:n,totalPages:a})})}},{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.state,c=n.sortBy,l=n.currentPage;t.sortBy===c&&t.currentPage===l||this.getMoviesData().then(function(e){var t=e.total_pages,n=e.results;a.setState({movies:n,totalPages:t})})}},{key:"render",value:function(){var e=this.state,t=e.sortBy,a=e.currentPage,n=e.totalPages,l=e.movies,r=e.moviesWillWatch;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 p-4"},c.a.createElement(C,{makeActive:t,onChange:this.tabChangeHandler}))),c.a.createElement("div",{className:"row p-4"},c.a.createElement("div",{className:"col-9"},c.a.createElement("div",{className:"row"},c.a.createElement(E,{list:l,willWatchClick:this.addToWillWatch,removeWillWatchClick:this.removeFromWillWatch,onDelete:this.removeMovie}))),c.a.createElement("div",{className:"col-3"},c.a.createElement(k,{list:r,clearWillWatchClick:this.clearWillWatch}))),c.a.createElement("div",{className:"row p-4"},c.a.createElement("div",{className:"col-12"},c.a.createElement(w,{currentPage:a,total:n,changePage:this.changePage}))))}}]),t}(c.a.Component);a(21);r.a.render(c.a.createElement(P,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.df37c951.chunk.js.map