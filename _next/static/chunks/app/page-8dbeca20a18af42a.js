(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{950:function(e,s,t){Promise.resolve().then(t.bind(t,5946))},5946:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return u}});var n=t(3827);t(5024);var i=t(4090);function c(e){return(0,n.jsxs)("label",{className:"kite-checkbox",children:[(0,n.jsx)("input",{id:"".concat(e.size,"m"),type:"checkbox",onChange:function(s){let t=s.target.checked,n=e.kites;t&&!n.includes(e.size)?e.setKites([...n,e.size]):!t&&n.includes(e.size)&&e.setKites(n.filter(s=>s!==e.size))}}),e.size,"m"]})}var a=function(e){let s=e.sizesAvailable.map(function(s){return(0,n.jsx)(c,{size:s,kites:e.kites,setKites:e.setKites},s)});return(0,n.jsx)("div",{className:"kites-grid",children:s})};function r(e){return(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{className:"close-container",children:(0,n.jsx)("button",{className:"close-button",children:"X"})}),(0,n.jsx)("div",{className:"city",children:(0,n.jsx)("div",{className:"city-grid",children:(0,n.jsxs)("h2",{className:"city-name","data-name":"${name},${sys.country}",children:[(0,n.jsx)("span",{children:'"test"'}),(0,n.jsx)("sup",{children:'$"test c"'})]})})})]})}var l=function(){return(0,n.jsx)("section",{className:"ajax-section",children:(0,n.jsx)("div",{className:"container",children:[].map(e=>(0,n.jsx)(r,{data:"test"}))})})};function u(){let[e,s]=(0,i.useState)([]),[t,c]=(0,i.useState)(0),[r,u]=(0,i.useState)([]);return(0,n.jsxs)("body",{children:[(0,n.jsxs)("section",{className:"top-banner",children:[(0,n.jsxs)("div",{className:"header-grid",children:[(0,n.jsx)("h1",{className:"heading",children:"Should I go Kiting?"}),(0,n.jsxs)("form",{children:[(0,n.jsx)("input",{type:"text",className:"input-city",placeholder:"Search for a city",autoFocus:!0}),(0,n.jsx)("button",{type:"submit",children:"SUBMIT"}),(0,n.jsx)("span",{className:"msg"})]})]}),(0,n.jsxs)("div",{className:"header-grid",children:[(0,n.jsx)("h2",{className:"kites-heading",children:"Kite Quiver"}),(0,n.jsx)(a,{sizesAvailable:[4,5,6,7,8,9,10,11,12,13,15,17],kites:e,setKites:s}),(0,n.jsx)("input",{type:"text",className:"input-weight",placeholder:"Enter weight in kgs",onBlur:s=>{let t=parseInt(s.currentTarget.value);if(!Number.isInteger(t)){s.currentTarget.value="",s.currentTarget.placeholder="Enter a number!";return}s.currentTarget.value=t+"kgs",c(t),console.log(t),console.log("kites: "+e)}})]})]}),(0,n.jsx)(l,{})]})}},5024:function(){}},function(e){e.O(0,[971,69,744],function(){return e(e.s=950)}),_N_E=e.O()}]);