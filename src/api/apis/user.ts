import { http } from '../index';
import { LoginData, LoginRes } from '../types/types';
import { guid } from '../../utils/index';
export const login = (params: LoginData) => {
    return new Promise((resolve, reject) => {
        http.post<LoginRes>('api/users/login', params).then(res => {
            if (res.code == 0) {
                localStorage.setItem('token', res.result.token);
            }
            resolve(res);
            reject(res);
        });
    });
};

export const dologin = (params: any) => {
    return http.post('api/users/register', params);
};
