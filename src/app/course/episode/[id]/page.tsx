import EpisodeClient from "@/components/EpisodeClient";
import styles from "@/styles/episodePlayer.module.scss";
import { useSearchParams } from "next/navigation";

export const metadata = {
  title: "Moodflix - episodeTitle",
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

const EpisodePlayer = function ({ params }: getParams) {
  const episodeOrder = parseFloat(params.id?.toString());
  return (
    <>
      <main>
        <EpisodeClient episodeOrder={episodeOrder} />
      </main>
    </>
  );
};

export default EpisodePlayer;
