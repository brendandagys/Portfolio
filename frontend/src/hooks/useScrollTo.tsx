import { useCallback } from "react";

interface ScrollToConfig {
  targetId: string;
  offset: number;
}

interface UseScrollToParams {
  configs: ScrollToConfig[];
}

export const useScrollTo = ({ configs }: UseScrollToParams) => {
  const scrollTo = useCallback(
    (targetId: string) => {
      for (const { targetId: configTargetId, offset } of configs) {
        if (targetId === configTargetId) {
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            const yPosition =
              targetElement.getBoundingClientRect().top +
              window.scrollY +
              offset;

            window.scrollTo({ top: yPosition, behavior: "smooth" });

            break;
          }
        }
      }
    },
    [configs]
  );

  return scrollTo;
};
