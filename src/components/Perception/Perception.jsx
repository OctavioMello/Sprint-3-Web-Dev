import { useState } from "react";
import Reveal from "../common/Reveal";
import "./Perception.css";

const CATEGORIES = {
    Perceber: {
        lede: "O que a câmera capta primeiro no ambiente ao redor.",
        items: ["Obstáculos", "Escadas", "Desníveis e degraus"],
    },

    Identificar: {
        lede: "O que a IA reconhece e nomeia dentro do que foi captado.",
        items: ["Portas", "Placas", "Textos e sinalizações"],
    },

    Orientar: {
        lede: "O que vira referência para o usuário se localizar.",
        items: ["Salas", "Números de salas", "Referências de deslocamento"],
    },
};

function Perception() {
    const [active, setActive] = useState("Perceber");
    const keys = Object.keys(CATEGORIES);
    const activeIndex = keys.indexOf(active);
    const current = CATEGORIES[active];

    return (
        <section className="section perception" id="percepcao">
            <Reveal as="div" className="section-head">
                <p className="eyebrow">O que o Vision Assist identifica</p>
                <h2 className="section-title">
                    Obstáculos, portas, escadas, placas, salas e tudo que orienta o trajeto.
                </h2>
            </Reveal>

            <Reveal as="div" className="perception-panel" variant="scale">
                <div className="perception-tabs">
                    <span
                        className="perception-tab-indicator"
                        style={{
                            width: `${100 / keys.length}%`,
                            transform: `translateX(${activeIndex * 100}%)`,
                        }}
                        aria-hidden="true"
                    />
                    {keys.map((key) => (
                        <button
                            key={key}
                            className={`perception-tab ${active === key ? "active" : ""}`}
                            onClick={() => setActive(key)}
                        >
                            {key}
                        </button>
                    ))}
                </div>

                <div className="perception-content" key={active}>
                    <p className="perception-lede">{current.lede}</p>

                    <ul className="perception-items">
                        {current.items.map((item, index) => (
                            <li key={item} style={{ transitionDelay: `${index * 60}ms` }}>
                                <span className="perception-dot" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </Reveal>
        </section>
    );
}

export default Perception;
