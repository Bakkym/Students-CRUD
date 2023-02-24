"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./database/database");
const app = (0, app_1.default)(database_1.database);
app.listen(4000, () => {
    console.log('server on port', 4000);
});
