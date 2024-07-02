<script lang="ts">
	import { usePortal } from '$lib/utils';
	import type { Speaker } from './speaker.svelte';

	export let isOpen = false;

	export let data: Speaker = {
		id: '',
		name: '',
		position: '',
		bio: '',
		color: '',
		imgSrc: '',
		talk: null
	};

	const handleCloseModal = (e: MouseEvent) => {
		e.stopPropagation();
		isOpen = false;

		// enable scroll
		document.body.style.overflow = 'auto';
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			isOpen = false;

			// enable scroll
			document.body.style.overflow = 'auto';
		}
	};

	let bodyElement: HTMLBodyElement;

	$: if (isOpen) {
		// console.log('isOpen', isOpen);
		// disable scroll
		document.body.style.overflow = 'hidden';
	}

	$: if (!isOpen) {
		if (bodyElement) {
			bodyElement.style.overflow = 'auto';
		}
	}
</script>

<svelte:body bind:this={bodyElement} on:keydown={handleKeyDown} />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="bio-dialog" use:usePortal={'body'} on:click={handleCloseModal} class:slideIn={isOpen}>
	<div
		class="bio-dialog_card"
		on:click|stopPropagation
		style:background="color-mix(in srgb, {data.color}, white 60%)"
	>
		<div class="bio-dialog_header" style:background={data.color} class:fadeIn={isOpen}>
			<button class="bio-dialog_close-btn" on:click={handleCloseModal} />

			<img src={data.imgSrc} alt={data.name} class="bio-dialog_image" />

			<div class="bio-dialog_namePos">
				<h2 class="bio-dialog_name">{data.name}</h2>
				<p class="bio-dialog_position">{data.position}</p>
			</div>
		</div>

		<div class="bio-dialog_content">
			<h3>About</h3>
			<p>{data.bio}</p>
		</div>

		{#if data.talk}
			<hr class="bio-dialog_divider" />
			<div class="bio-dialog_content">
				<h3>
					<div class="bubble-emoji" />

					{data.talk.title}
				</h3>
				<p>{data.talk.description}</p>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	@import '$styles/variables';

	$s-breakpoint: 768px;
	$xs-breakpoint: 600px;
	$border-color: #dfd27d;

	.bubble-emoji {
		display: inline-block;
		transform: translateY(4px);
		width: 24px;
		height: 24px;
		margin-right: 4px;
		background-repeat: no-repeat;
		background-size: cover;
		background-image: url('$lib/images/agenda/speak-emoji.webp');
	}

	.bio-dialog {
		z-index: 100;
		position: fixed;
		padding: 30px;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		//
		display: none;
		pointer-events: none;

		justify-content: center;
		align-items: center;

		background: rgba(0, 0, 0, 0.5);

		@media screen and (max-width: $s-breakpoint) {
			padding: 20px;
		}

		@media screen and (max-width: $xs-breakpoint) {
			padding: 10px;
		}

		&_close-btn {
			cursor: pointer;
			position: absolute;
			top: 8px;
			right: 8px;
			width: 60px;
			height: 60px;
			background: none;
			border: none;
			outline: none;
			border-radius: 15px;

			&::before,
			&::after {
				content: '';
				position: absolute;
				top: 50%;
				left: 50%;
				width: 40px;
				height: 2px;
				background-color: var(--clr-white);
				transform: translate(-50%, -50%);
			}

			&::before {
				transform: translate(-50%, -50%) rotate(45deg);
			}

			&::after {
				transform: translate(-50%, -50%) rotate(-45deg);
			}

			&:hover {
				background-color: $border-color;
			}

			&:hover::before,
			&:hover::after {
				background-color: var(--clr-background);
			}
		}

		&_card {
			display: flex;
			flex-direction: column;
			position: absolute;
			top: 20px;
			right: 20px;
			width: calc(100% - 40px);
			height: calc(100% - 40px);
			border-radius: 20px;
			max-height: 100%;
			overflow: auto;
			max-width: 700px;

			// disable scrollbar
			&::-webkit-scrollbar {
				display: none;
			}

			@media screen and (max-width: $s-breakpoint) {
				top: 10px;
				right: 10px;
				width: calc(100% - 20px);
				height: calc(100% - 20px);
			}
		}

		&_header {
			display: flex;
			gap: 32px;
			align-items: flex-end;
			padding: 40px;
			opacity: 0;

			@media screen and (max-width: $xs-breakpoint) {
				align-items: flex-start;
				flex-direction: column;
				gap: 16px;
				padding: 20px;
			}
		}

		&_content {
			display: flex;
			flex-direction: column;
			gap: 16px;
			padding: 40px;
			color: var(--clr-background);

			@media screen and (max-width: $xs-breakpoint) {
				padding: 20px;
			}

			p {
				font-size: 18px;
				line-height: 160%;
			}

			h3 {
				font-size: 20px;
				font-weight: 700;
				line-height: 130%;
			}
		}

		&_divider {
			width: 100%;
			height: 1px;
			border: none;
			border-top: 1px solid var(--clr-background);
			opacity: 0.2;
			margin: 0;
		}

		&_namePos {
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 4px;
		}

		&_image {
			width: 220px;
			height: 210px;
			object-fit: contain;
			border-radius: 20px;
		}

		&_name {
			width: calc(100% - 40px);
			color: var(--clr-white);
			font-size: 32px;
			font-weight: 700;
			line-height: 115%;
			margin-bottom: 4px;
		}

		&_position {
			color: var(--clr-white);
			font-size: 18px;
			font-weight: 600;
			line-height: 130%;
			margin: 0;
			opacity: 0.7;
		}
	}

	.slideIn {
		display: flex;
		pointer-events: all;
		animation: fade-in-dialog 0.15s ease forwards;

		.bio-dialog_card {
			animation: fade-in-dialog-card 0.2s ease forwards;
		}
	}

	.fadeIn {
		animation: fade-in 0.3s ease-in-out forwards;
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
			transform: translateY(-20px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes fade-in-dialog {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes fade-in-dialog-card {
		0% {
			transform: translateX(40%);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>
