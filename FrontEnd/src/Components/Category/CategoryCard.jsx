import React from 'react'
import classes from './Category.module.css'
import { Link } from "react-router-dom";

const CategoryCard = ({data}) => {
  console.log(data)

  return (
    <div className={classes.category}>
              <Link to={`/category/${data.name}`}>
            <div className={classes.category_img}>
            <span>
                <h2>{data?.title}</h2>
            </span>
            <img src={data?.imgLink} alt="" />
            </div>
            <p>shop now</p>
        </Link>
    </div>
  )
}

export default CategoryCard