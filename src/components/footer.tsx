import { copyToClipboard } from "../utils/copy";
import { Button } from "./ui/button";
import { env } from "../config/env";

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 flex w-svw flex-row items-center justify-center gap-4 bg-background px-4 py-4 text-yellow-300">
      <span className="break-all text-base tracking-tight max-md:text-sm">
        {env.VITE_TOKEN_MINT}
      </span>
      <Button
        size="default"
        onClick={() =>
          copyToClipboard({
            content: env.VITE_TOKEN_MINT,
            successMsg: "Contract copied successfully to clipboard.",
          })
        }
        className="whitespace-nowrap font-proximaNovaBold text-base text-yellow-300"
      >
        Copy CA
      </Button>
      <a href={env.VITE_TOKEN_DEX} target="_blank">
        <Button
          size="default"
          className="whitespace-nowrap font-proximaNovaBold text-base text-yellow-300"
        >
          BUY
        </Button>
      </a>
    </div>
  );
}
