import api from "./api";

interface UserParams {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  created_at: string;
}

export const profileService = {
  fetchCurrent: async () => {
    const token = sessionStorage.getItem("moodflix-token");

    const res = await api
      .get("/users/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        return err.response;
      });

    return res.data;
  },

  userUpdate: async (params: UserParams) => {
    const token = sessionStorage.getItem("moodflix-token");

    const res = await api
      .put("/users/current", params, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => {
        if (err.response.status === 400 || err.response.staus === 401) {
          return err.response;
        }

        return err;
      });

    return res.status;
  },
};

export default profileService;
