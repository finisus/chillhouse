import { useState, useRef } from "react";

type AcceptEnterProps = {
  children: React.ReactNode;
  audioSrc: string;
  buttonText?: string;
  welcomeText?: string;
};

export default function AcceptEnter({
  children,
  audioSrc,
  buttonText,
  welcomeText,
}: AcceptEnterProps) {
  const [entered, setEntered] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEnter = () => {
    if (audioRef.current) {
      audioRef.current.volume = 1.0;
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
      <audio
        ref={audioRef}
        src={audioSrc}
        loop
        preload="auto"
        className="hidden"
      />
    </main>
  );
}
