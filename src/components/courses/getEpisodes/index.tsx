"use client";

import { CourseType } from "@/services/courseService";
import { useEffect, useState } from "react";
import { getParams } from "@/app/course/[id]/page";
import courseService from "./../../../services/courseService";
import Head from "next/head";
import HeaderAuth from "@/components/headerAuth";
import { Button, Container } from "reactstrap";
import styles from "@/styles/coursePage.module.scss";
import SpinnerComponent from "@/components/common/spinner";
import EpisodeList from "@/components/episodeList";
import Footer from "@/components/common/footer";

interface propsId {
  id: number | string;
}

const GetEpisodes = ({ id }: propsId) => {
  const [course, setCourse] = useState<CourseType>();
  const [liked, setLiked] = useState(false);
  const [favorited, setFavorited] = useState(false);

  const getCourse = async () => {
    if (typeof id !== "string") return;

    const res = await courseService.getEpisodes(id);

    if (res.status === 200) {
      setCourse(res.data);
      setLiked(res.data.liked);
      setFavorited(res.data.favorited);
    }
  };

  useEffect(() => {
    getCourse();
  }, [id]);

  const handleLikeCourse = async () => {
    if (liked) {
      await courseService.removeLike(id);
      setLiked(false);
    } else {
      await courseService.addLike(id);
      setLiked(true);
    }
  };

  const handleFavCourse = async () => {
    if (favorited) {
      await courseService.removeFav(id);
      setFavorited(false);
    } else {
      await courseService.addToFav(id);
      setFavorited(true);
    }
  };

  if (course === undefined) return <SpinnerComponent />;

  const title = course?.name;
  return (
    <>
      <Head>
        <title>Moodflix - {course?.name}</title>
      </Head>
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course?.thumbnailUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "550px",
        }}
      >
        <HeaderAuth />
      </div>
      <Container className={styles.courseInfo}>
        <p className={styles.courseTitle}>{course?.name}</p>
        <p className={styles.courseDescription}>{course?.synopsis}</p>
        <Button
          outline
          className={styles.courseBtn}
          disabled={course?.episodes?.length === 0 ? true : false}
        >
          ASSISTIR AGORA!
          <img
            src="/buttonPlay.svg"
            alt="buttonImg"
            className={styles.buttonImg}
          />
        </Button>
        <div className={styles.interactions}>
          {liked === false ? (
            <img
              src="/course/iconLike.svg"
              alt="likeImage"
              className={styles.interactionImages}
              onClick={handleLikeCourse}
            />
          ) : (
            <img
              src="/course/iconLiked.svg"
              alt="likeImage"
              className={styles.interactionImages}
              onClick={handleLikeCourse}
            />
          )}

          {favorited === false ? (
            <img
              src="/course/iconAddFav.svg"
              alt="likeImage"
              className={styles.interactionImages}
              onClick={handleFavCourse}
            />
          ) : (
            <img
              src="/course/iconFavorited.svg"
              alt="likeImage"
              className={styles.interactionImages}
              onClick={handleFavCourse}
            />
          )}
        </div>
      </Container>

      <Container className={styles.episodeInfo}>
        <p className={styles.episodeDivision}>EPISÓDIOS</p>
        <p className={styles.episodeLength}>
          {course?.episodes?.length} episódios
        </p>
        {course?.episodes?.length === 0 ? (
          <p>
            <strong>Não temos episódios ainda &#x1F606;&#x1F918;</strong>
          </p>
        ) : (
          course?.episodes?.map((episode) => (
            <EpisodeList key={episode.id} episode={episode} />
          ))
        )}
      </Container>
      <Footer />
    </>
  );
};

export default GetEpisodes;
