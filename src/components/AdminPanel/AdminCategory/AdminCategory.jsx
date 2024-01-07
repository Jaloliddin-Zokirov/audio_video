import React, { useEffect, useState } from "react";
import styles from "./AdminCategory.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminCategory = () => {
  const [logo, setlogo] = useState();
  useEffect(() => {
    axios
      .get("https://urchin-app-fuh4a.ondigitalocean.app/api/logo")
      .then((data) => setlogo(data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className={styles.adminCategory__section}>
      <div className={styles.adminCategory__logoBox}>
        {logo?.map((el) => {
          return (
            <img
              className={styles.adminCategory__logo}
              src={`https://urchin-app-fuh4a.ondigitalocean.app${el.image}`}
              width={200}
              height={30}
              alt="site logo"
            />
          );
        })}
      </div>
      <ul className={styles.adminCategory__list}>
        <li className={styles.adminCategory__item}>
          <Link className={styles.adminCategory__link} to={""}>
            Home
          </Link>
        </li>
        <li className={styles.adminCategory__item}>
          <Link className={styles.adminCategory__link} to={"logo"}>
            Logo
          </Link>
        </li>
        <li className={styles.adminCategory__item}>
          <Link className={styles.adminCategory__link} to={"contact"}>
            Contact
          </Link>
        </li>
        <li className={styles.adminCategory__item}>
          <Link className={styles.adminCategory__link} to={"user"}>
            User
          </Link>
        </li>
        <li className={styles.adminCategory__item}>
          <Link className={styles.adminCategory__link} to={"hero"}>
            Hero
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default AdminCategory;
