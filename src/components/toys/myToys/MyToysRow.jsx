import { Link } from 'react-router-dom';
const MyToysRow = ({ toys,handleDelete }) => {
    const { _id, sellerName, toyname, subCategory, price, quantity } = toys

    return (
        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-circle">
                    X
                </button>
            </th>
            <td>{sellerName}</td>
            <td>{toyname} </td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity} </td>
            <td><Link to={`/toy-details/${_id}`} className="btn btn-ghost btn-xs">View Details</Link></td>
            <td><Link to={`/update/${_id}`} className="btn btn-ghost btn-xs">Update</Link></td>
        </tr>
    );
};

export default MyToysRow;