<script lang="ts">
	import dataDxLogo from '$lib/images/prisma/data-dx-logo.svg';
</script>

<section class="prisma-section" id="prisma">
	<div class="prisma-running-line" />

	<div class="prisma-content">
		<img src={dataDxLogo} alt="Prisma logo" class="prisma-logo" />
		<p class="prisma-about">
			Dive into data-driven app development with insights and talks about great DX from Prisma,
			Xata, Neon, and Cloudflare at the Data DX Stage.
		</p>
	</div>

	<div class="days-wrapper">
		<div class="day-wrapper">
			<h3 class="day-title">Day #1</h3>

			<div class="list-wrapper">
				<div class="list-line">
					<div class="list-line-arrow" />
				</div>

				<ul class="list">
					<li class="list-item">
						<span class="list-item-time">15:30</span>
						<i class="emoji party-emoji" />
						<div class="list-item-details">
							<p class="list-item-talk">Fireside chat with Soren Bramer Schmidt & David Sentry</p>
							<span class="list-item-speaker"
								><a class="list-item-speaker-link" href="https://x.com/sorenbs" target="_blank"
									>Søren Bramer Schmidt</a
								>, CEO & Founder at Prisma</span
							>
							<span class="list-item-speaker"
								><a class="list-item-speaker-link" href="https://x.com/zeeg" target="_blank"
									>David Cramer</a
								>, CTO & Co-Founder at Sentry</span
							>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">15:55</span>
						<i class="emoji party-emoji" />
						<div class="list-item-details">
							<p class="list-item-talk">A new trend for databases: platforms</p>
							<span class="list-item-speaker"
								><a class="list-item-speaker-link" href="https://x.com/monicasarbu" target="_blank"
									>Monica Sarbu</a
								>, Founder and CEO, Xata</span
							>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">16:15</span>
						<i class="emoji party-emoji" />
						<div class="list-item-details">
							<p class="list-item-talk">
								Why your preview environments aren’t truly production-like
							</p>
							<span class="list-item-speaker"
								><a class="list-item-speaker-link" href="https://x.com/clarkbw" target="_blank"
									>Bryan Clark</a
								>, VP of Product, Neon</span
							>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<div class="day-wrapper">
			<h3 class="day-title">Day #2</h3>
			<div class="list-wrapper">
				<div class="list-line" />

				<ul class="list">
					<li class="list-item">
						<span class="list-item-time">15:45</span>
						<i class="emoji party-emoji" />
						<div class="list-item-details">
							<p class="list-item-talk">Tech Tales: How Data DX enables Business Success</p>
							<span class="list-item-speaker"
								><a class="list-item-speaker-link" href="https://x.com/nikolasburk" target="_blank"
									>Nikolas Burk</a
								>, Staff Dev Advocate at Prisma</span
							>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">16:05</span>
						<i class="emoji party-emoji" />
						<div class="list-item-details">
							<p class="list-item-talk">Data Dx for Serverless Architecture</p>
							<span class="list-item-speaker"
								><a class="list-item-speaker-link" href="https://x.com/harshil1712" target="_blank"
									>Harshil Agrawal</a
								>, Developer Educator at Cloudflare</span
							>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '$styles/variables';

	$main-color: #7783ff;
	$breakpoint-l: 1400px;

	.prisma-section {
		overflow: hidden;
		position: relative;
		border-radius: 30px;
		margin-bottom: 50px;
		padding: 160px 64px 80px;
		background-color: #3a5f67;
		background-image: url('$lib/images/prisma/back-noise.png');

		@media screen and (max-width: $breakpoint-l) {
			padding: 140px 40px 60px;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			padding: 130px 20px 60px;
			margin-left: -20px;
			width: calc(100% + 40px);
		}
	}

	// running line

	.prisma-running-line {
		z-index: 2;
		position: absolute;
		top: 50px;
		left: 0;
		height: 44px;
		width: 100%;
		border-top: 1px solid $main-color;
		border-bottom: 1px solid $main-color;
		background-image: url('$lib/images/prisma/prisma-title-back.svg');
		opacity: 0.8;
		animation: running-line-animation 8s linear infinite;
	}

	@keyframes running-line-animation {
		// animate background
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: -224px 0;
		}
	}

	.prisma-content {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.prisma-logo {
		width: 100%;
		max-width: 380px;
	}

	.prisma-about {
		font-size: 28px;
		line-height: 1.5;
		color: var(--clr-white);
		max-width: 900px;

		@media screen and (max-width: $mobile-breakpoint) {
			font-size: 20px;
		}
	}

	// AGENDA
	.days-wrapper {
		position: relative;
		z-index: 2;
		display: flex;
		gap: 40px;
		margin-top: 60px;

		@media screen and (max-width: $tablet-breakpoint) {
			flex-direction: column;
		}
	}

	.day-wrapper {
		display: flex;
		flex-direction: column;
		// gap: 30px;
		flex: 1;

		@media screen and (max-width: $breakpoint-l) {
			flex-direction: column;
			gap: 30px;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			gap: 0;
		}
	}

	.list-line {
		position: relative;
		height: 30px;
		width: 100%;
		margin-top: 4px;

		&::before {
			content: '';
			display: block;
			position: absolute;
			top: 50%;
			left: 0;
			width: 100%;
			height: 1px;
			background-color: $main-color;
		}
	}

	.list-line-arrow {
		position: absolute;
		top: 3px;
		right: 4px;
		width: 25px;
		height: 25px;
		border-top: 1px solid $main-color;
		border-right: 1px solid $main-color;
		transform: rotate(45deg);
	}

	.day-title {
		font-size: 40px;
		line-height: 1;
		font-weight: 400;
		color: $main-color;
		text-transform: uppercase;
	}

	.list-wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 40px;

		@media screen and (max-width: $mobile-breakpoint) {
			gap: 20px;
		}
	}

	.list {
		list-style: none;
		padding: 0;
		margin: 0;

		li {
			color: var(--clr-white);
			margin-bottom: 22px;
			// margin-left: -90px;
			position: relative;
			color: var(--clr-white);
			font-size: 18px;

			@media screen and (max-width: $breakpoint-l) {
				margin-left: 0;
			}

			@media screen and (max-width: $mobile-breakpoint) {
				font-size: 16px;
			}
		}
	}

	// list item

	.list-item {
		display: flex;
		gap: 20px;

		@media screen and (max-width: $mobile-breakpoint) {
			// flex-direction: column;
			gap: 8px;
		}
	}

	.list-item-time {
		font-size: 14px;
		margin-top: 4px;
		width: 46px;
		text-align: left;
		color: $main-color;
		font-weight: 700;
	}

	.list-item-details {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 6px;
	}

	.list-item-talk {
		font-size: 20px;
		line-height: 1.4;
	}

	.list-item-talk-btn {
		display: inline;
		background: none;
		border: none;
		padding: 0;
		margin: 0;

		color: $main-color;
		text-decoration: dotted underline;
		text-underline-offset: 4px;
		font-size: 18px;
		text-align: left;
		cursor: pointer;
	}

	.list-item-speaker {
		font-size: 14px;
		font-weight: 700;
		line-height: 1.5;
	}

	.list-item-speaker-link {
		color: #a1df3d;
		text-decoration: underline;
	}

	.list-item-speaker-width {
		opacity: 0.5;
	}
</style>
