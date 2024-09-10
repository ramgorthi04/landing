import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r as o}from"./index.DhYZZe0J.js";import{T as c,A as d}from"./TailcastLogo.Ct6vCHeo.js";import{m as a}from"./motion.BG6ne5MB.js";const n=[],h=()=>{const[r,s]=o.useState(!1);return e.jsxs("nav",{className:"w-full h-20 flex flex-col justify-center items-center fixed bg-bgDark1 lg:bg-bgDarkTransparent z-40 lg:backdrop-blur-xl","aria-label":"Main navigation",children:[e.jsxs("div",{className:"2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative",children:[e.jsx(a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},exit:{opacity:0},children:e.jsx("a",{href:"/#home","aria-label":"Home",children:e.jsxs("div",{className:"flex justify-start items-center grow basis-0",children:[e.jsx("div",{className:"text-white mr-2 text-6xl",children:e.jsx(c,{})}),e.jsx("div",{className:"text-white font-['Inter'] font-bold text-xl",children:"Operand"})]})})}),e.jsx(a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},exit:{opacity:0},children:e.jsx("div",{className:"hidden lg:flex h-full pl-12 pb-2",children:n.map(({href:t,label:i,ariaLabel:l})=>e.jsx("a",{className:"text-white lg:text-base text-2xl  leading-6 mr-4 ml-4   2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2",href:t,"aria-label":l,children:i},i))})}),e.jsx(a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},exit:{opacity:0},children:e.jsx("div",{className:"grow basis-0 justify-end hidden lg:flex"})}),e.jsxs("div",{className:"lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2",onClick:()=>s(!r),children:[e.jsx("div",{className:"w-5 h-0.5 bg-gray-500  mb-1"}),e.jsx("div",{className:"w-5 h-0.5 bg-gray-500  mb-1"}),e.jsx("div",{className:"w-5 h-0.5 bg-gray-500 "})]})]}),e.jsx(d,{children:r&&e.jsx(a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},exit:{opacity:0},children:e.jsx("div",{className:`flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-bgDark1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-bgDark3 pt-10
        `,children:n.map(({label:t,href:i,ariaLabel:l})=>e.jsx("a",{className:"text-white lg:text-base text-2xl  leading-6 mr-4 ml-4   2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2",href:i,onClick:()=>s(!1),"aria-label":l,children:t},i))})})})]})};export{h as Navbar};