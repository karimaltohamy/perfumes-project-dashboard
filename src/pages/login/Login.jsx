import { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="login">
      <div className="login_form">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="22"
            fill="none"
            viewBox="0 0 34 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M.002.313v7.282s-.144 2.293 2.103 4.234l12.442 11.855 6.47-.084-1.038-12.787-2.453-2.88-7.71-7.62H.001z"
              clipRule="evenodd"
            ></path>
            <path
              fill="#161616"
              fillRule="evenodd"
              d="M8.18 17.776l5.123-14.024 4.286 4.27-9.41 9.754z"
              clipRule="evenodd"
              opacity="0.06"
            ></path>
            <path
              fill="#161616"
              fillRule="evenodd"
              d="M8.582 17.225l6.23-11.983 2.81 2.81-9.04 9.173z"
              clipRule="evenodd"
              opacity="0.06"
            ></path>
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M8.258 17.691L25.134.313h8.865v7.314s-.185 2.438-1.425 3.742L21.018 23.688h-6.47l-6.29-5.997z"
              clipRule="evenodd"
            ></path>
          </svg>
          Login
        </div>
        <h4 className="title">Welcome to Dashboard!</h4>
        <p className="desc">
          Please sign-in to your account and start the adventure
        </p>
        <form action="" onSubmit={handleLogin}>
          <div className="input_item">
            <label htmlFor="">Username</label>
            <input
              type="text"
              id="username"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="input_item">
            <label htmlFor="">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit" className="btn_Login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
