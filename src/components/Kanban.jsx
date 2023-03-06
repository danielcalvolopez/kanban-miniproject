import classes from "./kanban.module.css";
import KanbanDone from "./KanbanDone";
import KanbanInProgress from "./KanbanInProgress";
import KanbanTesting from "./KanbanTesting";
import KanbanToDo from "./KanbanToDo";

const kanban = () => {
  return (
    <div className={classes.kanban}>
      <KanbanToDo />
      <KanbanInProgress />
      <KanbanTesting />
      <KanbanDone />
    </div>
  );
};

export default kanban;
