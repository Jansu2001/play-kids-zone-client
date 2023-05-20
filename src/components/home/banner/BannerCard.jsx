import { Link } from "react-router-dom";

const BannerCard = ({ card }) => {
    const{toy_name,picture,category,short_details}=card;

  return (
    <div className="card image-full">
      <figure>
        <img
          src={picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body  mb-0 my-auto">
        <h2 className="card-title  text-4xl font-bold text-sky-400">{toy_name}</h2>
        <p className="text-2xl lg:text-3xl font-semibold">{short_details}</p>
        <p className="text-3xl lg:text-5xl font-extrabold">{category}</p>
        
        <div className="card-actions justify-end mt-4">
          <Link className="btn btn">Show Category</Link>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
