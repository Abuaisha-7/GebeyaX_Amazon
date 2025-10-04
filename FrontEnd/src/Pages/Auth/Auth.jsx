import React, { useContext, useState } from "react";
import classes from "./Singnup.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../Utility/fireBase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/actionType";

const Auth = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState("");
  const [loading, setloading] = useState({
    singIn: false,
    singUp: false,
  });

  // console.log(email, password);

  const [{ user }, dispatch] = useContext(DataContext);
  const naviget = useNavigate();
  const navStateData = useLocation()
  // console.log(user)

  const authHandler = async (e) => {
    e.preventDefault();
    // console.log(e.target.name)

    if (e.target.name == "SignIn") {
      // firebase auth
      setloading({ ...loading, singIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setloading({ ...loading, singIn: false });
          naviget(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          seterror(err.message);
          setloading({ ...loading, singIn: false });
        });
    } else {
      setloading({ ...loading, singUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setloading({ ...loading, singUp: false });
          naviget(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          seterror(err.message);
          setloading({ ...loading, singUp: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>

      {/* form */}

      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small style={{
            padding:"5px",
            textAlign: "center",
            color: "red",
            fontWeight: "bold"
          }}>
          {navStateData?.state?.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>

          <button
            type="submit"
            onClick={authHandler}
            className={classes.login_signInBtn}
            name="SignIn"
          >
            {loading.singIn ? (<ClipLoader color="#000" size={15} />) : "Sign In"}
          </button>
        </form>
        {/* agreement */}
        <p>
          By signing in, you agree to the Aazon Fack Clone Condition of Use &
          Sale. Please see our Privacy notice, our Cookies notice and our
          Interest-Based Ads Notice.
        </p>
        {/* creat account bt */}
        <button
          type="submit"
          onClick={authHandler}
          className={classes.login_registerBtn}
          name="SignUp"
        >

          {
          loading.singUp ? <ClipLoader color="#000" size={15} /> : ("Creat Your Amazon Account")
          }
          
        </button>

        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
};

export default Auth;
