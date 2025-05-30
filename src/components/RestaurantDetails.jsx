import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../assets/resDetails.css';
import { RES_IMG_URL, RES_MENU_API } from "../../utils/constants";
import useRestaurantDetails from "../../hooks/useRestaurantMenu";

const RestaurantDetails = () => {

    const { resId } = useParams();
    //custom hook 
    const restaurantDetails = useRestaurantDetails(resId);

    if (!restaurantDetails) {
        return <h1>Loading Restaurant indo....</h1>
    }

    const { name, cuisines, avgRating, cloudinaryImageId } = restaurantDetails;

    return (
        <section className="res-wrap">
            <div className="res-details-card">
                <div className="res-info">
                    <h1 className="res-title">{name}</h1>
                    <p className="res-cuisine">{cuisines}</p>
                    <p className="res-rating">⭐ . {avgRating}</p>
                    {/* <p className="res-delivery-time">{sla.minDeliveryTime} - {sla.maxDeliveryTime}</p> */}
                </div>
                <div className="res-image-wrapper">
                    <img src={RES_IMG_URL + cloudinaryImageId} />
                </div>
            </div>
        </section>
    );
}

export default RestaurantDetails;