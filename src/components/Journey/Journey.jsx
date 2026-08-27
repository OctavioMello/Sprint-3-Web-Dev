import Reveal from "../common/Reveal";
import "./Journey.css";

const JOURNEY_STEPS = [
    {
        number: "01",
        title: "Abrir o Vision Assist",
        description: "O estudante inicia a experiência quando precisa de informação sobre o ambiente.",
    },
    {
        number: "02",
        title: "Analisar o ambiente",
        description: "A câmera captura o que está ao redor e fornece os dados para interpretação.",
    },
    {
        number: "03",
        title: "Identificar uma referência",
        description: "O sistema reconhece elementos relevantes para aquele momento.",
    },
    {
        number: "04",
        title: "Receber informação contextual",
        description: "A informação é transformada em uma orientação sonora curta e objetiva.",
    },
    {
        number: "05",
        title: "Decidir como prosseguir",
        description: "O estudante utiliza a informação recebida para tomar sua própria decisão.",
    },
];

function Journey() {
    return (
        <section className="section journey" id="jornada">
            <Reveal as="div" className="section-head">
                <p className="eyebrow">Jornada do usuário</p>
                <h2 className="section-title">A tecnologia informa. O usuário decide.</h2>
                <p className="section-lede">
                    O Vision Assist foi pensado para inserir informação
                    acessível no momento em que ela é necessária,
                    sem retirar do estudante o controle sobre seu deslocamento.
                </p>
            </Reveal>

            <ol className="journey-list">
                {JOURNEY_STEPS.map(({ number, title, description }, index) => (
                    <Reveal
                        as="li"
                        key={title}
                        className="journey-step"
                        delay={index * 90}
                    >
                        <div className="journey-number mono">{number}</div>

                        <div className="journey-content">
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>

                        {index < JOURNEY_STEPS.length - 1 && <div className="journey-connector" />}
                    </Reveal>
                ))}
            </ol>
        </section>
    );
}

export default Journey;
