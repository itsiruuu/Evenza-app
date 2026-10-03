import React from 'react'
import Container from './Container'
import Flex from './Flex'
import SpeakersCard from './SpeakersCard'
import card1 from "../assets/speakers-card-one-photo.png"
import card2 from "../assets/speakers-card-two-photo.png"
import card3 from "../assets/speakers-card-three-photo.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion"

const Speakers = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        arrows: false
    };

    const speakers = [
        {
            img: card1,
            name: "Sophia Rodrigues",
            role: "Global Marketing Director"
        },
        {
            img: card2,
            name: "Jacob Jones",
            role: "Lead AI Research Scientist"
        },
        {
            img: card3,
            name: "Arlene McCoy",
            role: "Innovation Strategy Expert"
        },
        {
            img: card1,
            name: "Sophia Rodrigues",
            role: "Global Marketing Director"
        },
        {
            img: card2,
            name: "Jacob Jones",
            role: "Lead AI Research Scientist"
        },
        {
            img: card3,
            name: "Arlene McCoy",
            role: "Innovation Strategy Expert"
        }
    ]

    return (
        <>
            <section className='py-25 overflow-hidden'>
                <Container>

                  
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <Flex className="items-center gap-2.5 justify-center">
                            <div className='w-2 h-2 rounded-full bg-primary'></div>
                            <p className='text-[#161A2D] font-semibold'>
                                Our Speakers
                            </p>
                        </Flex>

                        <h2 className='pb-20 text-[48px] font-semibold text-[#161A2D] text-center'>
                            Introducing the expert speakers
                        </h2>
                    </motion.div>

                 
                    <div className='w-full'>
                        <Slider {...settings}>

                            {speakers.map((speaker, index) => (
                                <div key={index} className='px-3'>

                                    <motion.div
                                        whileHover={{
                                            y: -10,
                                            scale: 1.02
                                        }}
                                        transition={{
                                            duration: 0.3
                                        }}
                                    >
                                        <SpeakersCard
                                            ImgSrc={speaker.img}
                                            cardText={speaker.name}
                                            CardP={speaker.role}
                                        />
                                    </motion.div>

                                </div>
                            ))}

                        </Slider>
                    </div>

                </Container>
            </section>
        </>
    )
}

export default Speakers