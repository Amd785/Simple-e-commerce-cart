import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Icon, { ShoppingCartOutlined } from '@ant-design/icons';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart">
          <ShoppingCartOutlined style={{ fontSize: '32px' }}/>
          
        </Link>
      </div>
    </div>
  );
};
