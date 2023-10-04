"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, FormEvent } from "react";
import ToastComponent from "@/components/common/toast";
import authService from "@/services/authService";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import styles from "../../../../../../styles/registerLogin.module.scss";

export default function FormLogin() {
  const router = useRouter();
  const params = useSearchParams();
  const [toastColor, setToastColor] = useState("");
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");


  useEffect(() => {
    if(sessionStorage.getItem("moodflix-token")){
      router.push("/home");
    }
  }, [])

  useEffect(() => {
    const registerSucess = params.get("registred");

    if (registerSucess === "true") {
      setToastColor("bg-success");
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);

      setToastMessage("Cadastro feito com sucesso!");
    }
  }, [params.get("registred")]);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const params = { email, password };

    const { status } = await authService.login(params);

    if (status === 200) {
      router.push("/home");
    } else {
      setToastColor("bg-danger");
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);

      setToastMessage("Email ou senha incorretos!");
    }
  };

  return (
    <>
      <Container className="py-5">
        <p className={styles.formTitle}>Bem vindo(a) de volta!</p>
        <Form
          className={styles.form}
          data-aos="fade-down"
          data-aos-duration="1350"
          onSubmit={handleLogin}
        >
          <p className="text-center">
            <strong>Bem vindo(a) ao MoodFlix</strong>
          </p>

          <FormGroup>
            <Label for="email" className={styles.label}>
              E-MAIL
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Qual seu email?"
              required
              className={styles.input}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label for="password" className={styles.label}>
              SENHA
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Digite sua senha"
              required
              minLength={6}
              maxLength={20}
              className={styles.input}
            ></Input>
          </FormGroup>

          <Button type="submit" outline className={styles.formBtn}>
            ENTRAR
          </Button>
        </Form>

        <ToastComponent
          color={toastColor}
          isOpen={toastIsOpen}
          message={toastMessage}
        />
      </Container>
    </>
  );
}
