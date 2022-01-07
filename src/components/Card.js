import react from "react"
import Pointer from "../images/pointer.png"

export default function Card(props) {
    return (
        <div className="card--container">
            <img className="card--img" src={props.imageUrl} />
            <div className="card--text">
                <div className="card--location-data">
                    <img className="card--location-pointer" src={Pointer} />
                    <h3 className="card--location-loc">{props.location}</h3>
                    <a className="card--location-map" href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card--location-name">{props.title}</h1>
                <h2 className="card--location-date">{props.startDate}-{props.endDate}</h2>
                <p className="card--location-desc">{props.description}</p>
            </div>
        </div>
    )
}