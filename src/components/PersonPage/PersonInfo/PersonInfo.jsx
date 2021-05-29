import React from "react";
import PropTypes from "prop-types";

import styles from "./PersonInfo.module.css";

const PersonInfo = ({ info }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <ul className={styles.list__container}>
          {info.map(
            ({ title, data }) =>
              data && (
                <li className={styles.list__item} key={title}>
                  <span className={styles.item__title}>{title}</span>: {data}
                </li>
              )
          )}
        </ul>
      </div>
    </>
  );
};

PersonInfo.propTypes = {
  info: PropTypes.array,
};

export default PersonInfo;
