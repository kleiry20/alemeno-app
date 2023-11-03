import React, { useEffect, useState } from "react";
import "./Login.css";
import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setStudent } from "../../features/student/studentSlice";
import { useNavigate } from "react-router-dom";
import { loggedInStudent } from "../../features/login/loggedInStudentSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: "",
  });

  const navigate = useNavigate();

  const studentList = useSelector((state: any) => state.student.value);

  const fetchStudentData = async () => {
    try {
      const response = await fetch(
        "https://alemeno-assignment-63310-default-rtdb.firebaseio.com/students.json"
      );
      if (response.ok) {
        const data = await response.json();
        dispatch(setStudent(data));
      } else {
        throw new Error("Failed to fetch data from the API");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  function handleSubmit(e: any) {
    e.preventDefault();
    const item = studentList.find(
      (item: any) => item.email === loginData.email
    );
    if (item !== undefined) {
      console.log("logged in");
      dispatch(loggedInStudent(item));
      navigate("/");
    } else {
      console.log("user not found");
    }
    console.log(loginData, "loginData");
  }

  return (
    <div className="login">
      <div className="login-top">
        <h2>Welcome</h2>
        <h3>Login here</h3>
      </div>
      <form className="login-bottom" onSubmit={handleSubmit}>
        <div className="login-fields">
          <label htmlFor="email">Email</label>
          <Input
            type="text"
            name={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
        </div>

        <div className="login-footer">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
