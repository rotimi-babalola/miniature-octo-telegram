"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = 3000;
app.get('/', (request, response) => {
    response.send('Fuck off!!!');
});
app.listen(PORT, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`Server is running on PORT ${PORT}`);
});
//# sourceMappingURL=app.js.map