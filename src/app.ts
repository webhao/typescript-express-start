import express from "express";
import compression from "compression";
import bodyParser from "body-parser";
import ExpressValidator from "express-validator";
import { PORT } from "./config/env";
import proxy from "http-proxy-middleware";

// Controllers (route handlers)
import * as homeController from "./controllers/home";

// Create Express server
const app = express();

// swagger文档
if (app.get("env") === "development") {
  app.all("/swagger/*", proxy({
    target: "http://swagger:8080",
    pathRewrite: {
      "^/swagger": "/"
    }
  }));
}

// Express configuration
app.set("port", PORT);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(ExpressValidator());

/**
 * Primary app routes.
 */
app.get("/", homeController.index);
app.get("/async", homeController.asyncFun);

export default app;
