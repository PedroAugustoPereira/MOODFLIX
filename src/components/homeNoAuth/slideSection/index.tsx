"use client";

import { CourseType } from "@/services/courseService";
import styles from "./styles.module.scss";
import { Button, Container } from "reactstrap";
import SlideComponent from "./../../common/slideComponent/index";
import Link from "next/link";

interface props {
  newestCourses: CourseType[];
}

const SlideSection = ({ newestCourses }: props) => {
  return (
    <>
      <Container className="d-flex flex-column align-items-center py-5">
        <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>

        <SlideComponent course={newestCourses} />

        <Link href="/register">
          <Button className={styles.slideSectionButton} color="light">
            Se cadastre para acessar
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default SlideSection;
