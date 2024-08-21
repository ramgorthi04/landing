import { useState } from "react";
import { motion } from "framer-motion";
import { InvitationModal } from "./InvitationModal";
import backgroundVideo from "../assets/video/dashboard_vid.mp4";

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleGetStarted = () => {
    window.open("https://calendly.com/ramgorthi/30min?back=1&month=2024-08", "_blank");
  };
  
  const handleJoinWaitlist = () => {
    window.open("https://airtable.com/appnzbipIlayOkPod/shrH9WXcOSaiNb1oj", "_blank");
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section
      className="w-screen flex justify-center items-center bg-bgDark1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-secondaryColor text-sm sm:text-base mb-6 sm:mt-32 mt-16 font-bold">
            AI-Powered Shopify Insights
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide text-primaryText px-8 sm:px-8 md:px-20 lg:px-4">
            Your Personal Shopify Store Analyst
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-secondaryText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48">
            Unlock the full potential of your Shopify store by simply asking questions in natural language, getting instant insights that help you make smarter business decisions.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
            <button
                className="contained-button w-64 sm:w-52 h-12 mr-0 sm:mr-4 lg:mr-6 mb-2 sm:mb-0"
                onClick={handleGetStarted}
                aria-label="Get started"
            >
                Get Started
            </button>
            <button
              className="w-64 sm:w-52 h-12 rounded-xl font-bold text-primaryText border border-solid flex justify-center items-center cursor-pointer bg-bgDark2 hover:bg-bgDark3 border-primaryColor transition"
              onClick={handleJoinWaitlist}
              aria-label="Join waitlist"
            >
              Join Waitlist
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, zIndex: 20 }}
          animate={{ opacity: 1, y: 0, zIndex: 20 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="relative w-screen flex justify-center mb-16"> {/* Added margin-bottom here */}
            <video
              src={backgroundVideo}
              autoPlay
              loop
              playsInline
              muted={isMuted}
              className="w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl main-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
            >
              Your browser does not support the video tag.
            </video>
            <button
              onClick={toggleMute}
              className="absolute z-20 bottom-4 left-1/2 transform -translate-x-1/2 bg-bgDark2 text-primaryText px-3 py-1 rounded-md"
            >
              {isMuted ? 'Unmute' : 'Mute'}
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-bold tracking-wide text-primaryText px-8 sm:px-8 md:px-20 lg:px-4">
            E-commerce intelligence, simplified
          </h2>
        </motion.div>
        <div className="relative w-screen flex justify-center ">
          <div className="shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="bg-bgDark2"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                className="shape-fill bg-bgDark1  fill-bgDark1"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};