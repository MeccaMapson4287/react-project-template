import React from "react";
import "./TableStyle.css";

function TableRow(props) {
  return (
    <div className="table-rows">
      <div>{props.squirrel}</div>
      <div>{props.squirrel.facts}</div>
      <div>{props.chipmunk}</div>
      <div>{props.chipmunk.facts}</div>
    </div>
  );
}

export default TableRow;
