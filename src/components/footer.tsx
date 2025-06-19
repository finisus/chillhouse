import { copyToClipboard } from "../utils/copy";
import { env } from "../config/env";

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 flex w-svw flex-row items-center justify-center gap-4 bg-blue-700 px-2 py-2 text-yellow-300">
      <span className="break-all font-proximaNovaBold text-base tracking-tighter">
        {env.VITE_TOKEN_MINT}
      </span>
      <button
        className="whitespace-nowrap font-proximaNovaBold text-lg"
        onClick={() =>
          copyToClipboard({
            content: env.VITE_TOKEN_MINT,
            successMsg: "Contract copied successfully to clipboard.",
          })
        }
      >
        Copy CA
      </button>
      <a
        className="whitespace-nowrap font-proximaNovaBold text-lg"
        href={env.VITE_TOKEN_DEX}
        target="_blank"
      >
        BUY
      </a>
    </div>
  );
}
