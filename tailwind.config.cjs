/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				// 컬러값 설정
				primary: '#5555FF', // text-primary, bg-primary, border-primary
				secondary: {
					100: '#E2E2D5',
					200: '#888883'
				}
			},
			fontFamily: {
				// Diphylleia 폰트를 로드하지 못할 경우
				// 디폴트인 sans 폰트를 사용
				sans: ['Diphylleia', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};
