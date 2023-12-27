import React, { useState } from "react";
import "./Home.css";

function Home(props) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);

  const inputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };
  const clickHandler = () => {
    if (enteredEmail.includes("@")) {
      props.checkEmail();
    }
  };
  const signinClickHandler = () => {
    props.clicked();
  };
  const validateEmailHandler = () => {
    if (!enteredEmail.includes("@")) {
      setInvalidEmail(true);
    }
  };

  return (
    <div>
      <div className="header">
        <div className="fade_top" />

        <nav>
          <img
            className="nav_img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
            alt="netflix-logo"
          />
          <button className="nav_button" onClick={signinClickHandler}>
            Sign In
          </button>
        </nav>

        <div className="fade_bottom" />

        <div className="header_contents">
          <div className="header_content">
            <h1>Unlimited movies, TV shows and more</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <p>Ready to watch? Register Now.</p>
          </div>
          <div className={`register ${invalidEmail ? "invalid" : ""}`}>
            <input
              type="email"
              className="register_input"
              placeholder="Email address"
              onChange={inputHandler}
              onBlur={validateEmailHandler}
            ></input>
            <button className="register_button" onClick={clickHandler}>
              {"Get Started >"}{" "}
            </button>
          </div>
          <div className={`error ${invalidEmail ? "errorMsg" : ""}`}>
            <p> Please enter a valid email adress.</p>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------------------- */}
      <div className="watch">
        <div className="watch_container">
          <h1>Watch everywhere</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        {/* <div className="watch_image">
          <img
            src="https://images.unsplash.com/photo-1627873649417-c67f701f1949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            className="tv_img"
            alt="TV_IMG"
          />
        </div> */}
      </div>
      {/* --------------------------------------------------------------------------------------------------- */}
      <div className="downloads">
        <div className="download_container">
          <img
            className="movie_img"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt="download_img"
          />
          <div className="download_img_sm">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
              className="movie_img_sm"
              alt=""
            />
            <div className="download_movie">
              <h3>Stranger Things</h3>
              <p>Downloading...</p>
            </div>
            <div className="download_logo"></div>
          </div>
        </div>
        <div className="download_container">
          <div className="download_desc">
            <h1>Download and watch shows offline</h1>
            <p>
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------- */}
      <div className="multidevice">
        <div className="fade_top" />
        <div className="multi_device_desc">
          <h1>Watch on multiple devices</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="fade_bottom" />
      </div>
      {/* ----------------------------------------------------------------------------------------------- */}
      <footer>
        <div class="footerItems">
          <div className="footerItem">
            <h1 class="fTitle">
              Questions? Call <span>000-800-919-1694</span>
            </h1>
          </div>

          <div className="footerItem">
            <div class="footerMenu">
              <ul class="fList">
                <li class="fListItem">FAQ</li>
                <li class="fListItem">Media Centre</li>
                <li class="fListItem">Ways to Watch</li>
                <li class="fListItem">Cookie Preferences</li>
                <li class="fListItem">Speed Test</li>
              </ul>
            </div>
            <div class="footerMenu">
              <ul class="fList">
                <li class="fListItem">Help Centre</li>
                <li class="fListItem">Investor Relations</li>
                <li class="fListItem">Terms of Use</li>
                <li class="fListItem">Corporate Information</li>
                <li class="fListItem">Legal Notices</li>
              </ul>
            </div>
            <div class="footerMenu">
              <ul class="fList">
                <li class="fListItem">Account</li>
                <li class="fListItem">Jobs</li>
                <li class="fListItem">Privacy</li>
                <li class="fListItem">Contact Us</li>
                <li class="fListItem">Only on Netflix</li>
              </ul>
            </div>
          </div>

          <div className="footerItem">
            <p class="copyright">@LM. All rights reserved. 2023.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
