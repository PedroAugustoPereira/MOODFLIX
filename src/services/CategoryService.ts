import { Category } from "../models";

export const CategoryService = {
  findAllPaginated: async (page: number, perPage: number) => {
    const offset = (page - 1) * perPage;

    const { rows, count } = await Category.findAndCountAll({
      attributes: ["id", "name", "position"],
      order: [["position", "ASC"]],
      limit: perPage,
      offset: offset,
    });

    return {
      categories: rows,
      page: page,
      perPage: perPage,
      total: count,
    };
  },
};
