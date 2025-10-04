import React from 'react'
import CarouselEffect from '../../Components/Carousel/Carousel'
import Categorys from '../../Components/Category/Category'
import Product from '../../Components/Products/Product'
import Layout from '../../Components/Layout/Layout'


const Landing = () => {
  return (
    <Layout>

    <CarouselEffect/>
      <Categorys/>
      <Product />
      
    </Layout>
  )
}

export default Landing