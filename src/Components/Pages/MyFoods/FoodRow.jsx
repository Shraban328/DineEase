import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const FoodRow = ({ food, handleDelete }) => {
  const { _id, image, foodName, origin, price, quantity, buyingDate } = food;

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
        <td>{buyingDate}</td>
      ) : (
        <td>
          <Link to={`/update-food/${_id}`} className="btn btn-ghost">
            Update
          </Link>
        </td>
      )}
      {buyingDate && (
        <button onClick={() => handleDelete(_id)} className="btn btn-ghost">
          Delete
        </button>
      )}
    </tr>
  );
};

export default FoodRow;

FoodRow.propTypes = {
  food: PropTypes.object,
  handleDelete: PropTypes.func,
};
