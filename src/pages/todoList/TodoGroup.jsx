import React, { useContext } from "react";
import { TodoContext } from "./TodoContextProvider";
import TodoList from "./TodoList";

const TodoGroup = () => {
  const { tasks, loading } = useContext(TodoContext);
  const loadingShow = (
    <p className=" text-center text-2xl text-blue-500 py-10">LOading.......</p>
  );
  return (
    <div>
      {loading ? (
        loadingShow
      ) : (
        <table className="table-hover">
          <tbody>
            {tasks.map((task) => (
              <TodoList key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TodoGroup;
