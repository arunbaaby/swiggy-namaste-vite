import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import '../assets/body.css';
import { Link } from "react-router-dom";

const Body = () => {
    //whenever a state variable updates react re-renders the component
    //filtered list is the data and setFilteredlist is the function which updates the filteredList
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    //search
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchSwiggyData();
    }, []);

    const fetchSwiggyData = async () => {
        try {
            const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
            const jsonData = await data.json();
            console.log(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            const restaurants = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

            if (restaurants) {
                setAllRestaurants(restaurants);
                setFilteredList(restaurants);
            } else {
                console.warn("No restaurants found in Swiggy response");
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <main className="body">
            <div className="top-rated-filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search Restaurants" value={searchText} onChange={
                        (e) => {
                            setSearchText(e.target.value);
                        }
                    } />
                    <button className="search-button" onClick={
                        () => {
                            console.log(searchText);
                            const searchFilter = allRestaurants.filter((res) => {
                                return res?.name?.toLowerCase().includes(searchText.toLowerCase());
                            });
                            setFilteredList(searchFilter);
                        }
                    }>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const topRated = allRestaurants.filter((res) => res.avgRating >= 4)
                    setFilteredList(topRated)
                }}>Top Rated ⇄</button>
            </div>
            <section className="res-container">
                {filteredList.map((res, index) => {
                    return (<Link key={res.info.id} to={`/restaurant/${res.info.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <RestaurantCard resData={res} />
                    </Link>)
                })}
            </section>
        </main>
    )
}

export default Body;