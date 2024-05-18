import React, { useContext } from "react";
import { FilterDispath } from "../../Context/ContextFilter";
import "./Filter.css";

export default function Filter() {
  const { dispath } = useContext(FilterDispath);
  return (
    <div className="filter_container" dir="ltr">
      <div className="filter_btnBox">
        <button onClick={() => dispath({ type: "ALL" })} className="filter_btn">
          All
        </button>
        <button
          onClick={() => dispath({ type: "MyTek" })}
          className="filter_btn"
        >
          MyTek
        </button>
        <button
          onClick={() => dispath({ type: "Tunisianet" })}
          className="filter_btn"
        >
          Tunisianet
        </button>
        <button
          onClick={() => dispath({ type: "Graid" })}
          className="filter_btn"
        >
          Graid
        </button>
      </div>
    </div>
  );
}
