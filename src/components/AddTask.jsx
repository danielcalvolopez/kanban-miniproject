import { useState } from "react";
import classes from "./add-task.module.css";

const AddTask = ({ addCard }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleOnAdd = () => {
    addCard(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div className={classes["add-container"]}>
      Add Task
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="title"
      />
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        type="text"
        placeholder="content"
      />
      <button type="submit" onClick={handleOnAdd}>
        Add
      </button>
    </div>
  );
};

export default AddTask;
