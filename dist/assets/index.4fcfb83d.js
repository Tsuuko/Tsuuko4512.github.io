import{j as l,L as a,u as m,r as d,R as g,a as f,b as x,c as y,O as b}from"./vendor.a5d3b4c1.js";const v=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};v();const n=l.exports.jsx,s=l.exports.jsxs,C=l.exports.Fragment,F=()=>s("div",{children:[n("h1",{children:"Hello!"}),n("p",{children:"This site is under construction..."}),s("ul",{children:[n("li",{children:n(a,{to:"sandbox",children:"sandbox"})}),n("li",{children:n(a,{to:"undefined_route",children:"404"})})]})]}),L=({redirectSec:u,to:o,pageTitle:r,replace:c=!1})=>{const e=m(),[t,i]=d.exports.useState(u);return d.exports.useEffect(()=>{const h=setInterval(()=>{t<0||(i(p=>p-1),t===1&&e({to:o,replace:c}))},1e3);return()=>clearInterval(h)},[t,e,c,o]),s("div",{children:[n("h1",{children:"404 NotFound!"}),s("p",{children:[t,"\u79D2\u5F8C\u306B",r,"\u3078\u79FB\u52D5\u3057\u307E\u3059\u3002"]})]})},j=()=>{const[u,o]=d.exports.useState(0);return s(C,{children:[s("div",{children:["Count: ",u]}),n("button",{type:"button",onClick:()=>o(r=>r-1),children:"-"}),n("button",{type:"button",onClick:()=>o(r=>r+1),children:"+"})]})},O=new g,N=[{path:"/",element:n(F,{})},{path:"/sandbox",element:n(j,{})},{path:"*",element:n(L,{redirectSec:3,to:"/",pageTitle:"\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8"})}],R=f.Fragment;x.render(n(f.StrictMode,{children:n(R,{keys:["control","space"],children:n(y,{routes:N,location:O,children:n(b,{})})})}),document.getElementById("root"));
