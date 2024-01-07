import React, { useContext, useEffect, useState } from "react";
import styles from "./VoicesCard.module.scss";
import { Link } from "react-router-dom";
import { StoreContext } from "../StoreWrapper/StoreWrapper";
import Loading from "../Loading/Loading";
import axios from "axios";
import pauseIcon from "../../assets/pause-icon.png";
import playIcon from "../../assets/play-icon.png";

const VoicesCard = React.memo(() => {
  const [indexx, setIndex] = useState(null);
  const [category, setCategory] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const { dispatch } = useContext(StoreContext);

  useEffect(() => {
    axios
      .get("https://urchin-app-fuh4a.ondigitalocean.app/api/audios")
      .then((data) => setCategory(data.data))
      .catch((err) => console.error(err));
  }, []);

  const handlePlay = (index) => {
    const audioElements = document.querySelectorAll("audio");

    audioElements.forEach((audio, i) => {
      if (i === index) {
        if (audio.paused) {
          audio.play();
          setIndex(index);
          setIsPlaying(true);

          audio.addEventListener("ended", () => {
            setIndex(null);
            setIsPlaying(false);
          });
        } else {
          audio.pause();
          setIndex(null);
          setIsPlaying(false);
        }
      } else {
        audio.pause();
      }
    });
  };

  return (
    <ul className={styles.voice__list}>
      {category.length === 0 ? (
        <Loading />
      ) : (
        category.map((el, index) => (
          <li key={el._id} className={styles.voice__item}>
            <audio className={styles.voice__voice} controls>
              <source src={el.smallaudio} type="audio/mpeg" />
            </audio>
            <Link
              className={styles.voice__itemLink}
              to={`/${el.firstname}`}
              onClick={() =>
                dispatch({
                  type: "category",
                  payload: { src: el.firstname, id: el._id },
                })
              }
            ></Link>
            <div className={styles.voice__contentBox}>
              <img
                className={styles.voice__img}
                src={el.image}
                width={210}
                height={350}
                alt="image"
              />
              <div className={styles.voice__content}>
                <div className={styles.voice__playbox}>
                  <img
                    className={styles.voice__play}
                    id={el._id}
                    src={isPlaying && indexx === index ? playIcon : pauseIcon}
                    width={60}
                    height={60}
                    alt="play"
                    onClick={() => handlePlay(index)}
                  />
                </div>
                <p className={styles.voice__firstname}>{el.firstname}</p>
                <p className={styles.voice__lastname}>{el.lastname}</p>
              </div>
            </div>
          </li>
        ))
      )}
    </ul>
  );
});

export default VoicesCard;
