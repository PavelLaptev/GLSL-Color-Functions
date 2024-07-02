<script lang="ts">
	import { onMount } from 'svelte';

	import { bios } from '$lib/config';

	import Speaker from '$lib/components/speaker.svelte';

	// ROMERO EGG
	let isDoomCode = false;

	onMount(() => {
		//  detect keypresses
		const keys = [] as string[];

		window.addEventListener('keydown', (e) => {
			keys.push(e.key);

			if (keys.length > 5) {
				keys.shift();
			}

			if (keys.join('') === 'iddqd') {
				isDoomCode = true;
			}
		});
	});
</script>

<section class="speakers-section" id="speakers">
	<div class="content">
		<Speaker speaker={bios.tomPrestonWerner} />
		<Speaker speaker={bios.janaIris} />

		{#if isDoomCode}
			<Speaker speaker={bios.doomguy} imageAntialiasing={false} />
		{:else}
			<Speaker speaker={bios.johnRomero} />
		{/if}
		<Speaker speaker={bios.kyleDaigle} />
		<Speaker speaker={bios.saronYitbarek} />
		<Speaker speaker={bios.JZZhang} />
		<Speaker speaker={bios.adamWiggins} />
		<Speaker speaker={bios.robbyRussell} />
		<Speaker speaker={bios.scottChacon} />
		<Speaker speaker={bios.davidCramer} />
		<Speaker speaker={bios.cassidyWilliams} />
		<Speaker speaker={bios.jaySimons} />
		<Speaker speaker={bios.danielThompsonYvetot} />
		<Speaker speaker={bios.leahCulver} />
		<Speaker speaker={bios.davidEdoh} />
	</div>
</section>

<style lang="scss">
	@import '$styles/variables';

	$l-breakpoint: 1460px;
	$s-breakpoint: 860px;
	$xs-breakpoint: 460px;

	.speakers-section {
		position: relative;
		display: flex;
		flex-direction: column;
		padding-top: 50px;
		margin-bottom: 60px;
		// gap: 20px;

		@media screen and (max-width: $mobile-breakpoint) {
			padding-top: 10px;
			margin-bottom: 50px;
		}
	}

	.content {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 40px;

		@media screen and (max-width: 1360px) {
			grid-template-columns: repeat(3, 1fr);
			gap: 40px;
		}

		@media screen and (max-width: $s-breakpoint) {
			display: grid;
			column-gap: 20px;
			row-gap: 32px;
			grid-template-columns: repeat(2, 1fr);
			min-width: initial;
			padding-left: 0;
			padding-top: 10px;
		}

		@media screen and (max-width: $xs-breakpoint) {
			grid-template-columns: 1fr;
			gap: 20px;
		}
	}
</style>
