import React from "react";
import { Link } from "react-router-dom";

function Shortcut() {
  return (
    <div className="py-4" style={{ position: "absolute", zIndex: 2 }}>
      <div className=" p-3">
        <Link to="/dashboard">
        <span style={{"font-size": "48px", "color": "#fff"}}>
        <i className="fas fa-info-circle"></i>
        </span>
        </Link>
      </div>
    </div>
  );
}

export default Shortcut;
