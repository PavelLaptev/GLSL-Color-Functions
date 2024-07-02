<script lang="ts">
	import titleImg from '$lib/images/benefits/hero-title.svg';

	import playBtnImg from '$lib/images/promo-video/play-btn.png';
	import watchTextImg from '$lib/images/promo-video/watch-text.png';
	import trailerTextImg from '$lib/images/promo-video/trailer-text.png';

	let playBtnEl: HTMLDivElement;
	let video: HTMLVideoElement;
	let videoBackground: HTMLVideoElement;
	let isClicked = false;

	let windowWidth = 0;
	let isMobile = false;

	const playVideo = () => {
		if (isClicked) return;

		isClicked = true;
		videoBackground.pause();
		video.play();
	};

	// move play button if mouse moves
	const handleMouseMove = (e: MouseEvent) => {
		if (isMobile) return;

		const { clientX, clientY } = e;

		const { left, top, width, height } = playBtnEl.getBoundingClientRect();

		const x = clientX - left;
		const y = clientY - top;

		const xPercent = (x / width) * 30;
		const yPercent = (y / height) * 30;

		const xShift = xPercent * 0.1;
		const yShift = yPercent * 0.1;

		newTransform = {
			x: xShift,
			y: yShift
		};
	};

	let newTransform = {
		x: 0,
		y: 0
	};

	$: if (windowWidth < 1200) {
		isMobile = true;
	} else {
		isMobile = false;
	}
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div
	class="benefits-section"
	tabindex="0"
	role="button"
	on:mousemove|stopPropagation={(e) => handleMouseMove(e)}
	on:click|stopPropagation={playVideo}
	on:keypress={(e) => {
		if (e.key === 'Enter') {
			playVideo();
		}
	}}
>
	<div class="content-wrapper">
		<img class="title-img" src={titleImg} alt="" />

		<p class="description">
			The Merge is the ultimate developer experience conference featuring top speakers from the tech
			industry, exciting and unexpected activities, and the chance to connect with a vibrant
			community of fellow developers and dev rel professionals. It is a one-of-a-kind event where
			learning, fun, and friendship merge into an unforgettable experience.
		</p>
	</div>

	<div class="video-wrapper">
		<div bind:this={playBtnEl} class="play-btn-wrapper" class:play-btn-hide={isClicked}>
			<svg
				width="74"
				height="81"
				viewBox="0 0 74 81"
				class="triangle-img"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={`transform: translate(${newTransform.x}%, ${newTransform.y}%);`}
			>
				<path d="M73.5879 40.1011L0.587891 0.101074V80.1011L73.5879 40.1011Z" fill="#24223C" />
			</svg>

			<img
				class="play-btn-img"
				src={playBtnImg}
				alt=""
				style={`transform: translate(${newTransform.x}%, ${newTransform.y}%);`}
			/>
			<img
				class="watch-text-img"
				src={watchTextImg}
				alt=""
				style={`transform: translate(${-newTransform.x}%, ${newTransform.y}%);`}
			/>
			<img
				class="trailer-text-img"
				src={trailerTextImg}
				alt=""
				style={`transform: translate(${-newTransform.x}%, ${newTransform.y}%);`}
			/>
		</div>

		<video
			class="full-video"
			bind:this={video}
			class:video-fade-in={isClicked}
			controls
			playsinline
			loop
			src="/video/full-promo.mp4"
		>
			<track kind="captions" />
		</video>
	</div>

	<video
		bind:this={videoBackground}
		class="video-background"
		class:backvideo-fade-in={isClicked}
		controls={false}
		autoplay
		playsinline
		muted
		loop
		src="/video/merge-promo-loop.mp4"
	>
		<track kind="captions" />
	</video>
</div>

