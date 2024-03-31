import LoginSection from './sections/LoginSection'
import ImgSection from './sections/ImgSection'

const LoginComponent = () => {
  return (
    <div className='grid grid-cols-10 mt-20'>
        <div className='md:col-span-4 col-span-10 '>
            <LoginSection />
        </div>
        <div className='md:col-span-6 md:block hidden px-20'>
          <div className='flex items-center h-full'>
            <ImgSection />
          </div>
        </div>
    </div>
  )
}

export default LoginComponent