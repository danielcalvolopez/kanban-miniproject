import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import Kanban from "./components/Kanban";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <Kanban />
      </div>
    </DndProvider>
  );
};

export default App;
