import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";
import FoodCard from "./FoodCard";
import spinner from "../../../assets/spinner.json";
import Lottie from "lottie-react";
import SearchBar from "./SearchBar";
const Explore = () => {
  const [allFoods, setAllFoods] = useState(null);
  const [count, setCount] = useState(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const pageNumber = Math.ceil(count / 9);
  const pages = [...Array(pageNumber).keys()];

  useEffect(() => {
    axiosInstance.get(`/foods`).then((res) => {
      setCount(res.data.length);
    });
  }, [currentPageNumber]);

  useEffect(() => {
    axiosInstance
      .get(`/foods/explore?currentPage=${currentPageNumber}`)
      .then((res) => {
        setAllFoods(res.data);
      });
  }, [currentPageNumber]);

  if (!allFoods) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Lottie className="w-1/6" animationData={spinner} />
      </div>
    );
  }

  return (
    <div className="mt-24 max-w-screen-xl mx-auto ">
      <SearchBar setAllFoods={setAllFoods} />
      <div className="grid grid-cols-3 gap-4 ">
        {allFoods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
      <div className="text-center my-24 ">
        <h1>current page: {currentPageNumber + 1}</h1>
        <div className="join border-b-4 shadow-md">
          {pages.map((pageNumber) => (
            <button
              key={pageNumber}
              className={`join-item btn w-20  ${
                currentPageNumber === pageNumber
                  ? "bg-[#361e31] text-white hover:bg-[#361e31]"
                  : "text-[#361e31]"
              }`}
              onClick={() => setCurrentPageNumber(pageNumber)}
            >
              {pageNumber + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
