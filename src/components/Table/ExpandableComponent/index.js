import { Link } from "../../Link";
import { Label } from "../../Label";
import { css } from "@emotion/react";

export const ExpandableComponent = ({ rowData }) => {
  return (
    <div
      css={css`
        border-top-style: none;
        padding: 3px;
        width: 100%;
      `}
    >
      <Label text="Website" />
      <Link showText={rowData.website} to={rowData.website} />;
    </div>
  );
};
