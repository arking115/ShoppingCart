import { useState } from 'react'
import './App.css'
import { produce, pantryItems} from "./Hooks/storeItems"
import HandleItems from './Hooks/manageList';

function App() {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart((prev) => {
            return [
                ...prev,
                item
            ]
        })
    };

    const removeItem = (itemIndex) => {
        setCart((prev) => {
            return prev.filter((item, i) => itemIndex !== i)
        })
    };

    return (
        <div>
          <h1>Grocery Cart</h1>
          <ul>
            {cart.map((item, index) => (
              <li onClick={() => removeItem(index)} key={index}>
                {item}
              </li>
            ))}
          </ul>
        <h2>Produce</h2>
        <HandleItems items={produce} onItemClick={addItem} />
        <h2>Pantry Items</h2>
        <HandleItems items={pantryItems} onItemClick={addItem} />
        </div>
      );
}

export default App
