(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{BM80:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c}));var o=n("hosL"),r=n("NWYn"),i=n.n(r),c=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).state={time:Date.now(),count:10},e.updateTime=function(){e.setState({time:Date.now()})},e.increment=function(){e.setState({count:e.state.count+1})},e}var n,r;r=t,(n=e).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var c=e.prototype;return c.componentDidMount=function(){this.timer=setInterval(this.updateTime,1e3)},c.componentWillUnmount=function(){clearInterval(this.timer)},c.render=function(t,e){var n=t.user,r=e.time,c=e.count;return Object(o.h)("div",{class:i.a.profile},Object(o.h)("h1",null,"Profile: ",n),Object(o.h)("p",null,"This is the user profile for a user named ",n,"."),Object(o.h)("div",null,"Current time: ",new Date(r).toLocaleString()),Object(o.h)("p",null,Object(o.h)("button",{onClick:this.increment},"Click Me")," ","Clicked ",c," times."))},e}(o.Component)},NWYn:function(t){t.exports={profile:"profile__t2Dqz"}}}]);
//# sourceMappingURL=route-profile.chunk.7d284.js.map