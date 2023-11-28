import React from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__box}>
          <div className={styles.header__left}>
            <Link to={"/"} className={styles.header__link} href="#">
              <img className={styles.header__image} src="" alt="site logo" />
            </Link>
          </div>
          <div className={styles.header__right}>
            <ul className={styles.header__list}>
              <li className={styles.header__item}>
                <a className={styles.header__tel} href="tel:+998991234567">+998 (99) 123-45-67</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
