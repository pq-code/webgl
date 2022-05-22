import {callApi} from "../utils/callApi";
const prefixUrl = 'api';
export const searchImgeapi = (data: any) => {
	return callApi({
		url: "search",
		method: 'post',
		data: data,
		prefixUrl
	});
};
export const personImgeapi = (data: any) => {
	return callApi({
		url: "person",
		method: 'post',
		data: data,
		prefixUrl
	});
};
export const annotateImgeapi = (data: any) => {
	return callApi({
		url: "annotate",
		method: 'post',
		data: data,
		prefixUrl
	});
};

