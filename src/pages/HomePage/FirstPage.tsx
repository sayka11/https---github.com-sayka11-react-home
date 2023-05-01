import React from "react";
import "./styles.css";
import firstOval from "../../assets/Images/Oval.svg"
import homeImage from "../../assets/Images/icon-1.svg"
import arrovImage from "../../assets/Images/arrow.svg"
import personImage from "../../assets/Images/icon-2.svg"
import promoteImage from "../../assets/Images/icon-3.svg"
import imageBack from "../../assets/Images/image-back.jpg"
import fujiImage from "../../assets/Images/image-fuji.jpg"
import kyotoImage from "../../assets/Images/Image-kyoto.jpg"
import fujiOverlay from "../../assets/Images/Overlay-fuji.png"
import tokyoImage from "../../assets/Images/Image-tokyo.jpg"
import niigataImage1 from "../../assets/Images/Image-niigata-1.jpg"
import sapporoImage from "../../assets/Images/Image-sapporo.jpg"
import tottoriImage from "../../assets/Images/image-tottori.svg"
import redImage from "../../assets/Images/image-red.svg"
import nagoyaImage from "../../assets/Images/Image-nagoya.jpg"
import niigataImage from "../../assets/Images/Image-niigata.jpg"
import osakaImage from "../../assets/Images/Image-osaka.jpg"
import saitamaImage from "../../assets/Images/Image-saitama.jpg"
import uenoImage from "../../assets/Images/Image-ueno.jpg"
import shibuyaImage from "../../assets/Images/image-shibuya.jpg"
import playImage from "../../assets/Images/Shape-play.png"
import imageVideo from "../../assets/Images/Image-video.jpg"
import { PlaceCard } from "./components/PlaceCard";






export const FirstPage = () => {
  return (
    <><><><div className="firstbox">
      <div className="fbcontent">
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
                <img className="firstoval" src={firstOval} alt="oval2" />
                <input
                  type="text"
                  id="place"
                  placeholder="Where would you like to go?" />
                <hr className="underline" color="#ffffff" />
              </div>
            </div>

            <div className="ot">
              <div>
                {" "}
                <img className="firstoval" src={firstOval} alt="oval2" />
                <input
                  type="text"
                  id="place"
                  placeholder="Where would you like to go?" />
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
              <img className="home" src={homeImage} alt="home" />
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
                <img className="arrow" src={arrovImage} alt="arrow" />
              </div>
            </div>

            <div className="personal">
              <img className="person" src={personImage} alt="person" />
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
                <img className="arrow" src={arrovImage} alt="arrow" />
              </div>
            </div>

            <div className="promoting">
              <img className="promote" src={promoteImage} alt="promote" />
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
                <img className="arrow" src={arrovImage} alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div><div className="thirdbox">
        <div className="get">
          <h2 className="inspire">Get inspired for your next trip
            <hr className="underline" color="#006DFE" />
          </h2>

          <div className="view-arrow">
            <a href="#" className="view-all">VIEW ALL</a>
            <img className="arrow" src={arrovImage} alt="arrow" />
          </div>
        </div>


        <div className="conteiner-1">
          <img className="fuji" src={fujiImage} alt="fuji" />
          <img className="kyoto" src={kyotoImage} alt="kyoto" />
          <img className="over-fuji" src={fujiOverlay} alt="over-fuji" />
          <img className="over-kyoto" src={fujiOverlay} alt="over-kyoto" />
          <h1 className="over-txt-1">Mount Fuji</h1>
          <h1 className="over-txt-2">Kyoto</h1>
        </div>

        <div className="conteiner-2">
          <img className="tokyo" src={tokyoImage} alt="tokyo" />
          <img className="niigata-1" src={niigataImage1} alt="niigata" />
          <img className="sapporo" src={sapporoImage} alt="sapporo" />
          <img className="over-tokyo" src={fujiOverlay} alt="over-tokyo" />
          <img className="over-niigata" src={fujiOverlay} alt="over-niigata" />
          <img className="over-sapporo" src={fujiOverlay} alt="over-sapporo" />
          <h1 className="over-txt-3">Tokyo</h1>
          <h1 className="over-txt-4">Niigata</h1>
          <h1 className="over-txt-5">Sapporo</h1>
        </div>


      </div></><div className="fourbox">
        <div className="focus">
          <img className="tottori" src={tottoriImage} alt="tottori" />

          <div className="prefecture">
            <h2 className="pref">Prefecture in Focus: Tottori</h2>
            <p className="prefecture-txt">Jump off balcony, onto stranger's head.
              Chase ball of string hide when<br />
              guests come over. Being gorgeous with belly side up
              i could pee on this if i<br /> had the energy but under the bed,
              for attack the child, open the door.</p>

            <div className="view-pref">
              <a href="#" className="viewpref">VIEW PREFECTURE</a>
              <img className="arrow" src={arrovImage} alt="arrow" />
            </div>

          </div>

        </div>

        <div className="featured">
          <div className="arashiyama">
            <h2 className="pref">Featured Neighborhood: <br />Kyoto’s Arashiyama</h2>
            <p className="arash-txt">Jump off balcony, onto stranger's head.
              Chase ball of string hide when<br />
              guests come over. Being gorgeous with belly side up
              i could pee on this if i<br /> had the energy but under the bed,
              for attack the child, open the door.</p>

            <div className="view-pref">
              <a href="#" className="viewpref">VIEW NEIGHBORHOOD</a>
              <img className="arrow" src={arrovImage} alt="arrow" />
            </div>
          </div>

          <img className="red" src={redImage} alt="red" />
        </div>
      </div>

      <div className="fivebox">
        <div className="get">
          <h2 className="get-txt">Today top places to visit
            <hr className="underline" color="#006DFE" />
          </h2>
        </div>

        <div className="conteiner-3">
          <PlaceCard imageSrc={nagoyaImage} description={`Jump off balcony, onto stranger's head. Chase ball of
                string hide when guests come over. Being gorgeous
                with belly side up i could pee on this.`} link="./explore-japan.html" />
          <PlaceCard imageSrc={niigataImage} description={`Jump off balcony, onto stranger's head. Chase ball of
                string hide when guests come over. Being gorgeous
                with belly side up i could pee on this.`} link="./explore-niigata.html" />
          <PlaceCard imageSrc={osakaImage} description={`Jump off balcony, onto stranger's head. Chase ball of
                string hide when guests come over. Being gorgeous
                with belly side up i could pee on this.`} link="./explore-niigata.html" />

          <PlaceCard imageSrc={saitamaImage} description={`Jump off balcony, onto stranger's head. Chase ball of
                string hide when guests come over. Being gorgeous
                with belly side up i could pee on this.`} link="./explore-niigata.html" />

          <PlaceCard imageSrc={uenoImage} description={`Jump off balcony, onto stranger's head. Chase ball of
                string hide when guests come over. Being gorgeous
                with belly side up i could pee on this.`} link="./explore-niigata.html" />

          <PlaceCard imageSrc={shibuyaImage} description={`Jump off balcony, onto stranger's head. Chase ball of
                string hide when guests come over. Being gorgeous
                with belly side up i could pee on this.`} link="./explore-niigata.html" />

        </div>



        <div className="back-video">
          <img className="play-button" src={playImage} alt="play-button" />
        </div>
      </div>
    </></>

  );
};
