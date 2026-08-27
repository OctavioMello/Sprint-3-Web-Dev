function ProblemCard({ tag, title, description, size }) {
    return (
        <article className={`problem-card ${size}`}>
            <span className="problem-tag mono">
                {tag}
            </span>

            <h3>{title}</h3>

            <p>{description}</p>
        </article>
    );
}

export default ProblemCard;