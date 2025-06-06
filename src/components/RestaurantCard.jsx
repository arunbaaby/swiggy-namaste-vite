import {RES_IMG_URL} from '../../utils/constants';

const RestaurantCard = (props) => {
    const {name,avgRating,cloudinaryImageId,cuisines,sla} = props.resData.info;
    
    return (
        <div className="res-card-container w-[282px] h-[282px] overflow-hidden transition-transform duration-200 ease-in-out hover:scale-95">
            <div className="res-card-image w-full h-[182px] relative">
            <img src={RES_IMG_URL+cloudinaryImageId} className="w-full h-full object-cover block rounded-2xl" alt="Restaurant" />
            </div>
            <div className="card-content px-1">
                <p className="res-name font-extrabold py-1">{name}</p>
                <div className="rating-time font-semibold">
                    <span>⭐ </span>
                    <span> {avgRating} • </span>
                    <span>{sla.slaString}</span>
                </div>
                <p className="cuisine font-medium text-gray-700">{cuisines.join(', ')}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;