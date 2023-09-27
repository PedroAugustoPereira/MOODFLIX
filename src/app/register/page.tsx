import styles from "../../../styles/registerLogin.module.scss";
import Head from "next/head";
import HeaderGeneric from "./../../components/common/headerGeneric/";

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
      <main>
        <HeaderGeneric
          logoUrl="/"
          btnUrl="/login"
          btnContent="Quero Fazer Login"
        />
      </main>
    </>
  );
};

export default Register;
