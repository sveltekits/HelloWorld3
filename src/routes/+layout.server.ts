import type { Tuser } from '$lib/types';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (serverLoadEvent) => {
	const { cookies, locals } = serverLoadEvent;
	// if (locals.user !== undefined) {
	// 	user = {
	// 		userid: locals.user.userid,
	// 		username: locals.user.username
	// 	};
	// }

	// if (cookies.get('email') !== null) {
	// 	console.log('========>>>>> ', cookies.get('email'));
	// 	user.username = cookies.get('email') as string;
	// }

	// return { user: locals.user };
};
