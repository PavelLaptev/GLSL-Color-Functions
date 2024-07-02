<script lang="ts" context="module">
	export type Speaker = {
		id: string;
		name: string;
		position: string;
		bio: string;
		color: string;
		imgSrc: string;
		talk: {
			title: string;
			description: string;
		} | null;
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	import BioModal from '$lib/components/bioModal.svelte';

	import eyeIconText from '$lib/images/eye-icon-text.svg';

	export let imageAntialiasing = true;

	// OBSERVE SPEAKER ON MOBILE
	let speakerCard: HTMLButtonElement;
	let io: IntersectionObserver;
	let isSpeakerInFocus = false;

	let windowWidth = 0;

	export let speaker: Speaker;

	onMount(() => {
		const ioOptions = {
			root: null,
			rootMargin: '-50% 0% -50% 0%',
			threshold: 0
		};

		io = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (windowWidth > 460) {
					return;
				}

				if (entry.isIntersecting) {
					// console.log('in focus');
					isSpeakerInFocus = true;
				} else {
					// console.log('not in focus');
					isSpeakerInFocus = false;
				}
			});
		}, ioOptions);

		io.observe(speakerCard);

		return () => {
			io.disconnect();
		};
	});

	// HANDLE BIO
	let isBioOpen = false;

	const showBio = () => {
		if (speaker.bio === '') {
			return;
		}

		isBioOpen = true;
		speakerCard.focus();
	};
</script>

<svelte:window bind:innerWidth={windowWidth} />

<BioModal bind:isOpen={isBioOpen} data={speaker} />

<button
	id={speaker.id}
	bind:this={speakerCard}
	class="speaker-card"
	on:click={showBio}
	class:speaker-in-focus={isSpeakerInFocus && speaker.bio !== ''}
	class:disabled-click={speaker.bio === ''}
>
	<div class="speaker-card_img-wrap">
		<div class="speaker-card_eye-icon-wrapper">
			<img src={eyeIconText} alt="" class="speaker-card_eye-text" />
			<div class="speaker-card_eye-icon">
				<div class="speaker-card_pupil" />
			</div>
		</div>
		<img
			class="speaker-card_image"
			src={speaker.imgSrc}
			alt="Tom Preston Werner"
			style={!imageAntialiasing
				? 'image-rendering: pixelated; image-rendering: -moz-crisp-edges;'
				: ''}
		/>
	</div>

	<div class="speaker-card_content">
		<h2 class="speaker-card_name">{speaker.name}</h2>
		<p class="speaker-card_position">{speaker.position}</p>

		<div class="speaker-card_content-back" />
	</div>
</button>

<style lang="scss">
	@import '$styles/variables';

	$s-breakpoint: 768px;

	@mixin speaker-in-focus {
		.speaker-card_eye-icon {
			transition: height 0.15s ease-in-out, opacity 0.02s ease-in-out;
			opacity: 1;
			height: 40px;
		}

		.speaker-card_eye-text {
			opacity: 1;
			transform: translateX(-50%) translateY(0) scale(1);
		}

		.speaker-card_image {
			transform: scale(0.98);
		}

		.speaker-card_content-back {
			opacity: 0.4;
			transform: translateY(0) scale(1);
		}
	}

	.speaker-in-focus {
		@include speaker-in-focus;
	}

	.disabled-click {
		pointer-events: none;
	}

	.speaker-card {
		display: flex;
		flex-direction: column;
		background: none;
		border: none;
		outline: none;
		cursor: pointer;
		text-align: left;

		@media screen and (max-width: $s-breakpoint) {
			min-width: auto;
		}

		@media screen and (min-width: $s-breakpoint) {
			&:hover {
				@include speaker-in-focus;
			}
		}

		&_eye-icon-wrapper {
			z-index: 2;
			pointer-events: none;
			position: absolute;
			bottom: 32px;
			right: 20px;
			width: 80px;
			height: 60px;
		}

		&_eye-icon {
			position: absolute;
			width: 50px;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);

			border: 2px solid var(--clr-white);
			border-radius: 50%;
			overflow: hidden;

			opacity: 0;
			height: 0;

			transition: height 0.15s ease-in-out, opacity 0.15s ease-in-out;
		}

		&_pupil {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 20px;
			height: 20px;
			background-color: var(--clr-white);
			border-radius: 50%;
		}

		&_eye-text {
			position: absolute;
			top: -10px;
			left: 50%;
			min-width: 90px;

			transform: translateX(-50%) translateY(-5px) scale(0.8);
			opacity: 0;

			transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
		}

		&_img-wrap {
			width: 100%;
			position: relative;
		}

		&_image {
			width: 100%;
			margin-bottom: 20px;
			transition: transform 0.15s ease-in-out;

			@media screen and (max-width: $s-breakpoint) {
				margin-bottom: 10px;
			}
		}

		&_content {
			position: relative;
			display: flex;
			flex-direction: column;
			width: 100%;
		}

		&_content-back {
			position: absolute;
			top: -50px;
			left: -15px;
			width: calc(100% + 30px);
			height: calc(100% + 65px);
			z-index: -1;
			border-radius: 20px;

			background: var(--clr-background);
			filter: brightness(2);
			opacity: 0;
			transform: translateY(-10px) scale(0.9);

			transition: opacity 0.15s ease-in-out, transform 0.15s ease-in-out;
		}

		&_name {
			color: var(--clr-white);
			font-size: 30px;
			margin-bottom: 8px;

			@media screen and (max-width: $s-breakpoint) {
				font-size: 28px;
			}

			@media screen and (max-width: $s-breakpoint) {
				font-size: 25px;
			}
		}

		&_position {
			color: var(--clr-accent);
			font-size: 18px;
			font-weight: 600;
			line-height: 1.4;
			opacity: 0.7;

			@media screen and (max-width: $s-breakpoint) {
				font-size: 16px;
			}
		}
	}
</style>
