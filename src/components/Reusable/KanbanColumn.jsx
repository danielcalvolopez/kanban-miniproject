import classes from "./kanban-column.module.css";
import Task from "./Task";

const KanbanColumn = ({ title, data }) => {
  return (
    <div className={classes["column-container"]}>
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.tasks}>
        {data.map((task) =>
          task.tasks.map((item) => <Task key={item.id}>{item.title}</Task>)
        )}
      </div>
    </div>
  );
};

export default KanbanColumn;
