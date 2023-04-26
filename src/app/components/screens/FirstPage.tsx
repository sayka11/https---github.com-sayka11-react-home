import React from "react";
import "./styles.css";
import Header from "../Header";

const FirstPage = () => {
  return (
    <div className="firstbox">
      <div className="fbcontent">
        <Header />
        <div className="header">
          <h1>Discover Amazing places in Japan</h1>
          <p className="jump-text">
            Jump off balcony, onto stranger's head. Chase ball of string hide
            when guests come over. Being gorgeous with belly side up i could pee
            on this if i had the energy but under the bed, for attack the child,
            open the door.{" "}
          </p>

          <div className="text-oval">
            <div className="ot">
              <div>
                {" "}
                <img className="firstoval" src="Oval.svg" alt="oval2" />
                <input
                  type="text"
                  id="place"
                  placeholder="Where would you like to go?"
                />
                <hr className="underline" color="#ffffff" />
              </div>
            </div>

            <div className="ot">
              <div>
                {" "}
                <img className="firstoval" src="Oval.svg" alt="oval2" />
                <input
                  type="text"
                  id="place"
                  placeholder="Where would you like to go?"
                />
                <hr className="underline" color="#ffffff" />
              </div>
            </div>

            <div className="buttonsearch">
              {" "}
              <button className="search">SEARCH</button>
            </div>
          </div>
        </div>
        <div className="underblock">
          <h2 className="benefits">Benefits of Odigo</h2>

          <div className="secondbox">
            <div className="welcome">
              <img className="home" src="./icon-1.svg" alt="home" />
              <h3>Welcome to Odigo!</h3>
              <p className="welcome-txt">
                Jump off balcony, onto stranger's head.
                <br />
                Chase ball of string hide when guests come
                <br /> over.
              </p>

              <div className="learn-arrow">
                <a href="#" className="learn-more">
                  LEARN MORE
                </a>
                <img className="arrow" src="arrow.svg" alt="arrow" />
              </div>
            </div>

            <div className="personal">
              <img className="person" src="./icon-2.svg" alt="person" />
              <h3>Your Personal Japan Guide</h3>
              <p className="personal-txt">
                Jump off balcony, onto stranger's head.
                <br />
                Chase ball of string hide when guests come
                <br /> over.
              </p>

              <div className="learn-arrow">
                <a href="#" className="learn-more">
                  LEARN MORE
                </a>
                <img className="arrow" src="arrow.svg" alt="arrow" />
              </div>
            </div>

            <div className="promoting">
              <img className="promote" src="./icon-3.svg" alt="promote" />
              <h3>Promoting Local Businesses</h3>
              <p className="personal-txt">
                Jump off balcony, onto stranger's head.
                <br />
                Chase ball of string hide when guests come
                <br /> over.
              </p>

              <div className="learn-arrow">
                <a href="#" className="learn-more">
                  LEARN MORE
                </a>
                <img className="arrow" src="arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;