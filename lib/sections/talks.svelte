<script lang="ts">
	import { bios } from '$lib/config';
	import Talk from '$lib/components/talk.svelte';
</script>

<section class="talks-section" id="talks">
	<div class="sticker">
		<div class="sticker-text" />
	</div>

	<div class="talks-running-line" />

	<div class="talks">
		{#each Object.values(bios) as bio}
			{#if bio.talk}
				<Talk data={bio} />
			{/if}
		{/each}
	</div>
</section>

<style lang="scss">
	@import '$styles/variables';

	$main-color: #ffdaae;
	$breakpoint-l: 1400px;

	.talks-section {
		// overflow: hidden;
		position: relative;
		margin-top: 60px;
		// margin-bottom: 40px;
		padding: 140px 64px 80px;
		background-color: #3a5f67;
		background-image: url('$lib/images/agenda/back-noise.jpg');

		@media screen and (max-width: $breakpoint-l) {
			padding: 140px 40px 60px;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			padding: 140px 20px 60px;
			margin-left: -20px;
			width: calc(100% + 40px);
		}

		&::after,
		&::before {
			z-index: 2;
			position: absolute;
			content: '';
			display: block;
			height: 26px;
			width: 100%;
			background-image: url('$lib/images/agenda/wave-pattern.svg');
		}

		&::after {
			bottom: 0;
			left: 0;
		}

		&::before {
			top: 0;
			left: 0;
			transform: rotate(180deg);
		}
	}

	.talks {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	// running line

	.talks-running-line {
		z-index: 2;
		position: absolute;
		top: 50px;
		left: 0;
		height: 44px;
		width: 100%;
		border-top: 1px solid $main-color;
		border-bottom: 1px solid $main-color;
		background-image: url('$lib/images/talks-title-back.svg');
		opacity: 0.8;
		// transform: rotate(-1deg);
		animation: running-line-animation 5s linear infinite;
	}

	@keyframes running-line-animation {
		// animate background
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: 136px 0;
		}
	}

	// sticker
	.sticker {
		z-index: 3;
		position: absolute;
		top: -40px;
		right: 120px;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 180px;
		height: 180px;
		background-image: url('$lib/images/sticker-background.png');
		background-size: cover;

		@media screen and (max-width: $mobile-breakpoint) {
			right: 20px;
		}
	}

	.sticker-text {
		width: 68%;
		height: 68%;
		background-image: url('$lib/images/sticker-text.webp');
		background-size: cover;
		animation: spinning-animation 20s infinite linear;
	}

	@keyframes spinning-animation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
