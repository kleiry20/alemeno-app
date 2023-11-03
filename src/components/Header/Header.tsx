import React from "react";
import "./Header.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <ArrowLeftOutlined onClick={() => navigate("/")} />
      Alemeno 
    </div>
  );
};

export default Header;
