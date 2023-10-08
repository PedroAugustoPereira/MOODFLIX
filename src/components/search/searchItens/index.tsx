"use client";

import courseService, { CourseType } from "@/services/courseService";
import { useEffect, useState } from "react";
import styles from "@/styles/search.module.scss";
import SearchCard from "../searchCard";
import { Container } from "reactstrap";

const SearchItens = (props: any) => {
  const [searchResult, setSearchResult] = useState<CourseType[]>([]);

  const searchCourses = async () => {
    const res = await courseService.getSearch(props.name);

    setSearchResult(res.data.courses);
  };

  useEffect(() => {
    searchCourses();
  }, [props.name]);

  return (
    <>
      {searchResult.length >= 1 ? (
        <div className={styles.searchResult}>
          <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
            {searchResult?.map((course) => (
              <SearchCard key={course.id} course={course} />
            ))}
          </Container>
        </div>
      ) : (
        <p className={styles.noSearchResult}>Nenhum resultado encontrado</p>
      )}
    </>
  );
};

export default SearchItens;
