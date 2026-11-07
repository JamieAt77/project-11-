import React, { useEffect, useState } from 'react';
import { fetchItems } from './services/api';
import ItemList from './components/ItemList';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchAndSetItems = async () => {
      try {
        const itemsData = await fetchItems();
        setItems(itemsData.items);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };

    fetchAndSetItems();
  }, []);

  return (
    <div className="App">
      <h1>Item List</h1>
      <ItemList items={items} />
    </div>
  );
};

export default App;
