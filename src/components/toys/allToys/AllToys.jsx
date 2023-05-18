import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
    const allToys = useLoaderData()
    console.log(allToys);
    return (
        <div>
            <div className="form-control mb-5">
                <div className="input-group">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="font-extrabold">Seller</th>
                            <th className="font-extrabold">Toy Name</th>
                            <th className="font-extrabold">Sub-category</th>
                            <th className="font-extrabold">Price</th>
                            <th className="font-extrabold">Available Quantity</th>
                            <th className="font-extrabold">View Details </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(toys=><AllToysRow 
                                key={toys._id}
                                toys={toys}
                                ></AllToysRow>)
                        }
                        
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;