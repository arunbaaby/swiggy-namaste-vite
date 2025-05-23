import resData from "../../utils/resData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../assets/resDetails.css'

const RestaurantDetails = () => {

    const {resId} = useParams();
    console.log(resId);    

    const [restaurant, setRestaurant] = useState(null);

    useEffect(()=>{
        const matchedRestaurant = resData.resList.find((res)=>{
            return res.resId.toString() === resId;
        });
        setRestaurant(matchedRestaurant);
    },[resId]);

    // this is must because in the initial render restaurant is null
    if (!restaurant) {
        return <h1>Loading Restaurant indo....</h1>
    }

    //in initial render the restaurant is null
    // destructing null value will give error
    const { name, cuisine, rating, deliveryTime, image } = restaurant;

    return (
        <section className="res-wrap">
            <div className="res-details-card">
                <div className="res-info">
                    <h1 className="res-title">{name}</h1>
                    <p className="res-cuisine">{cuisine}</p>
                    <p className="res-rating">⭐ {rating}</p>
                    <p className="res-delivery-time">{deliveryTime}</p>
                </div>
                <div className="res-image-wrapper">
                    <img src={image} alt={name} />
                </div>
            </div>
        </section>
    );
}

export default RestaurantDetails;