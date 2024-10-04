import "../css/AnimatedButton.css";

interface AnimatedButtonProps {
  onClick: () => void;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ onClick }) => {
  return (
    <>
      <a className="button-container">
        <span onClick={onClick} className="button-span mt-4">
          <span className="button-span-inner">See my work</span>
        </span>
      </a>
    </>
  );
};
