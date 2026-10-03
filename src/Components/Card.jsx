import React from 'react'
import Container from './Container'
import arrow from "../assets/feature-card-arrow-icon.png"
import Flex from './Flex'

const Card = ({ImgSrc}) => {
    return (
        <>
            <div>
                <Container>
                    <div
                        className="group w-86.5 rounded-[20px] p-10 bg-[#ffffff18] hover:bg-primary transition-all duration-300"
                    >


                        <div
                            className="p-3.25 rounded-[10px] bg-primary w-12.5 group-hover:bg-white transition-all duration-300"
                        >
                            <img
                                src={ImgSrc}
                                alt=""
                                className="group-hover:brightness-0"
                            />
                        </div>


                        <div className="text-white">
                            <h2 className="pt-24.75 pb-3 text-[20px] font-bold">
                                Event Planning Manage
                            </h2>

                            <p className="leading-6.25">
                                Deliver seamless virtual experience
                                with high-quality streaming and
                                interactive tools.
                            </p>


                            <div className="pt-8">
                                <Flex className="items-center gap-2.25">
                                    <h3>
                                        <a href="#">Read More</a>
                                    </h3>

                                    <div>
                                        <img src={arrow} alt="" />
                                    </div>
                                </Flex>
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
        </>
    )
}

export default Card
