import UpdateFood from "./UpdateFood";
import PropTypes from "prop-types";
const FoodRow = ({ food }) => {
  const { image, foodName, origin, price, quantity, buyingDate } = food;
  const myFood = food;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3 font-lato">
          <div className="avatar">
            <div className="mask mask-squircle w-28">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold text-lg">{foodName}</div>
            <div className="text-sm opacity-50">{origin}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-lg">{price} TK</span>
      </td>
      <td>{quantity}</td>
      {buyingDate ? (
        <th>{buyingDate}</th>
      ) : (
        <th>
          <UpdateFood food={myFood} />
        </th>
      )}
    </tr>
  );
};

export default FoodRow;

FoodRow.propTypes = {
  food: PropTypes.object,
};
