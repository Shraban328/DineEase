import bannerImage from "../../../assets/loginLottie.json";
import Lottie from "lottie-react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import useAuth from "../../../utilities/useAuth";
import { updateProfile } from "firebase/auth";
import auth from "../../../Config/firebase.config";
import { useState } from "react";
const SignUp = () => {
  const { userSignUp } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.userName.value;
    const profileImage = form.profileImage.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(userName, profileImage, email, password);

    setErrorMessage("");
    if (password.length < 6) {
      setErrorMessage("Password Must be at least 6 characters long");
      return;
    } else if (!/(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{6,}/.test(password)) {
      setErrorMessage(
        "Password must include an uppercase letter and a special character "
      );
      return;
    }

    userSignUp(email, password)
      .then((userCredential) => {
        console.log({ fromSignUp: userCredential.user });
        updateProfile(auth.currentUser, {
          displayName: userName,
          photoURL: profileImage,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setErrorMessage("email already in use");
        }
      });
  };
  return (
    <div className="hero min-h-[86vh] bg-[#FFF2DE] font-lato">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-1/2">
          <Lottie loop={1} animationData={bannerImage} />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mr-10 ">
          <h1 className="text-5xl font-extrabold text-[#361e31]  text-center mt-5">
            Signup
          </h1>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#361e31] font-semibold">
                  Username
                </span>
              </label>
              <input
                name="userName"
                type="text"
                placeholder="username"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#361e31] font-semibold">
                  Profile image
                </span>
              </label>
              <input
                name="profileImage"
                type="text"
                placeholder="image link"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#361e31] font-semibold">
                  Email
                </span>
              </label>
              <input
                name="email"
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
                name="password"
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
              <div>
                <span className="font-semibold text-rose-700">
                  {errorMessage}
                </span>
              </div>
            </div>
            <div>
              <p className="text-[#361e31] font-semibold">
                Already have an account? go to{" "}
                <Link to={"/login"} className="text-sky-500">
                  login
                </Link>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary rounded-full bg-[#f7881f] border-none text-white shadow-xl hover:text-[#f7881f] hover:bg-white ">
                Signup
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

export default SignUp;
