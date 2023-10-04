import api from "./api";

export type EpisodeType = {
  id: number;
  name: string;
  synopsis: string;
  order: number;
  videoUrl: string;
  secondsLong: number;
};

export type CourseType = {
  id: number;
  name: string;
  thumbnailUrl: string;
  synopsis: string;
  espisodes?: EpisodeType[];
};

const courseService = {
  getNewestCourse: async () => {
    const res = await api.get("/courses/newest").catch((err) => {
      console.log(err.response.data.message);
      return err.response;
    });

    return res;
  },

  getFeaturedCourses: async () => {
    const token = sessionStorage.getItem("moodflix-token");

    const res = await api
      .get("/courses/featured", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((error) => {
        console.log(error.response.data.message);

        return error.response;
      });

    return res;
  },
};

export default courseService;
