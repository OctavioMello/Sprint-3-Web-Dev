import { useEffect, useState } from "react";
import "./Hero.css";

const FLOW = ["Câmera", "IA", "Informação", "Usuário decide"];

function Hero() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const id = requestAnimationFrame(() => setLoaded(true));
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <section className={`hero ${loaded ? "is-loaded" : ""}`} id="top">
            <div className="hero-grid" aria-hidden="true" />
            <div className="hero-glow" aria-hidden="true" />

            <div className="hero-content">
                <p className="eyebrow hero-in" style={{ transitionDelay: "60ms" }}>
                    Protótipo acadêmico · assistência de percepção
                </p>

                <h1 className="hero-title hero-in" style={{ transitionDelay: "140ms" }}>
                    VISION <span>ASSIST</span> AI
                </h1>

                <p className="hero-claim hero-in" style={{ transitionDelay: "220ms" }}>
                    Informação visual transformada em autonomia.
                </p>

                <p className="hero-desc hero-in" style={{ transitionDelay: "300ms" }}>
                    Um assistente de percepção para estudantes universitários
                    com deficiência visual. A câmera do smartphone interpreta
                    o ambiente ao redor e devolve orientações sonoras curtas,
                    no momento em que elas importam.
                </p>

                <div className="hero-actions hero-in" style={{ transitionDelay: "380ms" }}>
                    <a href="#problema" className="btn btn-primary">
                        Conhecer a solução
                    </a>

                    <a href="#demo" className="btn btn-ghost">
                        Ver protótipo simulado
                    </a>
                </div>
            </div>

            <div className="hero-flow hero-in" style={{ transitionDelay: "260ms" }}>
                <div className="hero-radar">
                    <span className="radar-ring r1" />
                    <span className="radar-ring r2" />
                    <span className="radar-ring r3" />
                    <span className="radar-sweep" />
                    <span className="radar-core mono">IA</span>
                </div>

                <ol className="hero-steps">
                    {FLOW.map((step, index) => (
                        <li key={step} className="hero-step">
                            <span className="mono hero-step-i">0{index + 1}</span>
                            <span>{step}</span>
                            {index < FLOW.length - 1 && (
                                <span className="hero-step-arrow">→</span>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

export default Hero;
