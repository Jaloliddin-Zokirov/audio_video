import React, { useState, useEffect, useCallback } from "react";
import styles from "./Waveform.module.scss";
import WaveSurfer from "wavesurfer.js";
import play from "../../assets/play-icon.png";
import pause from "../../assets/pause-icon.png";
import Loading from "../Loading/Loading";

const Waveform = React.memo(({ el, isPlaying, onPlay, onPause }) => {
  const [playing, setPlaying] = useState(false);
  const [waveform, setWaveform] = useState(null);
  const [duration, setDuration] = useState("0:00");
  const [process, setProcess] = useState("0:00");

  const initializeWaveform = useCallback(() => {
    const newWaveform = WaveSurfer.create({
      container: `#waveform-${el.id}`,
      waveColor: "#588157",
      progressColor: "#06070e",
      height: 70,
      barWidth: 0.5,
      barRadius: 4,
    });

    newWaveform.load(`https://urchin-app-fuh4a.ondigitalocean.app${el.audio}`);
    setWaveform(newWaveform);

    return () => {
      if (newWaveform) {
        newWaveform.destroy();
      }
    };
  }, [el.id, el.audio]);

  useEffect(() => {
    const cleanupWaveform = initializeWaveform();

    return () => {
      cleanupWaveform();
    };
  }, [initializeWaveform]);

  useEffect(() => {
    if (isPlaying) {
      setPlaying(true);
      waveform?.play();
    } else {
      setPlaying(false);
      waveform?.pause();
    }
  }, [isPlaying, waveform]);

  const handlePlay = useCallback(() => {
    onPlay(el);
  }, [el, onPlay]);

  const handlePause = useCallback(() => {
    onPause();
  }, [onPause]);
  const [currentAudioId, setCurrentAudioId] = useState(null);
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.code) {
        case "Space":
          event.preventDefault();
          if (playing) {
            handlePause();
          } else {
            handlePlay();
          }
          break;
        case "ArrowLeft":
          if (playing && currentAudioId === el.id) {
            waveform.skip(-5);
          }
          break;
        case "ArrowRight":
          if (playing && currentAudioId === el.id) {
            waveform.skip(5);
          }
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [playing, handlePlay, handlePause, waveform, currentAudioId, el.id]);

  useEffect(() => {
    if (isPlaying) {
      setCurrentAudioId(el.id);
    }
  }, [isPlaying, el.id]);

  const timeCalculator = (value) => {
    let minutes = Math.floor(value / 60);
    let seconds = Math.floor(value % 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    return minutes + ":" + seconds;
  };

  useEffect(() => {
    waveform?.on("ready", function () {
      setDuration(timeCalculator(waveform.getDuration()));
    });
    waveform?.on("audioprocess", function () {
      setProcess(timeCalculator(waveform.getCurrentTime()));
    });
  }, [waveform]);

  return (
    <>
      {waveform === undefined ? (
        <Loading />
      ) : (
        <li className={styles.wavefrom__item}>
          <img
            className={styles.wavefrom__btn}
            src={playing ? play : pause}
            alt="play pause icon"
            onClick={playing ? handlePause : handlePlay}
          />

          <div className={styles.wavefrom__audioBox}>
            <div className={styles.wavefrom__controller}>
              <div className={styles.wavefrom__textContent}>
                <h3 className={styles.wavefrom__title}>{el.title}</h3>
                <p className={styles.wavefrom__desc}>{el.description}</p>
              </div>
              <div className={styles.wavefrom__minutSecond}>
                <span className={styles.wavefrom__start}>{process}</span>
                {" / "}
                <span className={styles.wavefrom__duration}>{duration}</span>
              </div>
            </div>
            <div className={styles.wavefrom__box}>
              <div className={styles.wavefrom__wave} id={`waveform-${el.id}`} />
            </div>
          </div>
        </li>
      )}
    </>
  );
});

export default Waveform;
