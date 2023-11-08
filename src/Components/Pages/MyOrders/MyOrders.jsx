import Lottie from "lottie-react";
import useOrderedFoods from "../../../Hooks/useOrderedFoods";
import FoodRow from "../MyFoods/FoodRow";
import spinner from "../../../assets/spinner.json";
const MyOrders = () => {
  const orderedFoods = useOrderedFoods();
  console.log(orderedFoods);

  const titles = (
    <>
      <th>Name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Order Date</th>
    </>
  );
  if (!orderedFoods) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Lottie className="w-1/6" animationData={spinner} />
      </div>
    );
  } else if (orderedFoods.length === 0) {
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
          {orderedFoods?.map((food) => (
            <FoodRow key={food._id} food={food} />
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
