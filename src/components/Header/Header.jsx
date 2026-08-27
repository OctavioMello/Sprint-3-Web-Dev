import { useEffect, useState } from "react";
import "./Header.css";

const NAV = [
    { href: "#problema", label: "O problema" },
    { href: "#como", label: "Como funciona" },
    { href: "#percepcao", label: "Identifica" },
    { href: "#demo", label: "Demonstração" },
    { href: "#jornada", label: "Jornada" },
    { href: "#mvp", label: "MVP" },
];

function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className={`header ${scrolled ? "scrolled" : ""}`}>
            <a href="#top" className="header-brand">
                <span className="header-dot" />
                <span>
                    Vision Assist <strong>AI</strong>
                </span>
            </a>

            <nav className="header-nav">
                {NAV.map((l) => (
                    <a key={l.href} href={l.href}>
                        {l.label}
                    </a>
                ))}
            </nav>

            <a href="#demo" className="btn btn-ghost header-cta">
                Ver demonstração
            </a>

            <button
                className={`header-toggle ${open ? "open" : ""}`}
                onClick={() => setOpen(!open)}
                aria-label="Abrir menu"
                aria-expanded={open}
            >
                <span />
                <span />
                <span />
            </button>

            <div className={`header-mobile ${open ? "open" : ""}`}>
                {NAV.map((l) => (
                    <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                        {l.label}
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Header;
