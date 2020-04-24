import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import {Link} from 'react-router-dom'

export default function Map(props) {
  const [viewport, setViewport] = useState({
    latitude: 59.31505,
    longitude: 18.07296,
    width: "100%",
    height: "100vh",
    zoom: 13,
  });

  console.log(props.squareMeterPrice)

  const [selectedApartment, setSelectedApartment] = useState(null);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoibGF2YWxhbXBhbiIsImEiOiJjazN2cTlnbzQwYWVnM2pwaDJ6aWJ2dXJvIn0.uHX7253bqnHlEoujDpV6qA"
        mapStyle={"mapbox://styles/lavalampan/ck3vrkhft1ozl1crwbpkfbo33"}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {props.results.map((element, i) => (
          <Marker key={i} latitude={element.lat} longitude={element.lng}>
              <Link to='/dashboard'>
              <span style={{"fontSize": "2em", color: "#151515"}}>
                <i className="fas fa-map-pin" onClick={e => {setSelectedApartment(element);}}></i>
              </span>
              </Link>
          </Marker>
        ))}
        {selectedApartment ? (
          <Popup classNameName="shadow-lg p-5" latitude={selectedApartment.lat} longitude={selectedApartment.lng} onClose={() => {setSelectedApartment(null);}}>
              <div className="card-body shadow-lg">
                <h5 className="card-title">{selectedApartment.adress}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Slutpris</h6>
                <p className="card-text">{numberWithCommas(selectedApartment.endPrice)}kr</p>

                <h6 className="card-subtitle mb-2 text-muted">Antal rum</h6>
                <p className="card-text">{selectedApartment.size}</p>

                <h6 className="card-subtitle mb-2 text-muted">Kvadratmeter</h6>
                <p className="card-text">{selectedApartment.squareMeter}m2</p>

                <h6 className="card-subtitle mb-2 text-muted">Kvadratmeter pris</h6>
                <p className="card-text">{numberWithCommas(selectedSquareMeter(selectedApartment.endPrice, selectedApartment.squareMeter))}kr</p>
                
                <h6 className="card-subtitle mb-2 text-muted">Differans</h6>
                <p className="card-text"><span className="badge badge-success">{priceDifference(props.squareMeterPrice, (selectedApartment.endPrice/selectedApartment.squareMeter))}%</span></p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

function priceDifference(avarage, sold) {
  const differance = sold - avarage
  const avarageBothNumbers = (sold + avarage) / 2
  const precentage = Math.round((differance / avarageBothNumbers) * 100)
  const result = !isNaN(precentage) ? precentage : "Input invalid, not a number"
  return result
}

function selectedSquareMeter(endPrice, squareMeter) {
  const squareMeterPrice = Math.round(endPrice/squareMeter);
  return squareMeterPrice
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
