import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Menu.module.css";

export const Menu = () => {
  const location = useLocation();
  const links = [
    {
      href: "/",
      name: "Inicio",
    },
    {
      href: "/aboutme",
      name: "Sobre Mim",
    },
  ];
  return (
    <header>
      <nav className={styles.navegacao}>
        {links.map((link) => (
          <Link
            className={`${styles.link} ${
              location.pathname === link.href ? styles.linkDestacado : ""
            }`}
            to={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
