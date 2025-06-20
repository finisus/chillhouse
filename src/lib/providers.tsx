import { useEffect, useState } from "react";
import { Toaster, ToasterProps } from "sonner";
import { LoaderCircleIcon, CheckIcon, XIcon } from "lucide-react";

const ThemedToaster = (props: ToasterProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Toaster
      containerAriaLabel="toast-notification"
      position="bottom-center"
      expand={false}
      richColors={true}
      duration={4000}
      closeButton={false}
      toastOptions={{
        style: {
          background: "#efefefbf",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          borderRadius: "0px",
          border: "1px solid #000000",
          paddingTop: "12px",
          paddingBottom: "12px",
          paddingLeft: "12px",
          paddingRight: "12px",
          fontSize: 16,
          fontFamily: "proxima-nova-semibold",
          color: "#000000",
        },
      }}
      icons={{
        loading: (
          <div className="ml-1">
            <LoaderCircleIcon
              size={16}
              strokeWidth={2.5}
              className="animate-spin"
            />
          </div>
        ),
        success: (
          <div className="ml-1">
            <CheckIcon
              size={16}
              strokeWidth={2.5}
              className="transition-all ease-in-out"
            />
          </div>
        ),
        error: (
          <div className="ml-1">
            <XIcon
              size={16}
              strokeWidth={2.5}
              className="transition-all ease-in-out"
            />
          </div>
        ),
      }}
      {...props}
    />
  );
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ThemedToaster />
    </>
  );
}
