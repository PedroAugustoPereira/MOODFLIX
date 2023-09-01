import { Course } from "../models";

export const courseService = {
    findByWidthEpisodes: async (id: string) => {
        const courseWidthEpisodes = await Course.findByPk(id, {
            attributes: [
                "id",
                "name",
                "synopsis",
                ["thumbnail_url", "thumbnailUrl"],
            ],

            include: {
                association: "Episodes",
                attributes: [
                    "id",
                    "name",
                    "synopsis",
                    "order",
                    ["video_url", "videoUrl"],
                    ["seconds_long", "secondsLong"],
                ],
                order: [["order", "ASC"]],
                separate: true, //O order só funciona em um include quando o separate for true, que vai separar as querys uma por uma
            },
        });

        return courseWidthEpisodes;
    },
};
