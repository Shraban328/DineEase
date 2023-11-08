import { useEffect, useState } from "react";
import useAuth from "../../../utilities/useAuth";
import axiosInstance from "../../../api/axiosInstance";
import TopFoodCard from "./TopFoodCard";
import { Link } from "react-router-dom";

const TopSoldFoods = () => {
  const { user } = useAuth();
  const [topFoods, setTopFoods] = useState(null);
  useEffect(() => {
    axiosInstance.get(`/top-foods`).then((res) => {
      console.log(res.data);
      setTopFoods(res.data);
    });
  }, [user]);

  return (
    <div className="max-w-screen-xl mx-auto my-12 font-lato">
      <h1 className="text-5xl font-bold mb-6">Top in the area</h1>
      <div className="grid grid-cols-3  gap-6">
        {topFoods?.map((food) => (
          <TopFoodCard key={food.id[0]} food={food} />
        ))}
      </div>
      <div className="text-center mt-7">
        <Link to={"/explore"} className="btn btn-outline">
          View More
        </Link>
      </div>
    </div>
  );
};

export default TopSoldFoods;
