import { toast } from "sonner";

type CopyToClipboard = {
  content: string | HTMLElement;
  successMsg?: string;
  errorMsg?: string;
};

/**
 * Helper function to copy content to clipboard.
 *
 * @param content Content to copy, can be string or any valid HTML element
 * @param successMsg (optional) message as string to display as toast on success
 * @param errorMsg (optional) message as string to display as toast on error
 */
export const copyToClipboard = async ({
  content,
  successMsg = "Copied to clipboard.",
  errorMsg = "Failed to copy.",
}: CopyToClipboard) => {
  let textToCopy: string;

  if (typeof content === "string") {
    textToCopy = content;
  } else if (content instanceof HTMLElement) {
    textToCopy = content.textContent || "";
  } else {
    console.error("Unsupported content type for copyToClipboard:", content);
    toast.error(`${errorMsg} Unsupported content tpye.`);
    return;
  }

  if (!textToCopy || textToCopy === "") {
    toast.error("Nothing to copy.");
    return;
  }

  try {
    await navigator.clipboard.writeText(textToCopy);
    toast.success(successMsg);
  } catch (err) {
    console.error(errorMsg, err);
    toast.error(errorMsg);
  }
};
