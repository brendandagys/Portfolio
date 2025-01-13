import "../css/Pills.css";

interface PillsProps {
  content: string[];
  title?: string;
}

export const Pills: React.FC<PillsProps> = (
  { content, title = "Technologies used:" }
) => {
  return (
    <>
      <div className="pills-container">
        {title ? <div className="pills-title">{title}</div> : null}
        {content.map((pill) => (
          <span key={pill} className="pill">
            {pill}
          </span>
        ))}
      </div>
    </>
  );
};
