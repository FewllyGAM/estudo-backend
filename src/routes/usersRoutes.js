import express from "express";
import UserController from "../controllers/userController.js";

const routes = express.Router();

routes.get("/users", UserController.getUsers);
routes.get("/users/:id", UserController.getUserById);
routes.get("/users/:id/songs", UserController.getSongsByUser);
routes.get("/users/:id/songs/favorite", UserController.getUserFavoriteSong);
routes.get("/users/:id/genres", UserController.getGenresByUser);

export default routes;
