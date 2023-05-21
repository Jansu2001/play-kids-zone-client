
import { Link } from "react-router-dom";
const TabCard = ({ toy }) => {
  return (
    <div className="card w-96 h-[340px] bg-base-100  shadow-xl  relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
      <figure>
        <img
          className="w-full h-96 max-w-xs transition duration-300 ease-in-out hover:scale-110"
          src={toy?.photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body relative ">
        <div className="text-start  absolute bottom-20   w-full text-white">
          <h2 className="card-title text-3xl font-extrabold">
            {toy.toyname}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p className="text-2xl">Price: ${toy.price}</p>
          <p className="text-2xl">Rating: {toy.rating}</p>
        </div>
        <div className="card-actions absolute  bottom-0 left-0 w-full bg bg-indigo-500 justify-end">
          <Link to={`/toy-details/${toy._id}`} className="btn w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
