"use client";

import { EpisodeType } from "@/services/courseService";
import styles from "./styles.module.scss";

interface props {
  episode: EpisodeType;
}

const EpisodeList = ({ episode }: props) => {
  const handleSeconndsToMin = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);

    const seconds = totalSeconds % 60;

    const toString = (num: number) => {
      return num.toString().padStart(2, "0");
    };

    const result = `${toString(minutes)}:${toString(seconds)}`;
    return result;
  };

  return (
    <>
      <div className={styles.episodeCard}>
        <div className={styles.episodeOrderTime}>
          <p className={styles.episodeOrder}> Episódio N {episode.order}</p>
          <p className={styles.episodeTime}>
            {handleSeconndsToMin(episode.secondsLong)}
          </p>
        </div>

        <div className={styles.episodeTitleDescription}>
          <p className={styles.episodeTitle}>{episode.name}</p>
          <p className={styles.episodeDescription}>{episode.synopsis}</p>
        </div>
      </div>
    </>
  );
};

export default EpisodeList;
