import Reveal from "../common/Reveal";

function ProblemCard({ tag, title, description, size, delay = 0 }) {
    return (
        <Reveal as="article" variant="up" delay={delay} className={`problem-card ${size}`}>
            <span className="problem-tag mono">{tag}</span>
            <h3>{title}</h3>
            <p>{description}</p>
        </Reveal>
    );
}

export default ProblemCard;
