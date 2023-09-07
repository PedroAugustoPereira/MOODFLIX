import express from "express";
import { sequelize } from "./database";
import { adminJs, adminJsRouter } from "./adminjs";
import debug from "debug";
import router from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(adminJs.options.rootPath, adminJsRouter);
app.use(express.static("public"));
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(__dirname);
    console.log(`Served started successfully at port ${PORT}`);

    sequelize.authenticate().then(() => {
        console.log("db connection has been sucess");
    });
});
