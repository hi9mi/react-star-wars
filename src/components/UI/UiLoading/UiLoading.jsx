import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import loaderBlack from "./img/loader-black.svg";
import loaderBlue from "./img/loader-blue.svg";
import loaderWhite from "./img/loader-white.svg";

import "../index.css";
import styles from "./UiLoading.module.css";

const UiLoading = ({ theme, isShadow, classes }) => {
  const [loaderIcon, setLoaderIcon] = React.useState(null);

  React.useEffect(() => {
    switch (theme) {
      case "black":
        setLoaderIcon(loaderBlack);
        break;
      case "white":
        setLoaderIcon(loaderWhite);
        break;
      case "blue":
        setLoaderIcon(loaderBlue);
        break;
      default:
        setLoaderIcon(loaderWhite);
    }
  }, []);

  return (
    <img
      className={cn(styles.loader, isShadow && styles.shadow, classes)}
      src={loaderIcon}
      alt="Loader"
    />
  );
};

UiLoading.defaultProps = {
  theme: "white",
  isShadow: true,
  classes: "",
};

UiLoading.propTypes = {
  theme: PropTypes.string,
  isShadow: PropTypes.bool,
  classes: PropTypes.string,
};

export default UiLoading;
