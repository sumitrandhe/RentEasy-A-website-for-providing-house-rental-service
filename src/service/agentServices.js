import http from '../service/httpServices';
import config from '../config.json';

const apiEndPoint = config.apiUrl + "/agents"

export function register(agent){
    return http.post(apiEndPoint, {
        firstName : agent.firstName,
        lastName : agent.lastName,
        email : agent.email,
        number : agent.number,
        password : agent.password,
        aadhar : agent.aadhar
    })
}

export function getAgents(){
    return http.get(apiEndPoint);
}
