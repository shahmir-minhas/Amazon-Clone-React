import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    // firebase 9 create user with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        userCredential ? navigate("/") : alert("failed to sign in");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signUp = (e) => {
    // firebase 9 create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        auth
          ? navigate("/")
          : alert("Problem in creating account --- check console for details");
        alert("account created");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action="" method="post" className="login__form">
          <label htmlFor="username">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login__btn-login" onClick={signIn}>
            Sign in
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login__btn-create" onClick={signUp}>
          Create your account
        </button>
      </div>
    </div>
  );
};

export default Login;
