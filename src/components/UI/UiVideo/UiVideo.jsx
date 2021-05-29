import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./UiVideo.module.css";

const UiVideo = ({ src, classes, playbackRate = 1.0 }) => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    videoRef.current.playbackRate = playbackRate;
  }, []);

  return (
    <video
      ref={videoRef}
      className={cn(styles.video, classes)}
      loop
      autoPlay
      muted
    >
      <source src={src} />
    </video>
  );
};

UiVideo.propTypes = {
  src: PropTypes.string,
  classes: PropTypes.string,
  playbackRate: PropTypes.number,
};

export default UiVideo;
