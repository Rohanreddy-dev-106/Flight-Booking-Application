export default function AccessControl(...accesscontrol) {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).send("Unauthorized");
        }
        if (accesscontrol.includes(req.user.role)) {
            next()
        }
        else {
            return res.status(403).send("Forbidden: Access denied");
        }
    }
}