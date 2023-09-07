import { AuthenticatedRequest } from "../middlewares/auth";
import { Response } from "express";
import { userService } from "../services/userService";

export const usersController = {
    //GET /users/current/wathing

    wathing: async (req: AuthenticatedRequest, res: Response) => {
        const { id } = req.user!;

        try {
            const wathing = await userService.getKeepWatchingList(id);
            return res.json(wathing);
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    },
};
