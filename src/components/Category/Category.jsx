import React, { useState } from "react";
import styles from "./Category.module.scss";
import play from "../../assets/play-icon.png";
import pausa from "../../assets/pausa-icon.png";
// import pausa from "../../audio/TheFatRat-Upwind.mp3";
// import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'
import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";

const Category = ({ firstName, lastName }) => {
  const [check, setCheck] = useState(0);

  var timeCalculation = function (value) {
    var second = Math.floor(value % 60);
    var minut = Math.floor((value * 60) % 60);

    if (second < 10) {
      second = "0" + second;
    }

    return minut + ":" + second;
  };

  const wavesurfer = WaveSurfer.create({
    container: document.body,
    waveColor: "#4F4A85",
    progressColor: "#383351",
    // url: "./audio/TheFatRat-Upwind.wav",
  });

  wavesurfer.load("./audio/TheFatRat-Upwind.wav")

  const playPause = () => {
    wavesurfer.playPause();
  };

  return (
    <section className={styles.category__section}>
      <div className="container">
        <div className={styles.category__box}>
          <div className={styles.category__top}>
            <img
              className={styles.category__image}
              src="https://picsum.photos/400"
              alt="photo"
            />
            <div className={styles.category__content}>
              <p className={styles.category__firstName}>{firstName}</p>
              <p className={styles.category__lastName}>{lastName}</p>
              <a className={styles.category__tel} href="tel:+998991234567">
                +998 (99) 123-45-67
              </a>
            </div>
          </div>
          <ul className={styles.category__canter}>
            <li className={styles.category__item}>
              <img
                className={styles.category__musicImg}
                src="https://picsum.photos/100"
                alt="image"
              />
              <div className={styles.category__musicBox}>
                <div className={styles.category__detail}>
                  <p className={styles.category__musicText}>
                    {firstName} {lastName}
                    <div className={styles.category__time}>
                      <span className={styles.category__current}>0:00</span>{" "}
                      {/* current */}
                      <span className={styles.category__duration}>
                        0:00
                      </span>{" "}
                      {/* duration */}
                    </div>
                  </p>
                  <div className={styles.category__control}>
                    <img
                      className={styles.category__play}
                      src={check === 1 ? pausa : play}
                      alt="play"
                      onClick={() => {
                        check === 1 ? setCheck(0) : setCheck(1);
                        playPause();
                      }}
                    />{" "}
                    {/* play pause */}
                  </div>
                </div>
                <div className={styles.category__wave} id="wavefrom"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Category;
