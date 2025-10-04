import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Products/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { Type } from "../../Utility/actionType";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const incriment = (item)=>{
    dispatch({
      type: Type.ADD_TO_BASKET,
      item
    })
  }

  const dicriment = (id)=>{
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id
    })
  }

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.Cart_container}>
          <h2>Hellow</h2>
          <h3>Your shoping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps : No item in your cart</p>
          ) : (
            basket?.map((item) => {
              return (
                <section key={item} className={classes.catr_product}>

                  <ProductCard
                    key={item}
                    product={item}
                    reanderDesc={true}
                    flex={true}
                    renderAdd={false}
                  />

                  <div className={classes.btn_container}>
                    <button className={classes.btn} onClick={()=> incriment(item)}>
                    
          <SlArrowDown size={20} />
                    </button>
                    <span>{item.amount}</span>
                    <button className={classes.btn} onClick={()=> dicriment(item.id)}>
          <SlArrowUp size={20} />

                    </button>
                  </div>

                </section>
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subTotal}>
            <div>
              <p>Subtotal ({basket?.length} item)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contain a gift</small>
            </span>
            <Link to="/payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Cart;
