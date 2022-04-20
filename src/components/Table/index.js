import React from "react";
import { css } from "@emotion/react";
import { ExpandableComponent } from "./ExpandableComponent";

export const Table = ({ id, columns, data, expandRow }) => {
  return (
    <table
      css={css`
        font-family: "Poppins";
        border-collapse: collapse;
      `}
      id={id}
    >
      <TableHeader columns={columns} data={data} />
      <RowData data={data} columns={columns} expandRow={expandRow} />
    </table>
  );
};

const RowData = ({ data, columns, expandRow }) => {
  return data?.map((rowData) => (
    <>
      <tr
        css={css`
          background: ${rowData.isExpanded ? "#ffffff" : "#e8eaff"};
          box-shadow: inset 0 3px 6px -3px rgba(0, 0, 0, 0.2);
        `}
        id={rowData.id}
        onClick={() => expandRow(rowData.id)}
      >
        {columns?.map((col) => {
          return (
            <td
              css={css`
                padding: 0.8em;
              `}
              id={col?.id}
            >
              {col?.Cell ? col.Cell(rowData) : rowData[col.accessor]}
            </td>
          );
        })}
      </tr>

      {rowData.isExpanded && (
        <tr>
          <td
            colSpan={6}
            css={css`
              height: 100px;
              box-shadow: inset 0 3px 6px -3px rgba(0, 0, 0, 0.2);
              border: 1px solid ${!rowData.isExpanded ? "#ffffff" : "#4aa4ff"};
            `}
          >
            <ExpandableComponent rowData={rowData} />
          </td>
        </tr>
      )}
    </>
  ));
};

const TableHeader = ({ columns }) => {
  return (
    <tr>
      {columns?.map((x) => (
        <th
          id={x?.id}
          css={css`
            background: #3458eb;
            font-weight: 200;
            padding: 0.8em;
            color: white;
            width: ${x.width}px;
            text-align-last: start;
          `}
        >
          {x.title}
        </th>
      ))}
    </tr>
  );
};
