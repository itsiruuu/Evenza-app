import React, { useState } from 'react'
import FaqImg from "../assets/faq-stories-shared-image.png"
import Container from './Container'
import Flex from './Flex'
import SecHead from './SecHead'
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {

    const [show, setShow] = useState(false)

    const faqData = [
        {
            question: "How does the event registration process work?",
            answer: "You can easily register through our online form. After submission, you’ll receive a confirmation email with your event details and schedule."
        },
        {
            question: "Can I update or change my selected sessions?",
            answer: "Yes, attendees can modify their session choices before the event starts through their dashboard."
        },
        {
            question: "Will I get access to recorded sessions?",
            answer: "Yes, all registered participants will get access to recorded sessions after the event ends."
        },
        {
            question: "Is there any certificate provided after the event?",
            answer: "Yes, all participants will receive a digital certificate of participation."
        },
        {
            question: "What payment methods are accepted?",
            answer: "We accept multiple payment options including credit/debit cards, mobile banking, and online payment gateways."
        },
        {
            question: "Can I get a refund if I cancel?",
            answer: "Refunds are available based on our cancellation policy. Please check the terms before registering."
        }
    ]

    return (
        <div className='py-25 overflow-hidden'>
            <Container>

                <Flex className="gap-11 items-start">

                   
                    <motion.div
                        className='w-[40%]'
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <img src={FaqImg} alt="FAQ" />
                    </motion.div>

                   
                    <div className='w-[60%]'>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <SecHead
                                title="FAQ's"
                                heading="What our customers say about their experience"
                                className2="justify-start"
                                className3="text-start"
                            />
                        </motion.div>

                        <div className='mt-9 space-y-6'>

                            {faqData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className='rounded-[20px] bg-[#F6F6F7] cursor-pointer overflow-hidden'
                                    onClick={() => setShow(show === index ? false : index)}
                                >

                                   
                                    <div className='px-6.25 py-5.75'>
                                        <h2 className='flex justify-between items-center font-medium'>
                                            {index + 1}. {item.question}

                                            <motion.div
                                                animate={{ rotate: show === index ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {show === index ? (
                                                    <FiMinusCircle className='text-2xl text-primary' />
                                                ) : (
                                                    <FiPlusCircle className='text-2xl text-primary' />
                                                )}
                                            </motion.div>
                                        </h2>
                                    </div>

                                
                                    <AnimatePresence>
                                        {show === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4 }}
                                                className='px-6.25 pb-5 text-gray-600'
                                            >
                                                <p>{item.answer}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                </motion.div>
                            ))}

                        </div>

                    </div>

                </Flex>

            </Container>
        </div>
    )
}

export default Faq