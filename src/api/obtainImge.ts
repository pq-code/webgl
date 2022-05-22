import {callApi} from "../utils/callApi";
const prefixUrl = 'image';

export const obtainImage = (filename,data: any) => {
	return callApi({
		url: filename,
		method: 'post',
		data: data,
		prefixUrl
	});
};

