import { NextFunction, Request, Response } from "express";
import { jwtService } from "../services/jwtService";
import { userService } from "../services/userService";
import { JwtPayload } from "jsonwebtoken";
import { UserInstance } from "../models/User";

export interface AuthenticatedRequest extends Request {
    user?: UserInstance | null;
}

export function ensureAuth(
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction,
) {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
        return res
            .status(401)
            .json({ message: "Token não enconstrado, necessário fazer login" });
    }

    const token = authorizationHeader.replace(/Bearer /, "");

    jwtService.verifyToken(token, async (err, decoded) => {
        if (err || typeof decoded === "string") {
            return res.status(401).json({ message: "User is not authorized" });
        }

        const user = await userService.findByEmail(
            (decoded as JwtPayload).email,
        );
        req.user = user;
        next();
    });
}

export function ensureAuthViaQuery(
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction,
) {
    const { token } = req.query;

    if (!token) {
        return res.status(400).json({ messsage: "O token não foi fernecido" });
    }

    if (typeof token !== "string") {
        return res
            .status(40)
            .json({ messsage: "O tipo do token não está correto" });
    }

    jwtService.verifyToken(token, async (err, decoded) => {
        if (err || typeof decoded === "string") {
            return res.status(401).json({ message: "User is not authorized" });
        }

        const user = await userService.findByEmail(
            (decoded as JwtPayload).email,
        );
        req.user = user;
        next();
    });
}
