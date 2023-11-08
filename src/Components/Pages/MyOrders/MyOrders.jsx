import Lottie from "lottie-react";
import useOrderedFoods from "../../../Hooks/useOrderedFoods";
import FoodRow from "../MyFoods/FoodRow";
import spinner from "../../../assets/spinner.json";
import { useEffect, useState } from "react";
import axiosInstance from "../../../api/axiosInstance";
import toast from "react-hot-toast";
const MyOrders = () => {
  const foods = useOrderedFoods();
  const [orderedfoods, setOrderedFoods] = useState([]);
  useEffect(() => {
    setOrderedFoods(foods);
  }, [foods]);
  const handleDelete = (_id) => {
    axiosInstance.delete(`/orders/${_id}`).then(() => {
      console.log("successfully deleted");
      const filteredFoods = orderedfoods.filter((food) => food._id !== _id);
      setOrderedFoods(filteredFoods);
      toast.success("Item Deleted");
    });
  };
  const titles = (
    <>
      <th>Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Order Date</th>
      <th>Update</th>
    </>
  );
  if (!foods) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Lottie className="w-1/6" animationData={spinner} />
      </div>
    );
  } else if (foods.length === 0) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-[#361e31] text-2xl font-bold">No orders</h1>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto font-lato">
      <table className="table">
        {/* head */}
        <thead>
          <tr>{titles}</tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {orderedfoods?.map((food) => (
            <FoodRow handleDelete={handleDelete} key={food._id} food={food} />
          ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>{titles}</tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MyOrders;
