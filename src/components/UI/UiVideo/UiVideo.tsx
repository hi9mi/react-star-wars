import React from 'react';
import cn from 'classnames';

import styles from './UiVideo.module.css';

export interface UiVideoProps {
	src: string;
	playbackRate: number;
	classes?: string;
}

const UiVideo: React.FC<UiVideoProps> = ({ src, classes, playbackRate = 1.0 }) => {
	const videoRef = React.useRef<HTMLVideoElement | null>(null);

	React.useEffect(() => {
		if (videoRef !== null && videoRef.current !== null) {
			videoRef.current.playbackRate = playbackRate;
		}
	}, []);

	return (
		<video ref={videoRef} className={cn(styles.video, classes)} loop autoPlay muted>
			<source src={src} />
		</video>
	);
};

export default UiVideo;
