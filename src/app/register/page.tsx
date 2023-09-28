"use client";

import styles from "../../../styles/registerLogin.module.scss";
import Head from "next/head";
import HeaderGeneric from "./../../components/common/headerGeneric/";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Footer from "@/components/common/footer";

export const metadata = {
  title: "Moodflix - Registro",
  icons: {
    shortcut: ["/favicon.svg"],
    icon: ["/favicon.svg"],
    type: ["image/x-icon"],
  },

  openGraph: {
    title: "Moodflix - Registro",
    content: "title",
  },

  description:
    "Registre-se na melhor plataforma de cursos grátis de programação!",
};

const Register = () => {
  return (
    <>
      {/* <Head></Head> */}
      <main className={styles.main}>
        <HeaderGeneric
          logoUrl="/"
          btnUrl="/login"
          btnContent="Quero Fazer Login"
        />

        <Container className="py-5">
          <p className={styles.formTitle}>
            <strong>Bem-vindo(a) ao MoodFlix!</strong>
          </p>
          <Form className={styles.form}>
            <p className="text-center">
              <strong>Faça a sua conta!</strong>
            </p>
            <FormGroup>
              <Label for="firstName" className={styles.label}>
                NOME
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Qual o seu nome?"
                required
                maxLength={30}
                className={styles.inputName}
              ></Input>
            </FormGroup>

            <FormGroup>
              <Label for="lastName" className={styles.label}>
                SOBRENOME
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Qual o seu sobrenome?"
                required
                maxLength={30}
                className={styles.inputName}
              ></Input>
            </FormGroup>

            <FormGroup>
              <Label for="phone" className={styles.label}>
                TELEFONE
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="(xx) 9xxxx-xxxx"
                data-mask="[-]+55 (00) 00000-0000"
                required
                className={styles.input}
              ></Input>
            </FormGroup>

            <FormGroup>
              <Label for="email" className={styles.label}>
                E-MAIL
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Digite seu email: "
                required
                className={styles.input}
              ></Input>
            </FormGroup>

            <FormGroup>
              <Label for="birth" className={styles.label}>
                DATA DE NASCIMENTO
              </Label>
              <Input
                id="birth"
                name="birth"
                type="date"
                required
                min="1930-01-01"
                max="2022-12-31"
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
                placeholder="Digite uma senha (Min: 6 | Max:20)"
                required
                minLength={6}
                maxLength={20}
                className={styles.input}
              ></Input>
            </FormGroup>

            <FormGroup>
              <Label for="password" className={styles.label}>
                CONFIRME SUA SENHA
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Confirme sua senha"
                required
                minLength={6}
                maxLength={20}
                className={styles.input}
              ></Input>
            </FormGroup>

            <Button type="submit" outline className={styles.formBtn}>
              CADASTRAR
            </Button>
          </Form>
        </Container>

        <Footer />
      </main>
    </>
  );
};

export default Register;
