import { useState } from "react";

interface ImageToVideoProps {
  imageUrl: string;
  videoUrl?: string;
  hasBeenVisible: boolean;
  originalAnimation: boolean;
}

const ImageToVideo = ({
  imageUrl,
  videoUrl,
  hasBeenVisible,
  originalAnimation,
}: ImageToVideoProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${
        hasBeenVisible
          ? `${
              originalAnimation
                ? "animate-slide-in-from-left"
                : "animate-slide-in-from-right"
            }`
          : "opacity-0"
      } object-cover w-full h-[40rem] min-w-[40rem] rounded-lg z-20 overflow-hidden`}
    >
      {videoUrl ? (
        hover ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={imageUrl}
            alt="Thumbnail"
            className="w-full h-full object-cover"
          />
        )
      ) : (
        <img
          src={imageUrl}
          alt="Thumbnail"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default ImageToVideo;
