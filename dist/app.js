"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
dotenv_1.default.config(); // Load environment variables
const app = (0, express_1.default)();
const PORT = process.env.PORT || 9000;
const mongoURI = process.env.MONGO_URI || "";
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, helmet_1.default)()); // Security middleware
// Routes
app.use("/api/products", product_routes_1.default);
// Test route
app.get("/", (req, res) => {
    res.send("Hello RIDICULES!");
});
// Database Connection
mongoose_1.default
    .connect(mongoURI)
    .then(() => {
    console.log("CONNECTED TO DB");
    app.listen(PORT, () => {
        console.log(`SERVER IS RUNNING ON PORT ${PORT}!`);
    });
})
    .catch((error) => {
    console.error("ERROR CONNECTING TO THE DATABASE:", error);
    console.log("NOT CONNECTED TO DB");
});
exports.default = app;
