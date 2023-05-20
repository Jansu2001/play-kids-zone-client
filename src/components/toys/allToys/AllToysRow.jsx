import { Link } from "react-router-dom";

const AllToysRow = ({toys,index}) => {

    const {_id,sellerName, toyname,subCategory,quantity,price,}=toys
    return (
        
            <tr>
                <th>{index+1} </th>
                <th>{sellerName} </th>
                <td>{toyname}</td>
                <td>{subCategory} </td>
                <td>{price}</td>
                <td>{quantity} </td>
                <td><Link to={`/toy-details/${_id}`} className="btn btn-ghost btn-xs">details</Link></td>
            </tr>
    
    );
};

export default AllToysRow;