import classes from "./task.module.css";

const Task = () => {
  return (
    <div className={classes["task-container"]}>
      <h4 className={classes.title}>Title</h4>
      <p className={classes.content}>content</p>
    </div>
  );
};

export default Task;
