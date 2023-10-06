const { Router } = require("express");
const menuController = require("../controllers/menuController");

const menuRouter = Router();

menuRouter.get("/", menuController.getAll);
menuRouter.get("/:id", menuController.getOne);
menuRouter.post("/", menuController.create);
// PUT endpoint
menuRouter.put("/:id", menuController.update);
menuRouter.delete("/:id", menuController.remove);
menuRouter.use("/search", menuController.getSearch);
menuRouter.get("/search", menuController.getSearch);

module.exports = menuRouter;
