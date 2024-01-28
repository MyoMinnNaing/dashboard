import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    try {
      const response = await axios.get("http://localhost:5173/api/todos");

      setTasks(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TodoContext.Provider value={{ tasks, loading }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
