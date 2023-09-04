import { Request, Response } from "express";
import { episodeService } from "../services/episodeService";

export const episodeController = {
    //GET /episode/stream?videoUrl=
    stream: async (req: Request, res: Response) => {
        const { videoUrl } = req.query;

        try {
            if (typeof videoUrl !== "string") {
                throw new Error("videUrl must be not a string");
            }

            const range = req.headers.range; //bytes=0-1024 example
            episodeService.streamEpisodeToResponse(res, videoUrl, range);
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    },
};
