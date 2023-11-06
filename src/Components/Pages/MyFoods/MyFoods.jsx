import spinner from "../../../assets/spinner.json";
import Lottie from "lottie-react";
import useAuth from "../../../utilities/useAuth";
import useMyFoods from "../../../Hooks/useMyFoods";
import FoodRow from "./FoodRow";
const MyFoods = () => {
  const { loading } = useAuth();
  const myFoods = useMyFoods();
  const titles = (
    <>
      <th>Name</th>
      <th>Price</th>
      <th>quantity</th>
      <th>Update</th>
    </>
  );
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Lottie className="w-1/6" animationData={spinner} />
      </div>
    );
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>{titles}</tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {myFoods.map((food) => (
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

export default MyFoods;
