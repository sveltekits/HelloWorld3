<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import type { ActionData, PageServerData } from './$types';

	export let form: ActionData;
	export let data: PageServerData;
	console.log(data, form);

	const redirectTo = $page.url.searchParams.get('redirectTo') || '/';
</script>

<div
	class="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12"
>
	<div class="relative py-3 sm:w-96 mx-auto text-center">
		<span class="text-2xl font-light">Login to your account</span>
		<div class="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
			<div class="h-2 bg-indigo-400 rounded-t-md" />
			<form method="post" action="?/login&redirectTo={redirectTo}" use:enhance>
				<!-- sveltekit은 페이지가 다시 로드되면서 form 관련 정보가 서버에 전송 -->
				<!-- use:enhance 디렉티브 :: 화면 새로 고침 없이 SvelteKit이 알아서 form 관련 사전 처리 -->
				<p class="ml-8">{form?.message || ''}</p>
				<div class="py-6 px-8">
					<label for="emain" class="block font-semibold">Username or Email</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Id & Email"
						value={form?.email ?? ''}
						class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
					/>
					<label for="password" class="block mt-3 font-semibold">Password</label>
					<input
						type="password"
						id="password"
						name="password"
						placeholder="Password"
						class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
					/>

					<div class="flex justify-between items-baseline">
						<button
							type="submit"
							class="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600"
							>로그인</button
						>
						<a href="/" class="text-sm hover:underline">Forgot password?</a>
					</div>
				</div>
			</form>
		</div>
	</div>
</div>
