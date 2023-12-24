import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setFriends(data));
    }, [])
    return (
        <div>
            <h2>Hello Friends. How are you</h2>
            <p><small>Parle kichu taka dhar dis..: {friends.length}</small></p>
            {
                friends.map(friend => <Product key={friend.id} friend={friend}></Product>)
            }
        </div>
    );
};

export default Products;