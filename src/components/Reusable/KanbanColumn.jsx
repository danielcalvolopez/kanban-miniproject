import classes from "./kanban-column.module.css";

const KanbanColumn = ({ title, children }) => {
  return (
    <div className={classes["column-container"]}>
      <h3 className={classes.title}>{title}</h3>
      {children}
    </div>
  );
};

export default KanbanColumn;
