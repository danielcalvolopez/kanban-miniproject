import { DndProvider } from "react-dnd";
import classes from "./kanban.module.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { v4 as uuid } from "uuid";
import Task from "./Reusable/Task";

const tasksList = [
  { id: uuid(), title: "Task 1" },
  { id: uuid(), title: "Task 2" },
  { id: uuid(), title: "Task 3" },
  { id: uuid(), title: "Task 4" },
];

const Kanban = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={classes.kanban}>
        <div className={classes.col}>
          {tasksList.map((task) => (
            <Task key={task.id} id={task.id} title={task.title} />
          ))}
        </div>
        <div className={classes.col}></div>
      </div>
    </DndProvider>
  );
};

export default Kanban;
