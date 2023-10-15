import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        const user = {
          email,
          lastLoggedAt: result.user?.metadata?.lastSignInTime,
        };
        fetch(
          "https://coffee-auth-server-fxyvf8jg3-arafat-ibn-abdullahs-projects.vercel.app/user",
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((err) => console.log(err.massage));
  };

  return (
    <div className="bg-[#f3f3f3] min-h-screen ">
      <div className="py-20">
        <div className="max-w-[500px] mx-auto bg-white py-16  px-10 ">
          <h1 className="text-3xl font-bold text-center mb-8">
            Login your account
          </h1>
          <hr className="h-[2px] bg-gray-100 w-full mb-8" />
          <form onSubmit={handleSignIn}>
            <label className="label">
              <span className="label-text text-xl text-[#403F3F] font-semibold">
                Email address
              </span>
            </label>
            <input
              className="bg-[#f3f3f3] w-full pl-5 py-3 rounded-md mb-6"
              type="email"
              name="email"
              id=""
              placeholder="Enter your email address"
            />
            <br />
            <label className="label">
              <span className="label-text text-xl text-[#403F3 font-semibold">
                Password
              </span>
            </label>
            <input
              className="bg-[#f3f3f3] w-full pl-5 py-3 mb-6 rounded-md"
              type="password"
              name="password"
              id=""
              placeholder="Enter your password"
            />
            <br />

            <button className="bg-[#403F3F] mb-6 rounded-md w-full flex justify-center items-center text-white font-medium py-2 ">
              Update
            </button>

            <p className="text-[#706F6F]  font-medium text-center ">
              Dont’t Have An Account ?{" "}
              <Link to={"/signup"}>
                <span className="text-[#f9645b] font-medium">Sign Up</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
