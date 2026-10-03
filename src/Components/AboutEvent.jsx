import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Container from "./Container";
import eventImg from "../assets/about-event-hero.png";
import Flex from "./Flex";
import scndImg from "../assets/about-event-updates.png";
import ThrdImg from "../assets/about-event-networking.png";
import Button from "./Button";
import callBtn from "../assets/about-event-call.png";

const AboutEvent = () => {
  const [change, setChange] = useState("Our Mission");

  const tabs = [
    {
      title: "Our Mission",
      content:
        "Our mission is to connect innovators, leaders, and changemakers by creating inspiring events that encourage collaboration, learning, and meaningful growth.",
    },
    {
      title: "Our Vision",
      content:
        "Our vision is to build a global community where collaboration fuels innovation. We aim to encourage fresh thinking and create impactful connections.",
    },
    {
      title: "Our Goal",
      content:
        "Our goal is to empower individuals with knowledge, networking opportunities, and practical experiences for growth.",
    },
  ];

  const activeContent = tabs.find((t) => t.title === change);

  return (
    <motion.section
      className="py-25"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <Flex className="justify-between items-center gap-12">

          
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={eventImg} alt="" />
          </motion.div>

        
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <Flex className="items-center gap-1.5">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="font-semibold">About Us</p>
            </Flex>

            <h2 className="font-semibold text-[48px] text-[#161A2D] pt-4.25 pb-10.5">
              Behind this event
            </h2>

            <p className="text-[#737681] max-w-[650px]">
              Discover the vision that drives this event and brings people together.
            </p>

           
            <div className="bg-[#F6F6F7] rounded-[20px] p-2.5 my-10.5">
              <Flex className="justify-between font-bold">
                {tabs.map((tab) => (
                  <div
                    key={tab.title}
                    onClick={() => setChange(tab.title)}
                    className={`py-4 px-8 rounded-[10px] cursor-pointer transition-all duration-300 ${
                      change === tab.title
                        ? "bg-black text-white"
                        : "hover:bg-white"
                    }`}
                  >
                    <h3>{tab.title}</h3>
                  </div>
                ))}
              </Flex>
            </div>

           
            <AnimatePresence mode="wait">
              <motion.p
                key={change}
                className="text-[#737681] max-w-[715px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {activeContent?.content}
              </motion.p>
            </AnimatePresence>

           
            <div className="mt-14.5 mb-6">
              <Flex className="gap-8">

                <Flex className="items-center gap-3.75">
                  <img src={scndImg} alt="" />
                  <h3 className="text-[20px] font-bold text-[#161A2D]">
                    Real-time updates
                  </h3>
                </Flex>

                <Flex className="items-center gap-3.75">
                  <img src={ThrdImg} alt="" />
                  <h3 className="text-[20px] font-bold text-[#161A2D]">
                    Expert networking
                  </h3>
                </Flex>

              </Flex>

             
              <Flex className="gap-7.5 mt-16.5 items-center">

                <Button>Learn More</Button>

                <Flex className="items-center gap-3.75">
                  <img src={callBtn} alt="" />
                  <div>
                    <h3 className="text-[#161A2D] text-[20px] font-bold">
                      Call Now!
                    </h3>
                    <p className="text-[#737681]">+00 123 456 789</p>
                  </div>
                </Flex>

              </Flex>
            </div>

          </motion.div>

        </Flex>
      </Container>
    </motion.section>
  );
};

export default AboutEvent;