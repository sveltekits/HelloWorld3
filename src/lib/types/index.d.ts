export type Tuser = {
	id: string;
	username: string;
};

export type TloginUser = {
	email: string;
	password?: string;
};

export type Tcontact = {
	id: string;
	name: string;
	email: string;
	gender: string;
	birth: string;
	job: string;
	phone: string;
	region: string;
};

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

let object = {
	seoul: { name: '서울', first: 1, second: 9 },
	gyeonggi: { name: '경기', first: 10, second: 20 },
	incheon: { name: '인천', first: 21, second: 23 },
	gangwon: { name: '강원', first: 24, second: 26 },
	chungbuk: { name: '충복', first: 27, second: 29 },
	sejong: { name: '세종', first: 30, second: 30 },
	chungnam: { name: '충남', first: 31, second: 33 },
	daejeon: { name: '대전', first: 34, second: 35 },
	gyeongbuk: { name: '경북', first: 36, second: 40 },
	daegu: { name: '대구', first: 41, second: 43 },
	ulsan: { name: '울산', first: 44, second: 45 },
	busan: { name: '부산', first: 46, second: 49 },
	gyeongnam: { name: '경남', first: 50, second: 53 },
	jeobuk: { name: '전북', first: 54, second: 56 },
	jeonam: { name: '전남', first: 57, second: 60 },
	gwangju: { name: '광주', first: 61, second: 62 },
	jeju: { name: '제주', first: 63, second: 63 }
};
