import { useQuery, useQueryClient } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import AddTaskModal from "../../components/modal/AddTaskModal";
import { useState } from "react";

interface ITodoItem {
  id: string
  name: string
  desc: string | null 
}

const TodoItem:React.FC<ITodoItem> = ({id, name, desc}) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="group border-b py-4 cursor-pointer">
    <div className="flex items-center justify-between">
      <div>{name}</div>
      <button className="group-hover:block hidden duration-300 transition-all hover:bg-[#e4e4e4] p-1" onClick={() => setOpen(true)}>
        <FaEdit />
      </button>
    </div>
    <div>{desc}</div>
    <AddTaskModal visibility={open} close={() => setOpen(false)} data={{id, name, desc}}  />
    </div>
  );
};

const DashboardPage = () => {
  const queryClient = useQueryClient();

  const {data: todos} = useQuery({
    queryKey: ['todos'],
    queryFn: () => {
      const todos = queryClient.getQueryData(["todos"]) as {
        id: string;
        name: string;
        desc: string | null;
      }[];
      const user = queryClient.getQueryData(["user"]) as {
        email: string;
        isAuthenticated: boolean;
        todos: any[];
      };
      return user?.todos.length > 0 ? user.todos :  !todos ? null: todos
    },
    refetchInterval: 1,
  })

  return (
    <div className="bg-white">
      <h2 className="text-2xl font-bold">Today</h2>
      {todos && todos.length > 0
        ? todos.map(
            (todo: { id: string; name: string; desc: string | null }) => (
              <TodoItem name={todo.name} desc={todo.desc} id={todo.id} key={todo.id}  />
            )
          )
        : null}
    </div>
  );
};

export default DashboardPage;
