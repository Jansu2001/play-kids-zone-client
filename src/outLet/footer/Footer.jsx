// import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import logo from '../../assets/icons/FavIcon.png'


const Footer = () => {
    return (
        <div className='bg-neutral'>

            <footer className="footer justify-center items-center gird grid-cols-2 lg:grid-cols-4 px-10  p-5  text-neutral-content">
                <div>
                    <img className='h-28 lg:pl-10 ' src={logo} alt="" />
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer footer-center pb-4  text-neutral-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;