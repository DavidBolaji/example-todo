import { Tooltip } from "antd";
import React, { InputHTMLAttributes, useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface IDefaultForm {
  text: string;
  htmlFor: string;
  password?: boolean;
  rest: InputProps;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  password: boolean;
}

const DefaultInput: React.FC<InputProps> = ({ password, ...rest }) => {
  const [pass, setPass] = useState(rest.type);

  useEffect(() => {
    if (password) {
      setPass(rest.type);
    }
  }, [rest.type, password]);

  return (
    <div className="flex justify-between items-center">
      <input {...rest} type={pass} className="outline-none w-full" />

      {password && (
        <Tooltip
          title="Toggle password visibility"
          className="hover:bg-[#ededed] hover:cursor-pointer p-1"
        >
          <span
            onClick={() =>
              pass === "text" ? setPass("password") : setPass("text")
            }
          >
            {pass === "password" ? <FiEyeOff /> : <FiEye />}
          </span>
        </Tooltip>
      )}
    </div>
  );
};

const DefaultForm: React.FC<IDefaultForm> = ({
  text,
  htmlFor,
  password = false,
  ...rest
}) => {
  return (
    <div className="border px-2 rounded-md py-1 flex flex-col space-y-1">
      <label htmlFor={htmlFor} className="text-[14px] capitalize">
        {text}
      </label>
      <DefaultInput {...rest.rest} password={password} />
    </div>
  );
};

export default DefaultForm;
