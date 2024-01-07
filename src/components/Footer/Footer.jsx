import React, { useEffect, useState } from "react";
import styles from "./Footer.module.scss";
import axios from "axios";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

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
              return <Link className={styles.footer__linkLogo} to={'/'} key={el._id}><img className={styles.footer__logoImg} src={`https://urchin-app-fuh4a.ondigitalocean.app${el.image}`} width={200} height={30} alt="site logo" /></Link>;
            })
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
