import React from "react";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profile}>
        <div className={styles.info}>
          <img src={image} alt="User avatar" />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>@{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
        <ul className={styles.stats}>
          <li>
            <span className={styles.statsLabel}>Followers</span>
            <span className={styles.statsValue}>{stats.followers}</span>
          </li>
          <li>
            <span className={styles.statsLabel}>Views</span>
            <span className={styles.statsValue}>{stats.views}</span>
          </li>
          <li>
            <span className={styles.statsLabel}>Likes</span>
            <span className={styles.statsValue}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
