import classes from "./task.module.css";
import { useDrag } from "react-dnd";

const Task = ({ title, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={classes["task-container"]}>
      {title}
    </div>
  );
};

export default Task;
