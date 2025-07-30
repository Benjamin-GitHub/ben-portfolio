import React from "react";
import { TypeAnimation } from "react-type-animation";

export const TextDecrypt = (props) => {
    return (
        <TypeAnimation
            sequence={[props.text || ""]}
            wrapper="span"
            speed={50}
            repeat={0}
            cursor={false}
        />
    );
};
