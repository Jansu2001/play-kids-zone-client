import { Link } from "react-router-dom";

const TabCard = ({ toy }) => {
  const {  picture, name, price, rating } = toy;
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="h-96 w-96" src={picture} alt="Album" />
      </figure>
      <div className="card-body">
        <div className="text-start">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price} </p>
          <p>Rating: {rating} </p>
        </div>
        <div className="card-actions justify-end my-auto ">
          <Link className="btn btn-primary w-full">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
