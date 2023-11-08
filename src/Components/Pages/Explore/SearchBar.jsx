import axiosInstance from "../../../api/axiosInstance";
import PropTypes from "prop-types";
const SearchBar = ({ setAllFoods }) => {
  const handleFoodSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.searchText.value;
    e.target.searchText.value = "";
    axiosInstance.get(`/foods`).then((res) => {
      console.log(res.data);
      const foods = res.data;
      const searchedFoods = foods.filter(
        (food) =>
          food.category.includes(searchText) ||
          food.foodName.includes(searchText)
      );
      setAllFoods(searchedFoods);
    });
  };
  return (
    <div>
      <h1 className="text-lg font-bold text-[#361e31]">
        what would you like to eat?
      </h1>
      <form className="flex mb-11" onSubmit={handleFoodSearch}>
        <input
          name="searchText"
          type="text"
          placeholder="search by category"
          className="input border-[1px] border-[#361e31] w-full max-w-xs rounded-r-none"
        />
        <button className="btn btn-primary rounded-l-none bg-[#361e31] border-none text-white">
          search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  setAllFoods: PropTypes.func,
};
