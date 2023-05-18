import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const {
    _id,
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
    <div className="mb-5 bg-base-100 shadow-xl">
      <h1>Details id of: {_id}</h1>
      <div className="card lg:card-side p-2 rounded">
        <div className="w-1/2 ">
          <figure>
            <img className="h-[500px] rounded-lg" src={photo} alt="Album" />
          </figure>
        </div>
        {/* ( picture, toy name, seller name, seller email, price, rating, available quantity, and detail description) */}
        <div className="card-body w-1/2">
          <div className="flex justify-around">
            <div className="font-semibold">
              <h2 className="card-title">Name: {toyname}</h2>
              <p>SellerName: {sellerName}</p>
              <p>Email: {email}</p>
            </div>
            <div className="font-semibold">
              <p>Quantity: {quantity}</p>
              <p>Toy Price: {price}</p>
              <p>Rating: {rating}</p>
            </div>
          </div>
          <h3 className="p-4">
           {description}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
