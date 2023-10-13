import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
    const classes = useStyles();

    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 220 220"
        className={classes.svgHover}
      >
        <g id="Layer_2" data-name="Layer 2">
          <g id="Layer_5" data-name="Layer 5">
            <path className="cls-1" d="M60.558 156H58.465L72.472 43.3H77.785L111.595 147.467L145.244 43.3H150.557L164.564 156H151.201L140.092 65.84L110.951 156H100.808L71.345 66.967L60.558 156Z"></path>
            <rect className="cls-1" width="0.857241" height="26.6295" transform="matrix(-0.994308 -0.106546 0.117724 -0.993046 71.8524 69.5357)"/>
            <rect className="cls-1" width="0.85966" height="26.4214" transform="matrix(-0.960901 -0.276894 0.304729 -0.952439 140.261 68.2563)"/>
            <rect className="cls-1" width="0.849064" height="11.1825" transform="matrix(-0.96078 -0.277311 0.305143 -0.952307 108.575 156.815)"/>
            <rect className="cls-1" width="2.01837" height="77.2495" transform="matrix(0.959988 0.28004 -0.30814 0.951341 115.235 136.167)"/>
          </g>
        </g>
      </svg>
    );
};

<svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="f6b96855">
    <circle id="e5e64346" cx="110" cy="110" r="110" fill="#D9D9D9"></circle>
    <path id="88802b49" d="M60.558 156H58.465L72.472 43.3H77.785L111.595 147.467L145.244 43.3H150.557L164.564 156H151.201L140.092 65.84L110.951 156H100.808L71.345 66.967L60.558 156Z" fill="black"></path>
    <rect id="53fbc601" width="0.857241" height="26.6295" transform="matrix(-0.994308 -0.106546 0.117724 -0.993046 71.8524 69.5357)" fill="#D9D9D9"></rect>
    <rect id="1207a32f" width="0.85966" height="26.4214" transform="matrix(-0.960901 -0.276894 0.304729 -0.952439 140.261 68.2563)" fill="#D9D9D9"></rect>
    <rect id="d9a39bb5" width="0.849064" height="11.1825" transform="matrix(-0.96078 -0.277311 0.305143 -0.952307 108.575 156.815)" fill="#D9D9D9"></rect>
    <rect id="6d32237c" width="2.01837" height="60.5645" transform="matrix(0.959988 0.28004 -0.30814 0.951341 115.235 136.167)" fill="black"></rect>
  </g>
</svg>