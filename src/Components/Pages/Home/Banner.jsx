import Lottie from "lottie-react";
import bannerImg from "../../../assets/banner_lottie.json";
import { AiOutlineRightCircle } from "react-icons/ai";
const Banner = () => {
  return (
    <div className="hero min-h-screen bg-[#FFF2DE] font-lato text-[#361e31]">
      <div className="flex flex-col-reverse md:flex-row hero-content text-center">
        <div className="max-w-md text-left">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold">
            There is no sincerer love than the love of food
          </h1>
          <p className="py-6 text-lg">
            Discover a world of flavor at DineEase, where every dish is a
            masterpiece waiting to be savored. With a commitment to quality,
            innovation, and impeccable service, we invite you to taste the
            difference that defines our brand
          </p>
          <div className="flex gap-4 ">
            <button className="btn btn-primary xl:btn-lg rounded-full bg-[#f7881f] border-none text-white shadow-xl hover:text-[#f7881f] hover:bg-white ">
              Order Now
              <AiOutlineRightCircle className="text-5xl" />
            </button>
            <button className="btn btn-primary xl:btn-lg rounded-full bg-white text-[#361e31] shadow-xl border-none hover:text-white hover:bg-[#361e31]">
              Contact
              <AiOutlineRightCircle className="text-5xl" />
            </button>
          </div>
        </div>
        <div>
          <Lottie animationData={bannerImg} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
