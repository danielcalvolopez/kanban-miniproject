import classes from "./task.module.css";

const Task = ({ children }) => {
  return <div className={classes["task-container"]}>{children}</div>;
};

export default Task;
