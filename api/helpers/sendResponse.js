import { HTTP_STATUS_MESSAGES } from "./httpStatus.js";

export const sendResponse = (res, statusCode, data = null) => {
  const message = HTTP_STATUS_MESSAGES[statusCode] || "Unknown Status";
  return res.status(statusCode).json({
    code: statusCode,
    status: message,
    data: data,
  });
};
