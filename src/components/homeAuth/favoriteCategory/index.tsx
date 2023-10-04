"use client";

import SlideComponent from "@/components/common/slideComponent";
import courseService from "@/services/courseService";
import styles from "@/styles/slideCategory.module.scss";
import useSWR from "swr";

const FavoriteCategory = () => {
  const { data, error } = useSWR("/favorites", courseService.getFavCourse);

  if (error) return error;
  if (!data)
    return (
      <>
        <p>Loading...</p>
      </>
    );

  return (
    <>
      <p className={styles.titleCategory}>MEUS FAVORITOS</p>
      {data.data.courses.length >= 1 ? (
        <SlideComponent course={data.data.courses} />
      ) : (
        <p className="text-center pt-3 h5">
          <strong>Você ainda não tem nenhum curso na lista...</strong>
        </p>
      )}
    </>
  );
};

export default FavoriteCategory;
