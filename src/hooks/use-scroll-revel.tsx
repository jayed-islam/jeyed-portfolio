/* eslint-disable react-hooks/exhaustive-deps */
// "use client";

// import { useEffect } from "react";
// import ScrollReveal from "scrollreveal";

// const defaultOptions = {
//   origin: "top",
//   distance: "60px",
//   duration: 2500,
//   delay: 400,
// };

// type ScrollRevealOptions = Parameters<typeof ScrollReveal>[0];

// const useScrollReveal = (
//   selector: string | string[],
//   options: ScrollRevealOptions = {}
// ) => {
//   useEffect(() => {
//     const mergedOptions = { ...defaultOptions, ...options };
//     const targets = Array.isArray(selector) ? selector : [selector];

//     targets.forEach((sel) => {
//       ScrollReveal().reveal(sel, mergedOptions);
//     });
//   }, [selector, options]);
// };

// export default useScrollReveal;
"use client";

import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const defaultOptions = {
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
};

type ScrollRevealOptions = Parameters<typeof ScrollReveal>[0];

const useScrollReveal = (
  selector: string | string[],
  options: ScrollRevealOptions = {}
) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mergedOptions = { ...defaultOptions, ...options };
      const targets = Array.isArray(selector) ? selector : [selector];

      targets.forEach((sel) => {
        ScrollReveal().reveal(sel, mergedOptions);
      });
    }
  }, [JSON.stringify(selector), JSON.stringify(options)]);
};

export default useScrollReveal;
