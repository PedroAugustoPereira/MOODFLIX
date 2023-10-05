"use client";

import { Button, Col, Container, Row } from "reactstrap";
import UserForm from "@/components/profile/user";
import styles from "@/styles/profile.module.scss";
import { useState } from "react";
import PasswordForm from "../password";

const ContentForm = () => {
  const [form, setForm] = useState("userForm");

  return (
    <>
      <Container className="py-5">
        <p className={styles.title}>Minha Conta</p>
        <Row className="pt-3 pb-5">
          <Col md={4} className={styles.btnColumn}>
            <Button
              style={{ color: form === "userForm" ? "#FF0044" : "white" }}
              onClick={() => setForm("userForm")}
              className={styles.renderForm}
            >
              DADOS PESSOAIS
            </Button>
            <Button
              style={{ color: form === "passwordForm" ? "#FF0044" : "white" }}
              onClick={() => setForm("passwordForm")}
              className={styles.renderForm}
            >
              SENHA
            </Button>
          </Col>

          <Col md>{form === "userForm" ? <UserForm /> : <PasswordForm />}</Col>
        </Row>
      </Container>
    </>
  );
};

export default ContentForm;
