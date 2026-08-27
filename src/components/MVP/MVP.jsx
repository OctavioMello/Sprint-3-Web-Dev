import "./MVP.css";

const IN_SCOPE = [
    "Percepção contextual",
    "Leitura de placas e textos",
    "Identificação de referências",
    "Detecção de obstáculos",
    "Consulta por voz",
    "Feedback de áudio contextual"
];

const OUT_SCOPE = [
    "Navegação indoor completa",
    "Cálculo de rotas",
    "Localização indoor precisa",
    "Condução automática"
];

function MVP() {
    return (
        <section className="section mvp" id="mvp">
            <div className="section-head">
                <p className="eyebrow">O que faz parte do MVP. O que ainda não é o foco.</p>

                <h2 className="section-title">
                    Onde o Vision Assist começa. E até onde ele vai.
                </h2>
            </div>

            <div className="mvp-split">
                <div className="mvp-col in">
                    <h3>Faz parte do MVP</h3>

                    <ul>
                        {IN_SCOPE.map((item) => (
                            <li key={item}>
                                <span className="mvp-icon in">✓</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mvp-divider" />

                <div className="mvp-col out">
                    <h3>Fora do MVP</h3>

                    <ul>
                        {OUT_SCOPE.map((item) => (
                            <li key={item}>
                                <span className="mvp-icon out">–</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default MVP;