import React from "react";
import styles from "./IndexHome.module.scss";
import Hero from "../Hero/Hero";
import Voices from "../VoicesCard/VoicesCard";

const IndexHome = React.memo(() => {
  return (
    <>
      <Hero />
      <section className={styles.indexHome__section}>
        <div className="container">
          <Voices />
        </div>
      </section>
    </>
  );
});

export default IndexHome;
