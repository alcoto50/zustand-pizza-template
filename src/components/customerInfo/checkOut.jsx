import {useState} from 'react';
import userStore from '../state/store';



const CheckOut = ({ custInfo, pizzas, onSubmit, clearCart, navigateToPizzaPage}) => {
    const handleSubmit = (E) => {
        e.preventDefault();
        const order = {
            customer_name: '',
            street_address: '',
            city: '',
            state: '',
            orderType: '',
            pizzas: pizzas.map(pizza => ({id: pizza.id, quantity: pizza.quantity})),
            total: calculateTotal(pizzas),

        };
        onSubmit(order);

    };
    const calculateTotal = (pizzas) => {
        return pizzas.reduce((total, pizza) => total + pizza.price * pizza.quantity, 0);
    };

    return (
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <h3>Customer Information</h3>
          <p>Name: {custInfo.name}</p>
          <p>Street Address: {custInfo.streetAddress}</p>
          <p>City: {custInfo.city}</p>
          <p>State: {custInfo.state}</p>
          <h3>Order Summary</h3>
          <ul>
            {pizzas.map((pizza) => (
              <li key={pizza.id}>{pizza.name} - ${pizza.price} x {pizza.quantity}</li>
            ))}
          </ul>
          <h3>Total: ${calculateTotal(pizzas)}</h3>
          <button type="submit">Checkout</button>
        </form>
      );
    };
    
    export default CheckOut;

