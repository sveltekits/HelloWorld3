<script lang="ts">
	import './styles.css';
</script>

<body class="antialiased text-slate-600">
	<section class="flex flex-col px-8 md:px-16 max-w-screen-2xl min-h-screen">
		<header class="py-8">
			<a href="/">
				<img src="/images/logo.png" alt="logo" class="h-7" />
			</a>
		</header>
		<section class="flex max-lg:flex-col lg-items-center gap-20 py-12 md:py-24">
			<!-- 설명 색션 시작 -->
			<section class="flex-1">
				<h1 class="font-semibold text-6xl leading-snug text-slate-800">
					"시니어.닷컴"<br />노년의 시작은 ...
				</h1>
				<p class="mt-4 text-lg">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, dignissimos nulla.
					Tempore aperiam nesciunt saepe aliquam iure veniam ipsum illum dolores ratione at, enim
					iste animi ea id tempora quod!
				</p>
			</section>
			<!-- 설명 색션 끝 -->
			<!-- 구독 색션 시작 -->
			<section class="flex-1">
				<div class="bg-white shadow-xl rounded-lg max-w-lg">
					<div class="grid place-items-center rounded-t-lg bg-violet-400 p-8 text-white">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-12 h-12"
						>
							<path
								d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z"
							/>
							<path
								d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z"
							/>
						</svg>
					</div>
					<div class="p-10">
						<p>모든 업데이트 알림 받기</p>
						<form action="" class="mt-3 flex max-sm:flex-col max-sm:gap-3">
							<input
								type="email"
								placeholder="이메일 주소를 입력하세요"
								class="rounded-md border sm:rounded-r-none border-gray-300 px-4 py-2 flex-grow hover:border-violet-400 focus:border-violet-500 focus:outline-none"
							/>
							<!-- flex-grow : input 너비를 크게 한다. -->
							<button
								class="rounded-md sm:rounded-l-none bg-violet-400 px-4 py-2 font-semibold text-white"
								>알림 받기</button
							>
						</form>
					</div>
				</div>
			</section>
			<!-- 구독 색션 끝 -->
		</section>
		<footer class="py-8 mt-auto">
			<ul class="flex gap-6 text-sm text-white lg:text-slate-400">
				<li>
					<a href="/">About Us</a>
				</li>
				<li>
					<a href="/">Contact</a>
				</li>
				<li>
					<a href="/">Privacy Policy</a>
				</li>
			</ul>
		</footer>
	</section>
</body>
