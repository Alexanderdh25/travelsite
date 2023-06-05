import { BsFillGeoAltFill } from "react-icons/bs";



function Card(props) {
    return (
        <div className="main">
            <div className="card-container">
                <img src={props.items.imgUrl} className="card-image"></img>
                    <div className="card">
                        <div className="card-location">
                            <i className="material-icons locationIcon"><BsFillGeoAltFill/></i>
                            <p className="card-country">{[props.items.location]}</p>
                            <a href={props.items.googleMapsUrl} className="googleUrl" target="_blank">View on Google Maps</a>
                        </div>
                        <div>
                            <h1 className='title'>{props.items.title}</h1>
                            <p className='date'>{props.items.startDate}</p>
                            <p className='description'>{props.items.description}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default Card;