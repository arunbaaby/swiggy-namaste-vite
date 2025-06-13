import { useState } from "react";
import ResCategoryInfo from "./ResCategoryInfo";

// {data} like this will extract the data only from the props not the entire props object
const ResCategory = ({data})=>{
    //console.log('data: ', data);
    const {title, itemCards, categoryId } = data;
    const [selected, setSelected] = useState(null);

    const handleSelection = (getCurrentCategoryId)=>{
        //console.log('cat id ',catId);
        setSelected(getCurrentCategoryId === selected ? null : getCurrentCategoryId);
    }
    return (
        <div className="my-8">
            <div className="flex justify-between cursor-pointer" onClick={()=>handleSelection(categoryId)}>
                <span className="title text-xl text-gray-900 font-bold">{title} ({itemCards.length})</span>
                {/* <span><img className="w-8" src="/images/down-arrow.png" alt="down-arrow"/></span> */}

                {
                    selected === null ?
                    <span><img className="w-8" src="/images/down-arrow.png" alt="down-arrow"/></span> :
                    <span><img className="w-8" src="/images/up-arrow.png" alt="up-arrow"/></span>
                }
            </div>
            <div className="">
                {
                    selected === categoryId ?
                    itemCards.map((item)=>{
                        return <ResCategoryInfo data={item} index={categoryId}/>
                    }):null
                }
            </div>
        </div>
    )
}

export default ResCategory;