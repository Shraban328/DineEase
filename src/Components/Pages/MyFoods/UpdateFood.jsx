import { useState } from "react";

const UpdateFood = ({ food }) => {
  const {
    _id,
    image,
    foodName,
    origin,
    price,
    quantity,
    category,
    description,
  } = food;

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Update
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <img src={image} alt="" className="w-3/4 mx-auto" />
          {/* form */}
          <div className="">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-lg">name</span>
              </label>
              <input
                type="text"
                defaultValue={foodName}
                className="input input-bordered "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-lg">image</span>
              </label>
              <input
                type="text"
                defaultValue={image}
                className="input input-bordered "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-lg">category</span>
              </label>
              <input
                type="text"
                defaultValue={category}
                className="input input-bordered "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-lg">origin</span>
              </label>
              <input
                type="text"
                defaultValue={origin}
                className="input input-bordered "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-lg">quantity</span>
              </label>
              <input
                type="text"
                defaultValue={quantity}
                className="input input-bordered "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-lg">price</span>
              </label>
              <input
                type="text"
                defaultValue={price}
                className="input input-bordered "
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text text-lg">description</span>
              </label>
              <input
                type="text"
                defaultValue={description}
                className="input input-bordered "
              />
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateFood;
