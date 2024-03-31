import DefaultForm from "../Form/DefaultForm";
import BtnComponent from "../Button/BtnComponent";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { getTodos } from "../../utils/helpers";


const PASSWORD = "123456789";
const EMAIL = "odavidbolaji14@gmail.com";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)
  const queryClient = useQueryClient();

  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoading(true)
    event.preventDefault()
    // const formData = new FormData(event.currentTarget);
    // const email = formData.get("email") as string;
    // const password = formData.get("password") as string;
    if(email === EMAIL && pass === PASSWORD) {
      const todos = getTodos('todos')
        await queryClient.setQueryData(['user'], {
          email,
          isAuthenticated: true,
          todos
        })
        navigate('/dashboard')
    } else {
        setError('Wrong email or password')
    }
    setLoading(false)
  };

  return (
    <form className="space-y-3" onSubmit={handleSubmit} name="loginForm">
      {error.trim().length > 0 && <div className="w-full px-3 py-3 text-center text-black bg-red-300">{error}</div>}
      <DefaultForm
        text="email"
        htmlFor={"email"}
        rest={{
          placeholder: "Enter your Email....",
          password: false,
          type: "email",
          value: email,
          name: "email",
          onFocus: () => setError(''),
          onChange: (e) => setEmail(e.target.value),
        }}
      />
      <DefaultForm
        text="password"
        htmlFor={"password"}
        rest={{
          placeholder: "Enter your Password....",
          password: true,
          type: "password",
          value: pass,
          name: "password",
          onFocus: () => setError(''),
          onChange: (e) => setPass(e.target.value),
        }}
        password={true}
      />
      <BtnComponent disabled={loading} text={"Log in"}  type="submit" />
    </form>
  );
};

export default LoginForm;
