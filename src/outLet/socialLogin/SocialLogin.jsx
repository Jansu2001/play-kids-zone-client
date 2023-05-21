import { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProviders';
import { useLocation, useNavigate } from 'react-router-dom';



const SocialLogin = ({ setSuccess, setError }) => {

    const { loginWithGoogle, loginWithGitHub } = useContext(AuthContext)


    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleGoogle = () => {
        loginWithGoogle()
            .then(result => {
                setError('')
                setSuccess('User SuccessFully Login with Google')
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setSuccess('')
                setError(error.message)
                console.log(error.message);
            })
    }
    const handleGitHub = () => {
        loginWithGitHub()
            .then(result => {
                setError('')
                setSuccess('User SuccessFully Login with Google')
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setSuccess('')
                setError(error.message)
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className="divider">OR SIGN IN WITH</div>
            <button title="Facebook" className="btn btn-circle ml-4">
                <FaFacebook></FaFacebook>

            </button>
            <button onClick={handleGoogle} title="Google" className="btn btn-circle ml-4 ">
                <FaGoogle></FaGoogle>

            </button>
            <button onClick={handleGitHub} title="Github" className="btn btn-circle ml-4 ">
                <FaGithub></FaGithub>

            </button>
        </div>
    );
};

export default SocialLogin;