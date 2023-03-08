import { v4 as uuid } from "uuid";
import KanbanColumn from "./Reusable/KanbanColumn";
import Task from "./Reusable/Task";

const KanbanToDo = ({ data, title }) => {
  return (
    <KanbanColumn title={title}>
      {data.map((task, index) => (
        <Task
          key={uuid()}
          title={task.title}
          content={task.content}
          index={index}
          parent={task.title}
        />
      ))}
    </KanbanColumn>
  );
};

export default KanbanToDo;
