import React from "react";
import Helmet from "react-helmet";
import Settings from "../settings/settings.json";

// Search and sharing metadata live in public/index.html so crawlers do not
// need to execute JavaScript to read them.
export const HelmetMeta = () => (
    <Helmet defaultTitle="Benjamin Mehrdad | AI/ML Programmer &amp; Researcher">
        <meta name="theme-color" content={Settings.colors.primary} />
    </Helmet>
);
