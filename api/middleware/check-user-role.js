module.exports = (req, res, next) => {
    try {
        let requestUserType = parseInt(req.body.userType);
        console.log(requestUserType);
        const userType = (requestUserType === 1) ? 1 : (requestUserType === 2) ? 2 : false;
        req.userData = userType;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Not authorized to perform action!'
        });
    }
};