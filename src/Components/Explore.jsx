import React, { useState } from 'react'
import Container from './Container'
import Time from './Time'
import SecHead from './SecHead'
import Time3 from './Time3'
import Time2 from './Time2'
import { motion, AnimatePresence } from "motion/react"

const Explore = () => {
    const [activeDay, setActiveDay] = useState("Day 1")

    const renderActive = () => {
        if (activeDay === "Day 1") {
            return <Time />
        }

        if (activeDay === "Day 2") {
            return <Time2 />
        }

        if (activeDay === "Day 3") {
            return <Time3 />
        }
    }

    return (
        <>
            <div className="bg-[url('./assets/explore-section-background.jpg')] py-25 px-51.5 h-305">
                <Container>
                    <SecHead
                        title="Our Event Schedule"
                        heading="Explore the complete schedule for our event"
                        className1='text-white mb-20 '
                    />


                    <ul className='w-125.25 bg-[#ffffff21] flex gap-7.5 justify-center mx-auto p-2.5 rounded-full'>

                        <li
                            onClick={() => setActiveDay("Day 1")}
                            className={`cursor-pointer text-xl font-bold px-9 py-4.5 rounded-full 
              transition-all duration-300 ease-in-out hover:bg-white hover:text-black
              ${activeDay === "Day 1" ? "bg-white text-black! scale-105" : "text-white"}`}
                        >
                            Day 01
                        </li>

                        <li
                            onClick={() => setActiveDay("Day 2")}
                            className={`cursor-pointer text-xl font-bold px-9 py-4.5 rounded-full 
              transition-all duration-300 ease-in-out hover:bg-white hover:text-black
              ${activeDay === "Day 2" ? "bg-white text-black! scale-105" : "text-white"}`}
                        >
                            Day 02
                        </li>

                        <li
                            onClick={() => setActiveDay("Day 3")}
                            className={`cursor-pointer text-xl font-bold px-9 py-4.5 rounded-full 
              transition-all duration-300 ease-in-out hover:bg-white hover:text-black
              ${activeDay === "Day 3" ? "bg-white text-black! scale-105" : "text-white"}`}
                        >
                            Day 03
                        </li>

                    </ul>


                    <div className="mt-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeDay}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                {renderActive()}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </Container>
            </div>
        </>
    )
}

export default Explore