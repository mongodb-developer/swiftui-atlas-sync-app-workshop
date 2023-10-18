"use strict";(self.webpackChunkswiftui_realm_app=self.webpackChunkswiftui_realm_app||[]).push([[206],{4137:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),c=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=c(r),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(f,i(i({ref:e},p),{},{components:r})):a.createElement(f,i({ref:e},p))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[u]="string"==typeof t?t:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8633:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(4137));r(1048);const o={sidebar_position:0},i="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"This Lab adds Atlas Device Sync to an already existing iOS app that stores data in a local database, so we can store that data in MongoDB Atlas.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/swiftui-atlas-sync-app-lab/docs/intro",draft:!1,editUrl:"https://github.com/mongodb-developer/swiftui-atlas-sync-app-lab/blob/main/docs/intro.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Prerequisites",permalink:"/swiftui-atlas-sync-app-lab/docs/category/prerequisites"}},s={},c=[{value:"Table of Contents",id:"table-of-contents",level:2}],p={toc:c},u="wrapper";function d(t){let{components:e,...r}=t;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"This Lab adds ",(0,n.kt)("a",{parentName:"p",href:"https://www.mongodb.com/atlas/app-services/device-sync"},"Atlas Device Sync")," to an already existing iOS app that stores data in a local database, so we can store that data in MongoDB Atlas."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Lab goals"),(0,n.kt)("th",{parentName:"tr",align:null},"Learn how to add Atlas Device Sync to an existing SwiftUI iOS app that uses the Realm SDK to store data locally"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"What you'll learn"),(0,n.kt)("td",{parentName:"tr",align:null},"How to create a free MongoDB Atlas Cluster")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"How to create an App Service and cofigure it with Atlas Device Sync")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"How to change your existing iOS code to sync data with MongoDB Atlas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Prerequisites"),(0,n.kt)("td",{parentName:"tr",align:null},"See ",(0,n.kt)("a",{parentName:"td",href:"category/prerequisites"},"Prerequisites"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Time to complete"),(0,n.kt)("td",{parentName:"tr",align:null},"3 hours")))),(0,n.kt)("h2",{id:"table-of-contents"},"Table of Contents"))}d.isMDXComponent=!0}}]);