import { authService } from "../services/auth.service.js";

export const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const user = authService.verifyToken(token);

    if (user) {
      req.user = user;
      return next();
    }
  }

  return res.status(401).json({ message: "Unauthorized" });
};
