import { fail, redirect } from '@sveltejs/kit';
import type { Tcontent } from '$lib/types';
import type { Actions, PageServerLoad } from './$types';

let contacts: Tcontent[] = [
	{
		id: 1,
		name: '김하나',
		email: 'hana@mail.com',
		gender: true,
		birth: new Date('1975-12-17'),
		job: '요양보호사',
		phone: '00100000000',
		region: '서울'
	},
	{
		id: 2,
		name: '김둘',
		email: 'hana11@mail.com',
		gender: true,
		birth: new Date('1985-12-17'),
		job: '요양보호사',
		phone: '00100001111',
		region: '부산'
	},
	{
		id: 3,
		name: '김셋',
		email: 'hana22@mail.com',
		gender: false,
		birth: new Date('1995-12-17'),
		job: '사회복지사',
		phone: '0010002222',
		region: '광주'
	}
];

export const load = ((loadServerEvent) => {
	// console.log(contacts);
	return {
		contacts
	};
}) satisfies PageServerLoad;

export const actions = {
	create: async (requestEvent) => {
		const { request } = requestEvent;
		const id = crypto.randomUUID();
		const { name, gender, job, email, phone, birth } = Object.fromEntries(
			await request.formData()
		) as {
			name: string;
			gender: string;
			job: string;
			email: string;
			phone: string;
			birth: string;
		};

		if (name.length < 2) {
			return fail(400, {
				error: true,
				message: '이름은 2자 이상이어야 합니다.',
				name,
				gender,
				job,
				email,
				phone,
				birth
			});
		}

		const contact = {
			id,
			name,
			gender,
			job,
			email,
			phone,
			birth
		};

		console.log('contact---->', contact);
		contacts.push(contact);

		return {
			success: true
		};
	},
	delete: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');
		contacts = contacts.filter((contact) => contact.id != id);

		return {
			sucess: true
		};
	}
} satisfies Actions;
