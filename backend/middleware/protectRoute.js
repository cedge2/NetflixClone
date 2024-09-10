import jwt from 'jsonwebtoken';
import { user } from '../models/user.models.js';
import { ENV_VARS } from '../config/envVars.js';

export const protectRoute = async (req, rez, next) => {
    try {
        const token = req.cookies[jwt-netflix]
        if(!token) {
            return res.status(401).json({success: false, message: 'Unauthorized - no token provided'});
        }

        const decode = jwt.verify(token, ENV_VARS.JWT_SECRET);

        if(!decoded) {
            return res.status(401).json({success: false, message: 'Unauthorizex - invalid token'});
        }

        const user = await user.findByID(decoded.userId).select('-password');

        if(!user) {
            return res.status(404).json({success: false, message: 'User not found'});
        }

        req.user = user;
        next();

    } catch(error) {
        console.log('Error in protectRoute middleware: ', error.message);
        res.status(500).json({success: false, message: 'Internal server error'});
    }
};
