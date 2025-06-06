import { HTTP_STATUS } from "../helpers/httpStatus.js";
import { sendResponse } from "../helpers/sendResponse.js";

export const apiKeyMiddleware = (req, res, next) => {
  try {
    const header = req.headers;
    const key = header["x-api-key"];
    if (!key) throw new Error("access_invalid");
    const apikey = process.env.APIKEY;

    if (apikey !== key) throw new Error("access_invalid");

    next();
  } catch (error) {
    return sendResponse(res, HTTP_STATUS.UNAUTHORIZED, { error });
  }
};
