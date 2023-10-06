"use client";

import courseService from "@/services/courseService";
import useSWR from "swr";
import SlideComponent from "./../../common/slideComponent/index";
import styles from "@/styles/slideCategory.module.scss";
import SpinnerComponent from "@/components/common/spinner";

const NewestCategory = () => {
  const { data, error } = useSWR("/newest", courseService.getNewestCourse);

  if (error) return error;
  if (!data) return <SpinnerComponent />;

  return (
    <>
      <p className={styles.titleCategory}>LANÇAMENTOS</p>
      <SlideComponent course={data.data} />
    </>
  );
};

export default NewestCategory;
