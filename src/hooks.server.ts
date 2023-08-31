import { redirect } from '@sveltejs/kit';
import type { Handle } from '@sveltejs/kit';
// npm i parse-nested-form-data
// import { parseFormData } from 'parse-nested-form-data';

export const handle: Handle = async ({ event, resolve }) => {
	/*
        event : requestEvent
        resolve : requestEvent를 조작해서 서버로 보내는 개체
    */

	// [ 1. 서버 다녀오기 전의 작업 ]
	// if (event.url.origin !== 'http://localhost:5173') {
	// 	throw redirect(303, 'https://google.com');
	// } else {
	// 	if (event.request.method === 'POST') {
	// 		const formData = await event.request.formData();
	// 		const data = parseFormData(formData);

	// 		// if (T) console.log('formData ====> ', data);
	// 		// { email: 'test@mail.com', password: 'ddddd' }
	// 	}
	// }

	// [ 2. 서버에서 작업해서 보내온 값(response) ]
	const response = await resolve(event);

	// [ 3. response 값 가공 ]

	return response;
};
