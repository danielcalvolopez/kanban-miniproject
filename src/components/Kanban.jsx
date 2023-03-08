import classes from "./kanban.module.css";
import KanbanDone from "./KanbanDone";
import KanbanInProgress from "./KanbanInProgress";
import KanbanTesting from "./KanbanTesting";
import KanbanToDo from "./KanbanToDo";
import { useState } from "react";
import AddTask from "./AddTask";
import { v4 as uuid } from "uuid";
import KanbanColumn from "./Reusable/KanbanColumn";

const initialData = [
  {
    id: uuid(),
    title: "To Do",
    tasks: [
      {
        id: uuid(),
        title: "Learn Threejs",
      },
      {
        id: uuid(),
        title: "Learn GSAP",
      },
      {
        id: uuid(),
        title: "Learn Angular",
      },
    ],
  },
  {
    id: uuid(),
    title: "In Progress",
    tasks: [
      {
        id: uuid(),
        title: "Learn JS",
      },
      {
        id: uuid(),
        title: "Learn React",
      },
      {
        id: uuid(),
        title: "Learn Redux",
      },
    ],
  },
  {
    id: uuid(),
    title: "Done",
    tasks: [
      {
        id: uuid(),
        title: "Learn CSS",
      },
      {
        id: uuid(),
        title: "Learn HTML",
      },
      {
        id: uuid(),
        title: "Learn Git",
      },
    ],
  },
];

const Kanban = () => {
  const [todoTasks, setTodoTasks] = useState([]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [testingTasks, setTestingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [data, setData] = useState(initialData);

  console.log(data);

  const addNewCard = (title, content) => {
    setTodoTasks([...todoTasks, { title, content }]);
  };

  return (
    <>
      <AddTask addCard={addNewCard} />

      <div className={classes.kanban}>
        {data.map((column) => (
          <KanbanColumn key={column.id} title={column.title} data={data} />
        ))}
        {/* <KanbanToDo title="To Do" data={todoTasks} />
        <KanbanInProgress title="In Progress" data={inProgressTasks} />
        <KanbanTesting title="Testing" data={testingTasks} />
        <KanbanDone title="Done" data={doneTasks} /> */}
      </div>
    </>
  );
};

export default Kanban;
