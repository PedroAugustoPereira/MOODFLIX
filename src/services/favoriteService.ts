import { Favorite } from "../models";

export const favoriteService = {
    create: async (courseId: number, userId: number) => {
        const favorite = await Favorite.create({
            userId,
            courseId,
        });

        return favorite;
    },
};
