import { fail, redirect } from '@sveltejs/kit';
import type { Tcontact } from '$lib/types';
import type { Actions, PageServerLoad } from './$types';

let contacts: Tcontact[] = [
	{
		id: '7c053498-0c94-424a-a5a0-093b6a034e54',
		name: '김하나',
		email: 'hana@mail.com',
		gender: '1',
		birth: '1975-12-17',
		job: '요양보호사',
		phone: '00100000000',
		region: '서울'
	},
	{
		id: '7c053498-0c12-424a-a5a0-093b6a034e54',
		name: '김둘',
		email: 'hana11@mail.com',
		gender: '1',
		birth: '1985-12-17',
		job: '요양보호사',
		phone: '00100001111',
		region: '부산'
	},
	{
		id: '7c053498-0c14-424a-a5a0-093b6a034e54',
		name: '김셋',
		email: 'hana22@mail.com',
		gender: '0',
		birth: '1995-12-17',
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

		try {
			// 입력값은 모두 string 형
			const { name, email, gender, birth, job, phone, region } = Object.fromEntries(
				await request.formData()
			) as Tcontact;

			console.log(name, email, gender, birth, job, phone, region);
		} catch (err) {}

		// crypto.randomUUID
		// uuid를 설치하지 않고, uuid를 생성
		const id = crypto.randomUUID();

		// console.log('contact---->', contact);
		// contacts.push(contact);

		// return {
		// 	success: true
		// };
	},
	delete: async ({ request }) => {
		// const formData = await request.formData();
		// const id = formData.get('id');
		// contacts = contacts.filter((contact) => contact.id != id);
		// return {
		// 	sucess: true
		// };
	}
} satisfies Actions;
