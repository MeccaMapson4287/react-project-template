import React from "react";
import "./TableStyle.css";

function TableHeader() {
  return (
    <div>
      <h1>Critter Facts</h1>
      <div className="table-header">
        <div>Squirrels</div>
        <div>Squirrels affect on environment</div>
        <div>Facts About Chipmunks</div>
        <div>Chipmunks affect on environment</div>
        <div>Birds</div>
        <div>Opponent</div>
        <div>Wins</div>
        <div>Losses</div>
      </div>
    </div>
  );
}

export default TableHeader;
