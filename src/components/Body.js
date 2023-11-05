import { useEffect, useState } from "react";
import { BODY_API } from "../Utils/constants";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(BODY_API);
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-teal-50">
      <div className=" flex-row-reverse mx-11 my-3 ">
        <input
          className="border p-1 border-black rounded-md"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            
          }}
        />
        <button
          className="border-black bg-teal-100 p-1 m-2 rounded-lg"
          onClick={() => {

            const filteredRestaurant = listOfRestaurants.filter((res)=>{
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
            })
            setFilteredListOfRestaurants(filteredRestaurant)
          }}
        >
          Search🔍
        </button>
      </div>
      <div className="flex flex-wrap mx-40 justify-around">
        {filteredListOfRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurants/" + restaurant?.info?.id}
            >
              <RestaurantCard resInfo={restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
