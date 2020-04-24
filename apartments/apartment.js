import React from "react"

function Apartment(props) {

return (
    <tr>
        <td>{props.size}</td>
        <td>{props.squareMeter}</td>
        <td>{props.adress}</td>
        <td>{props.area}</td>
        <td>{props.priceMonth}</td>
        <td>{props.endPrice}</td>
        <td>{props.soldDate}</td>
        <td>{props.lng}</td>
        <td>{props.lat}</td>
    </tr>
    )
}

export default Apartment