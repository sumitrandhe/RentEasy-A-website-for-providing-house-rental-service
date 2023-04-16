import http from '../service/httpServices';
import config from '../config.json';

const apiEndPoint = config.apiUrl + "/auth";

export function login(email, password){
    const username = email;
  return http.post(apiEndPoint, {username, password});
}

export function getJwt(){
    return localStorage.getItem("token");
}