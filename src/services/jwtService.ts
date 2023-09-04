import jwt from "jsonwebtoken";

const secretTemp = "chave-teste";

export const jwtService = {
    signToken: (payload: string | Object | Buffer, expiration: string) => {
        return jwt.sign(payload, secretTemp, {
            expiresIn: expiration,
        });
    },
};
