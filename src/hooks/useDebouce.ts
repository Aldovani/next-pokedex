import { useRef } from "react";

export default function useDebounce(func, delay) {
  const timeoutRef = useRef(null);
  function debouncedFN(...args) {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  }

  return debouncedFN;
}