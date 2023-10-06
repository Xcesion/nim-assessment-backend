const { Router } = require("express");
const menuController = require("../controllers/menuController");

const menuRouter = Router();
menuRouter.use("/search", menuController.getSearch);
menuRouter.get("/", menuController.getAll);
menuRouter.get("/:id", menuController.getOne);
menuRouter.post("/", menuController.create);
// PUT endpoint
menuRouter.put("/:id", menuController.update);
menuRouter.delete("/:id", menuController.remove);
menuRouter.get("/search", menuController.getSearch);

module.exports = menuRouter;
