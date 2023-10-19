import api from "./api";

interface watchTimeParams {
  episodeId: number;
  seconds: number;
}

const watchEpisodeService = {
  getWatchTime: async (episodeId: number) => {
    const token = sessionStorage.getItem("moodflix-token");

    const res = await api
      .get(`/episodes/${episodeId}/watchTime`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        console.log(err.response);
        return err.response;
      });

    return res;
  },

  setWatchTime: async ({ episodeId, seconds }: watchTimeParams) => {
    const token = sessionStorage.getItem("moodflix-token");

    const res = await api
      .post(
        `/episodes/${episodeId}/watchTime`,
        {
          seconds,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((err) => {
        return err.response;
      });

    return res;
  },
};

export default watchEpisodeService;
