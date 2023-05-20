import { Link } from "react-router-dom";

const TabCard = ({ toy }) => {
  // const {  photo, toyname, price, rating } = toy;
  // const toyCate = toys;
  console.log(toy._id);
  return (
    <div className="card w-96 h-[450px] bg-base-100 shadow-xl  relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
      <figure>
        <img className="w-full  max-w-xs transition duration-300 ease-in-out hover:scale-110" src={toy?.photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="text-start">
          <h2 className="card-title">
            {toy.toyname}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p>Price: ${toy.price}</p>
          <p>Rating: {toy.rating}</p>
        </div>
        <div className="card-actions bg bg-indigo-500 justify-end">
          <Link to={`/toy-details/${toy._id}`} className="btn p-0 w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
