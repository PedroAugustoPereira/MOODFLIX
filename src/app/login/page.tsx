

import Footer from "@/components/common/footer";
import styles from "../../../styles/registerLogin.module.scss";
import HeaderGeneric from "./../../components/common/headerGeneric/";
import FormLogin from "@/components/auth/register/login/form";

import Head from "next/head";

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

        <FormLogin />

        <Footer />
      </main>
    </>
  );
};

export default Login;
