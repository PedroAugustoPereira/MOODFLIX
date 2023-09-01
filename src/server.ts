import express from "express";
import { sequelize } from "./database";
import { adminJs, adminJsRouter } from "./adminjs";
import debug from "debug";
import router from "./routes";

debug("@adminjs/upload");
const app = express();

//it's wich set a path for the new route
app.use(adminJs.options.rootPath, adminJsRouter);
app.use(express.static("public"));
app.use(router);
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`Served started successfully at port ${PORT}`);

  sequelize.authenticate().then(() => {
    console.log("db connection has been sucess");
  });
});
