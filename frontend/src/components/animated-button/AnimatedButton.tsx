import { MouseEventHandler } from "react";
import "../../css/AnimatedButton.css";
import { GradientOverride } from "./enums";

interface AnimatedButtonProps {
  customStylesContainer: Record<string, number | string>;
  gradientOverride?: GradientOverride;
  text: string;
  onClick: MouseEventHandler<HTMLSpanElement>;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  customStylesContainer,
  gradientOverride,
  text,
  onClick,
}) => {
  return (
    <>
      <div className="button-container" style={customStylesContainer}>
        <span
          onClick={onClick}
          className={`button-span ${
            gradientOverride ? `button-span--${gradientOverride}` : ""
          }`}
        >
          <span className="button-span-inner">{text}</span>
        </span>
      </div>
    </>
  );
};
