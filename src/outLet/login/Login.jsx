import { Link, useLocation, useNavigate } from "react-router-dom";
// import logo from '../../assets/images/login/login.svg'
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import SocialLogin from "../socialLogin/SocialLogin";


const Login = () => {

    const { signInUser } = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // Firebase 
        signInUser(email, password)
            .then(result => {
                setError('')
                const signedUser = result.user;
                navigate(from, { replace: true })
                console.log(signedUser);
                setSuccess('user login successed')

            })
            .catch(error => {
                setSuccess('')
                setError(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="lg:hero-content lg:flex-row lg:w-4/5">
                {/* <div className="invisible lg:visible w-1/2">
                    <img src={logo} alt="" />

                </div> */}
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignIn}>
                        <div className="card-body">
                            <h1 className="text-4xl text-center font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <p className="text-success">
                                    {success}
                                </p>
                                <p className="text-red-500">
                                    {error}
                                </p>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <div className='text-center pt-3'>

                                <SocialLogin
                                setSuccess={setSuccess}
                                setError={setError}
                                ></SocialLogin>
                                <p className='pt-4'>New to Car Doctor? <Link className='text-orange-700' to='/register'>Register</Link> </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;