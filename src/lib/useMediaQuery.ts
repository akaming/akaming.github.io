import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const getMatch = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(getMatch);

  useEffect(() => {
    const mql = window.matchMedia(query);

    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);

    if (mql.addEventListener) mql.addEventListener("change", onChange);

    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
    };
  }, [query]);

  return matches;
}
