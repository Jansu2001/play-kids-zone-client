import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ card }) => {
  const { picture, name, rating, price, date, category } = card;
  return (
    <div>
      {/* <div className=" card  h-[500px] "> */}
      <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat card  h-[500px] ">
        <figure >
          <img className="w-full max-w-xs transition duration-300 ease-in-out hover:scale-110"
            src={picture}
            alt="car!"
          />
        </figure>
        <div className="card-body text-center mx-auto">
            <p>Category: {category}</p>
          <h2 className="card-title">{name}</h2>
          <p>Rating: {rating}</p>
          <p>$ {price}</p>
          <div className="flex bg bg-indigo-400 rounded-lg justify-center px-3 items-center gap-2 mx-auto">
            <FaShoppingCart></FaShoppingCart>
          <button className=" text-center  text-white ">Add To Card</button>
          </div>
          <p>Date: {date}</p>
          
        </div>
      </div>
      
    </div>
  );
};

export default ProductCard;
