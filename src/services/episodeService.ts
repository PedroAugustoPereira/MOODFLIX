import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { WatchTimeAttributes } from "./../models/WatchTime";
import { WatchTime } from "../models";

export const episodeService = {
    streamEpisodeToResponse: async (res: Response, videoUrl: string, range: string | undefined) => {
        const filePath = path.join(__dirname, "..", "../uploads", videoUrl); //Obtém o arquivo
        const fileStat = fs.statSync(filePath); //Obtém dados do arquivo

        if (range) {
            const parts = range.replace(/bytes=/, "").split("-"); // removendo a string bytes e separando os dados de range em um array
            const start = parseInt(parts[0], 10); //pegando o primeiro indice do array, que é  onde o video incia
            const end = parts[1] ? parseInt(parts[1], 10) : fileStat.size - 1; // pegando o final, se houver

            const chunkSize = end - start - 1; // pegando o tamanho que vamos transimitir para o front-end

            const file = fs.createReadStream(filePath, {
                start,
                end,
            }); // criando um fluxo de leitura do arquivo, especificando onde começa e onde termina

            const head = {
                "Content-range": `bytes ${start}-${end}/${fileStat.size}`, //especificamos os bytes de resposa
                "Accept-Ranges": "bytes", //dizemos que o range será em bytes
                "Content-Length": chunkSize, //definimos o tamanho
                "Content-Type": "video/mp4", //tipo de arquivo de resposta
            };

            res.writeHead(206, head); //escrevemos na saída com status de 2006

            file.pipe(res); //passamos essa instancia de arquivo delimitado para uma resposta no res, o pipe vai ler o arquivo e escrever na resposta com o portocolo HTTP
        } else {
            const head = {
                "Content-Length": fileStat.size,
                "Content-Type": "video/mp4",
            };

            res.writeHead(200, head);

            fs.createReadStream(filePath).pipe(res);
        }
    },

    getWatchTime: async (userId: number, episodeId: number) => {
        const watchTime = await WatchTime.findOne({
            attributes: ["seconds"],
            where: {
                userId,
                episodeId,
            },
        });

        return watchTime;
    },

    setWatchTime: async ({ userId, episodeId, seconds }: WatchTimeAttributes) => {
        const watchTimeAlreadyExists = await WatchTime.findOne({
            where: {
                userId,
                episodeId,
            },
        });

        if (watchTimeAlreadyExists) {
            watchTimeAlreadyExists.seconds = seconds;
            await watchTimeAlreadyExists.save();
            return watchTimeAlreadyExists;
        } else {
            const watchTime = await WatchTime.create({
                userId,
                episodeId,
                seconds,
            });

            return watchTime;
        }
    },
};
