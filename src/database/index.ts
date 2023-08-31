import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  database: "moodflix_development",
  username: "moodflix",
  password: "04052022",
  define: {
    underscored: true, //snake case para camel case
  },
});
