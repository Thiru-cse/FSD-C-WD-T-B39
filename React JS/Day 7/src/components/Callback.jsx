import React, { useCallback, useMemo, useState } from 'react'

function Callback() {
    console.log("Callback Component");
    const [count, setCount] = useState(0);
    const [items, setItems] = useState(["Electronics", "Fancy", "Clothes", "Grocery", "Kids"]);
    const [searchItem, setSearchItem] = useState('');

    const filterItems = useMemo(() => {
        console.log("Filter");
        return items.filter(item => item.toLowerCase().includes(searchItem.toLowerCase()))
    }, [items, searchItem])

    const handleChange = useCallback((e) => {
        setSearchItem(e.target.value)
        console.log("Search Items");
    },[])
    
  return (
    <div>
      <input
        type="text"
        name="searchitems"
        onChange={handleChange}
        placeholder="Search"
      />

          <ul>{filterItems.map((item, index) => (
              <li key={index}>{item}</li>
      ))}</ul>

      <button
        onClick={() => {
          setCount((val) => val + 1);
        }}
      >
        Count
      </button>
    </div>
  );
}

export default Callback