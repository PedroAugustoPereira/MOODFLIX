"use client";

import SlideComponent from "@/components/common/slideComponent";
import categoriesService from "@/services/categoriesService";
import useSWR from "swr";
import styles from "@/styles/slideCategory.module.scss";

interface props {
  categoryId: number;
  categoryName: string;
}

const ListCategoriesSlide = ({ categoryId, categoryName }: props) => {
  const { data, error } = useSWR(`/categoriesCourses/${categoryId}`, () =>
    categoriesService.getCourses(categoryId)
  );

  console.log(categoryName);
  console.log(data);
  console.log(error);

  if (error) return error;
  if (!data)
    return (
      <>
        <p>Loading...</p>
      </>
    );

  return (
    <>
      <p className={styles.titleCategory}>{categoryName}</p>
      <SlideComponent course={data.data.courses} />
    </>
  );
};

export default ListCategoriesSlide;
