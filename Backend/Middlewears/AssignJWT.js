import config from "config"
import jwt from "jsonwebtoken"

export default function assignJWT(id) {
    return jwt.sign({id},config.get("JWT"))
}