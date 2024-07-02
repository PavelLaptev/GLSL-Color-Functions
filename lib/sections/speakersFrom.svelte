<script lang="ts">
	import { onMount } from 'svelte';

	import titleImage from '$lib/images/speakers-from/title.svg';

	import doomSticker from '$lib/images/speakers-from/doom-sticker.webp';
	import githubSticker from '$lib/images/speakers-from/github-sticker.webp';
	import googleSticker from '$lib/images/speakers-from/google-sticker.webp';
	import hashicorpSticker from '$lib/images/speakers-from/hashicorp-sticker.webp';
	import herokuSticker from '$lib/images/speakers-from/heroku-sticker.webp';
	import sentrySticker from '$lib/images/speakers-from/sentry-sticker.webp';
	import xSticker from '$lib/images/speakers-from/x-sticker.webp';

	const addWiggle = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		target.classList.add('wiggle');
	};

	const removeWiggle = (event: AnimationEvent) => {
		const target = event.target as HTMLElement;
		target.classList.remove('wiggle');
	};

	let doomStickerEl: HTMLImageElement;
	let githubStickerEl: HTMLImageElement;
	let googleStickerEl: HTMLImageElement;
	let hashicorpStickerEl: HTMLImageElement;
	let herokuStickerEl: HTMLImageElement;
	let sentryStickerEl: HTMLImageElement;
	let xStickerEl: HTMLImageElement;

	let io: IntersectionObserver;

	onMount(() => {
		const ioOptions = {
			root: null,
			rootMargin: '-50% 0% -50% 0%',
			threshold: 0
		};

		const stickers = [
			doomStickerEl,
			githubStickerEl,
			googleStickerEl,
			hashicorpStickerEl,
			herokuStickerEl,
			sentryStickerEl,
			xStickerEl
		];

		stickers.forEach((sticker) => {
			io = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						sticker.classList.add('wiggle');
					}
				});
			}, ioOptions);

			io.observe(sticker);
		});

		return () => {
			io.disconnect();
		};
	});
</script>

<section class="speakers-from-section" id="speakers">
	<div class="background-block">
		<img class="title" src={titleImage} alt="" />
		<svg
			class="background-block__image"
			width="799"
			height="487"
			viewBox="0 0 799 487"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M797 3H3V485L75.9558 305.522L160.064 468.347L140.083 305.522L353 474L296.682 305.522L565 445L417 236L734 264L484 120L797 3Z"
				stroke="#DFA54F"
				stroke-width="6"
			/>
		</svg>
	</div>

	<div class="stickers">
		<img
			bind:this={herokuStickerEl}
			on:mouseenter={addWiggle}
			on:animationend={removeWiggle}
			class="sticker heroku-sticker"
			src={herokuSticker}
			alt=""
		/>
		<img
			bind:this={githubStickerEl}
			on:mouseenter={addWiggle}
			on:animationend={removeWiggle}
			class="sticker github-sticker"
			src={githubSticker}
			alt=""
		/>
		<img
			bind:this={sentryStickerEl}
			on:mouseenter={addWiggle}
			on:animationend={removeWiggle}
			class="sticker sentry-sticker"
			src={sentrySticker}
			alt=""
		/>
		<img
			bind:this={doomStickerEl}
			on:mouseenter={addWiggle}
			on:animationend={removeWiggle}
			class="sticker doom-sticker"
			src={doomSticker}
			alt=""
		/>
		<img
			bind:this={googleStickerEl}
			on:mouseenter={addWiggle}
			on:animationend={removeWiggle}
			class="sticker google-sticker"
			src={googleSticker}
			alt=""
		/>
		<img
			bind:this={xStickerEl}
			on:mouseenter={addWiggle}
			on:animationend={removeWiggle}
			class="sticker x-sticker"
			src={xSticker}
			alt=""
		/>
		<img
			bind:this={hashicorpStickerEl}
			on:mouseenter={addWiggle}
			on:animationend={removeWiggle}
			class="sticker hashicorp-sticker"
			src={hashicorpSticker}
			alt=""
		/>
	</div>
</section>

