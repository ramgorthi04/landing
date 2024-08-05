/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_B-Gyf5KC.mjs';
import 'kleur/colors';
import 'html-escaper';
import { T as TailcastLogo, N as Navbar, F as Footer, S as ScrollUpButton, $ as $$Layout } from '../chunks/ScrollUpButton_Cz_PTBBo.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const CheckArrowIcon = () => /* @__PURE__ */ jsx("div", { className: "rounded-full bg-transparent w-5 h-5 flex justify-center items-center mr-4", children: /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    width: "20px",
    height: "20px",
    className: "fill-secondaryColor",
    children: /* @__PURE__ */ jsx("path", { d: "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" })
  }
) });

const CloseIcon = () => /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", fill: "currentColor", children: /* @__PURE__ */ jsx("path", { d: "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" }) });

const InvitationModal = ({ setIsOpen }) => /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsx(
  motion.div,
  {
    initial: { opacity: 0, zIndex: 50 },
    animate: { opacity: 1, zIndex: 50 },
    transition: { duration: 0.1 },
    exit: { opacity: 0 },
    children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "w-full h-full  bg-bgDarkTransparentDarker fixed top-0 left-0 flex  z-50 justify-center items-center",
        onClick: () => setIsOpen(false),
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-full h-screen sm:h-auto sm:w-3/4 md:w-3/5 lg:w-[1000px] xl:w-[1100px] sm:rounded-2xl bg-bgDarkTransparentLighter main-border-gray-darker py-12 px-8 sm:px-16 backdrop-blur-xl fixed sm:mb-8 fixed mx-auto z-50",
            onClick: (e) => e.stopPropagation(),
            children: /* @__PURE__ */ jsxs("div", { className: "flex relative", children: [
              /* @__PURE__ */ jsxs("div", { className: "w-1/2 hidden lg:inline", children: [
                /* @__PURE__ */ jsx("h2", { className: "mt-6 mb-2 text-5xl font-bold tracking-normal text-primaryText", children: "Join the waitlist" }),
                /* @__PURE__ */ jsx("h2", { className: "text-5xl font-bold tracking-normal text-secondaryColor", children: "We'll reach out" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "w-full lg:w-1/2 flex items-center flex-col justify-center pt-24 sm:pt-0", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex inline lg:hidden justify-start items-center grow basis-0 mb-8 pr-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-white mr-2 text-8xl", children: /* @__PURE__ */ jsx(TailcastLogo, {}) }),
                  /* @__PURE__ */ jsx("div", { className: "text-white font-['Inter'] font-bold text-3xl", children: "Tailcast" })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "mb-7 text-2xl text-primaryText font-bold leading-snug text-center" }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap -m-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-full sm:w-4/5 p-2 mx-auto", children: /* @__PURE__ */ jsx(
                    "input",
                    {
                      className: "px-4 py-4 w-full text-gray-500 font-medium text-center placeholder-gray-500 outline-none border bg-gray-300 border-gray-300 rounded-lg focus:ring focus:ring-indigo-300",
                      id: "newsletterInput3-1",
                      type: "text",
                      placeholder: "Your email address"
                    }
                  ) }),
                  /* @__PURE__ */ jsx("div", { className: "w-full sm:w-4/5 p-2 mt-4 mx-auto", children: /* @__PURE__ */ jsx(
                    "button",
                    {
                      className: "py-4 px-6 w-full text-primaryText font-semibold rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-primaryColor hover:bg-[#7274f3] transition ease-in-out duration-200",
                      type: "button",
                      "aria-label": "Join now",
                      children: "Join Now"
                    }
                  ) })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "fixed top-6 right-6 z-50 w-5 h-5 cursor-pointer text-[rgb(255,255,255,0.7)] hover:text-white transition",
                  onClick: () => setIsOpen(false),
                  children: /* @__PURE__ */ jsx(CloseIcon, {})
                }
              )
            ] })
          }
        )
      }
    )
  }
) });

