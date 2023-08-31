import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad, RequestEvent } from './$types';

export const load = ((loadServerEvent) => {
	const { locals } = loadServerEvent;

	// if (locals.user.username !== 'SomeOne') {
	// 	throw redirect(303, '/');
	// }
}) satisfies PageServerLoad;

export const actions = {
	login: async ({ fetch, locals, request, cookies, url }: RequestEvent) => {
		const data = Object.fromEntries(await request.formData()) as {
			email: string;
			password: string;
		};
		// if (true) console.log('로그 입력된 값 ==> ', data.email, data.password);

		if (!data.email || !data.password) {
			return fail(400, { email: data.email, message: 'Missing username or password' });
		}

		const response = await fetch('https://dummyjson.com/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				username: 'kminchelle',
				password: '0lelplR'
			})
		});
		const fetchData = await response.json();
		locals.user = {
			id: fetchData.email,
			username: fetchData.username
		};

		console.log('::::::====> ', fetchData);

		/*
		{
			id: 15,
			username: 'kminchelle',
			email: 'kminchelle@qq.com',
			firstName: 'Jeanne',
			lastName: 'Halvorson',
			gender: 'female',
			image: 'https://robohash.org/autquiaut.png',
			token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZyIsImlhdCI6MTY5MzM4MTMyMywiZXhwIjoxNjkzMzg0OTIzfQ.50Xz4vdAEdQnEgZxLpr2VNz0sOXwFpIxV_BEnlO8YtY'
		}
	*/

		try {
			cookies.set('email', data.email, { path: '/' });
			throw redirect(303, url.searchParams.get('redirectTo') || '/');
			// return { message: 'Logged in' };
		} catch (e) {
			console.error(e);
			throw e;
		}
	}
} satisfies Actions;
