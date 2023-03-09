import classes from "./kanban.module.css";
import { v4 as uuid } from "uuid";
import Task from "./Reusable/Task";
import { useDrop } from "react-dnd";
import { useState } from "react";

const tasksList = [
  { id: uuid(), title: "Task 1" },
  { id: uuid(), title: "Task 2" },
  { id: uuid(), title: "Task 3" },
  { id: uuid(), title: "Task 4" },
];

const Kanban = () => {
  const [data, setData] = useState(tasksList);
  const [data2, setData2] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "task",
    drop: (item) => addTaskToColumn(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addTaskToColumn = (id) => {
    const taskFound = tasksList.filter((task) => id === task.id);

    data2.splice(data2.findIndex((task) => task.id === taskFound));
    setData2((data2) => [...data2, taskFound[0]]);
  };

  return (
    <div className={classes.kanban}>
      <div ref={drop} className={classes.col}>
        {data.map((task) => (
          <Task key={task.id} id={task.id} title={task.title} />
        ))}
      </div>
      <div ref={drop} className={classes.col}>
        {data2.map((task) => (
          <Task key={task.id} id={task.id} title={task.title} />
        ))}
      </div>
    </div>
  );
};

export default Kanban;
