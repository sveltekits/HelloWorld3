<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import type { ActionData, PageServerData } from './$types';

	export let data: PageServerData;
	export let form: ActionData;
	console.log(data, form);
</script>

<div class="mt-4 flex max-w-6xl flex-col">
	<!-- 헤더 -->
	<div class="flex w-full items-center justify-between">
		<!--
			◎ items-center :: 컬럼의 중간이 아니고, 라인의 중간에 위치시킨다.
			◎ flex justify-between :: 각 항목 사이에 동일한 양의 공간이 있도록 컨테이너의 기본 축을 따라 항목을 정렬하는 데 사용합니다.
			1. <div>가 하나면, 맨 앞에 위치시킨다.
			2. <div>가 두개면, 첫번째는 맨 앞, 두번째는 맨 뒤에 위치시킨다.
			3. <div>가 세개면, 첫번째는 맨 앞, 두번째는 맨 뒤에, 세번째는 가운데 위치시킨다.
		-->
		<h2 class="text-center text-3xl font-bold tracking-tight text-gray-900">
			<!--
				◎ 요소의 자간(문자 간격)을 제어하는 ​​유틸리티입니다. 
				tracking-tight :: letter-spacing: -0.025em;
				tracking-tighter :: letter-spacing: -0.05em;
			-->
			Contact Manager
		</h2>
	</div>
	<!-- 헤더 끝 -->
	<div class="flex flex-row">
		<form
			method="POST"
			action="?/create"
			class="basis-6/12 rounded-sm border border-gray-300 px-4 py-4"
			use:enhance={({ form }) => {
				// Beform form submission to server
				// console.log('form : ', form);
				// console.log('data : ', data);
				// console.log('action : ', action);
				return async ({ result, update }) => {
					// After form subsmission to server
					// console.log('result : ', result);
					if (result.type === 'success') {
						form.reset();
					}
					if (result.type === 'failure') {
						await applyAction(result);
					}
					update();
				};
			}}
		>
			<input
				id="gender"
				name="gender"
				type="checkbox"
				class="hidden"
				bind:checked={isChecked}
				value={form?.gender ?? ''}
			/>
			<!-- 
				form?.gender ?? ''
				form? : 폼에 값이 존제하지 않는 경우를 제외하고 양식 사용
				?? : gender 값이 없으면 ''를 사용

			-->
			<!---------- 1 이름 input ------------------------ -->
			<div class="my-2 flex items-center rounded-md border shadow-md">
				<div>
					<span
						class="mx-2 flex h-12 w-12 items-center justify-center rounded-l-md border border-white bg-gray-100 text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-gray-900"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
				</div>
				<div class="w-80">
					<input
						type="text"
						name="name"
						value={form?.name ?? ''}
						class="h-12 w-full rounded-r-md border border-gray-100 px-4 py-1 text-gray-800 focus:outline-none"
						placeholder="이름을 입력하세요."
					/>
				</div>
				<ToggleGender />
			</div>
			<!---------- 2 직종 input ------------------------ -->
			<div class="my-2 flex items-center rounded-md border shadow-md">
				<div>
					<span
						class="mx-2 flex h-12 w-12 items-center justify-center rounded-l-md border border-white bg-gray-100 text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 text-gray-900"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					</span>
				</div>

				<div class="w-80">
					<input
						type="text"
						name="job"
						value={form?.job ?? ''}
						class="h-12 w-full rounded-r-md border border-gray-100 px-4 py-1 text-gray-800 focus:outline-none"
						placeholder="직종을 입력하세요."
					/>
				</div>
			</div>
			<!---------- 3 이메일 input ------------------------ -->
			<div class="my-2 flex items-center rounded-md border shadow-md">
				<div>
					<span
						class="mx-2 flex h-12 w-12 items-center justify-center rounded-l-md border border-white bg-gray-100 text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-gray-900"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
				</div>

				<div class="w-full">
					<input
						type="email"
						name="email"
						value={form?.email ?? ''}
						class="h-12 w-full rounded-r-md border border-gray-100 px-4 py-1 text-gray-800 focus:outline-none"
						placeholder="이메일을 입력하세요."
					/>
				</div>
			</div>

			<!---------- 4 전화번호 input ------------------------ -->
			<div class="my-2 flex items-center rounded-md border shadow-md">
				<div>
					<span
						class="mx-2 flex h-12 w-12 items-center justify-center rounded-l-md border border-white bg-gray-100 text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-gray-900"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
							/>
						</svg>
					</span>
				</div>

				<div class="w-full">
					<input
						type="tel"
						name="phone"
						value={form?.phone ?? ''}
						class="h-12 w-full rounded-r-md border border-gray-100 px-4 py-1 text-gray-800 focus:outline-none"
						placeholder="전화번호을 입력하세요."
					/>
				</div>
			</div>
			<!---------- 5 출생일 input ------------------------ -->
			<div class="my-2 flex items-center rounded-md border shadow-md">
				<div>
					<span
						class="mx-2 flex h-12 w-12 items-center justify-center rounded-l-md border border-white bg-gray-100 text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-gray-900"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
								clip-rule="evenodd"
							/>
						</svg>
					</span>
				</div>

				<div class="w-full">
					<input
						type="date"
						name="birth"
						value={form?.birth ?? ''}
						class="h-12 w-full rounded-r-md border border-gray-100 px-4 py-1 text-gray-800 focus:outline-none"
						placeholder="출생일을 입력하세요."
					/>
				</div>
			</div>
			<!-- Sumit Button -------------------------------------- -->
			<button
				class="my-4 mb-2 mr-2 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>Add</button
			>
			{#if form?.error}
				<Alert message={form?.message} />
			{/if}
		</form>
		<div class="px-4">광고, 도움말</div>
	</div>
	<div>
		<TableConnects contacts={data?.contacts} />
	</div>
</div>
