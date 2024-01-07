import React, { useEffect, useState } from "react";
import styles from "./Hero.module.scss";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import axios from "axios";

const Hero = React.memo(() => {
  const [hero, sethero] = useState();
  useEffect(() => {
    axios
      .get("https://urchin-app-fuh4a.ondigitalocean.app/api/hero")
      .then((data) => sethero(data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      {hero === undefined ? (
        <Loading />
      ) : (
        hero.map((el) => {
          return (
            <section className={styles.hero__section} key={el._id}>
              <div className="container">
                <div className={styles.hero__boxTop}>
                  <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>{el.title}</h2>
                    <p className={styles.hero__text}>{el.description}</p>
                    <Link to={"about"} className={styles.hero__btn}>
                      MORE...
                    </Link>
                  </div>
                  <img
                    className={styles.hero__image}
                    width={368}
                    height={368}
                    src={`https://urchin-app-fuh4a.ondigitalocean.app${el.image}`}
                    alt="image"
                  />
                </div>
              </div>
            </section>
          );
        })
      )}
    </>
  );
});

export default Hero;
