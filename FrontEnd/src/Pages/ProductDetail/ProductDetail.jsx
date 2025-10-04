import React, { useEffect, useState } from 'react'
import classes from "./ProductDetail.module.css";
import Layout from '../../Components/Layout/Layout'
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Products/ProductCard";
import Loader from '../../Components/Loader/Loader';

const ProductDetail = () => {

  const [product, setproduct] = useState([]);
  const [isLoding, setsLoding] = useState(false);
  const { productId } = useParams();
  console.log(productId)

  useEffect(() => {
    setsLoding(true)
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res)
        setproduct(res.data);
        setsLoding(false)
      })
      .catch((err) => {
        console.log(err);
        setsLoding(false)
      });
  }, []);

  return (
    <Layout>
      {isLoding? (<Loader/>): (<ProductCard 
      product={product} 
      flex={true} 
      reanderDesc={true}
      renderAdd={true}
      />)}
    </Layout>
  )
}

export default ProductDetail