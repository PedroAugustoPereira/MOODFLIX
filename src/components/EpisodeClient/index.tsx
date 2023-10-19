"use client";

import { useRouter, useSearchParams } from "next/navigation";
import HeaderGeneric from "../common/headerGeneric";
import courseService, { CourseType } from "@/services/courseService";
import { useEffect, useState } from "react";
import SpinnerComponent from "../common/spinner";
import { Button, Container } from "reactstrap";
import styles from "@/styles/episodePlayer.module.scss";
import ReactPlayer from "react-player";

interface props {
  episodeOrder: number;
}

const EpisodeClient = ({ episodeOrder }: props) => {
  const query = useSearchParams();
  const router = useRouter();
  const courseId = query.get("courseid")?.toString();
  const [course, setCourse] = useState<CourseType>();

  const getCourse = async () => {
    if (typeof courseId !== "string") {
      return;
    }

    const res = await courseService.getEpisodes(courseId);

    if (res.status === 200) {
      setCourse(res.data);
    }
  };

  const handleLastEpisode = () => {
    router.push(`/course/episode/${episodeOrder - 1}?courseid=${course?.id}`);
  };

  const handleNextEpisode = () => {
    router.push(`/course/episode/${episodeOrder + 1}?courseid=${course?.id}`);
  };

  useEffect(() => {
    getCourse();
  }, [courseId]);

  if (course?.episodes === undefined) return <SpinnerComponent />;
  console.log(course);

  return (
    <>
      <HeaderGeneric
        logoUrl="/home"
        btnContent={"Voltar para o curso"}
        btnUrl={`/course/${courseId}`}
      />

      <Container className="d-flex flex-column align-items-center gap-3 pt-5">
        <p className={styles.episodeTitle}>
          {course?.episodes[episodeOrder].name}
        </p>
        {typeof window === "undefined" ? null : (
          <ReactPlayer
            className={styles.player}
            url={`${process.env.NEXT_PUBLIC_BASEURL}episodes/stream?videoUrl=${
              course.episodes[episodeOrder].videoUrl
            }&token=${sessionStorage.getItem("moodflix-token")}`}
            controls
          />
        )}
        <div className={styles.episodeButtonDiv}>
          <Button
            className={styles.episodeButton}
            disabled={episodeOrder === 0 ? true : false}
            onClick={handleLastEpisode}
          >
            <img
              src="/episode/iconArrowLeft.svg"
              alt="setaEsquerda"
              className={styles.arrowImg}
            />
          </Button>
          <Button
            className={styles.episodeButton}
            disabled={
              episodeOrder + 1 === course.episodes.length ? true : false
            }
            onClick={handleNextEpisode}
          >
            <img
              src="/episode/iconArrowRight.svg"
              alt="setaDireita"
              className={styles.arrowImg}
            />
          </Button>
        </div>
        <p className="text-center py-4">
          {course.episodes[episodeOrder].synopsis}
        </p>
      </Container>
    </>
  );
};

export default EpisodeClient;
