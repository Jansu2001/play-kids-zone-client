
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
const UpdateToys = () => {

    const loadedToys = useLoaderData()
    const { _id, price, quantity } = loadedToys;

    console.log(_id);

    const handleUpdate = (event) => {
        event.preventDefault()
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const updatedInfo = {
            price,
            quantity,
            description
        }
        // console.log(updatedInfo);

        fetch(`http://localhost:5000/addtoys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount> 0) {
                    Swal.fire(
                        `Thank You `,
                        'Your Just Add Toys',
                        'success'
                    )
                }

            })

    }

    return (
        <div className='mb-5'>
            <h3>Use: {_id}</h3>
            <form onSubmit={handleUpdate}>
                <div className="flex mb-4 gap-5">
                    <div className="form-control w-1/2">
                        <label className="input-group input-group-vertical">
                            <span className="text-center">Price</span>
                            <input type="text" name="price" defaultValue={price} className="input  input-bordered focus:border-none " />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="input-group input-group-vertical">
                            <span className="text-center">Available quantity</span>
                            <input type="text" name="quantity" defaultValue={quantity} className="input  input-bordered focus:border-none " />
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
                <input className="btn btn-active w-full" type="submit" value="Update Toys" />
            </form>

        </div>
    );
};

export default UpdateToys;