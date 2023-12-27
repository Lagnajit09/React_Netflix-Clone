import React, { useState, useEffect } from "react";
import "./Login.css";

function Login(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 8
      );
    }, 500);

    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    if (!enteredEmail.includes("@")) {
      setEmailIsValid(true);
    }
  };

  const validatePasswordHandler = () => {
    if (!(enteredPassword.trim().length > 8)) {
      setPasswordIsValid(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const signUpHandler = () => {
    props.signUp();
  };

  const btnClickHandler = () => {
    if (formIsValid) {
      props.signIn();
    }
  };

  return (
    <div>
      <div className="loginPage" onReset={submitHandler}>
        <div className="layer" />
        <div className="logo">
          <img
            className="logo_img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
            alt="netflix-logo"
          />
        </div>
        <div className="form_bg"></div>
        <div className="login_form">
          <form onSubmit={submitHandler}>
            <h1 className="sign_in">Sign In</h1>
            <div className={`input ${emailIsValid ? "invalidEmail" : ""}`}>
              <input
                type="email"
                className="signin_input"
                placeholder="Email address"
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              />
              <p className={`error ${emailIsValid ? "errorEmailMsg" : ""}`}>
                {" "}
                Please enter a valid email adress.
              </p>
            </div>
            <div
              className={`input ${passwordIsValid ? "invalidPassword" : ""}`}
            >
              <input
                type="password"
                className="signin_input"
                placeholder="Password"
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
              />
              <p
                className={`error ${passwordIsValid ? "errorPasswordMsg" : ""}`}
              >
                {" "}
                Password must have atleast 8 characters.
              </p>
            </div>
            <div className="btn">
              <button className="signin_btn" onClick={btnClickHandler}>
                Sign In
              </button>
            </div>
            <p className="msg">
              New to Netflix?<span onClick={signUpHandler}> Sign up now</span>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
