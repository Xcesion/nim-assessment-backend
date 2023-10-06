const { Router } = require("express");
const orderController = require("../controllers/orderController");

const orderRouter = Router();

orderRouter.get("/", orderController.getAll);
orderRouter.get("/:id", orderController.getOne);
orderRouter.post("/", orderController.create);
orderRouter.put("/:id", orderController.update);
orderRouter.delete("/:id", orderController.remove);
orderRouter.get("/total-sales", orderController.getTotalSales);
orderRouter.use("/total-sales", orderController.getTotalSales);
orderRouter.use("/status", orderController.getOrdersByStatus);
orderRouter.get("/status", orderController.getOrdersByStatus);


module.exports = orderRouter;
