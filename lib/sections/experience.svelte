<script>
	import Draggable from '$lib/components/draggable.svelte';

	import experienceTitleImg from '$lib/images/experience/experience.svg';

	import swimmingImg from '$lib/images/experience/swimming-unicorn.webp';
	import swimmingTextImg from '$lib/images/experience/swimming-text.svg';
	import afterpartyImg from '$lib/images/experience/afterparty-text.webp';
	import cocktailsImg from '$lib/images/experience/cocktails.webp';
	import atariConsoleImg from '$lib/images/experience/atari-console.webp';
	import gameroomTextImg from '$lib/images/experience/gameroom-text.webp';
	import doomImg from '$lib/images/experience/doom-deathmatch.webp';
</script>

<section class="experience-section" id="experience">
	<Draggable className="sticker unicorn" zIndex={11}>
		<img class="sticker-hover" src={swimmingImg} alt="" />
	</Draggable>
	<Draggable className="sticker swimming-text" zIndex={12}>
		<img class="sticker-hover" src={swimmingTextImg} alt="" />
	</Draggable>
	<Draggable className="sticker afterparty-text">
		<img class="sticker-hover" src={afterpartyImg} alt="" />
	</Draggable>
	<Draggable className="sticker cocktails">
		<img class="sticker-hover" src={cocktailsImg} alt="" />
	</Draggable>
	<Draggable className="sticker atari-console" zIndex={11}>
		<img class="sticker-hover" src={atariConsoleImg} alt="" />
	</Draggable>
	<Draggable className="sticker gameroom-text">
		<img class="sticker-hover" src={gameroomTextImg} alt="" />
	</Draggable>
	<Draggable className="sticker doom" zIndex={13}>
		<img class="sticker-hover" src={doomImg} alt="" />
	</Draggable>

	<img src={experienceTitleImg} class="experience-title" alt="Experience title" />
	<div class="experience-background" />
</section>

<style lang="scss">
	@import '$styles/variables';
	$breakpoint-l: 1500px;
	$breakpoint-m: 640px;

	.sticker-hover {
		transition: transform 0.2s ease-in-out;

		&:hover {
			transform: scale(1.05);
		}
	}

	.experience-section {
		position: relative;
		width: 100%;
		height: 500px;
		margin-bottom: 60px;

		img {
			&:active {
				pointer-events: none;
			}
		}

		@media screen and (max-width: $breakpoint-l) {
			height: 600px;
		}

		@media screen and (max-width: $tablet-breakpoint) {
			height: 760px;
		}

		@media screen and (max-width: $breakpoint-m) {
			height: 1250px;
		}
	}

	.experience-title {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		opacity: 0.4;

		@media screen and (max-width: $breakpoint-m) {
			opacity: 0.8;
			height: auto;
		}
	}

	.experience-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('$lib/images/experience/experience.svg');
		opacity: 0.2;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		display: none;

		@media screen and (max-width: $breakpoint-m) {
			display: block;
		}
	}

	.experience-section :global(.unicorn) {
		width: 380px;
		top: 40px;
		left: -50px;

		@media screen and (max-width: $breakpoint-l) {
			top: 80px;
			left: -10px;
		}

		@media screen and (max-width: $breakpoint-m) {
			width: 310px;
			top: 20px;
			left: 2%;
		}
	}

	.experience-section :global(.swimming-text) {
		width: 290px;
		top: 200px;
		left: 10%;

		@media screen and (max-width: $breakpoint-l) {
			top: 260px;
			left: 6%;
		}

		@media screen and (max-width: $tablet-breakpoint) {
			top: 200px;
			left: 20%;
		}

		@media screen and (max-width: $breakpoint-m) {
			width: 260px;
			top: 160px;
			left: auto;
			right: 4%;
		}
	}

	.experience-section :global(.afterparty-text) {
		width: 320px;
		top: 70px;
		left: 30%;

		@media screen and (max-width: $breakpoint-l) {
			top: 210px;
			left: 32%;
		}

		@media screen and (max-width: $tablet-breakpoint) {
			top: auto;
			width: 340px;
			top: 400px;
			left: 40%;
		}

		@media screen and (max-width: $breakpoint-m) {
			width: 300px;
			bottom: auto;
			left: auto;
			top: 580px;
			right: 2%;
		}
	}

	.experience-section :global(.cocktails) {
		width: 380px;
		top: 200px;
		left: 32%;

		@media screen and (max-width: $breakpoint-l) {
			top: 320px;
			left: 36%;
		}

		@media screen and (max-width: $tablet-breakpoint) {
			top: 440px;
			left: 10%;
		}

		@media screen and (max-width: $breakpoint-m) {
			width: 310px;
			top: 360px;
			left: 6%;
		}
	}

	.experience-section :global(.atari-console) {
		width: 400px;
		top: 30px;
		right: 20%;

		@media screen and (max-width: $breakpoint-l) {
			top: 30px;
			right: 15%;
		}

		@media screen and (max-width: $tablet-breakpoint) {
			top: 200px;
			right: -2%;
		}

		@media screen and (max-width: $breakpoint-m) {
			width: 340px;
			top: 720px;
			right: auto;
			left: 2%;
		}
	}

	.experience-section :global(.gameroom-text) {
		width: 320px;
		top: 240px;
		right: 22%;

		@media screen and (max-width: $breakpoint-l) {
			width: 340px;
			top: 220px;
			right: 10%;
		}

		@media screen and (max-width: $tablet-breakpoint) {
			width: 340px;
			bottom: auto;
			top: 60px;
			right: 16%;
		}

		@media screen and (max-width: $breakpoint-m) {
			width: 320px;
			top: 870px;
			right: 2%;
		}
	}

	.experience-section :global(.doom) {
		width: 320px;
		top: 280px;
		right: 0;

		@media screen and (max-width: $breakpoint-l) {
			width: 340px;
			top: 340px;
			right: 0;
		}

		@media screen and (max-width: $tablet-breakpoint) {
			top: 520px;
			right: 0%;
		}

		@media screen and (max-width: $breakpoint-m) {
			width: 320px;
			top: 1040px;
			right: auto;
			left: 5%;
		}
	}
</style>
