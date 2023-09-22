import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.scss";
import Link from "next/link";
import HeaderNoAuth from "@/components/homeNoAuth/header";
import PresentationSection from "@/components/homeNoAuth/presentationSection";
import CardSection from "@/components/homeNoAuth/cardSection";
import SlideSection from "@/components/homeNoAuth/slideSection";
import courseService, { CourseType } from "@/services/courseService";
import { ReactNode } from "react";
import Footer from "@/components/common/footer";

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

interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}

const HomeNoAuth = async () => {
  const course = await fetchData();

  return (
    <>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>

        <CardSection />
        <SlideSection newestCourses={course} />
        <Footer />
      </main>
    </>
  );
};

const fetchData = async () => {
  const res = await courseService.getNewestCourse();
  return res.data;
};

export default HomeNoAuth;
