import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";

const AddToys = () => {

    const { user } = useContext(AuthContext)


    const handleAddToys = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const sellerName = form.sellerName.value;
        const photoURL = form.photoURL.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const addToys = {
            toyname: name,
            email: email,
            sellerName: sellerName,
            photo: photoURL,
            price: price,
            subCategory: subCategory,
            quantity: quantity,
            rating: rating,
            description: description
        }
        console.log(addToys);

        fetch('http://localhost:5000/addtoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        `Thank You  ${user.displayName && user.displayName }`,
                        'Your Just Add Toys',
                        'success'
                    )
                }
            })
    }



    return (
        <div className="px-10 mb-5">
            <form onSubmit={handleAddToys}>
                <div className="flex mb-4 gap-5">
                    <div className="form-control w-1/2">
                        <label className="input-group input-group-vertical">
                            <span className="text-center">Toy Name</span>
                            <input type="text" name="name" placeholder="Toy Name" className="input  input-bordered focus:border-none "required />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="input-group input-group-vertical">
                            <span className="text-center">Email</span>
                            <input type="text" name="email" placeholder="" value={user?.email} className="input  input-bordered focus:border-none " />
                        </label>
                    </div>
                </div>
                <div className="flex mb-4 gap-5">
                    <div className="form-control w-1/2">
                        <label className="input-group input-group-vertical">
                            <span className="text-center">seller name</span>
                            <input type="text" name="sellerName" placeholder="" value={user?.displayName} className="input  input-bordered focus:border-none " />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="input-group input-group-vertical">
                            <span className="text-center">Photo URL</span>
                            <input type="text" name="photoURL" placeholder="" className="input  input-bordered focus:border-none" required />
                        </label>
                    </div>
                </div>
                <div className="flex mb-4 gap-5">
                    <div className="form-control w-1/2">
                        <label className="input-group input-group-vertical">
                            <span className="text-center">Sub-category </span>
                            <input type="text" name="subCategory" placeholder="" className="input  input-bordered focus:border-none "required />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="input-group input-group-vertical">
                            <span className="text-center">Price</span>
                            <input type="text" name="price" placeholder="" className="input  input-bordered focus:border-none " required/>
                        </label>
                    </div>
                </div>
                <div className="flex mb-4 gap-5">
                    <div className="form-control w-1/2">
                        <label className="input-group input-group-vertical">
                            <span className="text-center">Available quantity</span>
                            <input type="text" name="quantity" placeholder="" className="input  input-bordered focus:border-none " />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="input-group input-group-vertical">
                            <span className="text-center">Rating</span>
                            <input type="text" name="rating" placeholder="" className="input  input-bordered focus:border-none " />
                        </label>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="text-center">Detail description</span>
                            <input type="text" name="description" placeholder="" className="input  input-bordered focus:border-none " />
                        </label>
                    </div>

                </div>

                <input className="btn btn-active w-full" type="submit" value="Add Toys" />
            </form>
        </div>
    );
};

export default AddToys;