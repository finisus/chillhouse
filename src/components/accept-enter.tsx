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
          console.log("audio playing...");
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
    <main className="flex min-h-svh w-svw flex-col items-center justify-center font-proximaNova">
      <h5 className="px-2 py-4 text-2xl">{welcomeText}</h5>
      <button onClick={handleEnter} className="btn-primary">
        {buttonText}
      </button>
    </main>
  );
}
