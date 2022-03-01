"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserClass = void 0;
const typegoose_1 = require("@typegoose/typegoose");
class UserClass {
    static findByUserId(id) {
        return this.find({ id }).exec();
    }
    get tag() {
        return `${this.username}${this.discriminator}`;
    }
}
__decorate([
    (0, typegoose_1.prop)({ type: String }),
    __metadata("design:type", String)
], UserClass.prototype, "id", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    __metadata("design:type", String)
], UserClass.prototype, "username", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    __metadata("design:type", String)
], UserClass.prototype, "discriminator", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Number, required: false, default: 50000 }),
    __metadata("design:type", Number)
], UserClass.prototype, "balance", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Number, required: false, default: 0 }),
    __metadata("design:type", Number)
], UserClass.prototype, "bank", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: false, default: 'user' }),
    __metadata("design:type", String)
], UserClass.prototype, "workAs", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Number, required: false, default: 100000 }),
    __metadata("design:type", Number)
], UserClass.prototype, "maxBank", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: () => [String], required: false, default: [] }),
    __metadata("design:type", Array)
], UserClass.prototype, "items", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Date, required: false, default: Date.now() }),
    __metadata("design:type", Date)
], UserClass.prototype, "useBotAt", void 0);
exports.UserClass = UserClass;
let UserModel = (0, typegoose_1.getModelForClass)(UserClass);
exports.default = UserModel;
