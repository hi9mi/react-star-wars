import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import icon from "./img/bookmark.svg";

import styles from "./Favorite.module.css";

const Favorite = () => {
  const [count, setCount] = React.useState();
  const favorites = useSelector((state) => state.favorites);

  React.useEffect(() => {
    const length = Object.keys(favorites).length;
    length.toString().length > 2 ? setCount("...") : setCount(length);
  }, [favorites]);
  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{count}</span>
        <img className={styles.icon} src={icon} alt="Favorites" />
      </Link>
    </div>
  );
};

export default Favorite;
