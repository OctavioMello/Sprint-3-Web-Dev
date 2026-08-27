import "./Autonomy.css";

function Autonomy() {
    return (
        <section className="section autonomy" id="autonomia">
            <div className="autonomy-content">
                <p className="eyebrow">Autonomia</p>

                <h2 className="autonomy-title">
                    Mais informação.
                    <span> Menos dependência.</span>
                </h2>

                <p className="autonomy-description">
                    O objetivo do Vision Assist não é conduzir o estudante
                    nem tomar decisões por ele. É reduzir a falta de
                    informação que pode transformar um deslocamento simples
                    em uma sequência de decisões difíceis.
                </p>

                <div className="autonomy-principle">
                    <div className="autonomy-line" />

                    <p>
                        A IA fornece informação.
                    </p>

                    <strong>
                        O usuário decide.
                    </strong>
                </div>
            </div>
        </section>
    );
}

export default Autonomy;