import RestaurantCard from "./RestaurantCard";
import resData from "../../utils/resData";
import { useState, useEffect } from "react";
import '../assets/body.css';

const Body = () => {

    //whenever a state variable updates react re-renders the component
    //filtered list is the data and setFilteredlist is the function which updates the filteredList
    const [allRestaurants,setAllRestaurants] = useState(resData.resList);
    const [filteredList, setFilteredList] = useState(resData.resList);
    // useEffect(() => {
    //     fetchSwiggyData();
    // }, []);

    // const fetchSwiggyData = async () => {
    //     try {
    //         const data = await fetch('https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=9.9312328&lng=76.26730409999999&carousel=true&third_party_vendor=1');

    //         console.log('fetch swiggy data working');

    //         const jsonData = await data.json();
    //         setFilteredList(jsonData)
    //         console.log('json data = ' , jsonData.data.cards[0].card.card.gridElements.infoWithStyle.info[0]);
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // }

    //search
    const [searchText, setSearchText] = useState('');

    return (
        <main className="body">
            <div className="top-rated-filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search Restaurants" value={searchText} onChange={
                        (e)=>{
                            setSearchText(e.target.value);
                        }
                    } />
                    <button className="search-button" onClick={
                        ()=>{
                            console.log(searchText);
                            const searchFilter = allRestaurants.filter((res)=>{
                               return res.name.toLowerCase().includes(searchText.toLowerCase());
                            });
                            setFilteredList(searchFilter);
                        }
                    }>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const topRated = allRestaurants.filter((res) => res.rating >= 4)
                    setFilteredList(topRated)
                }}>Top Rated ⇄</button>
            </div>
            <section className="res-container">
                {filteredList.map((res, index) => {
                    return <RestaurantCard key={index} resData={res} />
                })}
            </section>
        </main>
    )
}

export default Body;