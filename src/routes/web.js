import express from "express";
import homeController from "../controller/homeController"



const router = express.Router();


/**
 * 
 * @param {*} app express app
 * @returns 
 */
const initWebRoutes = (app) => {
    // path, handler
    router.get('/', homeController.handleHello)
    router.get("/users",homeController.handleUserPage)
    router.post("/users/create-user", homeController.handleCreateUser)
    router.post("/delete-User/:id", homeController.handleDeleteUser)
    router.get("/Update-User/:id", homeController.getUpdateUserPage)
    router.post("/users/Update-User", homeController.handleUpdateUsers)
    return app.use("/", router);
}

export default initWebRoutes