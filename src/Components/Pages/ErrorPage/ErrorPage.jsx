import Lottie from "lottie-react";
import error from "../../../assets/error_page.json";

const ErrorPage = () => {
  return (
    <div className="h-screen max-w-screen-2xl mx-auto flex items-center justify-center">
      <Lottie className="w-[50vh]" animationData={error}></Lottie>
    </div>
  );
};

export default ErrorPage;
