const BannerCard = ({ card }) => {
    const{toy_name,picture,category,short_details}=card;

  return (
    <div className="card   image-full">
      <figure>
        <img
          src={picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body mb-0 my-auto">
        <h2 className="card-title text-4xl font-bold text-pink-400">{toy_name}</h2>
        <p>{short_details}</p>
        <p>{category}</p>
        
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
