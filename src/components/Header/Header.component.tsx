import React from "react";
import { Link } from "react-router-dom";

import "./Header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header: React.FC = () => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
