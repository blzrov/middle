import { useState } from "react";

export const Counter = (props: any) => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <div>{value}</div>
      <button onClick={() => setValue((e) => ++e)}>Клек</button>
    </div>
  );
};
