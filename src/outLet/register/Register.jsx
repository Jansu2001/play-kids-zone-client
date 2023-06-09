import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

import { updateProfile } from "firebase/auth";
// import SocialLogin from "../socialLogin/SocialLogin";

const Register = () => {
  const { createUser, signOutUser } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // Firebase Start
    if (password.length < 6) {
      setSuccess("");
      setError("password shoud be 6 characters");
      return;
    }
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        form.reset();
        setError("");
        const createdUser = result.user;
        setSuccess("user Success Fully Created");
        console.log(createdUser);
        signOutUser();
        updatedProfile(createdUser, name, photo);
      })
      .catch((error) => {
        setSuccess("");
        setError(error.message);
      });

    const updatedProfile = (createdUser, name, photo) => {
      updateProfile(createdUser, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
        })
        .catch((error) => {
          setError(error.message);
        });
    };
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="lg:hero-content flex-col lg:flex-row lg:w-4/5">
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister}>
            <div className="card-body">
              <h1 className="text-4xl text-center font-bold">Register Play Kids!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p className="text-success">{success}</p>
              <p className="text-red-500">{error}</p>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
              <div className="text-center pt-3">
                {/* <SocialLogin></SocialLogin> */}
                <p className="pt-4">
                  Have an Account?
                  <Link className="text-orange-700" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
