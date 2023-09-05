<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import type { ActionData, PageServerData } from './$types';

	export let data: PageServerData;
	export let form: ActionData;
	console.log(data, form);
</script>

<h1 class="text-4xl">Contact</h1>
