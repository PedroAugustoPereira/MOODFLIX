import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.scss";
import Link from "next/link";
import HeaderNoAuth from "@/components/homeNoAuth/header";
import PresentationSection from "@/components/homeNoAuth/presentationSection";
import CardSection from "@/components/homeNoAuth/cardSection";

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
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>

        <CardSection />
      </main>
    </>
  );
};

export default HomeNoAuth;
