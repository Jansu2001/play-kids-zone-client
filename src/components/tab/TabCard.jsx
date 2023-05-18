import { TabPanel } from "react-tabs";

const TabCard = ({ toy }) => {
  const { _id,picture, name, price, rating } = toy;
  return (
    <div>
      <div className="flex justify-around">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={picture}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Toy Name: {name}</h2>
            <h2 className="card-title">Price: ${price}</h2>
            <h2 className="card-title">Rating: {rating}</h2>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      </div>
      <TabPanel></TabPanel>
    </div>
  );
};

export default TabCard;
