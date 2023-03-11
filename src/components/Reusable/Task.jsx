import classes from "./task.module.css";
import { useDrag } from "react-dnd";
import { useRef } from "react";

const Task = ({ title, id }) => {
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: id,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(ref);

  return (
    <div ref={ref} style={{ opacity }} className={classes["task-container"]}>
      {title}
    </div>
  );
};

export default Task;
