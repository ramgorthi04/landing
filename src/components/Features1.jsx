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
              <span className="block-subtitle">Code-Powered Data Insights</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
                A Software Engineer, at your service
              </h2>
              <p className="mb-10 text-secondaryText leading-loose">
                Operand can execute enterprise-level algorithms on your store data to identify customers likely to re-engage and predict customers' next orders.
              </p>
              <ul className="mb-6 text-primaryText">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Combine RFM analysis, CLV, purchase trends, and abandoned carts to predict customers most likely to re-engage.</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Behind-the-scenes, our agent runs algorithms like eBay's Gradient Boost and Shopify's Matrix Factorization to predict what any customer will order next.</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Cost-Effective: Avoid the high costs of traditional analytics tools or in-house teams while still gaining powerful intelligence that drives your store forward.</span>
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