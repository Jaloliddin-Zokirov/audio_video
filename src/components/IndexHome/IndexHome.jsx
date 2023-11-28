import React, { useContext, useState } from "react";
import styles from "./IndexHome.module.scss";
import { Link } from "react-router-dom";
import play from "../../assets/play-icon.png";
import pausa from "../../assets/pausa-icon.png";
import { StoreContext } from "../StoreWrapper/StoreWrapper";

const IndexHome = () => {
  const [check, setCheck] = useState(0);
  const { dispatch } = useContext(StoreContext);

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
            <li className={styles.indexHome__item}>
              <img
                className={styles.indexHome__play}
                src={check === 1 ? pausa : play}
                alt="play"
                onClick={() => {
                  check === 1 ? setCheck(0) : setCheck(1);
                }}
              />
              <Link
                className={styles.indexHome__itemLink}
                to={"jasur-mavlonov"}
                onClick={() =>
                  dispatch({
                    type: "category",
                    payload: {
                      src: "jasur-mavlonov",
                      firstName: "Jasur",
                      lastName: "Mavlonov",
                    },
                  })
                }
              >
                <img
                  className={styles.indexHome__img}
                  src="https://picsum.photos/210/350"
                  alt="image"
                />
                <div className={styles.indexHome__content}>
                  <p className={styles.indexHome__firstname}>Jasur</p>
                  <p className={styles.indexHome__lastname}>Mavlonov</p>
                </div>
              </Link>
            </li>
            <li className={styles.indexHome__item}>
              <img
                className={styles.indexHome__play}
                src={check === 2 ? pausa : play}
                alt="play"
                onClick={() => {
                  check === 2 ? setCheck(0) : setCheck(2);
                }}
              />
              <Link
                className={styles.indexHome__itemLink}
                to={"alisher-qodirov"}
                onClick={() =>
                  dispatch({
                    type: "category",
                    payload: {
                      src: "alisher-qodirov",
                      firstName: "Alisher",
                      lastName: "Qodirov",
                    },
                  })
                }
              >
                <img
                  className={styles.indexHome__img}
                  src="https://picsum.photos/210/350"
                  alt="image"
                />
                <div className={styles.indexHome__content}>
                  <p className={styles.indexHome__firstname}>Alisher</p>
                  <p className={styles.indexHome__lastname}>Qodirov</p>
                </div>
              </Link>
            </li>
            <li className={styles.indexHome__item}>
              <img
                className={styles.indexHome__play}
                src={check === 3 ? pausa : play}
                alt="play"
                onClick={() => {
                  check === 3 ? setCheck(0) : setCheck(3);
                }}
              />
              <Link
                className={styles.indexHome__itemLink}
                to={"ahmad-qosimov"}
                onClick={() =>
                  dispatch({
                    type: "category",
                    payload: {
                      src: "ahmad-qosimov",
                      firstName: "Ahmad",
                      lastName: "Qosimov",
                    },
                  })
                }
              >
                <img
                  className={styles.indexHome__img}
                  src="https://picsum.photos/210/350"
                  alt="image"
                />
                <div className={styles.indexHome__content}>
                  <p className={styles.indexHome__firstname}>Ahmad</p>
                  <p className={styles.indexHome__lastname}>Qosimov</p>
                </div>
              </Link>
            </li>
            <li className={styles.indexHome__item}>
              <img
                className={styles.indexHome__play}
                src={check === 4 ? pausa : play}
                alt="play"
                onClick={() => {
                  check === 4 ? setCheck(0) : setCheck(4);
                }}
              />
              <Link
                className={styles.indexHome__itemLink}
                to={"abdulla-ahmadov"}
                onClick={() =>
                  dispatch({
                    type: "category",
                    payload: {
                      src: "abdulla-ahmadov",
                      firstName: "Abdulla",
                      lastName: "Ahmadov",
                    },
                  })
                }
              >
                <img
                  className={styles.indexHome__img}
                  src="https://picsum.photos/210/350"
                  alt="image"
                />
                <div className={styles.indexHome__content}>
                  <p className={styles.indexHome__firstname}>Abdulla</p>
                  <p className={styles.indexHome__lastname}>Ahmadov</p>
                </div>
              </Link>
            </li>
            <li className={styles.indexHome__item}>
              <img
                className={styles.indexHome__play}
                src={check === 5 ? pausa : play}
                alt="play"
                onClick={() => {
                  check === 5 ? setCheck(0) : setCheck(5);
                }}
              />
              <Link
                className={styles.indexHome__itemLink}
                to={"shoira-sultonova"}
                onClick={() =>
                  dispatch({
                    type: "category",
                    payload: {
                      src: "shoira-sultonova",
                      firstName: "Shoira",
                      lastName: "Sultonova",
                    },
                  })
                }
              >
                <img
                  className={styles.indexHome__img}
                  src="https://picsum.photos/210/350"
                  alt="image"
                />
                <div className={styles.indexHome__content}>
                  <p className={styles.indexHome__firstname}>Shoira</p>
                  <p className={styles.indexHome__lastname}>Sultonova</p>
                </div>
              </Link>
            </li>
            <li className={styles.indexHome__item}>
              <img
                className={styles.indexHome__play}
                src={check === 6 ? pausa : play}
                alt="play"
                onClick={() => {
                  check === 6 ? setCheck(0) : setCheck(6);
                }}
              />
              <Link
                className={styles.indexHome__itemLink}
                to={"bobur-yoldoshev"}
                onClick={() =>
                  dispatch({
                    type: "category",
                    payload: {
                      src: "bobur-yoldoshev",
                      firstName: "Bobur",
                      lastName: "Yoldoshev",
                    },
                  })
                }
              >
                <img
                  className={styles.indexHome__img}
                  src="https://picsum.photos/210/350"
                  alt="image"
                />
                <div className={styles.indexHome__content}>
                  <p className={styles.indexHome__firstname}>Bobur</p>
                  <p className={styles.indexHome__lastname}>Yoldoshev</p>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IndexHome;
