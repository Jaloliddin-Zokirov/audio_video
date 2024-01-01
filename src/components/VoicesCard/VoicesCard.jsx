import React, { useContext, useEffect, useState } from "react";
import styles from "./VoicesCard.module.scss";
import { Link } from "react-router-dom";
import { StoreContext } from "../StoreWrapper/StoreWrapper";
import Loading from "../Loading/Loading";
import axios from "axios";
import WaveSurfer from "wavesurfer.js";
import pauseIcon from "../../assets/pause-icon.png";
import playIcon from "../../assets/play-icon.png";

const VoicesCard = React.memo(() => {
  const [waveforms, setWaveforms] = useState([]);
  const [indexx, setIndex] = useState(null);
  const [category, setCategory] = useState([]);
  const { dispatch } = useContext(StoreContext);

  useEffect(() => {
    axios
      .get("https://urchin-app-fuh4a.ondigitalocean.app/api/audios")
      .then((data) => setCategory(data.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const newWaveforms = category?.map((el, index) => {
      const newWaveform = WaveSurfer.create({
        container: `#waveform-${index}`,
      });

      newWaveform.load(
        `https://urchin-app-fuh4a.ondigitalocean.app${el.smallaudio}`
      ).catch((err) => console.error(err));

      newWaveform.on("finish", () => {
        setIndex(null);
      });

      return newWaveform;
    });

    setWaveforms(newWaveforms);

    return () => {
      newWaveforms?.forEach((wave) => wave.destroy());
    };
  }, [category]);

  const handlePlay = (index) => {
    if (waveforms && waveforms[index]) {
      const selectedWaveform = waveforms[index];

      const isCurrentlyPlaying = index === indexx;

      if (isCurrentlyPlaying) {
        selectedWaveform.pause();
        setIndex(null);
      } else {
        selectedWaveform.play();

        waveforms.forEach((wave, i) => {
          if (i !== index && wave) {
            wave.pause();
          }
        });

        setIndex(index);
      }
    }
  };

  return (
    <ul className={styles.voice__list}>
      {category.length === 0 ? (
        <Loading />
      ) : (
        category.map((el, index) => (
          <li key={el._id} className={styles.voice__item}>
            <div className={styles.voice__voice} id={`waveform-${index}`}></div>
            <button
              className={styles.voice__play}
              onClick={() => handlePlay(index)}
            >
              <img
                src={indexx === index ? playIcon : pauseIcon}
                width={60}
                height={60}
                alt="play"
              />
            </button>
            <Link
              className={styles.voice__itemLink}
              to={`/${el.firstname}`}
              onClick={() =>
                dispatch({
                  type: "category",
                  payload: { src: el.firstname, id: el._id },
                })
              }
            >
              <img
                className={styles.voice__img}
                src={`https://urchin-app-fuh4a.ondigitalocean.app${el.image}`}
                width={210}
                height={350}
                alt="image"
              />
              <div className={styles.voice__content}>
                <p className={styles.voice__firstname}>{el.firstname}</p>
                <p className={styles.voice__lastname}>{el.lastname}</p>
              </div>
            </Link>
          </li>
        ))
      )}
    </ul>
  );
});

export default VoicesCard;
