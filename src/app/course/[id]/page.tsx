import styles from "@/styles/coursePage.module.scss";
import HeaderAuth from "@/components/headerAuth";
import GetEpisodes from "./../../../components/courses/getEpisodes/index";

export const metadata = {
  title: "Moodflix - ",
  icons: {
    shortcut: ["/favicon.svg"],
    icon: ["/favicon.svg"],
    type: ["image/x-icon"],
  },

  openGraph: {
    title: "Moodflix - Course",
    content: "title",
  },

  description: "Acesso ao curso",
};

export interface getParams {
  params: {
    id: string | number;
  };
}

const CoursePage = ({ params }: getParams) => {
  console.log(params.id);

  return (
    <>
      <main>
        <HeaderAuth />
        <GetEpisodes id={params.id} />
      </main>
    </>
  );
};

export default CoursePage;
