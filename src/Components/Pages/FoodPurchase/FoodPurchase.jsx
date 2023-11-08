import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance";
import { useEffect, useState } from "react";
import useAuth from "../../../utilities/useAuth";
import toast from "react-hot-toast";

const FoodPurchase = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setFood] = useState([]);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const buyingDate = Date().slice(0, 15);
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

  const handleConfirmOrder = () => {
    const orderInfo = {
      customerName: user.displayName,
      customerEmail: user.email,
      foodName,
      price,
      quantity: orderQuantity,
      buyingDate,
    };
    if (orderQuantity <= quantity) {
      axiosInstance.post("/orders", orderInfo).then((res) => {
        console.log(res.data);
        toast.success("Order Confirmed");
      });
      axiosInstance
        .put(`/foods/${_id}`, {
          updatedQuantity: quantity - orderQuantity,
        })
        .then(() => navigate("/"));
    } else {
      toast.error("not available");
    }
  };
  return (
    <div
      className={`hero min-h-[50vh] w-screen font-lato text-[#361e31] font-lato `}
    >
      <div className="flex">
        <div className="hero-content min-w-max  flex-col lg:flex-col bg-[#FFF2DE] border-8 border-[#4a3445] ">
          <div className=" font-bold text-xl ">
            <h1>Order Details:</h1>
            <div className="mb-5 border-b-2 border-[#4a3445]">
              <h1 className="text-base">customer info: </h1>
              <h2 className="font-normal text-[15px]">
                Name: {user?.displayName} / Email: {user?.email}
              </h2>
              <h2 className="font-normal text-[15px]">Date: {buyingDate}</h2>
            </div>
            <h2 className="text-xl font-bold">{foodName}</h2>
            <div>
              <p className="font-bold text-[15px]">
                Quantity Available:{" "}
                <span className="font-normal">{quantity}</span>
              </p>
              <input
                onChange={(e) => setOrderQuantity(parseInt(e.target.value))}
                type="text"
                placeholder="quantity"
                className="input input-bordered w-1/2 max-w-xs"
              />

              <p className="text-base">
                Price: <span className="font-normal text-base">{price} TK</span>
              </p>
            </div>

            <div className="card-actions ">
              <Link
                onClick={handleConfirmOrder}
                className="btn btn-ghost w-32 rounded-2xl bg-[#f7881f] border-none text-white shadow-xl hover:text-[#f7881f] hover:bg-white "
              >
                Confirm Order
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img src={image} alt="photo" />
        </div>
      </div>
    </div>
  );
};

export default FoodPurchase;
