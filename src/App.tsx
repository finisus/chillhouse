import { useRef } from "react";
import { SimpleMarquee } from "./components/simple-marquee";
import MemesBg from "./components/memes-bg";
import AcceptEnter from "./components/accept-enter";
import Footer from "./components/footer";

export default function App() {
  const audioRef = useRef(
    new Audio("/memes/songs/vid1-w-Hustler-Sorrow_Sky.mp3"),
  );

  return (
    <AcceptEnter
      welcomeText="Gotta go through shit to be some shit"
      buttonText="Touch ts inappropriately to enter"
      audioRef={audioRef}
    >
      <main className="relative flex min-h-svh w-svw flex-col items-stretch justify-start gap-[320px] font-proximaNova max-md:gap-[160px]">
        <SimpleMarquee
          speed={150}
          pauseOnHover={false}
          gapRem={1}
          className="bg-black/50"
        >
          <img
            src="/memes/tweets/chill-tweet-1.jpg"
            className="h-[160px] w-auto min-w-fit max-md:h-[120px]"
          />
          <img
            src="/memes/tweets/chill-tweet-2.jpeg"
            className="h-[160px] w-auto min-w-fit max-md:h-[120px]"
          />
          <img
            src="/memes/tweets/chill-tweet-3.jpeg"
            className="h-[160px] w-auto min-w-fit max-md:h-[120px]"
          />
          <img
            src="/memes/tweets/chill-tweet-4.jpeg"
            className="h-[160px] w-auto min-w-fit max-md:h-[120px]"
          />
          <img
            src="/memes/tweets/chill-tweet-5.jpeg"
            className="h-[160px] w-auto min-w-fit max-md:h-[120px]"
          />
          <img
            src="/memes/tweets/chill-tweet-6.jpeg"
            className="h-[160px] w-auto min-w-fit max-md:h-[120px]"
          />
          <img
            src="/memes/tweets/chill-tweet-7.jpeg"
            className="h-[160px] w-auto min-w-fit max-md:h-[120px]"
          />
          <img
            src="/memes/tweets/chill-tweet-8.jpeg"
            className="h-[160px] w-auto min-w-fit max-md:h-[120px]"
          />
        </SimpleMarquee>
        <MemesBg />
        <section className="mb-[320px] mt-[160px] flex flex-col items-center justify-center max-md:mb-[160px] max-md:mt-[80px]">
          <img
            src="/memes/videos/chillhouse-logo-animated.webp"
            className="h-[400px] w-full max-md:h-[100px]"
          />
        </section>
        <section
          id="video1"
          className="flex flex-col items-center justify-center"
        >
          <video
            controls={true}
            src="/memes/videos/vid1-min.mp4"
            className="h-[432px] w-[768px] border-4 border-yellow-300 max-md:h-[144px] max-md:w-[256px]"
          />
        </section>
        <section
          id="video2"
          className="flex flex-col items-center justify-center"
        >
          <video
            controls={true}
            src="/memes/videos/vid2-min.mp4"
            className="h-[432px] w-[768px] border-4 border-yellow-300 max-md:h-[144px] max-md:w-[256px]"
          />
        </section>
        <Footer />
      </main>
    </AcceptEnter>
  );
}
