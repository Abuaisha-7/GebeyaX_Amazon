import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoints";
import ProductCard from "../../Components/Products/ProductCard";
import Loader from "../../Components/Loader/Loader";

const Results = () => {
  const [results, setresults] = useState([]);
  const [isLoding, setsLoding] = useState(false);
  const { catagoryName } = useParams();
  // console.log(catagoryName)
  useEffect(() => {
    setsLoding(true)
    axios.get(`${productUrl}/products/category/${catagoryName}`)

      .then((res) => {
        console.log(res);
        setresults(res.data);
        setsLoding(false);
      })
      .catch((err) => {
        console.log(err);
        setsLoding(false);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Resualts</h1>
        <p style={{ padding: "30px" }}>Catagory/{catagoryName}</p>
        <hr />
        {isLoding? (<Loader/>): ( <div className={classes.product_container}>
          {results?.map((product) => (
            <ProductCard 
            key={product.id} 
            product={product}
            reanderDesc={false}
            renderAdd={true}
            />
          ))}
        </div>)}
      </section>
    </Layout>
  );
};

export default Results;
