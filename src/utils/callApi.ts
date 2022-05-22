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
import ps from 'qs';

export const callApi = ({ url = '/', prefixUrl = '/', ...option }) => {
	if (!url) {
		const error = new Error('请传入url');
		return Promise.reject(error);
	}
	const fullUrl = `/${prefixUrl}/${url}`;

	return axios({
		url: fullUrl,
		...option,
		timeout: 15000,
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