const dashboard = new Proxy({"src":"/_astro/shopdashboard.DAjTjDoB.jpg","width":2476,"height":1252,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/assets/images/shopdashboard.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/assets/images/shopdashboard.jpg");
							return target[name];
						}
					});

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "w-screen flex justify-center items-center bg-bgDark1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0",
      id: "home",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              children: /* @__PURE__ */ jsx("h3", { className: "text-secondaryColor text-sm sm:text-base mb-6 sm:mt-32 mt-16 font-bold", children: "AI-Powered Shopify Insights" })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.05 },
              children: /* @__PURE__ */ jsx("h1", { className: "text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-primaryText px-8 sm:px-8 md:px-20 lg:px-4", children: "Your Shopify Data, Now Conversational" })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.1 },
              children: /* @__PURE__ */ jsx("h2", { className: "text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48", children: "Answer questions about your Shopify store data using natural language. Get instant, actionable insights to drive your business forward." })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.15 },
              children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center", children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "contained-button w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0",
                    onClick: () => setIsModalOpen(true),
                    "aria-label": "Get started",
                    children: "Get Started"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "w-64 sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-primaryColor transition",
                    onClick: () => setIsModalOpen(true),
                    "aria-label": "Live demo",
                    children: "Live demo"
                  }
                )
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 10, zIndex: 20 },
              animate: { opacity: 1, y: 0, zIndex: 20 },
              transition: { duration: 0.5, delay: 0.15 },
              children: /* @__PURE__ */ jsx("div", { className: "relative w-screen flex justify-center ", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: dashboard.src,
                  alt: "Dashboard image",
                  className: "w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl main-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
                }
              ) })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "relative w-screen flex justify-center ", children: /* @__PURE__ */ jsx("div", { className: "shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block", children: /* @__PURE__ */ jsx(
            "svg",
            {
              "data-name": "Layer 1",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1200 120",
              preserveAspectRatio: "none",
              className: "bg-bgDark2",
              children: /* @__PURE__ */ jsx(
                "path",
                {
                  d: "M1200 0L0 0 598.97 114.72 1200 0z",
                  className: "shape-fill bg-bgDark1  fill-bgDark1"
                }
              )
            }
          ) }) })
        ] }),
        isModalOpen && /* @__PURE__ */ jsx(InvitationModal, { isOpen: isModalOpen, setIsOpen: setIsModalOpen })
      ]
    }
  );
};

const feature1 = new Proxy({"src":"/_astro/feature1.CAvICIMl.jpg","width":894,"height":790,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/assets/images/feature1.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/assets/images/feature1.jpg");
							return target[name];
						}
					});

