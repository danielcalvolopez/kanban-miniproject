import { useRef } from "react";
import { useDrop } from "react-dnd";
import classes from "./column.module.css";

const Column = ({ stage, changeTaskStatus, children }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: "card",
    drop(item) {
      changeTaskStatus(item.id, stage);
    },
  });
  drop(ref);
  return (
    <div className={classes["column-container"]}>
      <h2 className={classes.header}>TODO</h2>
      <button className={classes.button}>+</button>
      <div className={classes.list}>{children}</div>
    </div>
  );
};

export default Column;
