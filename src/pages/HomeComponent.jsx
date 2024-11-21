import React from "react";
import styles from "./HomeStyle.module.css";

const HomeComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img
          src="/homeimg.png" /* Replace with the actual image path */
          alt="Shipment Tracker Overview"
          className={styles.image}
        />
      </div>
      <div className={styles.textContent}>
        <h1>Empowering Indian SMBs to Ship Worldwide with Ease</h1>
        <p>
          Simplify rate negotiation, document management, real-time tracking, &
          query resolution—making your global journey seamless & efficient.
        </p>
      </div>
    </div>
  );
};

export default HomeComponent;
