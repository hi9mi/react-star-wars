import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { setPersonToFavorite, removePersonFromFavorite } from "@store/actions";
import iconFavoriteFill from "./img/favorite-fill.svg";
import iconFavorite from "./img/favorite.svg";

import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({ id, photo, name, isFavorite, setIsFavorite }) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (isFavorite) {
      dispatch(removePersonFromFavorite(id));
      setIsFavorite(false);
    } else {
      dispatch(setPersonToFavorite({ [id]: { name, img: photo } }));
      setIsFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={photo} alt={name} />
        <img
          onClick={dispatchFavoritePeople}
          src={isFavorite ? iconFavoriteFill : iconFavorite}
          className={styles.favorite}
          alt="Add to favorite"
        />
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  id: PropTypes.string,
  photo: PropTypes.string,
  name: PropTypes.string,
  isFavorite: PropTypes.bool,
  setIsFavorite: PropTypes.func,
};

export default PersonPhoto;
