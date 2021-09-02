import { User } from "./user";

export interface TokenModel {
    expiration: Date
    token : string
    user : User
}