import { AuthenticatedRequest } from "../middlewares/auth";
import { Response } from "express";
import { userService } from "../services/userService";

export const usersController = {
    //GET /users/current
    show: async (req: AuthenticatedRequest, res: Response) => {
        const currentUser = req.user!;

        try {
            return res.json(currentUser);
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    },

    //PUT /users/current

    update: async (req: AuthenticatedRequest, res: Response) => {
        const { id } = req.user!;
        const { firstName, lastName, phone, email, birth } = req.body;

        try {
            const updatedUser = await userService.update(id, {
                firstName,
                lastName,
                phone,
                email,
                birth,
            });

            return res.json(updatedUser);
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    },

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
