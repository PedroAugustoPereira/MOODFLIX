import { Op } from "sequelize";
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
                association: "episodes",
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

    getRandomFeaturedCourses: async () => {
        const featuerdCourses = await Course.findAll({
            attributes: [
                "id",
                "name",
                "synopsis",
                ["thumbnail_url", "thumbnailUrl"],
            ],
            where: {
                featured: true,
            },
        });

        const randomFeaturedCourses = featuerdCourses.sort(
            //reordena de foma aletoria
            () => 0.5 - Math.random(),
        );

        return randomFeaturedCourses.slice(0, 3);
    },

    getTopTenNewest: async () => {
        const courses = await Course.findAll({
            limit: 10,
            order: [["created_at", "DESC"]],
        });

        return courses;
    },

    getTopTenByLikes: async () => {
        const result = await Course.sequelize?.query(
            `SELECT
                courses.id,
                courses.name,
                courses.synopsis,
                courses.thumbnail_url as thumbnailUrl,
                COUNT(users.id) AS likes
            FROM courses
                LEFT OUTER JOIN likes
                    ON courses.id = likes.course_id
                    INNER JOIN users
                        ON users.id = likes.user_id
            GROUP BY courses.id
            ORDER BY likes DESC
            LIMIT 10;
            `,
        );

        if (result) {
            const [topTen, metadata] = result;
            return topTen;
        } else {
            return null;
        }
    },

    findByName: async (name: string, page: number, perPage: number) => {
        const offset = (page - 1) * perPage;

        const { count, rows } = await Course.findAndCountAll({
            attributes: [
                "id",
                "name",
                "synopsis",
                ["thumbnail_url", "thumbnailUrl"],
            ],
            where: {
                name: {
                    [Op.iLike]: `%${name}%`,
                },
            },
            limit: perPage,
            offset,
        });

        return {
            courses: rows,
            page,
            perPage,
            total: count,
        };
    },
};
