import "./HowItWorks.css";

const PILLARS = [
    {
        step: "Perceber",
        desc: "A câmera identifica elementos visuais relevantes no ambiente universitário."
    },
    {
        step: "Interpretar",
        desc: "A IA analisa o contexto e seleciona apenas o que realmente importa."
    },
    {
        step: "Comunicar",
        desc: "As informações relevantes são transformadas em orientações sonoras curtas."
    }
];

const HOW_FLOW = [
    "Ambiente",
    "Câmera",
    "IA",
    "Informação relevante",
    "Áudio",
    "Usuário"
];

function HowItWorks() {
    return (
        <section className="section how" id="como">
            <div className="section-head">
                <p className="eyebrow">Como funciona</p>

                <h2 className="section-title">
                    Três pilares, uma decisão do usuário.
                </h2>
            </div>

            <ol className="how-pillars">
                {PILLARS.map((pillar, index) => (
                    <li key={pillar.step} className="how-pillar">
                        <span className="how-pillar-i mono">
                            {index + 1}
                        </span>

                        <h3>{pillar.step}</h3>

                        <p>{pillar.desc}</p>
                    </li>
                ))}
            </ol>

            <div className="how-flow mono">
                {HOW_FLOW.map((item, index) => (
                    <span key={item}>
                        {item}

                        {index < HOW_FLOW.length - 1 && (
                            <span className="how-flow-sep">›</span>
                        )}
                    </span>
                ))}
            </div>
        </section>
    );
}

export default HowItWorks;