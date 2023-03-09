import classes from "./task.module.css";

const Task = ({ title, id }) => {
  return <div className={classes["task-container"]}>{title}</div>;
};

export default Task;
