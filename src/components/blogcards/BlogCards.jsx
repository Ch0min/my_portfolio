import React from "react";
import "./blogcards.css"

import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"


import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css"
import 'swiper/css/navigation';
import "swiper/css/pagination"


const data = [
    {
        avatar: AVTR1,
        name: "Tina Snow",
        review: "Mit elsket hobby projekt, som jeg valgte at udvikle, da jeg gerne ville have mere erfaring med ReactJS."
    },
    {
        avatar: AVTR2,
        name: "Shatta Wale",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, animi fuga iure iusto libero omnis quod ullam"
    },
    {
        avatar: AVTR3,
        name: "Markel Lek",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, animi fuga iure iusto libero omnis quod ullam"
    },
    {
        avatar: AVTR4,
        name: "Yo Yo",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, animi fuga iure iusto libero omnis quod ullam"
    },

]

function BlogCards() {
    return (
        <section id="blogcards">
            {/*<h5 className="blogcards__heading">Følg med i</h5>*/}
            <h2 className="blogcards__heading">MINE BLOGS</h2>

            <Swiper className="container blogcards__container"
                    modules={[Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
            >
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="blogcard">
                                <h5 className="blogcard__name">{name}</h5>
                                <small className="blogcard__review">
                                    {review}
                                </small>
                                <div className="blogcard__avatar">
                                    <img src={avatar} alt={name}/>
                                </div>

                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
}

export default BlogCards;
















