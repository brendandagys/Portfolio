import "../css/Pills.css";

interface PillsProps {
  content: string[];
}

export const Pills: React.FC<PillsProps> = ({ content }) => {
  return (
    <>
      <div className="pills-container">
        {content.map((pill) => (
          <span key={pill} className="pill">
            {pill}
          </span>
        ))}
      </div>
    </>
  );
};
