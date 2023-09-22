"use client";

import { Container } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <Container className={styles.footer}>
        <img
          src="/logoOnebitcode.svg"
          alt="logoFooter"
          className={styles.footerLogo}
        />

        <Link
          href="http://onebitcode.com"
          target={"blank"}
          className={styles.footerLink}
        >
          ONEBITCODE.COM
        </Link>
      </Container>
    </>
  );
};

export default Footer;
