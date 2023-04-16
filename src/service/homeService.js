import http from '../service/httpServices'
import config from '../config.json';


let apiEndpoint = config.apiUrl + "/homes";


export function getHomes(){
    return http.get(apiEndpoint);
}
export function saveHome(id, home){
    apiEndpoint += "/" + id;
    return http.post(apiEndpoint, home);
}
