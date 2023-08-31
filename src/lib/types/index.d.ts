export type Tuser = {
	id: string;
	username: string;
};

export type TloginUser = {
	email: string;
	password?: string;
};

export interface IContent {
	id: uuid;
	name: string;
	avatar: string;
	gender: string;
	birth: Date;
	job: string;
	email: string;
	phone: string;
	region: string;
}

export type TProduct = {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[5];
};

export type TProductBBS = Product & {
	total: number;
	skip: number;
	limit: number;
};

export let contacts: TContact[] = [
	{
		id: '7c053498-0c94-424a-a5a0-093b6a034e54',
		name: '김하나',
		gender: '1',
		job: '요양보호사',
		email: 'hana@mail.com',
		phone: '00100000000',
		birth: '2023-06-27'
	},
	{
		id: '7c053498-0c12-424a-a5a0-093b6a034e54',
		name: '김둘',
		gender: '1',
		job: '요양보호사',
		email: 'hana11@mail.com',
		phone: '00100001111',
		birth: '2023-06-27'
	},
	{
		id: '7c053498-0c14-424a-a5a0-093b6a034e54',
		name: '김셋',
		gender: '0',
		job: '사회복지사',
		email: 'hana22@mail.com',
		phone: '0010002222',
		birth: '2023-06-27'
	}
];
