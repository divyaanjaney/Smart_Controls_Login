import axios from 'axios';

const apiService = (options) => {
	const request = {
		...options,
		async: true,
		dataType: 'json',
		headers: {
			'Accept': 'application/json',
			'content-type': 'application/json',
      'Accept-Language': 'en-US',
      'Access-Control-Allow-Credentials':'true',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
		}
	};

	return axios(request)
		.then((response) => response);
};

export default apiService;