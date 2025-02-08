import jwt from "jsonwebtoken";
import redisClient from "../service/redis.service.js";

export const authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).send({
        error: "Unauthorized user",
      });
    }
    const isBlackListed = await redisClient.get(token);

    if (isBlackListed) {
      res.cookie("token", "");
      return res.status(401).send({
        error: "Unauthorized User",
      });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).send({ error: "Unauthorized User" });
  }
};
