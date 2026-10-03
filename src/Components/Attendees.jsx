import React from 'react'
import Container from './Container'
import SecHead from './SecHead'
import IncludedCard from './IncludedCard'


const Attendees = () => {
  return (
    <>
      <Container>

        <section className='mt-25 mb-45'>
          <SecHead title='Pricing Plan' heading='Discover our flexible pricing plans for attendees'
          />
        

        <IncludedCard/>
        </section>


      </Container>
    </>
  )
}

export default Attendees
