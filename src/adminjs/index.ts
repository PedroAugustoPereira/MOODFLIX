import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database";
import { adminJsResources } from "./resources";
import { locale } from "./locale";
import { dashboardOptions } from "./dashboard";
import { brandingOptions } from "./branding";
import { authOptions } from "./auth";

AdminJS.registerAdapter(AdminJSSequelize); //configura nosso ORM

export const adminJs = new AdminJS({
  databases: [sequelize], // databases types, can be other types
  rootPath: "/admin",
  resources: adminJsResources,
  branding: brandingOptions,
  locale: locale,
  dashboard: dashboardOptions,
});

export const adminJsRouter = AdminJSExpress.buildAuthenticatedRouter(
  adminJs,
  authOptions,
  null,
  {
    resave: false,
    saveUninitialized: false,
  }
);
