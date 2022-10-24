import {callApi} from "../utils/callApi";

const prefixUrl = 'api';

export const login = (params: object) => {
    return callApi('api/users/login','post', params);
};

// export const dologin = (params: any) => {
//     return callApi('api/users/register','post', params);

// };

export const dologin = (params: any) => {
	return callApi("api/users/register",'post', params);
};
