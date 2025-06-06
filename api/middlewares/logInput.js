export const logInput = (req, res, next) => {
  console.log(req.method, req.url, "FROM =>", req.ip);
  next();
};
