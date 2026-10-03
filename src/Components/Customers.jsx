import React from 'react'
import contactbg from '../assets/testimonials-section-background.png'
import SecHead from './SecHead'
import Container from './Container'
import CustomerCard from './CustomerCard'
import CustomerRevew from './CustomerRevew'
import Flex from './Flex'
import IMg2 from '../assets/testimonial-author-avatar.png'
import revewImg1 from '../assets/testimonial-review-avatar.png'
import Slider from "react-slick"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { motion } from "framer-motion"
import company from '../assets/testimonial-partner-logo-one.png'
import company2 from '../assets/testimonial-partner-logo-two.png'
import company3 from '../assets/testimonial-partner-logo-three.png'

const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-20 cursor-pointer text-white text-2xl md:text-3xl hover:scale-110 duration-300"
    >
      <FiArrowRight />
    </div>
  )
}

const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-20 cursor-pointer text-white text-2xl md:text-3xl hover:scale-110 duration-300"
    >
      <FiArrowLeft />
    </div>
  )
}

const Customers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  return (
    <motion.div
      style={{ backgroundImage: `url(${contactbg})` }}
      className='bg-no-repeat bg-cover bg-center min-h-screen py-20'
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <SecHead
        title='Testimonials'
        heading='What our customers say about their experience'
        className1='text-white!'
        className4='bg-white'
      />

      <Container>

        <Flex className='gap-10 items-stretch flex-col lg:flex-row mt-12'>

          <motion.div
            className='lg:w-[30%] w-full flex justify-center lg:justify-start'
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CustomerCard />
          </motion.div>

          <motion.div
            className='lg:w-[70%] w-full relative'
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Slider {...settings}>
              <div className='px-3'>
                <CustomerRevew revewImg={revewImg1} />
              </div>

              <div className='px-3'>
                <CustomerRevew revewImg={IMg2} />
              </div>

              <div className='px-3'>
                <CustomerRevew revewImg={revewImg1} />
              </div>
            </Slider>

            <p className='text-white text-center lg:text-left mt-14 text-lg font-medium'>
              Supported by Brands That Inspire Innovation
            </p>
          </motion.div>

        </Flex>

        <div className='mt-12 flex flex-wrap justify-center lg:justify-between items-center gap-8 md:gap-12 opacity-90'>

          <img src={company} alt="" className='max-w-[120px] hover:scale-105 duration-300' />

          <img src={company2} alt="" className='max-w-[120px] hover:scale-105 duration-300' />

          <img src={company3} alt="" className='max-w-[120px] hover:scale-105 duration-300' />

          <img src={company} alt="" className='max-w-[120px] hover:scale-105 duration-300' />

          <img src={company3} alt="" className='max-w-[120px] hover:scale-105 duration-300' />

          <img src={company2} alt="" className='max-w-[120px] hover:scale-105 duration-300' />

        </div>

      </Container>
    </motion.div>
  )
}

export default Customers