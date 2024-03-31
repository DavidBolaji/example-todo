import { PropsWithChildren } from "react"

const HomeLayout:React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div
     className="max-w-5xl px-5 mx-auto md:px-0"
    >{children}</div>
  )
}

export default HomeLayout