import { css } from "@emotion/react";
export const Link = ({ showText, to }) => {
  return (
    <a
      css={css`
        display: inline-block;
        position: relative;
        z-index: 100 !important;
        padding: 2em;
        margin: -2em;
      `}
      href={to}
      target="_blank"
      rel="noreferrer"
    >
      {showText ? showText : to}
    </a>
  );
};
