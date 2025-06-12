import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RES_IMG_URL, RES_MENU_API } from "../../utils/constants";
import useRestaurantDetails from "../../hooks/useRestaurantMenu";
import ResShimmer from "./ResShimmer";
import ResCategory from "./ResCategory";

const RestaurantDetails = () => {

    const { resId } = useParams();
    //custom hook 
    const restaurantDetails = useRestaurantDetails(resId);

    if (!restaurantDetails) {
        return <h1>Loading..</h1>
    }

    //console.log('resDet ', restaurantDetails);

    const {name, cuisines, cloudinaryImageId, avgRating } = restaurantDetails.cards[2].card.card.info;
    //console.log(name);
    

    const categories =  restaurantDetails.cards[5].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>c.card.card['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log('cate :', categories);

    // const recommmended = categories.filter((c)=>c.card.card.title==='Recommended');
    // console.log( 'recommmend ', recommmended);
    

    return (
        <section className="max-w-[800px] min-h-[800px] mx-auto">
            <div className="mt-16">
                <h1 className="text-3xl font-bold text-gray-950">{name}</h1>
            </div>
            {/* Accordian */}
            <div className="my-8">
                {categories.map((category,index)=>
                    <ResCategory data={category.card.card} key={index}/>
                    )}
            </div>
        </section>
        // <section className="res-wrap flex justify-center my-16 transition-transform duration-200 ease-in-out hover:scale-110">
        //     <div className="res-details-card flex justify-between w-[480px]">
        //         <div className="res-info">
        //             <div className="res-title text-xl font-semibold">{name}</div>
        //             <div className="res-cuisine font-medium">{cuisines.join(', ')}</div>
        //             <div className="res-rating font-medium                                                                                                                                                              ">⭐ . {avgRating}</div>
        //             {/* <h1 className="res-title">{name}</h1>
        //             <p className="res-cuisine">{cuisines}</p>
        //             <p className="res-rating">⭐ . {avgRating}</p> */}
        //             {/* <p className="res-delivery-time">{sla.minDeliveryTime} - {sla.maxDeliveryTime}</p> */}
        //         </div>
        //         <div className="res-image-wrapper">
        //             <img className="res-image rounded-xl h-[144px] w-[156px]" src={RES_IMG_URL + cloudinaryImageId} />
        //         </div>
        //     </div>
        // </section>
    );
}

export default RestaurantDetails;