import './App.css';
import useStore from '../../zustand/store';


function App() {
  const addPizzaToCart = (pizza) => {
    useStore.getState().addToCart(pizza);
  };

  const total = useStore((state) => state.total);
  const updateCustomer = useStore((state) => state.updateCustomer);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Prime Pizza</h1>
      </header>

      <img src="images/pizza_photo.png" alt="Delicious pizza" />
      <p>Pizza -is- great.</p>

      <h3>Total: ${total.toFixed(2)}</h3>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) => updateCustomer('name', e.target.value)}
      />
    </div>
  );
}

export default App;
