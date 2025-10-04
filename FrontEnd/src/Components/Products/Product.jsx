import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";

const Product = () => {
  const [Products, setProducts] = useState([]);
  const [isLoding, setsLoding] = useState(false);

  useEffect(() => {
    setsLoding(true);
    axios
      .get("https://fakestoreapi.com/products")

      .then((res) => {
        console.log(res);
        setProducts(res.data);
        setsLoding(false);
      })
      .catch((err) => {
        console.log(err);
        setsLoding(false);
      });
  }, []);

  return (
    <>
      {isLoding ? (
        <Loader />
      ) : (
        <section className={classes.product_contener}>
          {Products.map((singleProduct) => {
            return (
   <ProductCard key={singleProduct} renderAdd={true} product={singleProduct}/>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Product;
