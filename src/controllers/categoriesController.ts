import { Request, Response } from "express";
import { CategoryService } from "../services/CategoryService";
import { getPaginationParams } from "../helpers/getPaginationParams";

export const categoriesController = {
  //GET /categoriers
  index: async (req: Request, res: Response) => {
    const [pageNumber, perPageNumber] = getPaginationParams(req.query);

    try {
      const paginatedCategories = await CategoryService.findAllPaginated(
        pageNumber,
        perPageNumber
      );

      return res.json(paginatedCategories);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  //GET /categories/:id
  show: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const category = await CategoryService.findByIdWithCourses(id);
      return res.json(category);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
