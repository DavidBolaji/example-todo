import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import AddTaskModal from "../modal/AddTaskModal";

const DashboardMenu = () => {
  const [open, setOpen] = useState(false)
  
  const setOpenModal = () => setOpen(true);
  
  return (
    <div className="mt-10 space-y-2">
    <button onClick={setOpenModal} className=" whitespace-nowrap  flex items-center w-full gap-3 px-2 py-1.5  hover:bg-[#f2efed] transition-all rounded-md">
      <div>
        <FaPlusCircle color="#dc4c3e" size={25} />
      </div>
      <h3 className="text-[#a81f00] font-semibold text-md">Add task</h3>
    </button>
    <AddTaskModal visibility={open} close={() => setOpen(false)} />
    </div>
  );
};

export default DashboardMenu;
