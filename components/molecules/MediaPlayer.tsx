import React from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player/lazy";

const MediaPlayer: React.FC<ReactPlayerProps> = ({ url }) => {
  return <ReactPlayer style={{ padding: 0, margin: 0 }} height="50%" width="100%" controls={true} playing={true} loop={true} url={url} />;
};

export default MediaPlayer;
