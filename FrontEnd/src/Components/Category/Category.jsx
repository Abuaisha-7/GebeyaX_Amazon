
import React from 'react'
import {categoryInfos} from './CategoryFullInfo'
import CategoryCard from './CategoryCard'
import classes from './Category.module.css'

const Categorys = () => {
  return (
    <section className={classes.category_contener}>
        {
            categoryInfos.map((info)=>(
               <CategoryCard key={info} data = {info}/>
               ))
        }
     
    </section>
  )
}

export default Categorys