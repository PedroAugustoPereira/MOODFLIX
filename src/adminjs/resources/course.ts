import { ResourceOptions } from "adminjs";

export const courseResourceOptions: ResourceOptions = {
  navigation: "Catalogo",
  editProperties: [
    "name",
    "synopsis",
    "thumbnailUrl",
    "featured",
    "categoryId",
  ],
  filterProperties: [
    "name",
    "synopsis",
    "featured",
    "categoryId",
    "createdAt",
    "updatedAt",
  ],
  listProperties: ["id", "name", "featured", "categoryId"],
  showProperties: [
    "name",
    "synopsis",
    "featured",
    "thumbnailUrl",
    "categoryId",
    "createdAt",
    "updatedAt",
  ],
};
