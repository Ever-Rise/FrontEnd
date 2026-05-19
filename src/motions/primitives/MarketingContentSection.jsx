import React from "react";

export default function MarketingContentSection({ title, children }) {
    return (
        <section>
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    );
}
