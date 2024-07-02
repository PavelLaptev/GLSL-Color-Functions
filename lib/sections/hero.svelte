<script lang="ts">
	import { useOnImagesLoaded, smoothScroll } from '$lib/utils';
	import FloatingLabel from '$lib/components/floating-label.svelte';

	import { draw } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import gbLogoIcon from '$lib/images/gb-header-icon.svg';
	import calendarIcon from '$lib/images/calendar-icon.svg';
	import berlinArmsIcon from '$lib/images/berlin-arms-icon.svg';

	export let isAllAssetsReady = false;
	export let isLoaded = false;
	const images = [gbLogoIcon, calendarIcon, berlinArmsIcon];

	useOnImagesLoaded(images, () => {
		isLoaded = true;
	});

	// some easteregg
	console.log(
		`
░▒█▀▀█░░▀░░▀█▀░▒█▀▀▄░█░▒█░▀█▀░█░░█▀▀░█▀▀▄░░█▄  ░░▄█
░▒█░▄▄░░█▀░░█░░▒█▀▀▄░█░▒█░░█░░█░░█▀▀░█▄▄▀░░███▀▄███
░▒█▄▄▀░▀▀▀░░▀░░▒█▄▄█░░▀▀▀░░▀░░▀▀░▀▀▀░▀░▀▀░░█▀  ░░▀█

		`
	);
	console.log(`%cHey there, curious developer! 🤓`, 'font-size: 16px; color: #fffff;');
	console.log(
		`%cJoin THE MERGE and get to know the latest trends in the world of development. We have prepared a lot of attractions for you! 🎉`,
		'font-size: 16px; color: #fffff;'
	);
</script>

