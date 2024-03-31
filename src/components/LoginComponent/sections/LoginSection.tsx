import { FaApple, FaFacebook } from "react-icons/fa";
import BtnComponent from "../../Button/BtnComponent";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "../LoginForm";

const socialIcons = [
  {
    text: "Continue with Google",
    icon: <FcGoogle />,
  },
  {
    text: "Continue with Facebook",
    icon: <FaFacebook color={"#1877f2"} />,
  },
  {
    text: "Continue with Apple",
    icon: <FaApple />,
  },
];

const LoginSection = () => {
  return (
    <div>
      <h2 className="mb-5 text-4xl font-bold text-black">Log in</h2>
      {socialIcons.map((social: any) => (
        <div className="mb-3" id={social.text} key={social.text}>
          <BtnComponent icon={social.icon} text={social.text} />
        </div>
      ))}
      <hr className="my-5" />

      <LoginForm />
    </div>
  );
};

export default LoginSection;
