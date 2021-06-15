import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/img/GSW-dorado.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <img className="header-img" src={logo} alt="Global Spirit And Wine" />
          <ul className="header-menu">
            <li>Inicio</li>
            <li>Productos</li>
            <li>Categorias</li>
          </ul>
        </div>
        <div className="header-search">
          <div className="btn-search">
            <input placeholder="Buscar..." />
            <FaSearch />
          </div>
          <div className="btn-shoppingcart">
            <FaShoppingCart />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
