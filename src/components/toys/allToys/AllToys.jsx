
import AllToysRow from "./AllToysRow";
import { useEffect, useState } from "react";

const AllToys = () => {
    const [search, setSearch] = useState("");
  const [getToys, setGetToys] = useState([]);

  
  useEffect(()=>{
      fetch("https://play-kids-zone-server-jansu2001.vercel.app/addtoys")
      .then(res=>res.json())
      .then(data=>setGetToys(data))
  },[])



  const handleSearch = () => {
    fetch(`https://play-kids-zone-server-jansu2001.vercel.app/searchtoys/${search}`)
      .then((res) => res.json())
      .then((data) => setGetToys(data));
  };

  console.log(search);

  return (
    <div>
      <div className="form-control p-5">
        <div className="input-group justify-center ">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search…"
            className="input input-bordered w-1/2"
          />
          <button onClick={handleSearch} className="btn btn w-1/7">
            Search Toys
          </button>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th className="font-extrabold">Index</th>
              <th className="font-extrabold">Seller</th>
              <th className="font-extrabold">Toy Name</th>
              <th className="font-extrabold">Sub-category</th>
              <th className="font-extrabold">Price</th>
              <th className="font-extrabold">Available Quantity</th>
              <th className="font-extrabold">View Details </th>
            </tr>
          </thead>
          <tbody>
            {getToys.map((toys,index) => (
              <AllToysRow key={toys._id} index={index} toys={toys}></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
