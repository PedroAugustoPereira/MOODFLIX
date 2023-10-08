import styles from "./styles.module.scss";
import HeaderAuth from "../../components/headerAuth";
import courseService, { CourseType } from "@/services/courseService";
import SearchItens from "@/components/search/searchItens";
import Footer from "@/components/common/footer";

export const metadata = {
  title: "Moodflix - ",
  icons: {
    shortcut: ["/favicon.svg"],
    icon: ["/favicon.svg"],
    type: ["image/x-icon"],
  },

  openGraph: {
    title: "Moodflix",
    content: "title",
  },

  description: "Pesquisando cursos",
};

interface props {
  searchParams: {
    name: string;
  };
}

const Search = async ({ searchParams }: props) => {
  metadata.title += searchParams?.name;
  const searchName = searchParams?.name;

  return (
    <>
      <main className={styles.main}>
        <div className={styles.bg}>
          <HeaderAuth />
        </div>

        <SearchItens name={searchName} />

        <div className={styles.bg}>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Search;
