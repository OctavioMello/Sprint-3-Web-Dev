import { useState } from "react";
import "./Perception.css";

const CATEGORIES = {
    Perceber: {
        lede: "O que a câmera capta primeiro no ambiente ao redor.",
        items: [
            "Obstáculos",
            "Escadas",
            "Desníveis e degraus"
        ]
    },

    Identificar: {
        lede: "O que a IA reconhece e nomeia dentro do que foi captado.",
        items: [
            "Portas",
            "Placas",
            "Textos e sinalizações"
        ]
    },

    Orientar: {
        lede: "O que vira referência para o usuário se localizar.",
        items: [
            "Salas",
            "Números de salas",
            "Referências de deslocamento"
        ]
    }
};

function Perception() {
    const [active, setActive] = useState("Perceber");

    const current = CATEGORIES[active];

    return (
        <section className="section perception" id="percepcao">
            <div className="section-head">
                <p className="eyebrow">
                    O que o Vision Assist identifica
                </p>

                <h2 className="section-title">
                    Obstáculos, portas, escadas, placas, salas e tudo que orienta o trajeto.
                </h2>
            </div>

            <div className="perception-panel">

                <div className="perception-tabs">
                    {Object.keys(CATEGORIES).map((key) => (
                        <button
                            key={key}
                            className={`perception-tab ${
                                active === key ? "active" : ""
                            }`}
                            onClick={() => setActive(key)}
                        >
                            {key}
                        </button>
                    ))}
                </div>

                <div className="perception-content">
                    <p className="perception-lede">
                        {current.lede}
                    </p>

                    <ul className="perception-items">
                        {current.items.map((item) => (
                            <li key={item}>
                                <span className="perception-dot" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}

export default Perception;