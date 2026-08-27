import "./Hero.css";

const FLOW = [
    "Câmera",
    "IA",
    "Informação",
    "Usuário decide",
];

function Hero() {
    return (
        <section className="hero" id="top">

            <div>
                <p className="eyebrow">
                    Protótipo acadêmico · assistência de percepção
                </p>

                <h1 className="hero-title">
                    VISION <span>ASSIST</span> AI
                </h1>

                <p className="hero-claim">
                    Informação visual transformada em autonomia.
                </p>

                <p className="hero-desc">
                    Um assistente de percepção para estudantes universitários
                    com deficiência visual. A câmera do smartphone interpreta
                    o ambiente ao redor e devolve orientações sonoras curtas,
                    no momento em que elas importam.
                </p>

                <div className="hero-actions">
                    <a
                        href="#problema"
                        className="btn btn-primary"
                    >
                        Conhecer a solução
                    </a>

                    <a
                        href="#demo"
                        className="btn btn-ghost"
                    >
                        Ver protótipo simulado
                    </a>
                </div>
            </div>

            <div className="hero-flow">

                <div className="hero-pulse">
                    <span
                        className="ring"
                        style={{
                            width: 72,
                            height: 72
                        }}
                    />

                    <span
                        className="ring ring2"
                        style={{
                            width: 72,
                            height: 72
                        }}
                    />

                    <span
                        className="ring ring3"
                        style={{
                            width: 72,
                            height: 72
                        }}
                    />

                    <span className="pulse-core mono">
                        IA
                    </span>
                </div>

                <ol className="hero-steps">
                    {FLOW.map((step, index) => (
                        <li
                            key={step}
                            className="hero-step"
                        >
                            <span className="mono hero-step-i">
                                0{index + 1}
                            </span>

                            <span>
                                {step}
                            </span>

                            {index < FLOW.length - 1 && (
                                <span
                                    style={{
                                        color: "var(--muted)"
                                    }}
                                >
                                    →
                                </span>
                            )}
                        </li>
                    ))}
                </ol>

            </div>

        </section>
    );
}

export default Hero;