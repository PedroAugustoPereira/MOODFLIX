import uploadFileFeature from "@adminjs/upload";
import { ResourceOptions, FeatureType } from "adminjs";

import path from "path";

export const episodeResourceOptions: ResourceOptions = {
  navigation: "Catalogo",
  editProperties: [
    "name",
    "synopsis",
    "courseId",
    "order",
    "uploadVideo",
    "secondsLong",
  ],
  filterProperties: [
    "name",
    "synopsis",
    "courseId",
    "videoUrl",
    "secondsLong",
    "createdAt",
    "updatedAt",
  ],
  listProperties: ["id", "name", "courseId", "order", "secondsLong"],
  showProperties: [
    "name",
    "synopsis",
    "courseId",
    "order",
    "videoUrl",
    "secondsLong",
    "createdAt",
    "updatedAt",
  ],
};

export const episodeResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    provider: {
      local: {
        bucket: path.join(__dirname, "..", "..", "..", "uploads"), //Alterar a função path de local-provider.js
      },
    },
    properties: {
      key: "videoUrl",
      file: "uploadVideo",
    },

    uploadPath: (record, filename) => {
      return `videos/course-${record.get("courseId")}/${filename}`;
    },
  }),
];
