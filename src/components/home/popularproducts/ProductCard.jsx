const ProductCard = ({ card }) => {
  const { id, picture, name, rating, price, date, category } = card;
  return (
    <div>
      <div className="card  glass">
        <figure>
          <img className="h-96 w-full"
            src={picture}
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
