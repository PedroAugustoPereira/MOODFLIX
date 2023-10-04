import styles from "../../../styles/registerLogin.module.scss";
import Head from "next/head";
import HeaderGeneric from "./../../components/common/headerGeneric/";
import Footer from "@/components/common/footer";
import FormRegister from "@/components/auth/register/form";

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

        <FormRegister />
        <Footer />
      </main>
    </>
  );
};

export default Register;
