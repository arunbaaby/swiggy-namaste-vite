import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_IMG_URL, RES_MENU_API } from "../../utils/constants";
import useRestaurantDetails from "../../hooks/useRestaurantMenu";
import ResShimmer from "./ResShimmer";

const RestaurantDetails = () => {

    const { resId } = useParams();
    //custom hook 
    const restaurantDetails = useRestaurantDetails(resId);

    if (!restaurantDetails) {
        return <ResShimmer/>
    }

    const { name, cuisines, avgRating, cloudinaryImageId } = restaurantDetails;

    return (
        <section className="res-wrap flex justify-center my-16">
            <div className="res-details-card flex justify-between w-[480px]">
                <div className="res-info">
                    <div className="res-title">{name}</div>
                    <div className="res-cuisine">{cuisines}</div>
                    <div className="res-rating">⭐ . {avgRating}</div>
                    {/* <h1 className="res-title">{name}</h1>
                    <p className="res-cuisine">{cuisines}</p>
                    <p className="res-rating">⭐ . {avgRating}</p> */}
                    {/* <p className="res-delivery-time">{sla.minDeliveryTime} - {sla.maxDeliveryTime}</p> */}
                </div>
                <div className="res-image-wrapper">
                    <img className="res-image rounded-xl h-[144px] w-[156px]" src={RES_IMG_URL + cloudinaryImageId} />
                </div>
            </div>
        </section>
    );
}

export default RestaurantDetails;