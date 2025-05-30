import '../assets/body.css';
import {RES_IMG_URL} from '../../utils/constants';

const RestaurantCard = (props) => {
    const {name,avgRating,cloudinaryImageId,cuisines,sla} = props.resData.info;
    
    return (
        <div className="res-card-container">
            <div className="res-card-image">
            <img src={RES_IMG_URL+cloudinaryImageId} alt="Restaurant" />
            </div>
            <div className="card-content">
                <p className="res-name">{name}</p>
                <div className="rating-time">
                    <span>⭐ </span>
                    <span> {avgRating} • </span>
                    <span>{sla.slaString}</span>
                </div>
                <p className="cuisine">{cuisines.join(', ')}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;