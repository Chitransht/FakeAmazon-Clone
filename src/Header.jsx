import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src="https://static.vecteezy.com/system/resources/previews/019/040/342/original/amazon-logo-editorial-free-vector.jpg"
          alt=""
        />
      </Link>

      <div className="header-search">
        <input className="header-searchinput" type="text" />
        <SearchIcon className="header-searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_options">
            <span className="header_optionline1">Hello {!user? 'Guest' :user.email}</span>

            <span className="header_optionline2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_options">
          <span className="header_optionline1">Return</span>
          <span className="header_optionline2">& Orders</span>
        </div>
        <div className="header_options">
          <span className="header_optionline1">Your</span>
          <span className="header_optionline2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header-optionBasket">
            <AddShoppingCartIcon />
            <span className="header-optionline2 header-basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
