// src/hooks/useScrollColorTransition.ts
import { useState, useEffect, useCallback, type RefObject } from 'react';

// Define a type for RGB color arrays
type RgbColor = [number, number, number];

interface UseScrollColorTransitionProps {
  // --- FIX IS HERE: Allow HTMLElement | null for sectionRef ---
  sectionRef: RefObject<HTMLElement | null>; // Changed from HTMLElement to HTMLElement | null
  initialBgColor: RgbColor;
  targetBgColor: RgbColor;
  initialTextColors: RgbColor[];
  targetTextColors: RgbColor[];
  startTransitionRatio: number;
  endTransitionRatio: number;
  bgAlpha?: number;
}

interface UseScrollColorTransitionReturn {
  dynamicBgColor: string;
  dynamicTextColors: string[];
}

export const useScrollColorTransition = ({
  sectionRef,
  initialBgColor,
  targetBgColor,
  initialTextColors,
  targetTextColors,
  startTransitionRatio,
  endTransitionRatio,
  bgAlpha = 1,
}: UseScrollColorTransitionProps): UseScrollColorTransitionReturn => {
  const [dynamicBgColor, setDynamicBgColor] = useState<string>(
    `rgba(${initialBgColor[0]}, ${initialBgColor[1]}, ${initialBgColor[2]}, ${bgAlpha})`
  );
  const [dynamicTextColors, setDynamicTextColors] = useState<string[]>(
    initialTextColors.map(color => `rgb(${color[0]}, ${color[1]}, ${color[2]})`)
  );

  const interpolateColor = (start: RgbColor, end: RgbColor, progress: number): RgbColor => {
    const r = start[0] + (end[0] - start[0]) * progress;
    const g = start[1] + (end[1] - start[1]) * progress;
    const b = start[2] + (end[2] - start[2]) * progress;
    return [Math.round(r), Math.round(g), Math.round(b)];
  };

  const handleScroll = useCallback(() => {
    if (sectionRef.current) { // This null check is crucial and already in place
      const { top } = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      let progress = 0;
      if (top < startTransitionRatio * viewportHeight && top >= endTransitionRatio * viewportHeight) {
          progress = Math.min(1, Math.max(0, (startTransitionRatio * viewportHeight - top) / ((startTransitionRatio - endTransitionRatio) * viewportHeight)));
      } else if (top < endTransitionRatio * viewportHeight) {
          progress = 1;
      } else {
          progress = 0;
      }

      // Update background color
      const [bgR, bgG, bgB] = interpolateColor(initialBgColor, targetBgColor, progress);
      const newBgColor = `rgba(${bgR}, ${bgG}, ${bgB}, ${bgAlpha})`;
      setDynamicBgColor(newBgColor);

      // Update text colors
      const newTextColors = initialTextColors.map((initialColor, index) => {
        const targetColor = targetTextColors[index];
        const [txtR, txtG, txtB] = interpolateColor(initialColor, targetColor, progress);
        return `rgb(${txtR}, ${txtG}, ${txtB})`;
      });
      setDynamicTextColors(newTextColors);
    }
  }, [
    sectionRef,
    initialBgColor,
    targetBgColor,
    initialTextColors,
    targetTextColors,
    startTransitionRatio,
    endTransitionRatio,
    bgAlpha,
  ]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { dynamicBgColor, dynamicTextColors };
};