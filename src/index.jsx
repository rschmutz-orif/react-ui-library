import React, { useState } from 'react';
 
const Counter = () => {
  const [count, setCount] = useState(0);
 
  return (
    <div className="w-full h-12">
      <p>Currently, the count is {count}</p>
      <button className="p-2 m-2 bg-red-200 hover:cursor-pointer" onClick={() => setCount(count - 1)}>Subtract</button>
      <button className="p-2 m-2 bg-green-200 hover:cursor-pointer" onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};
 
export { Counter };