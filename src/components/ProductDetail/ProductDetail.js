import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `https://fakestoreapi.com/products/${friendId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [])
    return (
        <div>
            <h2>This is Detail about Dosto: {friendId} </h2>
            <img height={200} width={200} src={friend.image} alt="" />
            <h3>Category:{friend.title}</h3>
            <h4>{friend.description}</h4>
            <h1>Price{friend.price}</h1>
        </div>
    );
};

export default ProductDetail;