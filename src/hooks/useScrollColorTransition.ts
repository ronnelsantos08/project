// src/hooks/useScrollColorTransition.ts
import { useEffect, useState, useCallback } from 'react';

interface RGB {
  r: number;
  g: number;
  b: number;
}

const interpolateColor = (start: RGB, end: RGB, progress: number) => {
  const r = start.r + (end.r - start.r) * progress;
  const g = start.g + (end.g - start.g) * progress;
  const b = start.b + (end.b - start.b) * progress;
  return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
};

export function useScrollColorTransition(
  elementRef: React.RefObject<HTMLElement>,
  options?: {
    start?: number;
    end?: number;
    fromBg?: RGB;
    toBg?: RGB;
    fromText?: RGB;
    toText?: RGB;
  }
) {
  const {
    start = 0.9,
    end = 0.1,
    fromBg = { r: 255, g: 255, b: 255 },
    toBg = { r: 10, g: 10, b: 10 },
    fromText = { r: 0, g: 0, b: 0 },
    toText = { r: 255, g: 255, b: 255 },
  } = options || {};

  const [bgColor, setBgColor] = useState(interpolateColor(fromBg, toBg, 0));
  const [headingColor, setHeadingColor] = useState(interpolateColor(fromText, toText, 0));
  const [cardTextColor, setCardTextColor] = useState(interpolateColor(fromText, toText, 0));

  const handleScroll = useCallback(() => {
    if (elementRef.current) {
      const { top } = elementRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const startY = viewportHeight * start;
      const endY = viewportHeight * end;

      let progress = 0;
      if (top < startY && top > endY) {
        progress = (startY - top) / (startY - endY);
      } else if (top <= endY) {
        progress = 1;
      }

      setBgColor(interpolateColor(fromBg, toBg, progress));
      setHeadingColor(interpolateColor(fromText, toText, progress));
      setCardTextColor(interpolateColor(fromText, toText, progress));
    }
  }, [elementRef, start, end, fromBg, toBg, fromText, toText]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {
    bgColor,
    headingColor,
    cardTextColor,
  };
}
