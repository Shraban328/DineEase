import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../api/axiosInstance";
import useAuth from "../../../utilities/useAuth";

const UpdateFood = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [food, setFood] = useState(null);
  useEffect(() => {
    axiosInstance.get(`/foods/food/${id}`).then((res) => setFood(res.data));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const image = form.image.value;
    const category = form.category.value;
    const origin = form.origin.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const description = form.description.value;
    // console.log(
    //   foodName,
    //   image,
    //   category,
    //   origin,
    //   quantity,
    //   price,
    //   description
    // );
    const updatedFoodInfo = {
      userName: user.displayName,
      userEmail: user.email,
      foodName,
      image,
      category,
      origin,
      quantity: parseInt(quantity),
      price: parseInt(price),
      description,
    };
    axiosInstance
      .put(`/foods/food/${id}`, updatedFoodInfo)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="h-screen font-lato">
      <div className="hero min-h-screen bg-[#EA9D42]">
        <div className="hero-content flex-col lg:flex-row w-full">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleUpdate} className="card-body space-y-4 ">
              <div className="flex items-center ml-20">
                <h1 className=" text-4xl font-bold text-[#361e31]">
                  {"> Update item"}
                </h1>
                <img
                  src="https://i.ibb.co/8M1fdNG/add-food-img-01.png"
                  alt=""
                  className="w-20"
                />
              </div>
              <div className="flex gap-3 pl-20 mb-4">
                <h2 className="font-semibold text-[#361e31]">
                  Name: <span className="font-normal">{user?.displayName}</span>
                </h2>
                <h2 className="font-semibold text-[#361e31]">
                  Email: <span className="font-normal">{user?.email}</span>
                </h2>
              </div>
              {/* food name and image link */}
              <div className="flex justify-around ">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-[#361e31] w-full">
                    Food Name
                  </h3>
                  <input
                    name="foodName"
                    type="text"
                    defaultValue={food?.foodName}
                    size={30}
                    className="input input-bordered border-[#361e31]  "
                  />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-[#361e31]">
                    Food Image Link
                  </h3>
                  <input
                    name="image"
                    type="text"
                    defaultValue={food?.image}
                    size={30}
                    className="input input-bordered border-[#361e31]  w-full"
                  />
                </div>
              </div>
              {/* category & origin */}
              <div className="flex justify-around ">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-[#361e31] ">Category</h3>
                  <input
                    name="category"
                    type="text"
                    defaultValue={food?.category}
                    size={30}
                    className="input input-bordered border-[#361e31]  "
                  />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-[#361e31]">Origin</h3>
                  <input
                    name="origin"
                    type="text"
                    defaultValue={food?.origin}
                    size={30}
                    className="input input-bordered border-[#361e31]  w-full"
                  />
                </div>
              </div>
              {/* quantity & price */}
              <div className="flex justify-around">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-[#361e31]">
                    Available <br />
                    Quantity
                  </h3>
                  <input
                    name="quantity"
                    type="text"
                    defaultValue={food?.quantity}
                    size={30}
                    className="input input-bordered border-[#361e31]  "
                  />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-[#361e31]">price</h3>
                  <input
                    name="price"
                    type="text"
                    defaultValue={food?.price}
                    size={30}
                    className="input input-bordered border-[#361e31]  w-full"
                  />
                </div>
              </div>

              <div className="text-center">
                <textarea
                  name="description"
                  className="textarea textarea-bordered w-3/4"
                  defaultValue={food?.description}
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary rounded-full bg-[#f7881f] border-none text-white shadow-xl hover:text-[#f7881f] hover:bg-white ">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateFood;
