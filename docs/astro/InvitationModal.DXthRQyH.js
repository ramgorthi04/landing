import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r as i}from"./index.DhYZZe0J.js";import{A as u,T as f}from"./TailcastLogo.Ct6vCHeo.js";import{m as p}from"./motion.BG6ne5MB.js";const h=()=>e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"currentColor",children:e.jsx("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})}),y=({isOpen:c,setIsOpen:r})=>{const[a,l]=i.useState(""),[n,o]=i.useState(!1),[d,s]=i.useState(""),x=async t=>{t.preventDefault(),o(!0);try{(await fetch("/api/join-waitlist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a})})).ok?(s("Thank you for joining our waitlist!"),l("")):s("An error occurred. Please try again.")}catch{s("An error occurred. Please try again.")}o(!1)};return e.jsx(u,{children:c&&e.jsx(p.div,{initial:{opacity:0,zIndex:50},animate:{opacity:1,zIndex:50},exit:{opacity:0},transition:{duration:.1},children:e.jsx("div",{className:"w-full h-full bg-bgDarkTransparentDarker fixed top-0 left-0 flex z-50 justify-center items-center",onClick:()=>r(!1),children:e.jsx("div",{className:"w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-bgDarkTransparentLighter main-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 fixed mx-auto z-50",onClick:t=>t.stopPropagation(),children:e.jsxs("div",{className:"flex relative",children:[e.jsxs("div",{className:"w-1/2 hidden lg:inline",children:[e.jsx("h2",{className:"mt-6 mb-2 text-5xl font-bold tracking-normal text-primaryText",children:"Join the waitlist"}),e.jsx("h2",{className:"text-5xl font-bold tracking-normal text-secondaryColor",children:"We'll reach out"})]}),e.jsxs("div",{className:"w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0",children:[e.jsxs("div",{className:"flex inline lg:hidden justify-start items-center grow basis-0 mb-8 pr-6",children:[e.jsx("div",{className:"text-white mr-2 text-8xl",children:e.jsx(f,{})}),e.jsx("div",{className:"text-white font-['Inter'] font-bold text-3xl",children:"Tailcast"})]}),e.jsx("h3",{className:"mb-7 text-2xl text-primaryText font-bold leading-snug text-center",children:d||"Join our waitlist for early access"}),e.jsx("form",{onSubmit:x,className:"w-full",children:e.jsxs("div",{className:"flex flex-wrap -m-2",children:[e.jsx("div",{className:"w-full sm:w-4/5 p-2 mx-auto",children:e.jsx("input",{className:"px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300",id:"emailInput",type:"email",placeholder:"Your email address",value:a,onChange:t=>l(t.target.value),required:!0})}),e.jsx("div",{className:"w-full sm:w-4/5 p-2 mt-4 mx-auto",children:e.jsx("button",{className:"py-4 px-6 w-full text-primaryText font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-primaryColor hover:bg-[#7274f3] transition ease-in-out duration-200",type:"submit",disabled:n,"aria-label":"Join waitlist",children:n?"Joining...":"Join Waitlist"})})]})})]}),e.jsx("div",{className:"fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer text-[rgb(255,255,255,0.7)] hover:text-white transition",onClick:()=>r(!1),children:e.jsx(h,{})})]})})})})})};export{y as I};
