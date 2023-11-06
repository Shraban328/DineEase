import useAuth from "../../../utilities/useAuth";

const AddFood = () => {
  const { user } = useAuth();
  return (
    <div className="h-screen font-lato">
      <div className="hero min-h-screen bg-[#EA9D42]">
        <div className="hero-content flex-col lg:flex-row w-full">
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
            <form className="card-body space-y-4 ">
              <div className="flex items-center ml-20">
                <h1 className=" text-4xl font-bold text-[#361e31]">
                  {"> Add new food item"}
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
                    type="text"
                    placeholder="name"
                    size={30}
                    className="input input-bordered border-[#361e31]  "
                  />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-[#361e31]">
                    Food Image Link
                  </h3>
                  <input
                    type="text"
                    placeholder="image link"
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
                    type="text"
                    placeholder="category"
                    size={30}
                    className="input input-bordered border-[#361e31]  "
                  />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-[#361e31]">Origin</h3>
                  <input
                    type="text"
                    placeholder="example: sweden"
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
                    type="text"
                    placeholder="quantity"
                    size={30}
                    className="input input-bordered border-[#361e31]  "
                  />
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-[#361e31]">price</h3>
                  <input
                    type="text"
                    placeholder="$price"
                    size={30}
                    className="input input-bordered border-[#361e31]  w-full"
                  />
                </div>
              </div>

              <div className="text-center">
                <textarea
                  className="textarea textarea-bordered w-3/4"
                  placeholder="description"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary rounded-full bg-[#f7881f] border-none text-white shadow-xl hover:text-[#f7881f] hover:bg-white ">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
