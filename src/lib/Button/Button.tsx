import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0);
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Click here</button>
    </div>
  );
}
