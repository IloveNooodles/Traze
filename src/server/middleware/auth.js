import jwt from "jsonwebtoken";

const auth = async(req, res, next) => {
    try {
        const raw = req.headers.authorization;

        if (!raw) return res.status(401).json({ message: 'Unauthenticated' });

        const token = raw.split(" ")[1];

        const isCustomAuth = token.length < 500;

        let decodedData;

        if(token && isCustomAuth) {
            decodedData = jwt.verify(token, 'traze');

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export default auth;