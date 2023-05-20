const ProductCard = ({ card }) => {
  const { picture, name, rating, price, date, category } = card;
  return (
    <div>
      <div className="card rounded-none glass">
        <figure>
          <img className="h-96 w-full"
            src={picture}
            alt="car!"
          />
        </figure>
        <div className="card-body text-center mx-auto">
            <p>Category: {category}</p>
          <h2 className="card-title">{name}</h2>
          <p>Rating: {rating}</p>
          <p>$ {price}</p>
          <button className="btn btn ">Add To Card</button>
          <p>Date: {date}</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
