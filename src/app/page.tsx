import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.css";

export const metadata = {
  title: "Home",
};

const HomeNoAuth = () => {
  return (
    <>
      <Head></Head>

      <main>
        <p>teste</p>
      </main>
    </>
  );
};

export default HomeNoAuth;
