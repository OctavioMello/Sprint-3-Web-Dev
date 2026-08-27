import "./Evolution.css";

const EVOLUTION_STAGES = [
    {
        number: "01",
        label: "MVP",
        title: "Percepção + orientação contextual",
        description:
            "O Vision Assist identifica elementos relevantes do ambiente e fornece informações sonoras para apoiar a tomada de decisão.",
        examples: [
            "Você está diante do Bloco B.",
            "Sala 204 à direita.",
            "Obstáculo à frente."
        ]
    },
    {
        number: "02",
        label: "EVOLUÇÃO",
        title: "Navegação assistida",
        description:
            "Com uma evolução da tecnologia, o sistema poderá utilizar as informações percebidas para auxiliar o usuário durante trajetos.",
        examples: [
            "Siga em frente.",
            "Vire à esquerda no próximo corredor."
        ]
    },
    {
        number: "03",
        label: "FUTURO",
        title: "Navegação indoor personalizada",
        description:
            "Uma visão de longo prazo em que o contexto do ambiente e o destino do usuário podem ser combinados em uma experiência de navegação personalizada.",
        examples: [
            "Você está no Bloco B, segundo andar.",
            "Para chegar ao laboratório 204, siga em frente e vire à esquerda."
        ]
    }
];

function Evolution() {
    return (
        <section className="section evolution" id="evolucao">
            <div className="section-head">
                <p className="eyebrow">Evolução</p>

                <h2 className="section-title">
                    Começamos informando. O próximo passo é orientar.
                </h2>

                <p className="section-lede">
                    O MVP estabelece uma base de percepção contextual.
                    A partir dela, novas capacidades podem ser desenvolvidas
                    sem confundir o que é protótipo com o que ainda é visão.
                </p>
            </div>

            <div className="evolution-track">
                {EVOLUTION_STAGES.map(
                    ({ number, label, title, description, examples }, index) => (
                        <article className="evolution-stage" key={number}>
                            <div className="evolution-marker">
                                <span className="mono">{number}</span>

                                {index < EVOLUTION_STAGES.length - 1 && (
                                    <span className="evolution-line" />
                                )}
                            </div>

                            <div className="evolution-content">
                                <span className="evolution-label mono">
                                    {label}
                                </span>

                                <h3>{title}</h3>

                                <p>{description}</p>

                                <div className="evolution-examples">
                                    {examples.map((example) => (
                                        <div
                                            className="evolution-example"
                                            key={example}
                                        >
                                            <span className="evolution-arrow">
                                                →
                                            </span>

                                            <span>{example}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </article>
                    )
                )}
            </div>
        </section>
    );
}

export default Evolution;