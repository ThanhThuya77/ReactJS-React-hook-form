import React, { useCallback, useEffect, useMemo, useRef } from 'react';

export default function useScrollToTop(deps) {
  const ref = useRef();
  const ScrollHere = useCallback(() => <div ref={ref} />, []);
  const scrollToTop = useCallback(() => {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(scrollToTop, deps);
  return useMemo(() => [ScrollHere, scrollToTop], [ScrollHere, scrollToTop]);
}
