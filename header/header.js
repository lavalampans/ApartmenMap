import React from "react";

function Header(props) {
  return (
    <div
      className="container-fluid py-4 center"
      style={{ position: "absolute", zIndex: 2 }}
    >
        <div className="row mb-3 justify-content-md-center">
          <div className="col-md-4 ">
            <div className="input-group mb-3 input-group-lg shadow-lg p-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-lg">
                  <i className="fas fa-map-marked-alt"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Sök adress..."
                aria-label="Sök adress"
                aria-describedby="inputGroup-sizing-lg"
                onChange={props.handleChange}
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Header;
