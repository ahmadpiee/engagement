import React from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player/lazy";

const MediaPlayer: React.FC<ReactPlayerProps> = ({ url }) => {
  return (
    <div style={{ position: "relative", paddingTop: "56.25%" }}>
      <ReactPlayer
        style={{ position: "absolute", top: 0, left: 0 }}
        height="100%"
        width="100%"
        controls={true}
        playing={true}
        loop={true}
        url={url}
        light="https://res.cloudinary.com/tv-masa-kini/image/upload/v1662556413/photo1_i3pgbt.jpg"
      />
    </div>
  );
};

export default MediaPlayer;
