import { Link } from "react-router-dom";

const TabCard = ({ toy }) => {
  const {  picture, name, price, rating } = toy;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure className="lg:w-1/2 ">
        <img className="w-96 " src={picture} alt="Album" />
      </figure>
      <div className="card-body relative lg:w-1/2">
        <div className="text-start mb-5 lg:my-auto">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p className=" font-bold">Price: ${price} </p>
          <p className=" font-bold">Rating: {rating} </p>
        </div>
        <div className="card-actions absolute w-full left-0 bottom-0 justify-end my-auto ">
          <Link to={`/toy-details/:`} className="btn btn-primary w-full">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
