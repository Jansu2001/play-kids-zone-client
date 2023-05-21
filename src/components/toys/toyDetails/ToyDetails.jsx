import { FaRegStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const {
    photo,
    sellerName,
    quantity,
    toyname,
    email,
    price,
    rating,
    description,
  } = useLoaderData();
  return (
    <div className="mb-5 bg-gray-300 shadow-xl">
      <div className="card lg:card-side gap-4 p-2 rounded">
        <div className="w-1/2 ">
          <figure>
            <img className="h-[500px] rounded-lg" src={photo} alt="Album" />
          </figure>
        </div>
        {/* ( picture, toy name, seller name, seller email, price, rating, available quantity, and detail description) */}
        <div className=" w-1/2 my-auto p-4 space-y-4">
          <div className="bg bg-sky-200 text-start  rounded p-4 text-2xl">
            <div className="font-extrabold">
              <h2 className=" "> {toyname}</h2>
            </div>
            <div className="font-semibold rounded-lg">
              <p>Quantity: {quantity}</p>
              <p>Toy Price: {price}</p>
              <div className="flex items-center gap-2">
                Rating: <FaRegStar></FaRegStar> <FaRegStar></FaRegStar>{" "}
                <FaRegStar></FaRegStar> <FaRegStar></FaRegStar> {rating}
              </div>
            </div>
          </div>
          <div className="bg bg-indigo-400 p-4 rounded-lg">
            <p className="font-semibold text-2xl text-white">
              SellerName: {sellerName}
            </p>
            <p className="font-semibold text-2xl text-white">Email: {email}</p>
          </div>
          <div className=" bg bg-cyan-500 py-5 font-semibold rounded-lg">
            <h3 className="p-4">{description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
