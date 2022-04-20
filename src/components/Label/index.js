import { css } from "@emotion/react";
export const Label = ({ text }, props) => {
  return (
    <h4
      css={css`
        margin-left: 1px;
        margin-bottom: -3px;
      `}
    >
      {text}
    </h4>
  );
};
