"use client";

import Footer from "@/components/common/footer";
import styles from "../../../styles/registerLogin.module.scss";
import HeaderGeneric from "./../../components/common/headerGeneric/";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Head from "next/head";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, FormEvent } from "react";
import ToastComponent from "@/components/common/toast";
import authService from "@/services/authService";

export const metadata = {
  title: "Moodflix - Login",
  icons: {
    shortcut: ["/favicon.svg"],
    icon: ["/favicon.svg"],
    type: ["image/x-icon"],
  },

  openGraph: {
    title: "Moodflix - Login",
    content: "title",
  },

  description:
    "Faça login na melhor plataforma de cursos grátis de programação!",
};

const Login = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [toastColor, setToastColor] = useState("");
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

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
      <Head>
        <title>Moodflix - Login</title>
      </Head>
      <main className={styles.main}>
        <HeaderGeneric
          logoUrl="/"
          btnUrl="/register"
          btnContent="Quero fazer parte"
        />

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
        <Footer />
      </main>
    </>
  );
};

export default Login;
