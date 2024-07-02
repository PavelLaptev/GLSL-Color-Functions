<script lang="ts">
	import textOpenSourceImg from '$lib/images/fair/text-open-source.svg';
	import textFairImg from '$lib/images/fair/text-fair.svg';
	import fairImg from '$lib/images/fair/fair-image.png';

	import { openSourceFair } from '$lib/config';
</script>

<section class="fair-section">
	<div class="image">
		<img src={fairImg} alt="Fair" />
	</div>
	<div class="content">
		<div class="title">
			<img src={textOpenSourceImg} alt="Open Source" />
			<img src={textFairImg} alt="Fair" />
		</div>
		<p class="description">
			Get ready for an electrifying experience! GitHub is sponsoring 'exhibitor' space for open
			source projects. Dive into the heart of innovation as you meet the brightest stars of the open
			source community ↴
		</p>

		<div class="projects">
			{#each openSourceFair as { projectName, link, color }}
				<a
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					class="project-link"
					style="background-color: {color.back}; color: {color.text}"
				>
					{projectName}
				</a>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	@import '$styles/variables.scss';

	.fair-section {
		display: flex;
		border-radius: 30px;
		background-color: #403c68;
		margin-top: 60px;
		margin-bottom: 50px;
		overflow: hidden;

		@media screen and (max-width: $tablet-breakpoint) {
			flex-direction: column;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			margin-top: 0;
			margin-left: -20px;
			margin-right: -20px;
			border-radius: 0;
		}
	}

	.projects {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.project-link {
		padding: 6px 16px;
		border-radius: 20px;
		font-size: 18px;
		font-weight: 600;
		// text-transform: uppercase;
		text-align: center;
		text-decoration: none;
		transition: transform 0.1s ease-in-out;

		&:hover {
			filter: brightness(1.1) contrast(1.1);
		}
	}

	.image {
		position: relative;
		flex: 1;
		background-size: cover;
		background-position: center;
		border-top-left-radius: 30px;
		border-bottom-left-radius: 30px;

		img {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			min-width: 640px;
			width: 100%;
			max-width: 800px;
		}

		@media screen and (max-width: $tablet-breakpoint) {
			flex: auto;
			height: 260px;

			img {
				min-width: 70%;
			}
		}

		@media screen and (max-width: $mobile-breakpoint) {
			height: 200px;

			img {
				min-width: 120%;
			}
		}
	}

	.content {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 58px;
		gap: 20px;
		flex: 1.5;

		// element below the content
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;

			z-index: -1;
		}

		@media screen and (max-width: $tablet-breakpoint) {
			background: linear-gradient(180deg, rgba(64, 60, 104, 0) 0%, #403c68 40%);
		}

		@media screen and (max-width: $mobile-breakpoint) {
			padding: 30px;
			background: linear-gradient(180deg, rgba(64, 60, 104, 0) 0%, #403c68 40%);
		}
	}

	.title {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;

		@media screen and (max-width: $mobile-breakpoint) {
			gap: 10px;
		}

		img {
			height: 54px;

			@media screen and (max-width: $mobile-breakpoint) {
				height: 40px;
			}
		}
	}

	.description {
		color: var(--clr-white);
		font-size: 22px;
		line-height: 1.5;
		max-width: 620px;
		margin-bottom: 15px;
	}

	.description-spotlight {
		/** TEXT GRADIENT */
		color: #dece8d;
		background-image: -webkit-linear-gradient(45deg, #8ed1de 29%, #ffbe5c 58%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		font-weight: 600;
	}
</style>
