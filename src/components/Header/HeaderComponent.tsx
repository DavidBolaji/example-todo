import TodoistIcon from "../../assets/todoist-icon.svg";

const HeaderComponent = () => {
  return (
    <div className='flex items-center gap-2 py-5'>
        <div>
            <img src={TodoistIcon} alt="Logo" />
        </div>
        <h2 className="hidden text-2xl font-semibold text-default_red md:block">todoist</h2>
    </div>
  )
}

export default HeaderComponent