import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import icon from "./img/cancel.svg";

import "../index.css";
import styles from "./UiInput.module.css";

const UiInput = ({ value, onChange, placeholder, type, classes }) => (
  <div className={cn(styles.wrapper__input, classes)}>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={styles.input}
    />
    <img
      onClick={() => value && onChange("")}
      src={icon}
      className={cn(styles.clear, !value && styles.clear__disabled)}
      alt="Clear"
    />
  </div>
);

UiInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  classes: PropTypes.string,
};

export default UiInput;
