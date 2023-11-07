import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";
import FoodCard from "./FoodCard";

const Explore = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [count, setCount] = useState(0);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const pageNumber = Math.ceil(count / 9);
  const pages = [...Array(pageNumber).keys()];

  useEffect(() => {
    axiosInstance.get(`/foods`).then((res) => {
      console.log("from all foods: ", res.data);
      setCount(res.data.length);
    });
  }, [currentPageNumber]);

  useEffect(() => {
    axiosInstance
      .get(`/foods/explore?currentPage=${currentPageNumber}`)
      .then((res) => {
        console.log(res.data);
        setAllFoods(res.data);
      });
  }, [currentPageNumber]);

  return (
    <div className="mt-24 max-w-screen-xl mx-auto ">
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
