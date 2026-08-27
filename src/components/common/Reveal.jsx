import { useEffect, useRef, useState } from "react";

/**
 * Wraps content and fades/slides it in once it scrolls into view.
 * variant: "up" (default) | "left" | "right" | "scale" | "fade"
 */
function Reveal({
    children,
    as: Tag = "div",
    className = "",
    variant = "up",
    delay = 0,
    threshold = 0.16,
    ...rest
}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return undefined;

        if (typeof IntersectionObserver === "undefined") {
            const id = window.setTimeout(() => setVisible(true), 0);
            return () => window.clearTimeout(id);
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(node);
                    }
                });
            },
            { threshold, rootMargin: "0px 0px -10% 0px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    const classes = [
        "reveal",
        variant !== "up" ? `reveal-${variant}` : "",
        visible ? "reveal-visible" : "",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <Tag
            ref={ref}
            className={classes}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
            {...rest}
        >
            {children}
        </Tag>
    );
}

export default Reveal;
