import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import logo from "../assets/img/GSW-dorado.png";
import "../assets/style/components/Header.css";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/" className="header__menu">
          <img
            className="header__img"
            src={logo}
            alt="Global Spirit And Wine"
          />
          <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Categorias</li>
          </ul>
        </Link>
        <div className="header__menu">
          <div className="header__search">
            <input placeholder="Buscar..." />
            <FaSearch />
          </div>
          <FaShoppingCart />
        </div>
      </header>
    </>
  );
};

export default Header;
