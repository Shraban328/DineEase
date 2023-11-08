import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance";

const FoodDetails = () => {
  const [food, setFood] = useState([]);
  const { id } = useParams();
  const bgUrl = "https://i.ibb.co/KhXzqZ1/food-Detail-img-avif.jpg";
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
  useEffect(() => {
    axiosInstance.get(`/foods/food/${id}`).then((res) => {
      console.log(res.data);
      setFood(res.data);
    });
  }, [id]);

  return (
    <div
      className={`hero min-h-[81vh] font-lato text-[#361e31] `}
      style={{
        backgroundImage: `url("https://i.ibb.co/KhXzqZ1/food-Detail-img-avif.jpg")`,
      }}
    >
      <div className="hero-content flex-col lg:flex-row bg-[#FFF2DE] border-8 border-[#4a3445] p-11 rounded-lg ">
        <div className="w-1/2">
          <img src={image} className="rounded-lg shadow-2xl" />
          <p>{description}</p>
        </div>
        <div className="w-1/2 font-bold text-xl space-y-3">
          <h2 className="text-5xl font-bold">{foodName}</h2>
          <div>
            <p>
              {category}, <span className="font-normal text-sm">{origin}</span>
            </p>
            <p>
              Quantity Available:{" "}
              <span className="font-normal">{quantity}</span>
            </p>
            <p>
              Price: <span className="font-normal">{price} TK</span>
            </p>
          </div>

          <div className="card-actions ">
            <Link
              to={`/explore/food-details/${_id}`}
              className="btn btn-ghost w-32 rounded-2xl bg-[#f7881f] border-none text-white shadow-xl hover:text-[#f7881f] hover:bg-white "
            >
              buy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
