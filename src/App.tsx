import AcceptEnter from "./components/accept-enter";

export default function App() {
  return (
    <AcceptEnter
      welcomeText="You chill?"
      buttonText="Yes!"
      audioSrc="./vid1-w-Hustler-Sorrow_Sky.mp3"
    >
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
