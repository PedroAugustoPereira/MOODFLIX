import { User } from "../models/";
import { EpisodeInstance } from "../models/Episode";
import { UserCreationAttributes } from "../models/User";

function filterLastEpisodesByCourse(episodes: EpisodeInstance[]) {
    const coursesOnList: number[] = [];

    const lastEpisodes = episodes.reduce((currentList, episode) => {
        if (!coursesOnList.includes(episode.courseId)) {
            coursesOnList.push(episode.courseId);
            currentList.push(episode);
            return currentList;
        }

        const episodeFromSameCourse = currentList.find((ep) => ep.courseId === episode.courseId);

        if (episodeFromSameCourse!.order > episode.order) {
            return currentList;
        }

        const listWithoutEpisodeFromSameCourse = currentList.filter(
            (ep) => ep.courseId !== episode.courseId,
        );
        listWithoutEpisodeFromSameCourse.push(episode);

        return listWithoutEpisodeFromSameCourse;
    }, [] as EpisodeInstance[]);

    return lastEpisodes;
}

export const userService = {
    findByEmail: async (email: string) => {
        const user = await User.findOne({
            where: {
                email,
            },
        });

        return user;
    },

    create: async (attributes: UserCreationAttributes) => {
        const user = User.create(attributes);
        return user;
    },

    getKeepWatchingList: async (id: number) => {
        const userWithWathingEpisodes = await User.findByPk(id, {
            //procurar com a chave primaria de um usuario
            include: {
                association: "Episodes", // incluir a associação cde Episode baseada com a chave primaria de usuario, ou seja, aqui teriamos um usuario comv varios epsiodes
                attributes: [
                    "id",
                    "name",
                    "synopsis",
                    "order",
                    ["video_url", "videoUl"],
                    ["seconds_long", "secondsLong"],
                    ["course_id", "courseId"],
                ],
                include: [
                    {
                        association: "Course", // incluir a asssociação de curso, ou seja, cada episode vai ter dados do curso correspondente
                        attributes: ["id", "name", "synopsis", ["thumbnail_url", "thumbnailUrl"]],
                    },
                ],
                through: {
                    as: "watchTime", //criando uma renomeação para nossa tabela de ligação enttre Use e Epsideo
                    attributes: ["seconds", ["updated_at", "updatedAt"]],
                },
            },
        });

        if (!userWithWathingEpisodes) {
            throw new Error("Usuário não encontrado.");
        }

        const keepWathcingList = filterLastEpisodesByCourse(userWithWathingEpisodes.Episodes!);
        keepWathcingList.sort((a, b) => {
            //@ts-ignore
            return a.watchTime.updatedAt < b.watchTime.updatedAt ? 1 : -1;
        });

        return keepWathcingList;
    },
};
