import React from "react";
import { motion } from "framer-motion";

import Container from "./Container";
import Button from "./Button";
import PlayBtn from "../assets/landing-video-play-icon.png";
import Flex from "./Flex";
import Ideas from "./Ideas";
import Counter from "./Counter";
import ScrollVelocity from "../Pages/ScrollVelocity/ScrollVelocity";
import FuzzyText from "./FuzzyText";

const Banner = () => {
  return (
    <>
      <section>
        <div className="bg-[url('./assets/landing-hero-background.png')] bg-cover bg-center bg-no-repeat py-33 overflow-hidden">
          <Container>
            
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Ideas />
            </motion.div>

            <div className="text-white text-center">
             
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="font-extrabold text-[76px] leading-20.75 max-w-300 mx-auto">
                  <FuzzyText
                    className="w-245.75 mx-auto my-3.7"
                    baseIntensity={0.2}
                    hoverIntensity={0.5}
                    enableHover
                  >
                    Connecting Minds to Shape Tomorrow's Big Ideas
                  </FuzzyText>
                </h1>
              </motion.div>

              
              <motion.p
                className="pt-3.75 pb-13 max-w-183.25 mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Experience a powerful gathering of visionaries,
                creators, and industry experts united by one goal—
                exchanging ideas that spark growth, innovation, and
                meaningful change.
              </motion.p>

              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Flex className="justify-center gap-4 mb-12.5">
                  <Button>Explore Schedule</Button>

                  <Flex className="gap-4 items-center justify-center cursor-pointer">
                    <motion.img
                      src={PlayBtn}
                      alt="Play"
                      whileHover={{
                        scale: 1.2,
                        rotate: 15,
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />

                    <motion.a
                      href="#"
                      whileHover={{
                        color: "#F59E0B",
                      }}
                    >
                      Watch Video
                    </motion.a>
                  </Flex>
                </Flex>
              </motion.div>

             
              <motion.p
                className="text-[20px] font-bold"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                Upcoming Speaker Reveal - Don't Miss Out
              </motion.p>
            </div>

           
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <Counter />
            </motion.div>
          </Container>
        </div>
      </section>

      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ScrollVelocity
          texts={[
            "Latest Updates * New Announcements * Workshop Alerts * Live Notices * Event Countdown",
          ]}
          velocity={100}
          className="custom-scroll-text"
          numCopies={6}
          damping={50}
          stiffness={400}
        />
      </motion.div>
    </>
  );
};

export default Banner;