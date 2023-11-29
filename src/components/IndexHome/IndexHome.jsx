import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./IndexHome.module.scss";
import { Link } from "react-router-dom";
import pauseIcon from "../../assets/pause-icon.png";
import playIcon from "../../assets/play-icon.png";
import audio1 from "../../audio/tutututu-mem.mp3";
import audio2 from "../../audio/eralash.mp3";
import audio3 from "../../audio/luchshe-imet-druga.mp3";
import audio4 from "../../audio/lya-tyi-kryisa1.mp3";
import audio5 from "../../audio/muzyika-s-proydennoy-missiey-iz-gta-san-andreas.mp3";
import audio6 from "../../audio/rejisser-kiborg-ubiytsa.mp3";
import { StoreContext } from "../StoreWrapper/StoreWrapper";

const IndexHome = React.memo(() => {
  const [selectedAudio, setSelectedAudio] = useState(0);
  const { dispatch } = useContext(StoreContext);
  const audioRefs = [
    useRef(new Audio(audio1)),
    useRef(new Audio(audio2)),
    useRef(new Audio(audio3)),
    useRef(new Audio(audio4)),
    useRef(new Audio(audio5)),
    useRef(new Audio(audio6)),
  ];

  useEffect(() => {
    audioRefs.forEach((audioRef, index) => {
      if (selectedAudio === index + 1) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    });
  }, [selectedAudio]);

  const handleAudioClick = (index) => {
    setSelectedAudio((prevSelectedAudio) =>
      prevSelectedAudio === index + 1 ? 0 : index + 1
    );
  };

  const renderListItem = (index, firstName, lastName, to) => (
    <li key={index} className={styles.indexHome__item}>
      <img
        className={styles.indexHome__play}
        src={selectedAudio === index + 1 ? playIcon : pauseIcon}
        width={60}
        height={60}
        alt="play"
        onClick={() => handleAudioClick(index)}
      />
      <Link
        className={styles.indexHome__itemLink}
        to={to}
        onClick={() =>
          dispatch({
            type: "category",
            payload: { src: to, firstName, lastName },
          })
        }
      >
        <img
          className={styles.indexHome__img}
          src={`https://picsum.photos/210/350?random=${index}`}
          width={210}
          height={350}
          alt="image"
        />
        <div className={styles.indexHome__content}>
          <p className={styles.indexHome__firstname}>{firstName}</p>
          <p className={styles.indexHome__lastname}>{lastName}</p>
        </div>
      </Link>
    </li>
  );

  return (
    <section className={styles.indexHome__section}>
      <div className="container">
        <div className={styles.indexHome__boxTop}>
          <div className={styles.indexHome__left}>
            <h2 className={styles.indexHome__title}>Lorem, ipsum dolor.</h2>
            <p className={styles.indexHome__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              dolor molestiae omnis incidunt sapiente dolorum?
            </p>
            <Link to={"about"} className={styles.indexHome__btn}>
              MORE
            </Link>
          </div>
          <div className={styles.indexHome__right}>
            <img
              className={styles.indexHome__image}
              src="https://picsum.photos/300"
              alt="image"
            />
          </div>
        </div>
        <div className={styles.indexHome__boxCenter}>
          <div className={styles.indexHome__searchBox}>
            <input
              className={styles.indexHome__search}
              type="text"
              name="search"
              placeholder="search"
            />
          </div>
          <ul className={styles.indexHome__list}>
            {renderListItem(0, "Jasur", "Mavlonov", "jasur-mavlonov")}
            {renderListItem(1, "Alisher", "Qodirov", "alisher-qodirov")}
            {renderListItem(2, "Ahmad", "Qosimov", "ahmad-qosimov")}
            {renderListItem(3, "Abdulla", "Ahmadov", "abdulla-ahmadov")}
            {renderListItem(4, "Shoira", "Sultonova", "shoira-sultonova")}
            {renderListItem(5, "Bobur", "Yoldoshev", "bobur-yoldoshev")}
          </ul>
        </div>
      </div>
    </section>
  );
});

export default IndexHome;
