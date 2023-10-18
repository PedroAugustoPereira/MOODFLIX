import { CourseType } from "@/services/courseService";
import styles from "./styles.module.scss";
import Link from "next/link";

interface props {
  course: CourseType;
}

const SearchCard = ({ course }: props) => {
  return (
    <>
      <Link
        style={{ color: "white", textDecoration: "none" }}
        href={`/course/${course.id}`}
      >
        <div className={styles.searchCard}>
          <img
            className={styles.searchCardImg}
            src={`${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl}`}
            alt={course.name}
          />
          <p className={styles.searchCardTitle}>{course.name}</p>
          <p className={styles.searchCardDescription}>{course.synopsis}</p>
        </div>
      </Link>
    </>
  );
};

export default SearchCard;
