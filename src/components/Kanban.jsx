import classes from "./kanban.module.css";
import { v4 as uuid } from "uuid";
import Task from "./Reusable/Task";
import { useCallback, useState } from "react";
import update from "immutability-helper";
import Column from "./Reusable/Column";

const tasksList = [
  { id: uuid(), title: "Task 1", stage: "1" },
  { id: uuid(), title: "Task 2", stage: "1" },
  { id: uuid(), title: "Task 3", stage: "2" },
  { id: uuid(), title: "Task 4", stage: "2" },
];

const stages = ["1", "2"];

const Kanban = () => {
  const [data, setData] = useState(tasksList);

  const changeTaskStatus = useCallback(
    (id, stage) => {
      let task = data.find((task) => task.id === id);
      const taskIndex = data.indexOf(task);
      task = { ...task, stage };
      let newTasks = update(data, {
        [taskIndex]: { $set: task },
      });
      setData(newTasks);
    },
    [data]
  );

  return (
    <div className={classes.kanban}>
      {stages.map((stage) => (
        <Column key={stage} stage={stage} changeTaskStatus={changeTaskStatus}>
          {data
            .filter((task) => task.stage === stage)
            .map((task) => (
              <Task key={task.id} id={task.id} title={task.title} />
            ))}
        </Column>
      ))}
    </div>
  );
};

export default Kanban;
