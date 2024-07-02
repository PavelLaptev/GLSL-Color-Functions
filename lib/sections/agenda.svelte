<script lang="ts">
	import type { Speaker } from '$lib/components/speaker.svelte';
	import { bios } from '$lib/config';
	import BioModal from '$lib/components/bioModal.svelte';

	let isBioOpen = false;
	let speaker: Speaker | null = null;
</script>

{#if speaker}
	<BioModal bind:isOpen={isBioOpen} data={speaker} />
{/if}

<section class="agenda-section" id="agenda">
	<div class="agenda-running-line" />

	<div class="days-wrapper">
		<div class="day-wrapper">
			<h3 class="day-title">Day #1</h3>
			<div class="list-wrapper">
				<div class="list-line">
					<div class="list-line-arrow" />
				</div>
				<ul class="list">
					<li class="list-item">
						<span class="list-item-time">10:00</span>
						<i class="emoji party-emoji" />
						<div class="list-item-details">
							<p class="list-item-talk">Welcome from Scott & Saron</p>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">10:15</span>
						<i class="emoji speaker-emoji" />
						<div class="list-item-details">
							<button
								class="list-item-talk list-item-talk-btn"
								on:click={() => {
									speaker = bios.tomPrestonWerner;
									isBioOpen = true;
								}}>Why GitHub was a Success</button
							>
							<span class="list-item-speaker">Tom Preston-Werner</span>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">10:55</span>
						<i class="emoji bubble-emoji" />
						<div class="list-item-details">
							<button
								class="list-item-talk list-item-talk-btn"
								on:click={() => {
									speaker = bios.davidCramer;
									isBioOpen = true;
								}}>{bios.davidCramer.talk.title}</button
							>
							<span class="list-item-speaker"
								>{bios.davidCramer.name} <span class="list-item-speaker-width">w Saron</span></span
							>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">11:30</span>
						<i class="emoji speaker-emoji" />
						<div class="list-item-details">
							<button
								class="list-item-talk list-item-talk-btn"
								on:click={() => {
									speaker = bios.cassidyWilliams;
									isBioOpen = true;
								}}>{bios.cassidyWilliams.talk.title}</button
							>
							<span class="list-item-speaker">{bios.cassidyWilliams.name}</span>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">12:00</span>
						<i class="emoji bubble-emoji" />
						<div class="list-item-details">
							<button
								class="list-item-talk list-item-talk-btn"
								on:click={() => {
									speaker = bios.leahCulver;
									isBioOpen = true;
								}}>{bios.leahCulver.talk.title}</button
							>
							<span class="list-item-speaker"
								>{bios.leahCulver.name} <span class="list-item-speaker-width">w Scott</span></span
							>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">12:30</span>
						<i class="emoji plate-emoji" />
						<div class="list-item-details">
							<p class="list-item-talk">Lunch Break</p>
							<span class="list-item-speaker"
								>WeAreDevelopers “Coffee with Developers” / Open Source Fair / DOOM Tournament /
								Prisma Lounge</span
							>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">14:15</span>
						<i class="emoji bubble-emoji" />
						<div class="list-item-details">
							<button
								class="list-item-talk list-item-talk-btn"
								on:click={() => {
									speaker = bios.janaIris;
									isBioOpen = true;
								}}>{bios.janaIris.talk.title}</button
							>
							<span class="list-item-speaker"
								>{bios.janaIris.name} <span class="list-item-speaker-width">w Saron</span></span
							>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">14:50</span>
						<i class="emoji speaker-emoji" />
						<div class="list-item-details">
							<button
								class="list-item-talk list-item-talk-btn"
								on:click={() => {
									speaker = bios.robbyRussell;
									isBioOpen = true;
								}}>{bios.robbyRussell.talk.title}</button
							>
							<span class="list-item-speaker">{bios.robbyRussell.name}</span>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">15:15</span>
						<i class="emoji star-emoji" />
						<div class="list-item-details">
							<p class="list-item-talk">Break</p>
							<span class="list-item-speaker"
								>DataDX Stage w Prisma / WeAreDevelopers “Coffee with Developers” / DOOM Tournament
								/ Open Source Fair</span
							>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">16:45</span>
						<i class="emoji bubble-emoji" />
						<div class="list-item-details">
							<button
								class="list-item-talk list-item-talk-btn"
								on:click={() => {
									speaker = bios.kyleDaigle;
									isBioOpen = true;
								}}>{bios.kyleDaigle.talk.title}</button
							>
							<span class="list-item-speaker"
								>{bios.kyleDaigle.name} <span class="list-item-speaker-width">w Scott</span></span
							>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">17:15</span>
						<i class="emoji earth-emoji" />
						<div class="list-item-details">
							<p class="list-item-talk">Open Source Panel</p>
							<span class="list-item-speaker"
								>David Cramer, Daniel Thompson-Yvetot, JZ Zhang, Tom Preston-Werner - moderated by
								Scott Chacon</span
							>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">18:00</span>
						<i class="emoji food-emoji" />
						<div class="list-item-details">
							<p class="list-item-talk">BBQ & After Party</p>
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
						<span class="list-item-time">10:00</span>
						<i class="emoji welcome-emoji" />
						<div class="list-item-details">
							<p class="list-item-talk">Welcome from Scott & Saron</p>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">10:10</span>
						<i class="emoji speaker-emoji" />
						<div class="list-item-details">
							<button
								class="list-item-talk list-item-talk-btn"
								on:click={() => {
									speaker = bios.johnRomero;
									isBioOpen = true;
								}}>{bios.johnRomero.talk.title}</button
							>
							<span class="list-item-speaker">{bios.johnRomero.name}</span>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">10:55</span>
						<i class="emoji bubble-emoji" />
						<div class="list-item-details">
							<button
								class="list-item-talk list-item-talk-btn"
								on:click={() => {
									speaker = bios.jaySimons;
									isBioOpen = true;
								}}>{bios.jaySimons.talk.title}</button
							>
							<span class="list-item-speaker"
								>{bios.jaySimons.name} <span class="list-item-speaker-width">w Scott</span></span
							>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">11:30</span>
						<i class="emoji speaker-emoji" />
						<div class="list-item-details">
							<button
								class="list-item-talk list-item-talk-btn"
								on:click={() => {
									speaker = bios.saronYitbarek;
									isBioOpen = true;
								}}>{bios.saronYitbarek.talk.title}</button
							>
							<span class="list-item-speaker">{bios.saronYitbarek.name}</span>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">12:00</span>
						<i class="emoji speaker-emoji" />
						<div class="list-item-details">
							<button
								class="list-item-talk list-item-talk-btn"
								on:click={() => {
									speaker = bios.JZZhang;
									isBioOpen = true;
								}}>{bios.JZZhang.talk.title}</button
							>
							<span class="list-item-speaker">{bios.JZZhang.name}</span>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">12:30</span>
						<i class="emoji plate-emoji" />
						<div class="list-item-details">
							<p class="list-item-talk">Lunch Break</p>
							<span class="list-item-speaker"
								>WeAreDevelopers “Coffee with Developers” / DataDX Stage w Prisma / Open Source Fair
								/ DOOM Tournament</span
							>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">14:30</span>
						<i class="emoji bubble-emoji" />
						<div class="list-item-details">
							<button
								class="list-item-talk list-item-talk-btn"
								on:click={() => {
									speaker = bios.adamWiggins;
									isBioOpen = true;
								}}>{bios.adamWiggins.talk.title}</button
							>
							<span class="list-item-speaker"
								>{bios.adamWiggins.name} <span class="list-item-speaker-width">w Scott</span></span
							>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">15:05</span>
						<i class="emoji speaker-emoji" />
						<div class="list-item-details">
							<button
								class="list-item-talk list-item-talk-btn"
								on:click={() => {
									speaker = bios.danielThompsonYvetot;
									isBioOpen = true;
								}}>{bios.danielThompsonYvetot.talk.title}</button
							>
							<span class="list-item-speaker">{bios.danielThompsonYvetot.name}</span>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">15:30</span>
						<i class="emoji star-emoji" />
						<div class="list-item-details">
							<p class="list-item-talk">Break</p>
							<span class="list-item-speaker"
								>Tauri Happy Hour sponsored by Crab Nebula / WeAreDevelopers “Coffee with
								Developers” / DataDX Stage w Prisma / Open Source Fair / DOOM Tournament</span
							>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">16:30</span>
						<i class="emoji doom-emoji" />
						<div class="list-item-details">
							<p class="list-item-talk">DOOM Finals</p>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">17:05</span>
						<i class="emoji work-emoji" />
						<div class="list-item-details">
							<p class="list-item-talk">Dev Rel & Community Panel</p>
							<span class="list-item-speaker"
								>Jana Iris, Cassidy Williams, David Edoh Bedi, Jonathan Weiss - moderated by Saron
								Yitbarek</span
							>
						</div>
					</li>

					<li class="list-item">
						<span class="list-item-time">17:50</span>
						<i class="emoji blast-emoji" />
						<div class="list-item-details">
							<p class="list-item-talk">Closing Remarks</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@import '$styles/variables';

	$main-color: #abfbff;
	$breakpoint-l: 1400px;

	.agenda-section {
		overflow: hidden;
		position: relative;
		// margin-top: 60px;
		border-radius: 30px;
		margin-bottom: 24px;
		padding: 140px 64px 80px;
		background-color: #3a5f67;
		background-image: url('$lib/images/agenda/back-noise.jpg');

		@media screen and (max-width: $breakpoint-l) {
			padding: 140px 40px 60px;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			padding: 140px 20px 60px;
			margin-left: -20px;
			margin-bottom: 0;
			width: calc(100% + 40px);
		}
	}

	.days-wrapper {
		position: relative;
		z-index: 2;
		display: flex;
		gap: 40px;

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

	.list-item-speaker-width {
		opacity: 0.5;
	}

	// running line

	.agenda-running-line {
		z-index: 2;
		position: absolute;
		top: 50px;
		left: 0;
		height: 44px;
		width: 100%;
		border-top: 1px solid $main-color;
		border-bottom: 1px solid $main-color;
		background-image: url('$lib/images/agenda/agenda-title-back.svg');
		opacity: 0.8;
		// transform: rotate(-1deg);
		animation: running-line-animation 8s linear infinite;
	}

	@keyframes running-line-animation {
		// animate background
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: -182px 0;
		}
	}

	// emojies
	.emoji {
		display: inline-block;
		width: 24px;
		height: 24px;
		background-size: cover;
		background-repeat: no-repeat;
		margin-right: 10px;
	}

	.doom-emoji {
		background-image: url('$lib/images/agenda/doom-emoji.webp');
	}

	.food-emoji {
		background-image: url('$lib/images/agenda/food-emoji.webp');
	}

	.welcome-emoji {
		background-image: url('$lib/images/agenda/welcome-emoji.webp');
	}

	.plate-emoji {
		background-image: url('$lib/images/agenda/plate-emoji.webp');
	}

	.speaker-emoji {
		background-image: url('$lib/images/agenda/speaker-emoji.webp');
	}

	.burger-emoji {
		background-image: url('$lib/images/agenda/burger-emoji.webp');
	}

	.star-emoji {
		background-image: url('$lib/images/agenda/star-emoji.webp');
	}

	.party-emoji {
		background-image: url('$lib/images/agenda/party-emoji.webp');
	}

	.donut-emoji {
		background-image: url('$lib/images/agenda/donut-emoji.webp');
	}

	.bubble-emoji {
		background-image: url('$lib/images/agenda/bubble-emoji.webp');
	}

	.earth-emoji {
		background-image: url('$lib/images/agenda/earth-emoji.webp');
	}

	.work-emoji {
		background-image: url('$lib/images/agenda/work-emoji.webp');
	}

	.blast-emoji {
		background-image: url('$lib/images/agenda/blast-emoji.webp');
	}
</style>
