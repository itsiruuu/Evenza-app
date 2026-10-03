import React from 'react'
import { motion } from 'framer-motion'
import SecHead from './SecHead'
import UpdateCard1 from './UpdateCard1'
import Container from './Container'
import UpdateCard2 from './UpdateCard2'
import Flex from './Flex'
import iuhiu from '../assets/faq-stories-shared-image.png'
import iugbhvsd from '../assets/stories-article-image-two.png'

const Stories = () => {

  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <>
      <motion.div
        className='my-25'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <SecHead
          title='Latest Blog'
          heading='Explore our latest insights stories and updates'
        />

        <Container>
          <Flex className='gap-7.5'>

            
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.2 }}
            >
              <UpdateCard1 />
            </motion.div>

           
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.4 }}
            >
              <UpdateCard2 iuhiu={iuhiu} />
              <UpdateCard2 iuhiu={iugbhvsd} />
            </motion.div>

          </Flex>
        </Container>

      </motion.div>
    </>
  )
}

export default Stories