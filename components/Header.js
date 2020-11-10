import React from "react";
import { Navbar } from "react-bootstrap";
import Link from "next/link";

import styles from "../styles/Header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className={styles.navLink}>
          <Link className={styles.navLink} href="/">
            Witness Daily
          </Link>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};

export default Header;
