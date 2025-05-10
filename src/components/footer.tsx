import { useRef } from "react";

export default function Footer() {
  const contractRef = useRef<HTMLSpanElement | null>(null);

  const copyContract = async () => {
    const address = contractRef.current;
    if (!address) {
      console.error("Address element not present");
      return;
    }
    const textToCopy = address.innerText;

    try {
      // Try the modern Clipboard API first (if supported)
      navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully using Clipboard API");
      alert("Contract copied successfully!");
    } catch {
      // If Clipboard API fails, use the legacy approach
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed"; // Hide element off-screen
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("Text copied successfully using legacy approach");
      alert("Contract copied successfully!");
    }
  };

  return (
    <div className="fixed bottom-0 left-0 flex w-svw flex-row items-center justify-center gap-4 bg-blue-700 px-2 py-2 text-yellow-300">
      <span
        ref={contractRef}
        className="break-all font-proximaNovaBold text-base tracking-tighter"
      >
        GkyPYa7NnCFbduLknCfBfP7p8564X1VZhwZYJ6CZpump
      </span>
      <button
        className="whitespace-nowrap font-proximaNovaBold text-lg"
        onClick={copyContract}
      >
        Copy CA
      </button>
      <a
        className="whitespace-nowrap font-proximaNovaBold text-lg"
        href="https://dexscreener.com/solana/35TqQMeiRwEbK6FR5qiPwastuAAvo32VjnULJpxVSxUK"
        target="_blank"
      >
        BUY
      </a>
    </div>
  );
}
