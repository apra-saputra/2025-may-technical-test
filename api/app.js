import * as dotenv from 'dotenv'
dotenv.config()

import express from "express";
import cors from "cors";
import routers from "./routers/routers.js";
import { logInput } from "./middlewares/logInput.js";
import { apiKeyMiddleware } from "./middlewares/apikey.js";

const app = express();

app.use(cors("*"));
app.use(logInput);
app.use(apiKeyMiddleware);

const PORT = process.env.PORT || 3000;

app.use(routers);

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
