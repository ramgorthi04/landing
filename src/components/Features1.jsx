import { motion } from "framer-motion";
import feature1 from "../assets/images/feature1.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
  return (
    <section
      className="w-full bg-bgDark2 pt-24 -mt-8 mb-8 sm:-mt-8 sm:mb-24 xl:-mt-8 2xl:mt-0 md:pt-[12vw] lg:pt-16"
      id="features"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="block-subtitle">AI-Powered Shopify Insights</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
                Your Shopify Data, Now Conversational
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
                We've built an AI-powered software that helps you answer questions about the data Shopify collects on your store. Get instant, actionable insights to drive your business forward.
              </p>
              <ul className="mb-6 text-primaryText">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Natural language queries: Ask questions in plain English and get data-driven answers</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Real-time data visualization: Graph your store's performance across any metric you ask for</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Inventory management: Optimize procurement based on historical sales data</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Product performance: Identify slow-moving inventory and associated costs</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src={feature1.src}
                  alt="AI-powered Shopify analytics dashboard"
                  className="rounded-xl main-border-gray mx-auto sm:mx-unset"
                  aria-label="AI-powered Shopify analytics dashboard"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};