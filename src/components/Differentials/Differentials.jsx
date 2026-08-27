import Reveal from "../common/Reveal";
import "./Differentials.css";

const DIFFERENTIALS = [
    {
        number: "01",
        title: "Percepção contextual",
        description:
            "A proposta não é apenas detectar objetos, mas identificar quais informações são relevantes para o deslocamento naquele momento.",
    },
    {
        number: "02",
        title: "Experiência integrada",
        description:
            "Textos, objetos, sinalizações e referências do ambiente fazem parte de uma mesma experiência de percepção.",
    },
    {
        number: "03",
        title: "Interação por voz",
        description:
            "O usuário pode solicitar informações e receber respostas por áudio, mantendo a interação simples e acessível.",
    },
    {
        number: "04",
        title: "Foco universitário",
        description:
            "O primeiro contexto de aplicação é delimitado ao ambiente universitário, em vez de tentar resolver todos os cenários possíveis.",
    },
    {
        number: "05",
        title: "Usuário no controle",
        description:
            "A tecnologia fornece informação para apoiar decisões. Ela não conduz automaticamente o estudante.",
    },
];

function Differentials() {
    return (
        <section className="section differentials" id="diferenciais">
            <div className="differentials-pattern" aria-hidden="true" />

            <Reveal as="div" className="section-head">
                <p className="eyebrow">Diferenciais</p>
                <h2 className="section-title">Não é apenas reconhecer. É entender o que importa.</h2>
                <p className="section-lede">
                    O Vision Assist combina percepção contextual,
                    interação por voz e foco universitário para transformar
                    informações visuais em informações úteis para o usuário.
                </p>
            </Reveal>

            <div className="differentials-layout">
                <Reveal as="div" className="differentials-statement" variant="left">
                    <span className="mono">VISION ASSIST / PRINCÍPIO</span>
                    <p>
                        A informação precisa chegar ao usuário
                        <strong> no momento em que ela é relevante.</strong>
                    </p>
                </Reveal>

                <div className="differentials-list">
                    {DIFFERENTIALS.map(({ number, title, description }, index) => (
                        <Reveal
                            as="article"
                            className="differential-item"
                            key={title}
                            delay={index * 80}
                        >
                            <span className="differential-number mono">{number}</span>
                            <div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Differentials;
