import React from "react";

export default function ScrollReveal({
    children,
    className,
    as: Component = "section",
}) {
    return <Component className={className}>{children}</Component>;
}
