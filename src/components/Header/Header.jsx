import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import axios from "axios";
import Error from "../Error/Error";
import telIcon from "../../assets/phone-call.png";
import instaIcon from "../../assets/instagram.png";
import searchIcon from "../../assets/search-interface-symbol.svg";

const Header = React.memo(() => {
  const [logo, setlogo] = useState();
  const [number, setNumber] = useState();
  useEffect(() => {
    axios
      .get("https://urchin-app-fuh4a.ondigitalocean.app/api/logo")
      .then((res) => setlogo(res.data))
      .catch((err) => console.log(err));
    axios
      .get("https://urchin-app-fuh4a.ondigitalocean.app/api/phone-number")
      .then((res) => setNumber(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__box}>
          <div className={styles.header__left}>
            {logo === undefined ? (
              <Loading />
            ) : (
              logo.map((el) => {
                return (
                  <Link
                    to={"/"}
                    className={styles.header__logoLink}
                    href="#"
                    key={el._id}
                  >
                    <img
                      className={styles.header__image}
                      src={`https://urchin-app-fuh4a.ondigitalocean.app${el.image}`}
                      width={200}
                      height={30}
                      alt="site logo"
                    />
                  </Link>
                );
              })
            )}
          </div>
          <div className={styles.header__right}>
            <ul className={styles.header__list}>
              <li className={styles.header__item}>
                <Link className={styles.header__link} to={"voices"}>Voices <span className={styles.link__line}></span></Link>
              </li>
              <li className={styles.header__item}>
                <Link className={styles.header__link} to={"about"}>About <span className={styles.link__line}></span></Link>
              </li>
              <li className={styles.header__item}>
                <div className={styles.search__box}>
                  <img
                    className={styles.header__searchIcon}
                    src={searchIcon}
                    width={18}
                    height={18}
                    alt="search icon"
                  />
                  <input
                    className={styles.header__search}
                    type="text"
                    name="search"
                    placeholder="search..."
                  />
                </div>
              </li>
              <li className={styles.header__item}>
                {number?.map((el) => {
                  return (
                    <div className={styles.header__linkList} key={el._id}>
                      <a
                        className={styles.header__tel}
                        href={`tel:+998${el.number}`}
                      >
                        <img
                          src={telIcon}
                          width={35}
                          height={35}
                          alt="tel icon"
                        />
                      </a>
                      <a
                        className={styles.header__insta}
                        href={el.instagram}
                        target="blank"
                      >
                        <img
                          src={instaIcon}
                          width={35}
                          height={35}
                          alt="instagram icon"
                        />
                      </a>
                    </div>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
