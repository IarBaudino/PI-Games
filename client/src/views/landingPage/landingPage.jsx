import React from 'react';
import { Link } from 'react-router-dom';
import style from "../landingPage/landing.module.css";
import video from "../../assets/images/fondo games.mp4";

const LandingPage = () => {
    return (
      <div className={style.background}>
        <div className={style.videoContainer}>
          <video autoPlay muted loop className={style.video}>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div className={style.content}>
          <h1 className={style.tituloUno}>Forever Gamer Universe</h1>
          <p className={style.tituloUno}> Explore this amazing game world!!!</p>
          <Link to="/home">
            <button className={style.button}>Let's play!</button>
          </Link>
        </div>
      </div>
    );
  };

export default LandingPage;

