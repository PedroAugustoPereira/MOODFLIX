import { favoriteService } from "../services/favoriteService";
import { Request, Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";

export const favoritesController = {
    //POST //favorites
    save: async (req: AuthenticatedRequest, res: Response) => {
        const userId = req.user?.id;
        const { courseId } = req.body;

        console.log(userId, courseId);

        if (userId === undefined) {
            return res.status(400).json({ message: "Null User from token" });
        }

        try {
            const favorite = await favoriteService.create(courseId, userId);
            return res.status(201).json(favorite);
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    },
};
