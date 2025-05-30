import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../assets/resDetails.css';
import { RES_IMG_URL } from "../../utils/constants";

const RestaurantDetails = () => {

    const { resId } = useParams();
    console.log(resId);

    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        try {
            const fetchResMenu = async () => {
                const menuData = await fetch('https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=9.9312328&lng=76.26730409999999&restaurantId=' + resId);
                const jsonMenu = await menuData.json();
                console.log(jsonMenu.data.cards[2].card.card.info);
                setRestaurant(jsonMenu.data.cards[2].card.card.info);
            }
            fetchResMenu();
        } catch (error) {
            console.log(error);
        }
    }, [resId]);

    // useEffect(()=>{
    //     const matchedRestaurant = resData.resList.find((res)=>{
    //         return res.resId.toString() === resId;
    //     });
    //     setRestaurant(matchedRestaurant);
    // },[resId]);

    // // this is must because in the initial render restaurant is null
    if (!restaurant) {
        return <h1>Loading Restaurant indo....</h1>
    }

    //in initial render the restaurant is null
    // destructing null value will give error
    const { name, cuisines, avgRating, sla, cloudinaryImageId } = restaurant;

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