import React from "react";

function Spinner() {
  return (
    <div className="container-100 bg-dark">
      <div className="row no-gutters">
        <div className="col-md-12">
          <div className="container" style={{ height: "100vh" }}>
            <div className="row align-items-center h-100">
              <div className="col-md-12 mx-auto d-flex justify-content-center">
                <div
                  className="spinner-border text-info"
                  style={{ width: "6rem", height: "6rem" }}
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
