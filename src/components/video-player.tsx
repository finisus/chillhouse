import { type RefObject, useRef } from "react";

type VideoPlayerProps = {
  musicRef: RefObject<HTMLAudioElement>;
  isMusicPlaying: boolean;
  setIsMusicPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function VideoPlayer({
  musicRef,
  setIsMusicPlaying,
}: VideoPlayerProps) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const toggleVideo = (i: number) => {
    const currentVid = videoRefs.current[i];
    if (!currentVid) return;

    videoRefs.current.forEach((video, j) => {
      if (j !== i && video && !video.paused) {
        video.pause();
      }
    });

    if (currentVid.paused) {
      currentVid.play().catch(() => {});
    } else {
      currentVid.pause();
    }
  };

  const handlePlay = () => {
    if (musicRef.current && !musicRef.current.paused) {
      musicRef.current.pause();
      setIsMusicPlaying(false);
    }
  };

  const handlePause = () => {
    const allPaused = videoRefs.current.every((vid) => !vid || vid.paused);

    if (allPaused && musicRef.current && musicRef.current.paused) {
      musicRef.current.play().catch(() => {});
      setIsMusicPlaying(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      {[...Array(15)].map((_, i) => {
        return (
          <video
            key={i + 1}
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            preload="none"
            controls={true}
            poster={`/memes/videos/vid-${i + 1}-poster.png`}
            autoPlay={false}
            onClickCapture={(e) => {
              e.preventDefault();
              toggleVideo(i);
            }}
            onPlay={handlePlay}
            onPause={handlePause}
            className="h-auto w-[768px] border-4 border-yellow-300 max-md:w-[256px]"
          >
            <source src={`/memes/videos/vid-${i + 1}.mp4`} type="video/mp4" />
          </video>
        );
      })}
    </div>
  );
}
