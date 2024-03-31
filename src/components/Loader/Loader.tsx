import TodoistIcon from "../../assets/todoist-icon.svg";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className='w-full h-screen space-y-4 flex flex-col justify-center items-center'>
       <img
        src={TodoistIcon}
        alt="todo logo"
        width={80}
      ></img>
      <ClipLoader color="#c3392c" />
    </div>
  )
}

export default Loader