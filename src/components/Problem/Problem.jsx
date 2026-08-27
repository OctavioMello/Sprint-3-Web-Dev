import ProblemCard from "./ProblemCard";
import "./Problem.css";

const ISSUES = [
    {
        tag: "Piso",
        title: "Rotas apagadas",
        desc: "Piso tátil interrompido e desníveis que somem exatamente onde mais precisam existir.",
        size: "large"
    },
    {
        tag: "Altura",
        title: "Armadilhas aéreas",
        desc: "Objetos suspensos e obstáculos fora do alcance da bengala.",
        size: "medium"
    },
    {
        tag: "Mente",
        title: "Sobrecarga mental",
        desc: "Cada decisão de trajeto consome atenção e autonomia.",
        size: "small"
    }
];

function Problem() {
    return (
        <section className="section problem" id="problema">
            <div className="section-head">
                <p className="eyebrow">O problema</p>

                <h2 className="section-title">
                    O problema não é apenas se locomover. É acessar as informações do caminho.
                </h2>
            </div>

            <div className="problem-grid">
                {ISSUES.map((issue) => (
                    <ProblemCard
                        key={issue.title}
                        tag={issue.tag}
                        title={issue.title}
                        description={issue.desc}
                        size={issue.size}
                    />
                ))}
            </div>
        </section>
    );
}

export default Problem;