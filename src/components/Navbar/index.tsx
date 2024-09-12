import React, { useState } from "react";
import Button from "../Button";
import Icon from "../Icon";
import { Link } from "react-router-dom";
import "./index.css";
import Dialog from "../Dialog";

const Navbar: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <>
      <header className="header">
        <nav className="nav header__nav">
          <h1 className="nav__title font-poppins--black">
            <Link className="item__link" to="/">
              CINEMA
            </Link>
          </h1>
          <menu className="menu nav__menu">
            <li className="item menu__item menu-button ">
              <Button onClick={() => setModal(true)}>
                <Icon icon="menu"></Icon>
              </Button>
            </li>
            <li className="item menu__item">
              <Link className="item__link" to="/favorite">
                Favorite
              </Link>
            </li>
            <li className="item menu__item">
              <Link className="item__link" to="/watchlist">
                Watchlist
              </Link>
            </li>
            <li className="item menu__item logout-button">
              <Button className="item__link">
                <Icon icon="logout" size={25}></Icon>
              </Button>
            </li>
          </menu>
        </nav>
      </header>
      <Dialog
        label="navbar menu dialog"
        openModal={modal}
        closeModal={() => setModal(false)}
      >
        test
      </Dialog>
    </>
  );
};

export default Navbar;
