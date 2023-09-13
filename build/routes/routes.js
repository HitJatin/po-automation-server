"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vendor_route_1 = __importDefault(require("./vendor.route"));
const sku_route_1 = __importDefault(require("./sku.route"));
const buying_order_route_1 = __importDefault(require("./buying-order.route"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.status(200).send("Api is working");
});
router.use("/vendor", vendor_route_1.default);
router.use("/sku", sku_route_1.default);
router.use("/buying-order", buying_order_route_1.default);
exports.default = router;
