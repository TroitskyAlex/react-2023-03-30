import { Button } from "@/components/Button/Button";
import React, {useState} from "react";

import ThumbDown from "./images/thumb-down.svg";

import styles from "./styles.module.scss";

export const Dish = ({ dish }) => {
  const [activeDishCount, setActiveDishCount] = useState(0);

  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  const increaseCount = () => {
    setActiveDishCount(activeDishCount >= 5 ? 5 : activeDishCount + 1)
  }

  const decreaseCount = () => {
    setActiveDishCount(activeDishCount <= 0 ? 0 : activeDishCount - 1)
  }


  return (
    <div>
      <span>{name}</span>
      <Button className={styles.decrementAction} onClick={decreaseCount} type="secondary">
        -
      </Button>
      {activeDishCount}
      <Button className={styles.incrementAction} onClick={increaseCount} type="primary">
        +
      </Button>
    </div>
  );
};
