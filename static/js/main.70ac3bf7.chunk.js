(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),o=a(6),i=a.n(o),l=a(1),r=a(2),s=a(4),m=a(3),u=function(e){var t=e.text,a=e.styles,c=e.onclick;return n.a.createElement("button",{type:"submit",onClick:c,className:a},t)},k=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={time:(new Date).toLocaleTimeString()},e.timeInterval=0,e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.timeUpdater()}},{key:"componentDidUpdate",value:function(e){e.clockName!==this.props.clockName&&console.log("The Clock was renamed from"+" ".concat(e.clockName," to ").concat(this.props.clockName))}},{key:"timeUpdater",value:function(){var e=this;this.timeInterval=setInterval((function(){e.setState({time:(new Date).toLocaleTimeString()})}),1e3)}},{key:"render",value:function(){var e=this.state.time;return n.a.createElement("p",{className:"subtitle"},"Current time:\n        ".concat(e))}}]),a}(n.a.Component),d=(a(12),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),o=0;o<c;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={clockName:"0",isClockVisible:!0},e.hideClock=function(){e.setState({isClockVisible:!1})},e.showClock=function(){e.setState({isClockVisible:!0})},e.randomName=function(){e.setState({clockName:"".concat(Math.round(100*Math.random()))})},e}return Object(r.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"card is-flex-direction-column has-text-centered"},n.a.createElement("h1",{className:"title "},"React clock"),this.state.isClockVisible&&n.a.createElement(k,{clockName:this.state.clockName}),n.a.createElement("div",{className:"clock__buttons"},n.a.createElement(u,{text:"Show time",styles:"button is-ligth is-rounded",onclick:this.showClock}),n.a.createElement(u,{text:"Hide time",styles:"button is-dark is-rounded",onclick:this.hideClock}),n.a.createElement(u,{text:"Set random name",styles:"button is-black is-rounded",onclick:this.randomName}))))}}]),a}(n.a.Component));i.a.render(n.a.createElement(d,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.70ac3bf7.chunk.js.map