import jwt from "jsonwebtoken";
import { ENV_VARS } from '../config/envVars.js' 

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, ENV_VARS.JWT_SECRET, {expiresIn: '15d'});
    res.cookie("jwt-netflix", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //15 days in MS
        httpOnly:true, //Prevents xss attacks cross-site scripting attacks by making it not accessible by js
        sameSite:"strict", // prevents CSRF cross-site req forgery attacks
        secure: ENV_VARS.NODE_ENV !== "development",
    });
    return token;
};