import { RefObject } from "react";
import { useState } from "react";

type AcceptEnterProps = {
  children: React.ReactNode;
  audioRef: RefObject<HTMLAudioElement>;
  buttonText?: string;
  welcomeText?: string;
};

export default function AcceptEnter({
  children,
  audioRef,
  buttonText,
  welcomeText,
}: AcceptEnterProps) {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.muted = false;
      audioRef.current.volume = 1.0;
      audioRef.current.preload = "auto";
      audioRef.current
        .play()
        .then(() => {
          // console.log("audio playing...");
        })
        .catch((err) => {
          console.error("Audio autoplay failed:", err);
        });
    }
    setEntered(true);
  };

  if (entered) {
    return <>{children}</>;
  }

  return (
    <main className="relative grid h-svh w-svw grid-cols-1 grid-rows-5 overflow-hidden font-proximaNova">
      <img
        src="/memes/images/touch-2.jpg"
        className="row-span-2 h-full w-full"
      />
      <div className="flex flex-col items-center justify-center bg-black px-2 py-2">
        <h5 className="px-2 py-4 text-center text-2xl text-white">
          {welcomeText}
        </h5>
        <button onClick={handleEnter} className="btn-primary">
          {buttonText}
        </button>
      </div>
      <img
        src="/memes/images/touch-1.jpg"
        className="row-span-2 h-full w-full"
      />
    </main>
  );
}
