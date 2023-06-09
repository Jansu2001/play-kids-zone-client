import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const URL = `https://play-kids-zone-server.vercel.app/addtoys?email=${user?.email}`;
  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [URL]);
  // console.log(myToys);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Delete This Toy!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://play-kids-zone-server.vercel.app/addtoys/${_id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = myToys.filter((booking) => booking._id !== _id);
              setMyToys(remaining);
            }
          });
      }
    });

  };

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
            {myToys.map((toys) => (
              <MyToysRow
                key={toys._id}
                toys={toys}
                handleDelete={handleDelete}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
