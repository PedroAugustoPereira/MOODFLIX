"use client";

import styles from "../../../styles/registerLogin.module.scss";
import Head from "next/head";
import HeaderGeneric from "./../../components/common/headerGeneric/";
import { Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import Footer from "@/components/common/footer";
import { FormEvent, useState } from "react";
import authService from "@/services/authService";
import { useRouter } from "next/navigation";
import ToastComponent from "./../../components/common/toast/";

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
  const router = useRouter();
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [aosData, setAosData] = useState(false);

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("firstName")!.toString();
    const lastName = formData.get("lastName")!.toString();
    const phone = formData.get("phone")!.toString();
    const birth = formData.get("birth")!.toString();
    const email = formData.get("email")!.toString();
    const password = formData.get("password")!.toString();
    const confirmPassword = formData.get("confirmPassword")!.toString();
    const params = { firstName, lastName, phone, birth, email, password };

    if (password != confirmPassword) {
      setToastIsOpen(true);
      setAosData(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);

      setToastMessage("Senha e confirmação diferntes...");
      return;
    }

    const { data, status } = await authService.register(params);

    if (status === 201) {
      router.push("/login?registred=true");
    } else {
      setToastIsOpen(true);
      setTimeout(() => {
        setToastIsOpen(false);
      }, 1000 * 3);

      setToastMessage(data.message);
    }
  };

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
          <Form
            data-aos="fade-up"
            data-aos-duration="1350"
            className={styles.form}
            onSubmit={handleRegister}
          >
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
              <Label for="confirmPassword" className={styles.label}>
                CONFIRME SUA SENHA
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
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

      <ToastComponent
        color="bg-danger"
        isOpen={toastIsOpen}
        message={toastMessage}
        aos={aosData}
      />
    </>
  );
};

export default Register;
