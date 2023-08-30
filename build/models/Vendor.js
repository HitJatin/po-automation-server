"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vendor = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const VendorBank_1 = __importDefault(require("./VendorBank"));
const VendorOther_1 = __importDefault(require("./VendorOther"));
const SKU_1 = __importDefault(require("./SKU"));
const BuyingOrder_1 = __importDefault(require("./BuyingOrder"));
let Vendor = exports.Vendor = class Vendor extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER
    })
], Vendor.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    sequelize_typescript_1.Unique,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING
    })
], Vendor.prototype, "vendorCode", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING
    })
], Vendor.prototype, "companyName", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    })
], Vendor.prototype, "gst", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    })
], Vendor.prototype, "gstAtt", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    })
], Vendor.prototype, "address", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING
    })
], Vendor.prototype, "coi", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING
    })
], Vendor.prototype, "coiAtt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING
    })
], Vendor.prototype, "msme", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    })
], Vendor.prototype, "msmeAtt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING
    })
], Vendor.prototype, "tradeMark", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING
    })
], Vendor.prototype, "tradeMarkAtt", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
    })
], Vendor.prototype, "agreementAtt", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => VendorBank_1.default)
], Vendor.prototype, "vendorBank", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => VendorOther_1.default)
], Vendor.prototype, "otherFields", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => SKU_1.default)
], Vendor.prototype, "skus", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => BuyingOrder_1.default)
], Vendor.prototype, "buyingOrders", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt
], Vendor.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt
], Vendor.prototype, "updatedAt", void 0);
exports.Vendor = Vendor = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: true,
        tableName: 'vendor'
    })
], Vendor);
