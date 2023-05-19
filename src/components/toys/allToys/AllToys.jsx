import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
    const allToys = useLoaderData()
    console.log(allToys);
    return (
        <div>
            <div className="form-control p-5">
                <div className="input-group justify-center ">
                    <input type="text" placeholder="Search…" className="input input-bordered w-1/2" />
                    <button className="btn btn w-1/7">
                        Search Toys
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