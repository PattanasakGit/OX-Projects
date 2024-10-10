"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    window.alert = () => {};
    console.error(error);

    return () => {
      window.alert = alert;
    };
  }, [error]);

  return (
    <div className="w-screen h-[90dvh] flex items-center justify-center">
      XOX
    </div>
  );
}
