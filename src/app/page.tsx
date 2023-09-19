import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.css";
import Link from "next/link";
import HeaderNoAuth from "@/components/homeNoAuth/header";

export const metadata = {
  title: "Moodflix",
  icons: {
    shortcut: ["/favicon.svg"],
    icon: ["/favicon.svg"],
    type: ["image/x-icon"],
  },

  openGraph: {
    title: "Moodflix",
    content: "title",
  },

  description:
    "Tenha acesso aos melhores conteúdos de programação de maneira simples e fácil",
};

const HomeNoAuth = () => {
  return (
    <>
      <main>
        <HeaderNoAuth />
      </main>
    </>
  );
};

export default HomeNoAuth;
