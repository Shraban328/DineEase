import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";
import FoodCard from "./FoodCard";

const Explore = () => {
  const [allFoods, setAllFoods] = useState([]);
  useEffect(() => {
    axiosInstance.get("/foods").then((res) => {
      console.log(res.data);
      setAllFoods(res.data);
    });
  }, []);

  return (
    <div className="mt-24 max-w-screen-xl mx-auto grid grid-cols-3 gap-4 ">
      {allFoods.map((food) => (
        <FoodCard key={food._id} food={food} />
      ))}
    </div>
  );
};

export default Explore;
