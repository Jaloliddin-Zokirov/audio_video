import React, { useState, useRef, useEffect } from "react";
import styles from "./Category.module.scss";
import play from "../../assets/play-icon.png";
import pause from "../../assets/pause-icon.png";
import UpwindMp3 from "../../audio/TheFatRat_Upwind.mp3";
import WaveSurfer from "wavesurfer.js";

const Category = ({ firstName, lastName }) => {
  const [check, setCheck] = useState(0);
  const waveContainerRef = useRef(null);
  const waveEndMinutSecuntRef = useRef(null);
  const waveStartMinutSecuntRef = useRef(null);
  const wavesurfer1Ref = useRef(null);

  const setTime = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    wavesurfer1Ref.current = WaveSurfer.create({
      container: waveContainerRef.current,
      waveColor: "#137a7f",
      progressColor: "purple",
      height: 50,
    });

    wavesurfer1Ref.current.on("ready", function (e) {
      if (waveEndMinutSecuntRef.current != null) {
        waveEndMinutSecuntRef.current.textContent = setTime(
          wavesurfer1Ref.current.getDuration()
        );
      }
    });

    wavesurfer1Ref.current.on("audioprocess", function (e) {
      if (waveStartMinutSecuntRef.current != null) {
        waveStartMinutSecuntRef.current.textContent = setTime(
          wavesurfer1Ref.current.getCurrentTime()
        );
      }
    });

    wavesurfer1Ref.current.load(UpwindMp3);

    document.addEventListener("keydown", keybrd, true);

    return () => {
      wavesurfer1Ref.current.destroy();
    };
  }, []);

  const keybrd = (e) => {
    if (e.key === "ArrowRight" && wavesurfer1Ref.current != null) {
      wavesurfer1Ref.current.skip(5);
    }
    if (e.key === "ArrowLeft" && wavesurfer1Ref.current != null) {
      wavesurfer1Ref.current.skip(-5);
    }
    if (e.key === "" && wavesurfer1Ref.current != null) {
      if (wavesurfer1Ref.current.isPlaying()) {
        wavesurfer1Ref.current.pause();
      } else {
        wavesurfer1Ref.current.play();
      }
      setCheck((value) => (value === 1 ? 0 : 1));
    }
  };

  const playstop = () => {
    if (wavesurfer1Ref.current.isPlaying()) {
      wavesurfer1Ref.current.pause();
    } else {
      wavesurfer1Ref.current.play();
    }
    setCheck((value) => (value === 1 ? 0 : 1));
  };

  return (
    <section className={styles.category__section}>
      <div className="container">
        <div className={styles.category__box}>
          <div className={styles.category__top}>
            <img
              className={styles.category__image}
              src="https://picsum.photos/400"
              width={400}
              height={400}
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
                src="https://picsum.photos/160"
                width={160}
                height={160}
                alt="image"
              />
              <div className={styles.category__musicBox}>
                <div className={styles.category__detail}>
                  <p className={styles.category__musicText}>
                    {firstName} {lastName}
                    <span className={styles.category__time}>
                      <span
                        className={styles.category__current}
                        ref={waveStartMinutSecuntRef}
                      >
                        0:00
                      </span>
                      <span> : </span>
                      <span
                        className={styles.category__duration}
                        ref={waveEndMinutSecuntRef}
                      >
                        0:00
                      </span>
                    </span>
                  </p>
                  <div className={styles.category__control}>
                    <button
                      className={styles.category__playBtn}
                      onClick={() => playstop(1)}
                    >
                      <img
                        className={styles.category__playImg}
                        src={check === 1 ? play : pause}
                        alt="play"
                      />
                    </button>
                  </div>
                </div>
                <div
                  className={styles.category__wave}
                  ref={waveContainerRef}
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Category;
