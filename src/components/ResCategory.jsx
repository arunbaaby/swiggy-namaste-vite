import { useState } from "react";
import ResCategoryInfo from "./ResCategoryInfo";

// {data} like this will extract the data only from the props not the entire props object
const ResCategory = ({data, selected, onClick})=>{
    //console.log('data: ', data);
    const {title, itemCards, categoryId } = data;
    
    return (
        <div className="my-8">
            <div className="flex justify-between cursor-pointer" onClick={onClick}>
                <span className="title text-xl text-gray-900 font-bold">{title} ({itemCards.length})</span>
                    <span><img className="w-8" src={selected?"/images/down-arrow.png":"/images/up-arrow.png"} alt="down-arrow"/></span> 
                    {/* <span><img className="w-8" src="/images/up-arrow.png" alt="up-arrow"/></span> */}
            </div>
            <div className="">
                {
                    selected&&
                    itemCards.map((item)=>{
                        return <ResCategoryInfo data={item} index={categoryId}/>
                    })
                }
            </div>
        </div>
    )
}

export default ResCategory;