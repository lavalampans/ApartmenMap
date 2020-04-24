import React from 'react'
function Export(props) {
    return (
        <div className="card text-center" style={{ position: "absolute", zIndex: 2, width: "100%" }}>
            <div className="card-footer text-muted">
            <a href={props.cvsLink} download='Excel-data.csv' className="btn btn-success" onClick={props.handleExport}>Export1</a>
            </div>
        </div>
    )
}
export default Export