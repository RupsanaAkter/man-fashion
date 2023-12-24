import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
    const { title, category, id } = props.friend;

    const navigate = useNavigate();

    const showFriendDetail = () => {
        navigate('/friend/' + id);
    }
    return (
        <div>
            <h2>Name: {title}</h2>
            {/* <Link to={'/friend/'+ id}>show Detail</Link> */}
            <button onClick={showFriendDetail}>{category} id:{id}</button>
        </div>
    );
};

export default Product;