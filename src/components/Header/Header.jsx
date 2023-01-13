import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import MenuDrawer from "./menuDrawer/MenuDrawer";
import Button from "../Global/Button";
import Icon from "../Global/Icon";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import logo from "../../assets/logo.png";
import styles from "./header.module.css";

const Header = () => {
  const refMenu = useRef(null);

  const [open, setOpen] = useState(false);

  const hideOnClickOutside = (e) => {
    if (refMenu.current && !refMenu.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  const activeLinkClassName = "activeLink";
  const notActiveLinkClassName = "link";
  const activeContactClassName = "activeContact";
  const notActiveContactClassName = "contact";

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        <div className={`${styles.disableMobile} ${styles.menu}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
            isActive ? activeLinkClassName : notActiveLinkClassName
          }
          >
            <p>Inicio</p>
          </NavLink>
          <NavLink
            to="/productos"
            className={({ isActive }) =>
            isActive ? activeLinkClassName : notActiveLinkClassName
          }
          >
            <p>Productos</p>
          </NavLink>
          <NavLink
            to="/nosotros"
            className={({ isActive }) =>
            isActive ? activeLinkClassName : notActiveLinkClassName
          }
          >
            <p>Nosotros</p>
          </NavLink>
          <NavLink
            to="/historia/1985"
            className={({ isActive }) =>
            isActive ? activeLinkClassName : notActiveLinkClassName
          }
          >
            Historia
          </NavLink>
        </div>

        <div className={`${styles.disableMobile} ${styles.contact}`}>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
            isActive ? activeContactClassName : notActiveContactClassName
          }
          >
            Contacto
          </NavLink>
        </div>

        <Button
          css={styles.btnWrapper}
          event={handleClick}
          text={<Icon css={styles.barsWrapper} icon={faBars} />}
        />

        <div ref={refMenu} className={styles.menuDrawer}>
          <MenuDrawer open={open} handleClick={handleClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
