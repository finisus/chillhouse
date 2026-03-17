import { useRef, useState } from "react";
import { SimpleMarquee } from "./components/simple-marquee";
import MemesBg from "./components/memes-bg";
import Landing from "./components/landing";
import Footer from "./components/footer";
import { Button } from "./components/ui/button";
import { env } from "./config/env";
import VideoPlayer from "./components/video-player";

export default function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const musicRef = useRef(
    new Audio("/memes/songs/vid1-w-Hustler-Sorrow_Sky.mp3"),
  );

  if (import.meta.env.VITE_LAUNCH_MODE === "maintenance") {
    return null;
  }

  return (
    <Landing
      welcomeText="Gotta go through shit to be some shit"
      buttonText="Touch ts inappropriately to enter"
      musicRef={musicRef}
      setIsMusicPlaying={setIsMusicPlaying}
    >
      <main className="relative flex min-h-svh w-svw flex-col items-stretch justify-start gap-[320px] font-sans max-md:gap-[160px]">
        <SimpleMarquee
          speed={150}
          pauseOnHover={false}
          gapRem={1}
          className="bg-black/50"
        >
          <img
            src="/memes/tweets/chill-tweet-1.jpg"
            className="h-[160px] w-auto max-md:h-[120px]"
          />
          <img
            src="/memes/tweets/chill-tweet-2.jpeg"
            className="h-[160px] w-auto max-md:h-[120px]"
          />
          <img
            src="/memes/tweets/chill-tweet-3.jpeg"
            className="h-[160px] w-auto max-md:h-[120px]"
          />
          <img
            src="/memes/tweets/chill-tweet-4.jpeg"
            className="h-[160px] w-auto max-md:h-[120px]"
          />
          <img
            src="/memes/tweets/chill-tweet-5.jpeg"
            className="h-[160px] w-auto max-md:h-[120px]"
          />
          <img
            src="/memes/tweets/chill-tweet-6.jpeg"
            className="h-[160px] w-auto max-md:h-[120px]"
          />
          <img
            src="/memes/tweets/chill-tweet-7.jpeg"
            className="h-[160px] w-auto max-md:h-[120px]"
          />
          <img
            src="/memes/tweets/chill-tweet-8.jpeg"
            className="h-[160px] w-auto max-md:h-[120px]"
          />
        </SimpleMarquee>
        <MemesBg />
        <section className="mb-[320px] mt-[160px] flex flex-col items-center justify-center max-md:mb-[160px] max-md:mt-[80px]">
          <div className="mb-8 flex flex-row items-center justify-center gap-4">
            <a href={env.VITE_TOKEN_TWITTER} target="_blank">
              <Button
                variant="default"
                size="default"
                className="font-proximaNovaBold text-base text-yellow-300"
              >
                Twitter
              </Button>
            </a>
            <a
              onClick={() => {
                alert("TG LINK IS IN TG STOP ASKING");
              }}
            >
              <Button
                variant="default"
                size="default"
                className="font-proximaNovaBold text-base text-yellow-300"
              >
                Telegram
              </Button>
            </a>
          </div>
          <img
            src="/memes/videos/chillhouse-logo-animated.webp"
            className="h-[400px] w-full max-md:h-[100px]"
          />
        </section>

        <section
          id="video-player"
          aria-label="Video Player"
          className="flex flex-col items-center justify-center pb-32"
        >
          <VideoPlayer
            musicRef={musicRef}
            isMusicPlaying={isMusicPlaying}
            setIsMusicPlaying={setIsMusicPlaying}
          />
        </section>
        <Footer />
      </main>
    </Landing>
  );
}
