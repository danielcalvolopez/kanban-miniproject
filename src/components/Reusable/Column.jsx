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
    <div className={classes.column} ref={ref}>
      {children}
    </div>
  );
};

export default Column;
