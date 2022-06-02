import {callApi} from "../utils/callApi";
const prefixUrl = 'image';

export const obtainImage = (filename: any,data: any) => {
	return callApi({
		url: filename,
		method: 'post',
		data: data,
		prefixUrl
	});
};

