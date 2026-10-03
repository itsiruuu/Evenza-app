import React from 'react'
import { motion } from 'framer-motion'

import footer from '../assets/footer-section-background.png'
import Flex from './Flex'
import notification from '../assets/footer-newsletter-notification-icon.png'
import Container from './Container'
import Button from '../assets/footer-newsletter-submit-icon.png'
import logo from '../assets/footer-brand-logo.png'
import Item from '../assets/footer-social-link-icon-one.png'
import Item2 from '../assets/footer-social-link-icon-two.png'
import Item3 from '../assets/footer-social-link-icon-three.png'

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
}

const Footer = () => {
  return (
    <motion.div
      className="bg-cover bg-center bg-no-repeat p-25"
      style={{ backgroundImage: `url(${footer})` }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Container>

      
        <motion.div
          className="flex justify-between"
          variants={fadeUp}
        >
          <h2 className="text-[48px] font-semibold w-[600px] text-white">
            Join our newsletter important announcement
          </h2>

          <div>
            <div className="flex items-center gap-2.5">
              <img src={notification} alt="" />
              <p className="text-white w-[420px]">
                Stay informed with instant updates delivered straight to your inbox.
              </p>
            </div>

            <div className="w-120 rounded-[20px] bg-[#ffffff10] flex justify-end mt-5.5">
              <img className="p-2.5 cursor-pointer hover:scale-105 transition" src={Button} alt="" />
            </div>
          </div>
        </motion.div>

        <div className="border-t border-white/20 mt-20"></div>

    
        <motion.div
          className="flex justify-between mt-20 items-start"
          variants={fadeUp}
        >

          {/* LEFT */}
          <div>
            <img src={logo} alt="" className="mb-6" />

            <p className="w-[350px] text-white mb-10">
              Experience a world-class conference designed to inspire innovation,
              empower professionals, and connect leaders from around the globe.
            </p>

            <Flex className="gap-3.75">
              <img src={Item} alt="" className="hover:scale-110 transition" />
              <img src={Item} alt="" className="hover:scale-110 transition" />
              <img src={Item2} alt="" className="hover:scale-110 transition" />
              <img src={Item3} alt="" className="hover:scale-110 transition" />
            </Flex>
          </div>

          {/* RIGHT */}
          <Flex className="gap-22.5 text-white">

            <div>
              <h3 className="text-[20px] font-bold">Quick Links</h3>
              {["Home", "About Us", "Speakers", "Events", "Contact Us"].map((item, i) => (
                <p key={i} className="mt-4 hover:text-gray-300 cursor-pointer">
                  {item}
                </p>
              ))}
            </div>

            <div>
              <h3 className="text-[20px] font-bold">Schedules</h3>
              {["Event Management", "Live Streaming", "Virtual Event Setup", "Keynote Sessions", "Networking Programs"].map((item, i) => (
                <p key={i} className="mt-4 hover:text-gray-300 cursor-pointer">
                  {item}
                </p>
              ))}
            </div>

            <div>
              <h3 className="text-[20px] font-bold">Get In Touch</h3>
              <p className="mt-7">+00 123 456 789</p>
              <p className="mt-4">support@domainname.com</p>

              <div className="border-t border-white/10 my-7"></div>

              <p className="w-[260px]">
                45/2 Central Business Innovation Near International Trade Tower
              </p>
            </div>

          </Flex>
        </motion.div>

      </Container>

  
      <div className="w-full border-t border-white/20 mt-12"></div>

      
      <motion.p
        className="text-white text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Copyright © 2025 All Rights Reserved.
      </motion.p>

    </motion.div>
  )
}

export default Footer