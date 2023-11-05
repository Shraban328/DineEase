import Lottie from "lottie-react";
import bannerImage from "../../../assets/loginLottie.json";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../utilities/useAuth";
const Login = () => {
  const { userLogin } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    userLogin(email, password)
      .then((userCredential) => {
        console.log({ fromLogin: userCredential.user });
        navigate("/");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero min-h-[86vh] bg-[#FFF2DE] font-lato">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-1/2">
          <Lottie loop={1} animationData={bannerImage} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mr-10 ">
          <h1 className="text-5xl font-extrabold text-[#361e31]  text-center mt-5">
            login
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#361e31] font-semibold">
                  Email
                </span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#361e31] font-semibold">
                  Password
                </span>
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-[#361e31] font-semibold"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div>
              <p className="text-[#361e31] font-semibold">
                new here? go to{" "}
                <Link to={"/signup"} className="text-sky-500">
                  register
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary rounded-full bg-[#f7881f] border-none text-white shadow-xl hover:text-[#f7881f] hover:bg-white ">
                Login
              </button>
            </div>
          </form>
          {/* google and facebook auth */}
          <div className="mx-8">
            <h3 className="mb-3 text-[#361e31] font-semibold">
              or sign up with
            </h3>
            <div className="text-center p-4">
              <div className="text-lg flex gap-4 items-center font-semibold bg-sky-500 text-white hover:cursor-pointer rounded-sm mb-2">
                <div className="bg-white border rounded-l-sm">
                  <FcGoogle className="text-5xl" />
                </div>
                <span className="font-lato">Sign in with Google</span>
              </div>
              <div className="text-lg flex gap-4 items-center font-semibold bg-[#1e81b0] text-white hover:cursor-pointer rounded-sm">
                <div className="bg-white border rounded-l-sm">
                  <FaFacebookSquare className="text-5xl text-[#3b5998]" />
                </div>
                <span className="font-lato">Sign in with Facebook</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
