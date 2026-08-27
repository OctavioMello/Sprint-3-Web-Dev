import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p className="eyebrow footer-eyebrow">
                Vision Assist AI
            </p>

            <h2 className="footer-title">
                Mais informação. Menos dependência.
            </h2>

            <p className="footer-principle">
                A IA não decide pelo usuário. Ela fornece informações
                para que ele possa decidir.
            </p>

            <div className="footer-meta mono">
                <span>Protótipo acadêmico</span>
                <span>·</span>
                <span>Sem IA real integrada</span>
            </div>
        </footer>
    );
}

export default Footer;