import React from 'react'
import img from "../assets/feature-section-background.png"
import Container from './Container'
import Flex from './Flex'
import Card from './Card'
import ImgOne from "../assets/feature-icon-one.png"
import ImgTow from "../assets/feature-icon-two.png"
import ImgThree from "../assets/feature-icon-three.png"
import ImgFour from "../assets/feature-icon-four.png"
import { motion } from "framer-motion"

const Features = () => {
    return (
        <div
            style={{ backgroundImage: `url(${img})` }}
            className="py-25 px-50 bg-cover bg-center bg-no-repeat overflow-hidden"
        >
            <Container>

              
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <Flex className="items-center gap-1.5 justify-center">
                        <div className='w-2 h-2 rounded-full bg-white'></div>
                        <p className='font-semibold text-white'>Core Feature</p>
                    </Flex>

                    <div>
                        <h2 className='text-[48px] font-semibold text-white w-160 text-center mx-auto mb-18.75 mt-3'>
                            Core features that power our
                            exceptional services
                        </h2>
                    </div>
                </motion.div>

               
                <motion.div
                    className="flex justify-between gap-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                >
                    {[ImgOne, ImgTow, ImgThree, ImgFour].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.6 }}
                            whileHover={{
                                y: -10,
                                scale: 1.03
                            }}
                        >
                            <Card ImgSrc={item} />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.p
                    className='mt-15.5 text-white text-center'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Join our team and help weave innovation, quality,
                    and success together worldwide.
                </motion.p>

               
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <Flex className="gap-3.25 text-[20px] font-bold text-white mt-5.5 justify-center">
                        <p>4.9/5</p>

                        <div className="text-primary flex gap-1">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>

                        <p>Our 4200 Review</p>
                    </Flex>
                </motion.div>

            </Container>
        </div>
    )
}

export default Features