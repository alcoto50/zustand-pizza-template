import React from 'react';
import './custInfo.css';
import { useStore } from './store';
import { Link } from 'react-router-dom';
import wireframe from './wireframe.png';

const custInfo = () => {
    const [customerInfo, setCustomerInfo] = useStore({
        customer_name: '',
        street_address:'',
        city: '',
        zip: '',
        type: 'pickup',
    });
    
    const [total, setTotal] = useStore(0);

    const handleChange = (e) => {
        setCustomerInfo({
            ...customerInfo,
            [e.target.name]: e.target.value
        });

        const handleSubmit = () => {
            //navigate to checkout
        };

        return (
            <div>
                <h1>Enter Your Information </h1>
                <input name='customer_name' onChange={handleChange} placeHolder='name'/>
                <input name='street_address' onChange={handleChange} placeHolder='address'/>
                <input name='city' onChange={handleChange} placeHolder='city'/>
                <input name='zip' onChange={handleChange} placeHolder='zip'/>
                <select name='type' onChange={handleChange}>
                    <option value='pickup'>Pickup</option>
                    <option value='delivery'>Delivery</option>
            </select>
            <div> Total: ${total.toFixed(2)}</div>
        <button onClick={handleSubmit}>Checkout</button>
        </div>
        );
    }
}
export default custInfo;
