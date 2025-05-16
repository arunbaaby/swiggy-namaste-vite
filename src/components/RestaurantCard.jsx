import '../assets/body.css'
const RestaurantCard = (props) => {
    const { resData } = props;
    const { image, name, cuisine, rating, deliveryTime } = resData;
    return (
        <div className="res-card-container">
            <div className="res-card-image">
            <img src={image} alt="Restaurant" />
            </div>
            <div className="card-content">
                <p className="res-name">{name}</p>
                <div className="rating-time">
                    <span>⭐ {rating}</span>
                    <span>•</span>
                    <span>{deliveryTime}</span>
                </div>
                <p className="cuisine"> {cuisine} </p>
            </div>
        </div>
    )
}

export default RestaurantCard;