import { Request, Response } from "express";
import { courseService } from "../services/courseService";

export const coursesController = {
    //GET /courses/featured
    featured: async (req: Request, res: Response) => {
        try {
            const featuredCourses =
                await courseService.getRandomFeaturedCourses();
            return res.json(featuredCourses);
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    },

    //GET /courses/newest
    newest: async (req: Request, res: Response) => {
        try {
            const newests = await courseService.getTopTenNewest();
            return res.json(newests);
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    },

    //GET /courses/:id
    show: async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const course = await courseService.findByWidthEpisodes(id);
            return res.json(course);
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    },
};
