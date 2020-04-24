import React from "react";
import { Link } from "react-router-dom";

function Dashboard(props) {
  return (
    <div className="w-25 py-4" style={{ position: "absolute", zIndex: 2 }}>
      <div className="shadow-lg py-4">
        <div className="card">
          <div className="card-body">
            <button className="close" aria-label="Close">
              <Link to="/">
                <span aria-hidden="true">&times;</span>
              </Link>
            </button>

            <h5 className="card-title">Information om området</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              Antal sålda lägenheter:
            </h6>
            <div className="card">
              <div className="card-body">
                <p className="card-text">{props.adress.length} st</p>
              </div>
            </div>
            <h6 className="card-subtitle my-2 text-muted">
              Pris per kvadratmeter:
            </h6>
            <p className="card-text">
              <div className="card">
                <div className="card-body">
                  {numberWithCommas(squareMeterPrice(props))} kr
                </div>
              </div>
            </p>
          </div>
{/*           <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Adress</th>
                <th scope="col">Antal rum</th>
              </tr>
            </thead>
            <tbody>{getApartments(props)}</tbody>
          </table>
          <nav className="mx-auto" aria-label="...">
            <ul className="pagination pagination-sm">
            {next(props)}
            </ul>
          </nav> */}
        </div>
      </div>
    </div>
  );
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function squareMeterPrice(props) {
  let sumEndPrice = 0;
  let sumSquareMeter = 0;
  if (props.adress.length > 0) {
    for (let i = 0; i < props.adress.length; i++) {
      sumEndPrice += Number(props.adress[i].endPrice);
      sumSquareMeter += Number(props.adress[i].squareMeter);
      return Math.round(sumEndPrice / sumSquareMeter);
    }
  } else {
    return 0;
  }
}

function getApartments(props) {
  const allApartments = props.adress.map((apartment, i) => {
    return (
      <tr>
        <td key={i}>{i + 1}</td>
        <td>{apartment.adress}</td>
        <td>{apartment.size}</td>
      </tr>
    );
  });
  let part = allApartments.slice(0, 10);
  return part;
}

function next(props) {
  const count = Math.ceil(props.adress.length / 10);
  if (count > 0) {
    let array = [];
    for (let index = 0; index < count; index++) {
      array.push(index + 1);
    }
    const pages = array.map((e, i) => {
      return (
        <li className="page-item">
        <a className="page-link" href="#">
          {(i+1)}
        </a>
      </li>
      );
    });
    return pages;
  }
  return (
    <li className="page-item">
      <a className="page-link" href="#">
        {0}
      </a>
    </li>
  );
}

export default Dashboard;
