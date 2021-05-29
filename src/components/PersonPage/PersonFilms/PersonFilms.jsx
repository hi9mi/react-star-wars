import React from "react";
import PropTypes from "prop-types";

import { makeConcurrentRequest, changeHTTP } from "@utils/network";

import styles from "./PersonFilms.module.css";

const PersonFilms = ({ films }) => {
  const [filmsName, setFilmsName] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const filmsHTTPS = films.map((url) => changeHTTP(url));
      const response = await makeConcurrentRequest(filmsHTTPS);
      setFilmsName(response);
    })();
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__containter}>
        {filmsName
          .sort((a, z) => a.episode_id - z.episode_id)
          .map(({ title, episode_id }) => (
            <li className={styles.list__item} key={episode_id}>
              <span className={styles.item__episode}>Episode {episode_id}</span>
              <span className={styles.item__colon}> : </span>
              <span className={styles.item__title}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

PersonFilms.propTypes = {
  films: PropTypes.array,
};

export default PersonFilms;
