import React, { useState, useEffect, useContext, useCallback } from "react";
import styles from "./Category.module.scss";
import telIcon from "../../assets/phone-call.png";
import instaIcon from "../../assets/instagram.png";
import Loading from "../Loading/Loading";
import axios from "axios";
import { StoreContext } from "../StoreWrapper/StoreWrapper";
import Waveform from "../Waveform/Waveform";

const Category = React.memo(() => {
  const [categoryData, setCategoryData] = useState(null);
  const { category } = useContext(StoreContext);
  const [currentPlaying, setCurrentPlaying] = useState(null);

  const fetchData = useCallback(async () => {
    if (category.id) {
      try {
        const [categoryResponse, numberResponse] = await Promise.all([
          axios.get(
            `https://urchin-app-fuh4a.ondigitalocean.app/api/audios/${category.id}`
          ),
          axios.get(
            "https://urchin-app-fuh4a.ondigitalocean.app/api/phone-number"
          ),
        ]);

        setCategoryData({
          category: categoryResponse.data,
          number: numberResponse.data,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }, [category.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlePlay = useCallback((audio) => {
    setCurrentPlaying(audio.id);
  }, []);

  const handlePause = useCallback(() => {
    setCurrentPlaying(null);
  }, []);

  if (!categoryData) {
    return <Loading />;
  }

  const { category: categoryDetails, number } = categoryData;

  return (
    <section className={styles.category__section}>
      <div className="container">
        <div className={styles.category__box} key={categoryDetails._id}>
          <div className={styles.category__top}>
            <img
              className={styles.category__image}
              src={`${categoryDetails.image}`}
              width={400}
              height={400}
              alt="photo"
            />
            <div className={styles.category__content}>
              <p className={styles.category__firstName}>
                {categoryDetails.firstname}
              </p>
              <p className={styles.category__lastName}>
                {categoryDetails.lastname}
              </p>
              {number?.map((el) => (
                <div className={styles.category__linkList} key={el._id}>
                  <a
                    className={styles.category__tel}
                    href={`tel:+998${el.number}`}
                  >
                    <img
                      src={telIcon}
                      width={45}
                      height={45}
                      alt="telephone icon"
                    />
                  </a>
                  <a
                    className={styles.category__insta}
                    href={el.instagram}
                    target="_blank"
                  >
                    <img
                      src={instaIcon}
                      width={45}
                      height={45}
                      alt="instagram icon"
                    />
                  </a>
                </div>
              ))}
              <p className={styles.category__description}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
                sapiente a vitae saepe beatae est provident, quis fugit! Maiores
                odio quaerat, eos suscipit quam aperiam, blanditiis unde minima,
                voluptatibus ipsam tenetur explicabo vel minus consectetur.
              </p>
            </div>
          </div>
          <ul className={styles.category__canter}>
            {categoryDetails.audios.map((audio) => (
              <Waveform
                key={audio.id}
                el={audio}
                isPlaying={audio.id === currentPlaying}
                onPlay={handlePlay}
                onPause={handlePause}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});

export default Category;
