import requests from "../request.js";

export function login(userName, passWord) {
    return requests.post('/login', {
        userName,
        passWord
    }
    )
}