import KanbanColumn from "./Reusable/KanbanColumn";
import Task from "./Reusable/Task";

const KanbanToDo = () => {
  return (
    <KanbanColumn title="To Do">
      <Task />
      <Task />
    </KanbanColumn>
  );
};

export default KanbanToDo;
