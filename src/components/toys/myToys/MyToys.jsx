import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])


    const URL = (`http://localhost:5000/addtoys?email=${user?.email}`)
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setMyToys(data))

    }, [URL])
    // console.log(myToys);

    const handleDelete = (_id) => {

        const proceed = confirm('are you sure you want to delete ')

        if (proceed) {
            fetch(`http://localhost:5000/addtoys/${_id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        const remaining = myToys.filter(booking => booking._id !== _id)
                        setMyToys(remaining)
                    }

                })
        }
    }



    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="font-extrabold">Cancle</th>
                            <th className="font-extrabold">Seller</th>
                            <th className="font-extrabold">Toy Name</th>
                            <th className="font-extrabold">Sub-category</th>
                            <th className="font-extrabold">Price</th>
                            <th className="font-extrabold">Available Quantity</th>
                            <th className="font-extrabold">View Details </th>
                            <th className="font-extrabold">Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        {myToys.map(toys => <MyToysRow
                            key={toys._id}
                            toys={toys}
                            handleDelete={handleDelete}
                        ></MyToysRow>)}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;