const Features1 = () => {
  return /* @__PURE__ */ jsx(
    "section",
    {
      className: "w-full bg-bgDark2 pt-24 -mt-8 mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0 md:pt-[12vw] lg:pt-16",
      id: "features",
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.2 },
          children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16", children: [
            /* @__PURE__ */ jsx("div", { className: "w-full lg:w-1/2 mb-12 lg:mb-0", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset", children: [
              /* @__PURE__ */ jsx("span", { className: "block-subtitle", children: "AI-Powered Shopify Insights" }),
              /* @__PURE__ */ jsx("h2", { className: "mt-6 mb-8 text-4xl lg:text-5xl block-big-title", children: "Your Shopify Data, Now Conversational" }),
              /* @__PURE__ */ jsx("p", { className: "mb-10 text-secondaryText leading-loose", children: "We've built an AI-powered software that helps you answer questions about the data Shopify collects on your store. Get instant, actionable insights to drive your business forward." }),
              /* @__PURE__ */ jsxs("ul", { className: "mb-6 text-primaryText", children: [
                /* @__PURE__ */ jsxs("li", { className: "mb-4 flex", children: [
                  /* @__PURE__ */ jsx(CheckArrowIcon, {}),
                  /* @__PURE__ */ jsx("span", { children: "Natural language queries: Ask questions in plain English and get data-driven answers" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "mb-4 flex", children: [
                  /* @__PURE__ */ jsx(CheckArrowIcon, {}),
                  /* @__PURE__ */ jsx("span", { children: "Real-time data visualization: Graph your store's performance across any metric you ask for" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "mb-4 flex", children: [
                  /* @__PURE__ */ jsx(CheckArrowIcon, {}),
                  /* @__PURE__ */ jsx("span", { children: "Inventory management: Optimize procurement based on historical sales data" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "mb-4 flex", children: [
                  /* @__PURE__ */ jsx(CheckArrowIcon, {}),
                  /* @__PURE__ */ jsx("span", { children: "Product performance: Identify slow-moving inventory and associated costs" })
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8", children: /* @__PURE__ */ jsx("div", { className: "mb-8 lg:mb-0 w-full px-2 lg:px-0", children: /* @__PURE__ */ jsx("div", { className: "mb-4 py-3 pl-3 pr-2 rounded", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: feature1.src,
                alt: "AI-powered Shopify analytics dashboard",
                className: "rounded-xl main-border-gray mx-auto sm:mx-unset",
                "aria-label": "AI-powered Shopify analytics dashboard"
              }
            ) }) }) })
          ] })
        }
      )
    }
  );
};

const feature5 = new Proxy({"src":"/_astro/feature5.DZSv7abW.jpg","width":726,"height":692,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/assets/images/feature5.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/assets/images/feature5.jpg");
							return target[name];
						}
					});

const Features2 = () => /* @__PURE__ */ jsx("section", { className: "w-full bg-bgDark2 mt-12 sm:mt-24 mb-12 lg:my-20 lg:mb-24 pt-4", children: /* @__PURE__ */ jsx(
  motion.div,
  {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, delay: 0.2 },
    children: /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16", children: [
      /* @__PURE__ */ jsx("div", { className: "w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first", children: /* @__PURE__ */ jsx("div", { className: "mb-8 lg:mb-0 w-full px-2 lg:pl-16 flex flex-col justify-center md:pl-8", children: /* @__PURE__ */ jsx("div", { className: "mb-4 py-3 md:pl-3 md:pr-20 lg:pr-12 rounded", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: feature5.src,
          alt: "AI-powered Shopify analytics dashboard",
          className: "rounded-xl main-border-gray"
        }
      ) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset", children: [
        /* @__PURE__ */ jsx("span", { className: "block-subtitle", children: "Smart Campaigns" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-6 mb-8 text-4xl lg:text-5xl block-big-title", children: "Data-Driven Marketing" }),
        /* @__PURE__ */ jsx("p", { className: "mb-12 text-secondaryText leading-loose", children: "Leverage AI to identify high-value customers and launch targeted email campaigns. Ask questions about your purchase history, churn, order volumes, and recent activity to maximize your marketing efforts." }),
        /* @__PURE__ */ jsxs("ul", { className: "mb-6 text-primaryText", children: [
          /* @__PURE__ */ jsxs("li", { className: "mb-4 flex", children: [
            /* @__PURE__ */ jsx(CheckArrowIcon, {}),
            /* @__PURE__ */ jsx("span", { children: "Customer segmentation based on AI insights" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "mb-4 flex", children: [
            /* @__PURE__ */ jsx(CheckArrowIcon, {}),
            /* @__PURE__ */ jsx("span", { children: "Automated campaign suggestions" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "mb-4 flex", children: [
            /* @__PURE__ */ jsx(CheckArrowIcon, {}),
            /* @__PURE__ */ jsx("span", { children: "Performance tracking and optimization" })
          ] })
        ] })
      ] }) })
    ] })
  }
) });

new Proxy({"src":"/_astro/featuresdiagonal.Odwo-D4x.jpg","width":788,"height":536,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/assets/images/featuresdiagonal.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/assets/images/featuresdiagonal.jpg");
							return target[name];
						}
					});

const FeaturesDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return /* @__PURE__ */ jsxs("section", { className: "lg:mb-16 w-full flex flex-col justify-center items-center bg-bgDark1", children: [
    /* @__PURE__ */ jsx("div", { className: "shape-divider-bottom-1665696614", children: /* @__PURE__ */ jsx(
      "svg",
      {
        "data-name": "Layer 1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1200 120",
        preserveAspectRatio: "none",
        className: "bg-bgDark2 fill-bgDark2",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M1200 120L0 16.48 0 0 1200 0 1200 120z",
            className: "bg-bgDark1 fill-bgDark1"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: 0.2 },
        children: /* @__PURE__ */ jsx("div", { className: "2xl:w-[1150px] xl:w-[1050px] md:w-4/5 flex justify-center bg-bgDark1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col", children: /* @__PURE__ */ jsxs("div", { className: "w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto", children: [
          /* @__PURE__ */ jsx("span", { className: "block-subtitle", children: "Empower Your Shopify Store" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-10 mb-8 text-4xl lg:text-5xl block-big-title", children: "AI-Powered Insights at Your Fingertips" }),
          /* @__PURE__ */ jsx("p", { className: "mb-16 text-secondaryText leading-loose", children: "Make data-driven decisions with ease. Elevate your e-commerce strategy with AI." }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "w-[210px] h-12 contained-button mr-10",
              onClick: () => setIsModalOpen(true),
              "aria-label": "Get started",
              children: "Get Started"
            }
          )
        ] }) })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "shape-divider-top-1665696661 w-full", children: /* @__PURE__ */ jsx(
      "svg",
      {
        "data-name": "Layer 1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1200 120",
        preserveAspectRatio: "none",
        className: "bg-bgDark2 fill-bgDark2",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M1200 120L0 16.48 0 0 1200 0 1200 120z",
            className: "bg-bgDark1 fill-bgDark1"
          }
        )
      }
    ) }),
    isModalOpen && /* @__PURE__ */ jsx(InvitationModal, { isOpen: isModalOpen, setIsOpen: setIsModalOpen })
  ] });
};

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tailcast" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/components/Navbar.jsx", "client:component-export": "Navbar" })} ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/components/Hero.jsx", "client:component-export": "Hero" })} ${renderComponent($$result2, "Features1", Features1, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/components/Features1.jsx", "client:component-export": "Features1" })} ${renderComponent($$result2, "Features2", Features2, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/components/Features2.jsx", "client:component-export": "Features2" })} ${renderComponent($$result2, "FeaturesDiagonal", FeaturesDiagonal, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/components/FeaturesDiagonal.jsx", "client:component-export": "FeaturesDiagonal" })} ${renderComponent($$result2, "Footer", Footer, {})} ${renderComponent($$result2, "ScrollUpButton", ScrollUpButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/components/ScrollUpButton", "client:component-export": "ScrollUpButton" })} ` })}`;
}, "/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/pages/index.astro", void 0);

const $$file = "/Users/ram/Dartmouth College Dropbox/Ram Gorthi/Projects/landing-page/landing/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
