import React from 'react'
import {Carousel} from "react-responsive-carousel"
import {img} from './img/Data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from '../Carousel/Carousel.module.css'


const CarouselEffect = () => {
  return (
    <div className={classes.carousel}>
        <Carousel
        autoPlay={true}
        infiniteLoop={false}
        showIndicators={false}
        showThumbs={false}
        >

          {
            img.map((imageItemLink,i) => {
              return <img key={i} src={imageItemLink}/>
            })
          }
          

        </Carousel>
        <div className={classes.hero_img}>

        </div>
    </div>

  )
}

export default CarouselEffect