"use client";

import courseService, { CourseType } from "@/services/courseService";
import { useEffect, useState } from "react";

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
      {searchResult?.map((course) => (
        <div key={course.id}>
          <p>{course.name}</p>
        </div>
      ))}
    </>
  );
};

export default SearchItens;
