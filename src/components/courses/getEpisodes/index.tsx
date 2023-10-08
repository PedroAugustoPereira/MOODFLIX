"use client";

import { CourseType } from "@/services/courseService";
import { useEffect, useState } from "react";
import { getParams } from "@/app/course/[id]/page";
import courseService from "./../../../services/courseService";
import Head from "next/head";

interface propsId {
  id: number | string;
}

const GetEpisodes = ({ id }: propsId) => {
  const [course, setCourse] = useState<CourseType>();

  const getCourse = async () => {
    if (typeof id !== "string") return;

    const res = await courseService.getEpisodes(id);

    if (res.status === 200) {
      setCourse(res.data);
    }
  };

  useEffect(() => {
    getCourse();
  }, [id]);

  return (
    <>
      <Head>
        <title>Moodflix - {course?.name}</title>
      </Head>
      <p>{course?.name}</p>
    </>
  );
};

export default GetEpisodes;
