import jwt from "jsonwebtoken";

const secretTemp = "chave-teste";

export const jwtService = {
    signToken: (payload: string | Object | Buffer, expiration: string) => {
        return jwt.sign(payload, secretTemp, {
            expiresIn: expiration,
        });
    },

    verifyToken: (token: string, callbackFn: jwt.VerifyCallback) => {
        jwt.verify(token, secretTemp, callbackFn);
    },
};
