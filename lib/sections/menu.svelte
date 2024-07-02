<script lang="ts">
	import { useOnImagesLoaded, smoothScroll } from '$lib/utils';

	// Import the images
	import fireEmojiImg from '$lib/images/menu/fire-emoji.svg';
	import bottomLineLeft from '$lib/images/menu/bottom-line-left.svg';
	import bottomLineRight from '$lib/images/menu/bottom-line-right.svg';
	import topLineLeft from '$lib/images/menu/top-line-left.svg';
	import topLineRight from '$lib/images/menu/top-line-right.svg';

	export let isLoaded = false;
	const images = [bottomLineLeft, bottomLineRight, topLineLeft, topLineRight];

	useOnImagesLoaded(images, () => {
		isLoaded = true;
	});
</script>

<nav class="menu-section">
	<a class="button" href="#speakers" on:click={smoothScroll}>
		<span>Speakers</span>
	</a>
	<div class="line middle-line" />
	<div class="line-group">
		<div class="line middle-line" />
		<a class="button" href="#agenda" on:click={smoothScroll}>
			<span>Agenda</span>
		</a>
	</div>
	<div class="line middle-line" />
	<a class="button button-secondary" href="#tickets" on:click={smoothScroll}>
		<img class="fire-emoji" src={fireEmojiImg} alt="" />
		<span>Get tickets</span>
	</a>

	<div class="bottom-line">
		<img src={bottomLineLeft} alt="" />
		<div class="line" />
		<img src={bottomLineRight} alt="" />
	</div>

	<div class="top-line">
		<img src={topLineLeft} alt="" />
		<div class="line" />
		<img src={topLineRight} alt="" />
	</div>
</nav>

<style lang="scss">
	@import '$styles/variables';

	.menu-section {
		position: relative;
		display: flex;
		width: 100%;
		// max-width: 800px;
		margin-top: 80px;

		@media screen and (max-width: 1580px) {
			max-width: 100%;
			margin-top: 70px;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			display: none;
		}
	}

	.button {
		z-index: 2;
		position: relative;
		text-decoration: none;
		background-color: var(--clr-white);
		color: black;
		font-size: 28px;
		font-weight: 700;
		border-radius: 100px;
		padding: 10px 16px;
		transition: background-color 0.14s ease;

		&:hover {
			background-color: var(--clr-white-hover);
		}
	}

	.button-secondary {
		background-color: var(--clr-accent);
		color: var(--clr-background);

		&:hover {
			background-color: var(--clr-accent-hover);
		}
	}

	.fire-emoji {
		position: absolute;
		top: -18px;
		right: -10px;
		width: 36px;
	}

	.line {
		user-select: none;
		flex: 1;
		min-width: 10px;
		height: 2px;
		background-color: var(--clr-white);
	}

	.line-group {
		display: flex;
	}

	.middle-line {
		transform: translateY(22px);
	}

	.bottom-line {
		user-select: none;
		z-index: 1;
		display: flex;
		align-items: flex-end;
		position: absolute;
		bottom: -26px;
		left: calc(50% - 10px);
		width: calc(50% - 80px);
	}

	.top-line {
		user-select: none;
		z-index: 1;
		display: flex;
		align-items: flex-start;
		position: absolute;
		top: -28px;
		right: 70px;
		width: calc(35% - 80px);
	}

	.disabled {
		user-select: none;
		pointer-events: none;
	}

	.soon-label {
		position: absolute;
		top: -12px;
		right: -8px;
		text-transform: uppercase;
		font-size: 12px;
		color: var(--clr-white);
		background-color: #ee6931;
		padding: 4px 6px;
		border-radius: 10px;
	}
</style>
