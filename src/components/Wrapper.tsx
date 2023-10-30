import { useState } from "react";
import { Counter } from "./Counter";
import classes from "./Wrapper.module.scss";

export const Wrapper = () => {
  const [value, setValue] = useState(false);
  return (
    <div>
      <button className={classes.asddasd + " asfgsagasgag"} onClick={() => setValue(!value)}>
        Клек1
      </button>
      {[1].map((e) => {
        return <Counter />;
      })}
    </div>
  );
};
