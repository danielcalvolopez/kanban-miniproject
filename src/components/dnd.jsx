onDragEnd={(e) => {
    const container = e.over?.id;
    const title = e.active.data.current?.title ?? "";
    console.log(e.active.data.current);
    const content = e.active.data.current?.content ?? "";
    const index = e.active.data.current?.index ?? 0;
    const parent = e.active.data.current?.parent ?? "To Do";
    if (container === "To Do") {
      setTodoTasks([...todoTasks, { title, content }]);
    } else if (container === "Done") {
      setDoneTasks([...doneTasks, { title, content }]);
    } else if (container === "Testing") {
      setTestingTasks([...testingTasks, { title, content }]);
    } else {
      setInProgressTasks([...inProgressTasks, { title, content }]);
    }
    if (parent === "To Do") {
      setTodoTasks([
        ...todoTasks.slice(0, index),
        ...todoTasks.slice(index + 1),
      ]);
    } else if (parent === "Done") {
      setDoneTasks([
        ...doneTasks.slice(0, index),
        ...doneTasks.slice(index + 1),
      ]);
    } else if (parent === "Testing") {
      setTestingTasks([
        ...testingTasks.slice(0, index),
        ...testingTasks.slice(index + 1),
      ]);
    } else {
      setInProgressTasks([
        ...inProgressTasks.slice(0, index),
        ...inProgressTasks.slice(index + 1),
      ]);
    }
  }}