<style lang="scss">
	@import '$styles/variables';

	$xl-breakpoint: 1600px;
	$l-breakpoint: 1400px;
	$s-breakpoint: 540px;

	.speakers-from-section {
		position: relative;
		width: 100%;
		height: 540px;
		margin-top: 64px;

		@media screen and (max-width: $l-breakpoint) {
			height: 600px;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			margin-top: 50px;
			height: 650px;
		}

		@media screen and (max-width: $s-breakpoint) {
			height: 720px;
		}
	}

	.background-block {
		position: relative;
		width: 100%;
		max-width: 780px;
	}

	.background-block__image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
	}

	.title {
		z-index: 2;
		position: absolute;
		top: 64px;
		left: 56px;

		@media screen and (max-width: $mobile-breakpoint) {
			top: 34px;
			left: 30px;
			max-width: 320px;
		}

		@media screen and (max-width: $s-breakpoint) {
			max-width: 250px;
		}
	}

	// STICKERS

	.stickers {
		@media screen and (max-width: $tablet-breakpoint) {
			transform: translateY(60px);
		}

		@media screen and (max-width: $mobile-breakpoint) {
			transform: translateY(150px);
		}
	}

	.sticker {
		position: absolute;
		width: calc(40vw + 10px);
	}

	.github-sticker {
		z-index: 1;
		top: 160px;
		left: 14%;

		max-width: 400px;
		min-width: 230px;

		@media screen and (max-width: $tablet-breakpoint) {
			max-width: 360px;
			top: 150px;
			left: 3%;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			top: 130px;
			min-width: 280px;
		}

		@media screen and (max-width: $s-breakpoint) {
			top: 0;
		}
	}

	.heroku-sticker {
		z-index: 2;
		top: 30px;
		left: 34%;

		max-width: 380px;
		min-width: 220px;

		@media screen and (max-width: $tablet-breakpoint) {
			max-width: 340px;
			top: 60px;
			left: 32%;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			min-width: 240px;
			top: 20px;
			left: 14%;
		}

		@media screen and (max-width: $s-breakpoint) {
			display: none;
		}
	}

	.sentry-sticker {
		z-index: 3;
		top: 120px;
		left: 50%;

		max-width: 500px;
		min-width: 320px;

		@media screen and (max-width: $tablet-breakpoint) {
			top: 160px;
			min-width: 360px;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			top: 120px;
			left: auto;
			right: -40px;
			min-width: 340px;
		}

		@media screen and (max-width: $s-breakpoint) {
			top: 80px;
		}
	}

	.doom-sticker {
		z-index: 1;
		top: 20px;
		left: 76%;

		max-width: 300px;
		min-width: 200px;

		@media screen and (max-width: $tablet-breakpoint) {
			max-width: 250px;
			top: -40px;
			left: auto;
			right: 0;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			max-width: 260px;
			right: auto;
			left: 55%;
		}

		@media screen and (max-width: $s-breakpoint) {
			top: 400px;
			left: 45%;
		}
	}

	.google-sticker {
		z-index: 1;
		top: 330px;
		left: 24%;

		max-width: 360px;
		min-width: 240px;

		@media screen and (max-width: $xl-breakpoint) {
			left: 20%;
		}

		@media screen and (max-width: $l-breakpoint) {
			left: 5%;
		}

		@media screen and (max-width: $tablet-breakpoint) {
			max-width: 320px;
			left: 2%;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			max-width: 360px;
			top: 260px;
			left: auto;
			right: 0;
		}

		@media screen and (max-width: $s-breakpoint) {
			top: 280px;
			min-width: 290px;
		}
	}

	.x-sticker {
		z-index: 1;
		top: 290px;
		left: 50%;

		max-width: 200px;
		min-width: 160px;

		@media screen and (max-width: $xl-breakpoint) {
			left: 49%;
		}

		@media screen and (max-width: $l-breakpoint) {
			left: 40%;
		}

		@media screen and (max-width: $tablet-breakpoint) {
			max-width: 180px;
			top: 240px;
			left: 35%;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			width: 140px;
			min-width: auto;
			max-width: auto;
			top: 320px;
		}

		@media screen and (max-width: $s-breakpoint) {
			top: 380px;
			left: 0;
		}
	}

	.hashicorp-sticker {
		z-index: 4;
		top: 300px;
		right: 0;

		max-width: 460px;
		min-width: 200px;

		@media screen and (max-width: $tablet-breakpoint) {
			top: 320px;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			top: 260px;
			right: auto;
			left: 0;
			min-width: 280px;
		}

		@media screen and (max-width: $s-breakpoint) {
			top: 200px;
		}
	}
</style>
