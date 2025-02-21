import React, { useState } from "react";

function ChildComponent({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="p-4 border rounded-lg shadow-md m-2 bg-gray-100">
      <p className="text-lg">Лічильник: {count}</p>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={() => setCount(count + 1)}
      >
        Збільшити
      </button>
    </div>
  );
}

export default function ParentComponent() {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold">Батьківський компонент</h1>
      <div className="flex gap-4 mt-4">
        <ChildComponent initialCount={5} />
        <ChildComponent initialCount={10} />
        <ChildComponent initialCount={15} />
      </div>
    </div>
  );
}
