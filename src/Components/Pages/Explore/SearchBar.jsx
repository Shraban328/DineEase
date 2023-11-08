const SearchBar = () => {
  return (
    <div className="flex mb-10">
      <input
        type="text"
        placeholder="search"
        className="input border-[1px] border-[#361e31] w-full max-w-xs rounded-r-none"
      />
      <button className="btn btn-primary rounded-l-none bg-[#361e31] border-none text-white">
        search
      </button>
    </div>
  );
};

export default SearchBar;
