import React, { useEffect, useState } from "react";
import styles from "./Footer.module.scss";
import axios from "axios";
import Loading from "../Loading/Loading";

const Footer = () => {
  const [logo, setLogo] = useState();
  useEffect(() => {
    axios
      .get("https://urchin-app-fuh4a.ondigitalocean.app/api/logo")
      .then((res) => setLogo(res.data));
  }, []);
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__box}>
          {logo === undefined ? (
            <Loading />
          ) : (
            logo.map((el) => {
              return <img src={el.image} width={200} height={30} alt="site logo" key={el._id} />;
            })
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
