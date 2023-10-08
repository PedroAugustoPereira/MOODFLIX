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

  addToFav: async (courseId: number) => {
    const token = sessionStorage.getItem("moodflix-token");

    const res = await api
      .post(
        "/favorites",
        { courseId },
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

  addLike: async (courseId: number | string) => {
    const token = sessionStorage.getItem("moodflix-token");

    const res = await api
      .post(
        "/likes",
        { courseId },
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

  removeLike: async (courseId: number | string) => {
    const token = sessionStorage.getItem("moodflix-token");

    const res = await api
      .delete(`/likes/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        return err.response;
      });
    return res;
  },

  removeFav: async (courseId: number | string) => {
    const token = sessionStorage.getItem("moodflix-token");

    const res = await api
      .delete("/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { courseId: courseId },
      })
      .catch((err) => {
        return err.response;
      });

    return res;
  },

  getFavCourse: async () => {
    const token = sessionStorage.getItem("moodflix-token");

    const res = await api
      .get("/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        return err.response;
      });

    return res;
  },

  getSearch: async (name: string) => {
    const token = sessionStorage.getItem("moodflix-token");

    const res = await api
      .get(`/courses/search?name=${name}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        return err.response;
      });

    return res;
  },

  getEpisodes: async (id: number | string) => {
    const token = sessionStorage.getItem("moodflix-token");

    const res = await api
      .get(`/courses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        return err.response;
      });

    return res;
  },
};

export default courseService;
