"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[598],{8598:(e,s,a)=>{a.d(s,{default:()=>f});var t=a(5155),l=a(2115),r=a(6874),i=a.n(r),n=a(5695),c=a(1485);let o=()=>{let[e,s]=(0,l.useState)(!1),[a,r]=(0,l.useState)(!1),[o,d]=(0,l.useState)(!1),x=(0,n.usePathname)(),h=[{name:"料理",englishName:"CUISINE",path:"/cuisine"},{name:"精神",englishName:"PHILOSOPHY",path:"/philosophy"},{name:"匠",englishName:"MASTERS",path:"/masters"},{name:"体験",englishName:"EXPERIENCE",path:"/experience"},{name:"予約",englishName:"RESERVATIONS",path:"/reservations"}];return(0,l.useEffect)(()=>{let e=()=>{s(window.scrollY>20)},a=()=>{d(window.innerWidth<1024)};return a(),window.addEventListener("scroll",e),window.addEventListener("resize",a),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",a)}},[]),(0,l.useEffect)(()=>{!o&&a&&(r(!1),document.body.style.overflow="")},[o,a]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("header",{className:"fixed top-0 left-0 w-full z-50 transition-all duration-700 ".concat(e?"py-4 backdrop-blur-md bg-black bg-opacity-70":"py-6"),children:(0,t.jsxs)("div",{className:"container mx-auto px-6 md:px-12 flex justify-between items-center",children:[(0,t.jsx)(i(),{href:"/",className:"flex items-center z-50",children:(0,t.jsxs)("div",{className:"flex flex-col items-start",children:[(0,t.jsx)("span",{className:"text-2xl md:text-3xl font-bold tracking-tighter text-white",children:e?c.U_.name:""}),!e&&(0,t.jsx)("span",{className:"text-xs uppercase tracking-widest text-white opacity-80",children:"刀と寿司の道"})]})}),(0,t.jsx)("nav",{className:"hidden lg:flex space-x-10",children:h.map(e=>(0,t.jsxs)(i(),{href:e.path,className:"group flex flex-col items-center relative overflow-hidden ".concat(x===e.path?"text-samurai-red":"text-white"),children:[(0,t.jsx)("span",{className:"text-xs font-light tracking-wider opacity-80 mb-1",children:e.name}),(0,t.jsx)("span",{className:"text-sm tracking-wider",children:e.englishName}),(0,t.jsx)("span",{className:"absolute bottom-0 left-0 w-full h-[1px] bg-samurai-red transform origin-left transition-transform duration-500 ease-out ".concat(x===e.path?"scale-x-100":"scale-x-0 group-hover:scale-x-100")})]},e.path))}),o&&(0,t.jsxs)("button",{className:"hamburger ".concat(a?"open":""),onClick:()=>{r(!a),document.body.style.overflow=a?"":"hidden"},"aria-label":"Toggle menu","aria-expanded":a,children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]})]})}),o&&(0,t.jsx)("div",{className:"mobile-menu ".concat(a?"open":""),children:(0,t.jsxs)("div",{className:"container h-full flex flex-col justify-center items-center",children:[h.map((e,s)=>(0,t.jsxs)(i(),{href:e.path,className:"mobile-menu-link flex flex-col items-center py-5",onClick:()=>r(!1),style:{transitionDelay:"".concat(100*s,"ms")},children:[(0,t.jsx)("span",{className:"text-sm font-light mb-1 text-gray-400",children:e.name}),(0,t.jsx)("span",{className:"text-2xl md:text-3xl font-bold ".concat(x===e.path?"text-samurai-red":"text-white"),children:e.englishName})]},e.path)),(0,t.jsxs)("div",{className:"mt-12 flex flex-col items-center text-sm text-gray-400",children:[(0,t.jsx)("p",{children:c.U_.address}),(0,t.jsx)("p",{children:c.U_.phone})]}),(0,t.jsxs)("div",{className:"flex space-x-6 mt-8",children:[(0,t.jsx)("a",{href:c.U_.social.instagram,target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-samurai-red transition-colors",children:(0,t.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",clipRule:"evenodd"})})}),(0,t.jsx)("a",{href:c.U_.social.facebook,target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-samurai-red transition-colors",children:(0,t.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})})}),(0,t.jsx)("a",{href:c.U_.social.twitter,target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-samurai-red transition-colors",children:(0,t.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 013.804 9.01v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})})})]})]})})]})};var d=a(9911),x=a(4717),h=a(6386),m=a(260);let u=e=>{let{children:s,className:a="",id:t,tag:r="div",animation:i="fade",duration:n=800,delay:c=0,stagger:o=100,once:d=!0,rootMargin:x="0px",threshold:h=.1}=e,u=(0,l.useRef)(null);return(0,l.useEffect)(()=>{if(u.current)return(0,m.KE)(u.current,{animation:i,duration:n,delay:c,stagger:o,once:d,rootMargin:x,threshold:h})},[i,n,c,o,d,x,h]),l.createElement(r,{ref:u,className:a,id:t,style:{opacity:0}},s)},p=()=>{let e=new Date().getFullYear(),s=(0,l.useRef)(null);return(0,t.jsx)("footer",{ref:s,className:"bg-gray-900 text-white w-full relative overflow-hidden py-16",style:{opacity:1,willChange:"opacity"},children:(0,t.jsxs)("div",{className:"container mx-auto px-4 py-12 relative z-10",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[(0,t.jsxs)(u,{animation:"slide-up",delay:0,duration:800,className:"relative",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold mb-4 text-red-500",children:"Sakura Sushi"}),(0,t.jsx)("p",{className:"text-gray-300 mb-4",children:"Experience authentic Japanese cuisine with our carefully crafted dishes made from the freshest ingredients."}),(0,t.jsxs)("div",{className:"flex space-x-4",children:[(0,t.jsx)(i(),{href:"#","aria-label":"Instagram",className:"text-gray-300 hover:text-red-500 transition-colors",children:(0,t.jsx)(d.ao$,{className:"h-5 w-5"})}),(0,t.jsx)(i(),{href:"#","aria-label":"Facebook",className:"text-gray-300 hover:text-red-500 transition-colors",children:(0,t.jsx)(d.iYk,{className:"h-5 w-5"})}),(0,t.jsx)(i(),{href:"#","aria-label":"Twitter",className:"text-gray-300 hover:text-red-500 transition-colors",children:(0,t.jsx)(d.feZ,{className:"h-5 w-5"})})]})]}),(0,t.jsxs)(u,{animation:"slide-up",delay:100,duration:800,className:"relative",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold mb-4 text-red-500",children:"Quick Links"}),(0,t.jsxs)("ul",{className:"space-y-2",children:[(0,t.jsx)("li",{children:(0,t.jsx)(i(),{href:"/",className:"text-gray-300 hover:text-white hover:underline transition-colors",children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i(),{href:"/menu",className:"text-gray-300 hover:text-white hover:underline transition-colors",children:"Menu"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i(),{href:"/reservation",className:"text-gray-300 hover:text-white hover:underline transition-colors",children:"Reservations"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i(),{href:"/about",className:"text-gray-300 hover:text-white hover:underline transition-colors",children:"About Us"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i(),{href:"/contact",className:"text-gray-300 hover:text-white hover:underline transition-colors",children:"Contact"})})]})]}),(0,t.jsxs)(u,{animation:"slide-up",delay:200,duration:800,className:"relative",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold mb-4 text-red-500",children:"Hours"}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-400",children:"Monday - Thursday"}),(0,t.jsx)("p",{className:"text-gray-300",children:"11:00 AM - 10:00 PM"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-400",children:"Friday - Saturday"}),(0,t.jsx)("p",{className:"text-gray-300",children:"11:00 AM - 11:00 PM"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm text-gray-400",children:"Sunday"}),(0,t.jsx)("p",{className:"text-gray-300",children:"12:00 PM - 9:00 PM"})]})]})]}),(0,t.jsxs)(u,{animation:"slide-up",delay:300,duration:800,className:"relative",children:[(0,t.jsx)("h3",{className:"text-xl font-semibold mb-4 text-red-500",children:"Contact Us"}),(0,t.jsxs)("ul",{className:"space-y-3",children:[(0,t.jsxs)("li",{className:"flex items-start",children:[(0,t.jsx)(x.XOr,{className:"h-5 w-5 text-red-500 mt-0.5 mr-2"}),(0,t.jsxs)("span",{className:"text-gray-300",children:["123 Cherry Blossom St,",(0,t.jsx)("br",{}),"Tokyo District"]})]}),(0,t.jsxs)("li",{className:"flex items-center",children:[(0,t.jsx)(x.EWW,{className:"h-5 w-5 text-red-500 mr-2"}),(0,t.jsx)("span",{className:"text-gray-300",children:"+1 (555) 123-4567"})]}),(0,t.jsxs)("li",{className:"flex items-center",children:[(0,t.jsx)(x.d8c,{className:"h-5 w-5 text-red-500 mr-2"}),(0,t.jsx)("span",{className:"text-gray-300",children:"info@sakurasushi.com"})]})]})]})]}),(0,t.jsx)("div",{className:"text-center mt-16",children:(0,t.jsx)(h.P.div,{className:"text-gray-400 text-sm",whileHover:{scale:1.05},children:(0,t.jsxs)("p",{children:["\xa9 ",e," Sakura Sushi. All rights reserved."]})})})]})})},f=e=>{let{children:s}=e,a=(0,n.usePathname)();return(0,l.useEffect)(()=>{window.scrollTo(0,0),document.body.style.overflow="auto",document.documentElement.style.overflow="auto";let e=document.querySelector("footer");e&&(e.style.display="block",e.style.visibility="visible",e.style.opacity="1",e.style.position="relative",e.style.zIndex="50",e.style.backgroundColor="#000",e.style.width="100%",e.style.minHeight="200px");let s=document.querySelector(".page-wrapper");s&&(s.style.display="flex",s.style.flexDirection="column",s.style.minHeight="100vh");let a=document.querySelector("main");a&&a.classList.add("flex-1")},[a]),(0,t.jsxs)("div",{className:"page-wrapper flex flex-col min-h-screen",style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[(0,t.jsx)(o,{}),(0,t.jsx)("main",{className:"flex-1",children:s}),(0,t.jsx)(p,{})]})}}}]);