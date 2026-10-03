import React from "react";
import { motion } from "framer-motion";

import logo from "../assets/navbar-brand-logo.png";
import Container from "./Container";
import Flex from "./Flex";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full backdrop-blur-sm text-white py-6.25 z-50">
      <Container>
        <Flex className="justify-between items-center">

         
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img src={logo} alt="Logo" className="cursor-pointer" />
          </motion.div>

          
          <motion.ul
            className="flex gap-5"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              staggerChildren: 0.15,
            }}
          >
            {[
              "Home",
              "About Us",
              "Schedule",
              "Blog",
              "Pages",
              "Contact Us",
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{
                  scale: 1.1,
                  color: "#F59E0B",
                }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer transition-colors duration-300"
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button>Join the Conference</Button>
          </motion.div>

        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;