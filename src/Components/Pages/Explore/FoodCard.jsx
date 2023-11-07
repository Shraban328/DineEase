import PropTypes from "prop-types";

const FoodCard = ({ food }) => {
  const {
    _id,
    quantity,
    price,
    origin,
    image,
    foodName,
    description,
    category,
  } = food;
  const loveReactIcon = (
    <>
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </>
  );
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl font-lato text-[#361e31]">
      <div className="relative">
        <figure>
          <img
            className="hover:scale-110 transition duration-300 ease-in-out"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="absolute right-4 bottom-2">{loveReactIcon}</div>
      </div>
      <div className="card-body font-bold">
        <h2 className="card-title">{foodName}</h2>
        <p>
          {category}, <span className="font-normal">{origin}</span>
        </p>
        <p>
          Quantity Available: <span className="font-normal">{quantity}</span>
        </p>
        <p>
          Price: <span className="font-normal">{price} TK</span>
        </p>

        <div className="card-actions justify-end">
          <button className="btn btn-ghost rounded-full bg-[#f7881f] border-none text-white shadow-xl hover:text-[#f7881f] hover:bg-white ">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

FoodCard.propTypes = {
  food: PropTypes.object,
};
