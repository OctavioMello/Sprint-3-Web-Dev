import { useState } from "react";
import "./Demo.css";

const RESULT_TEMPLATES = [
    {
        label: "Sala 204",
        min: 90
    },
    {
        label: "Porta à direita",
        min: 92
    },
    {
        label: "Possível obstáculo",
        min: 78
    }
];

function randomConfidence(min) {
    return Math.round(min + Math.random() * (99 - min));
}

function Demo() {
    const [status, setStatus] = useState("idle");
    const [results, setResults] = useState([]);

    const analyze = () => {
        setStatus("scanning");
        setResults([]);

        setTimeout(() => {
            const generatedResults = RESULT_TEMPLATES.map((result) => ({
                label: result.label,
                confidence: randomConfidence(result.min)
            }));

            setResults(generatedResults);
            setStatus("done");
        }, 1200);
    };

    const resetDemo = () => {
        setStatus("idle");
        setResults([]);
    };

    return (
        <section className="section demo" id="demo">
            <div className="section-head">
                <p className="eyebrow">Demonstração</p>

                <h2 className="section-title">
                    Uma simulação visual do protótipo.
                </h2>

                <p className="section-lede">
                    Os resultados são gerados aleatoriamente para ilustrar a
                    experiência. Não há câmera real, IA real ou reconhecimento
                    de objetos nesta demonstração.
                </p>
            </div>

            <div className="demo-stage">
                <div className="phone">
                    <div className="phone-notch" />

                    <div className="phone-screen">
                        <p className="phone-heading mono">
                            VISION ASSIST
                        </p>

                        <div className="phone-view">
                            {status === "idle" && (
                                <p className="phone-hint">
                                    Aponte a câmera para o ambiente
                                </p>
                            )}

                            {status === "scanning" && (
                                <div className="phone-scan" />
                            )}

                            {status === "done" && (
                                <ul className="phone-results">
                                    {results.map((result) => (
                                        <li key={result.label}>
                                            <span>{result.label}</span>

                                            <span className="mono">
                                                {result.confidence}%
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {status === "done" && (
                            <p className="phone-audio">
                                <span className="phone-audio-dot" />
                                Sala 204 — Laboratório de Informática.
                            </p>
                        )}

                        <button
                            className="btn btn-primary phone-cta"
                            onClick={
                                status === "done"
                                    ? resetDemo
                                    : analyze
                            }
                            disabled={status === "scanning"}
                        >
                            {status === "idle" && "ANALISAR AMBIENTE"}

                            {status === "scanning" && "Analisando…"}

                            {status === "done" && "Analisar novamente"}
                        </button>
                    </div>
                </div>

                <p className="demo-note mono">
                    Simulação de protótipo · valores gerados com Math.random()
                </p>
            </div>
        </section>
    );
}

export default Demo;