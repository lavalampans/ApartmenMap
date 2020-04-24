import React from "react"
import Apartment from './apartment'

function Apartments(props) {
    const allApartments = props.data.map((apartment, i) => {
        return <Apartment
            key={i}
            size={apartment.size}
            squareMeter={apartment.squareMeter}
            adress={apartment.adress}
            area={apartment.area}
            priceMonth={apartment.priceMonth}
            endPrice={apartment.endPrice}
            soldDate={apartment.soldDate}
            />
    })
    return (
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th>Storlek</th>
                    <th>m2</th>
                    <th>Adress</th>
                    <th>Area</th>
                    <th>Måndaspris</th>
                    <th>Slutpris</th>
                    <th>Försäljningsdatum</th>
                </tr>
            </thead>
            <tbody>
                {allApartments}
            </tbody>
        </table>
    )
}
export default Apartments

