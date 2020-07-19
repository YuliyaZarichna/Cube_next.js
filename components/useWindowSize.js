import React, { useState, useEffect } from "react";

export default function useWindowSize() {
  const isSSR = typeof window === "object";
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? window.innerWidth : undefined,
    height: isSSR ? window.innerHeight : undefined,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);
    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);
  return windowSize;
}