<section class="hero-section">
	<a class="tablet-tickets-cta" href="#tickets" on:click={smoothScroll}>Get tickets</a>

	<section class="about">
		<div class="title-caption">
			<a href="https://gitbutler.com/" target="_blank">
				<img class="logo" src={gbLogoIcon} alt="logo-img" />
			</a>

			<h2>
				<span class="slash">/</span>
				<span class="color-1">Developer</span>
				<br />
				<span class="color-2">experience</span>
				<span class="color-3">conference</span>
			</h2>
		</div>

		<div class="details">
			<div class="item">
				<img class="logo" src={calendarIcon} alt="calendar icon" />
				<p>June 13 & 14, 2024</p>
			</div>
			<div class="item" id="map-link">
				<img class="logo" src={berlinArmsIcon} alt="berlin coat of arms icon" />
				<FloatingLabel label="Show on map 🗺️">
					<a class="location-text" href="https://maps.app.goo.gl/gxRBujkh4xgMQ7HB7" target="_blank">
						<p>Arena Berlin</p>
						<div class="underline" />
					</a>
				</FloatingLabel>
			</div>
		</div>
	</section>

	{#if isAllAssetsReady}
		<div class="merge-logo">
			<svg viewBox="0 0 970 312" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M80.8555 6.67969V12.1289H75.6797V45H70.1523V12.1289H64.9766V6.67969H80.8555ZM84.3906 6.67969H89.918V23.1055H94.7422V6.67969H100.27V45H94.7422V28.5742H89.918V45H84.3906V6.67969ZM105.367 6.67969H119.703V12.1289H110.895V23.1055H118.473V28.5742H110.895V39.5508H119.703V45H105.367V6.67969Z"
					fill="var(--clr-white)"
				/>
				<path
					d="M94.3059 212.387L144.674 6.62872H187.999V306.999H146.511V138.443L109.462 306.999H80.0681L41.9478 138.443V306.999H0V6.62872H43.3256L94.3059 212.387Z"
					fill="var(--clr-white)"
				/>
				<path
					d="M538.891 6.62872H601.965C640.443 6.73079 659.682 27.8067 659.682 69.8565V115.019C659.682 141.453 648.302 158.855 625.542 167.224L674.226 306.999H626.767L587.728 174.879L582.216 175.644V306.999H538.891V6.62872ZM582.216 49.3419V135.381H592.167C598.189 135.381 602.323 134.972 604.568 134.156C612.427 130.992 616.356 124.613 616.356 115.019V69.8565C616.356 56.1801 610.079 49.3419 597.526 49.3419H582.216Z"
					fill="var(--clr-white)"
				/>
				<path
					d="M820.124 248.67C820.124 290.72 799.355 311.796 757.815 311.898C716.378 311.898 695.659 290.822 695.659 248.67V64.9575C695.659 22.9077 716.378 1.88281 757.815 1.88281C799.355 1.88281 820.124 22.9077 820.124 64.9575V105.374H776.799V64.9575C776.799 51.4852 770.522 44.6981 757.968 44.596H757.662C745.21 44.596 738.984 51.3832 738.984 64.9575V248.67C738.984 262.245 745.261 269.032 757.815 269.032C770.471 269.032 776.799 262.245 776.799 248.67V178.247H754.906V135.381H820.124V248.67Z"
					fill="var(--clr-white)"
				/>
				<path
					d="M857.02 6.62872H969.391V49.3419H900.345V135.381H959.746V178.247H900.345V264.286H969.391V306.999H857.02V6.62872Z"
					fill="var(--clr-white)"
				/>

				<g clip-path="url(#clip0_95_6853)">
					<path
						transition:draw={{ duration: 1800, easing: quintOut }}
						d="M223 29.5H417.93C445.859 29.5 468.5 52.1411 468.5 80.0704V105.93C468.5 133.859 491.141 156.5 519.07 156.5H540.5"
						stroke="var(--clr-white)"
						stroke-width="45.5133"
						stroke-linecap="round"
					/>
				</g>
				<path
					transition:draw={{ duration: 1000, easing: quintOut }}
					d="M172.729 156.832H547.5"
					stroke="var(--clr-white)"
					stroke-width="45.5133"
				/>
				<g clip-path="url(#clip1_95_6853)">
					<path
						transition:draw={{ duration: 1400, easing: quintOut }}
						d="M223 284H359.93C387.859 284 410.5 261.359 410.5 233.43V207.57C410.5 179.641 433.141 157 461.07 157H482.5"
						stroke="var(--clr-white)"
						stroke-width="45.5133"
						stroke-linecap="round"
					/>
				</g>

				<defs>
					<clipPath id="clip0_95_6853">
						<rect width="334" height="174" fill="white" transform="matrix(-1 0 0 -1 557 180)" />
					</clipPath>
					<clipPath id="clip1_95_6853">
						<rect width="258" height="150" fill="white" transform="translate(223 157)" />
					</clipPath>
				</defs>
			</svg>
		</div>
	{/if}
</section>

<style lang="scss">
	@import '$styles/variables';

	$about-xl-breakpoint: 1590px;
	$about-l-breakpoint: 1320px;
	$about-m-breakpoint: 900px;
	$about-s-breakpoint: 840px;

	.hero-section {
		padding-top: 40px;
		display: flex;
		gap: 40px;

		@media screen and (max-width: $tablet-breakpoint) {
			padding-top: 30px;
			flex-direction: column-reverse;
			gap: 32px;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			padding-top: 20px;
		}
	}

	.tablet-tickets-cta {
		display: none;

		@media screen and (max-width: $mobile-breakpoint) {
			display: block;
			text-decoration: none;
			text-align: center;
			font-size: 32px;
			font-weight: 700;
			background-color: var(--clr-accent);
			color: var(--clr-background);
			padding: 12px 18px;
			border-radius: var(--controls-radius);
			margin-top: 20px;
		}
	}

	.about {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 40px;
		padding: 16px 0;

		@media screen and (max-width: $about-l-breakpoint) {
			padding: 0;
		}

		@media screen and (max-width: $tablet-breakpoint) {
			align-items: center;
			flex-direction: row;
			gap: 30px;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			align-items: flex-start;
			flex-direction: column;
		}
	}

	// TITLE CAPTION
	////////////////
	.title-caption {
		display: inline;

		&::selection {
			background-color: transparent;
		}

		.logo {
			user-select: none;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			width: 36px;
			height: 36px;
			padding: 0;
			transform: translateY(4px);

			@media screen and (max-width: $about-xl-breakpoint) {
				width: 32px;
				height: 32px;
				transform: translateY(4px);
			}

			@media screen and (max-width: $about-l-breakpoint) {
				width: 28px;
				height: 28px;
				transform: translateY(3px);
			}

			@media screen and (max-width: $tablet-breakpoint) {
				width: 36px;
				height: 36px;
				transform: translateY(4px);
			}

			@media screen and (max-width: $about-m-breakpoint) {
				width: 32px;
				height: 32px;
				transform: translateY(4px);
			}

			@media screen and (max-width: $mobile-breakpoint) {
				width: 28px;
				height: 28px;
				transform: translateY(4px);
			}
		}

		.slash {
			opacity: 0.4;
		}

		h2 {
			display: inline;
			margin: 0;
			font-size: 40px;
			font-weight: 600;
			margin-left: 8px;

			&::selection {
				background-color: transparent;
			}

			@media screen and (max-width: $about-xl-breakpoint) {
				font-size: 34px;
			}

			@media screen and (max-width: $about-l-breakpoint) {
				font-size: 30px;
				margin-left: 6px;
			}

			@media screen and (max-width: $tablet-breakpoint) {
				font-size: 40px;
			}

			@media screen and (max-width: $about-m-breakpoint) {
				font-size: 36px;
			}

			@media screen and (max-width: $about-s-breakpoint) {
				font-size: 30px;
			}

			// @media screen and (max-width: $mobile-breakpoint) {
			// 	font-size: 29px;
			// }
		}

		span,
		br {
			&::selection {
				background-color: transparent;
			}
		}

		.color-1::selection {
			background-color: #000000;
			color: #ffffff;
		}

		.color-2::selection {
			background-color: #dd0000;
			color: #ffffff;
		}

		.color-3::selection {
			background-color: #ffcc00;
			color: #000000;
		}
	}

	// DETAILS
	//////////
	.details {
		display: flex;
		flex-direction: column;
		gap: 20px;

		@media screen and (max-width: $about-m-breakpoint) {
			gap: 16px;
		}

		@media screen and (max-width: $about-s-breakpoint) {
			gap: 8px;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			gap: 16px;
		}

		p {
			margin: 0;
			font-size: 30px;
			font-weight: 600;

			@media screen and (max-width: $about-l-breakpoint) {
				font-size: 28px;
			}
		}

		.item {
			display: flex;
			align-items: flex-start;
			align-items: center;
			gap: 18px;

			@media screen and (max-width: $about-l-breakpoint) {
				gap: 16px;
			}

			.logo {
				width: 42px;

				@media screen and (max-width: $about-l-breakpoint) {
					width: 34px;
				}

				@media screen and (max-width: $about-s-breakpoint) {
					width: 28px;
				}

				@media screen and (max-width: $mobile-breakpoint) {
					width: 34px;
				}
			}
		}
	}

	// LOCATION TEXT
	///////////////
	.location-text {
		color: var(--clr-white);
		text-decoration: none;
		display: flex;
		flex-direction: column;
		gap: 1px;
		transform: translateY(-2px);

		.underline {
			width: 100%;
			height: 4px;
			background-image: linear-gradient(
				90deg,
				#ff769f,
				#ff769f 40%,
				transparent 40%,
				transparent 100%
			);
			background-size: 10px 1px;
		}
	}

	// MERGE LOGO
	/////////////
	.merge-logo {
		flex: 2;
		display: flex;
		max-width: 940px;

		@media screen and (max-width: 1700px) {
			max-width: 880px;
		}

		@media screen and (max-width: $tablet-breakpoint) {
			max-width: 100%;
		}

		svg {
			width: 100%;
		}
	}
</style>
