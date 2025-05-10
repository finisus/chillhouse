import { useRef } from "react";
import AcceptEnter from "./components/accept-enter";
import music_mp3 from "/memes/songs/vid1-w-Hustler-Sorrow_Sky.mp3";

export default function App() {
  const audioRef = useRef(new Audio(music_mp3));

  return (
    <AcceptEnter welcomeText="You chill?" buttonText="Yes!" audioRef={audioRef}>
      <main className="flex min-h-svh w-svw flex-col items-stretch justify-start font-proximaNova">
        <section>ChillHouse</section>
        <section id="video1"></section>
        <section id="video2"></section>
        <section>
          <footer></footer>
        </section>
      </main>
    </AcceptEnter>
  );
}
