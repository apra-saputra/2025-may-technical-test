import express from "express";
import { HTTP_STATUS } from "../helpers/httpStatus.js";
import { getDiaryContentById, getDiaryFeed } from "../cms.js";

const routers = express.Router();

routers.get("/", (req, res) => {
  return sendResponse(res, HTTP_STATUS.OK, { message: "SERVER RUNNING..." });
});

// dairies
routers.get('/dairies', getDiaryFeed)
routers.get('/dairies/:id', getDiaryContentById)

export default routers;
