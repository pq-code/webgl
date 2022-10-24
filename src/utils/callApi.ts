// import axios from "axios";
//
// const callApi = axios({
// 	// baseURL: 'http://localhost:3005', // 设置统一的请求前缀
// 	timeout: 15000,
// 	withCredentials: true, // 是否可以携带cookie
// 	headers: {
// 		'Content-Type': 'application/json'
// 	},
// }).then((respone)=>{
//
// })
// export default callApi;

import axios from 'axios';

export const callApi = ( url='/', method='post', params:object) => {
	if (!url) {
		const error = new Error('请传入url');
		return Promise.reject(error);
	}

	return axios({
		url,
        method,
        data: params,
		timeout: 20000,
		withCredentials: true,
		headers: {
			'Content-Type': 'application/json'
		},
	})
		.then((response: any) => {
			return response.data
		})
		.catch((error: any) => {
			console.log(error.response.data);
			return error.response.data
		});
};