<style lang="scss">
	@import '$styles/variables';

	.benefits-section {
		cursor: pointer;
		position: relative;
		z-index: 1;
		display: flex;
		margin-top: 80px;
		border: 2px solid var(--clr-white);
		border-radius: 40px;
		overflow: hidden;

		&:hover {
			.video-wrapper {
				transform: scale(1.02);
			}
		}

		@media screen and (max-width: 1400px) {
			flex-direction: column-reverse;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			margin-left: -20px;
			margin-right: -20px;
			border-radius: 0;
			border: none;
			margin-top: 50px;
		}
	}

	.content-wrapper {
		z-index: 2;
		position: relative;
		// flex: 1;
		height: 100%;
		width: fit-content;
		display: flex;
		gap: 20px;
		flex-direction: column;
		// align-items: center;
		justify-content: center;
		// max-width: 680px;
		padding: 80px 20px 60px 60px;

		@media screen and (max-width: 1400px) {
			padding: 40px;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			padding: 32px 20px 60px;
			gap: 12px;
		}
	}

	// TITLE

	.title-img {
		max-width: 460px;
		width: 100%;

		@media screen and (max-width: $tablet-breakpoint) {
			max-width: 400px;
		}
	}

	// DESCRIPTION

	.description {
		max-width: 630px;
		font-size: 20px;
		font-weight: 400;
		line-height: 1.6;
		opacity: 0.9;
		color: var(--clr-white);

		@media screen and (max-width: $tablet-breakpoint) {
			font-size: 20px;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			font-size: 20px;
		}
	}

	// VIDEO BACK
	.video-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0.3;
		transform: scale(1.1);
		filter: brightness(0.7);
	}

	.backvideo-fade-in {
		animation: backvideoFadeIn 1s ease forwards;
	}

	@keyframes backvideoFadeIn {
		from {
			opacity: 0.3;
		}
		to {
			opacity: 0.1;
			filer: brightness(0.5);
		}
	}

	.video-wrapper {
		z-index: 3;
		position: relative;
		flex: 1;
		// border: 2px solid rgba(255, 255, 255, 0.2);

		border-radius: 20px;
		margin: 40px;
		transition: border-color 0.3s ease, transform 0.2s ease, background-color 0.3s ease;

		@media screen and (max-width: 1400px) {
			margin: 40px 40px 0;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			margin: 40px 20px 10px;
		}
	}

	//

	.play-btn-wrapper {
		z-index: 3;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		cursor: pointer;
		background: none;
		border: none;
		outline: none;
	}

	.play-btn-hide {
		animation: playBtnHide 0.3s ease forwards;
	}

	@keyframes playBtnHide {
		from {
			opacity: 1;
			transform: translate(-50%, -50%);
		}
		to {
			opacity: 0;
			transform: translate(-50%, -50%) scale(0.8);
		}
	}

	.play-btn-img {
		width: 240px;
	}

	.triangle-img {
		z-index: 5;
		position: absolute;
		top: 30%;
		left: 25%;
		transform: translate(-50%, -50%);

		@media screen and (max-width: $mobile-breakpoint) {
			top: 28%;
			left: 25%;
			width: 80px;
		}

		@media screen and (max-width: 400px) {
			top: 20%;
			left: 24%;
			width: 60px;
		}
	}

	.watch-text-img {
		z-index: 3;
		position: absolute;
		top: -70px;
		left: -100px;
		width: 180px;

		@media screen and (max-width: $mobile-breakpoint) {
			top: -35px;
			left: -90px;
			width: 160px;
		}
	}

	.trailer-text-img {
		z-index: 3;
		position: absolute;
		bottom: -40px;
		left: 50px;
		min-width: 260px;

		@media screen and (max-width: $mobile-breakpoint) {
			bottom: -40px;
			left: 50px;
			min-width: 220px;
		}
	}

	.full-video {
		z-index: 4;
		position: relative;
		opacity: 0;
	}

	.video-fade-in {
		border-radius: 20px;
		animation: fadeIn 0.3s ease forwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: scale(0.95);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>
