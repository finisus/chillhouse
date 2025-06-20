import { RefObject } from "react";
import { useState } from "react";
import { Button } from "./ui/button";

type AcceptEnterProps = {
  children: React.ReactNode;
  musicRef: RefObject<HTMLAudioElement>;
  setIsMusicPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  buttonText?: string;
  welcomeText?: string;
};

export default function Landing({
  children,
  musicRef,
  setIsMusicPlaying,
  buttonText,
  welcomeText,
}: AcceptEnterProps) {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    if (musicRef.current) {
      musicRef.current.loop = true;
      musicRef.current.muted = false;
      musicRef.current.volume = 1.0;
      musicRef.current.preload = "auto";
      musicRef.current
        .play()
        .then(() => {
          setIsMusicPlaying(true);
        })
        .catch((err) => {
          console.error("Audio autoplay failed:", err);
          setIsMusicPlaying(false);
        });
    }
    setEntered(true);
  };

  if (entered) {
    return <>{children}</>;
  }

  return (
    <main className="grid h-svh w-svw grid-cols-1 grid-rows-[1fr_12rem_1fr] overflow-hidden bg-background font-sans">
      <div className="max-h-[calc((100svh-12rem)/2)] w-full">
        <img
          src="/memes/images/touch-2.jpg"
          alt="omg he shat his pants"
          className="h-full w-full object-fill"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 px-4">
        <h5 className="text-center text-2xl text-yellow-300">{welcomeText}</h5>
        <Button
          variant="default"
          size="default"
          onClick={handleEnter}
          className="text-base text-yellow-300"
        >
          {buttonText}
        </Button>
      </div>
      <div className="max-h-[calc((100svh-12rem)/2)] w-full">
        <img
          src="/memes/images/touch-1.jpg"
          alt="touch his ah"
          className="h-full w-full object-fill"
        />
      </div>
    </main>
  );
}
