<script lang="ts">
	import { links } from '$lib/config';
	import FloatingLabel from '$lib/components/floating-label.svelte';

	import generalLabelIllustration from '$lib/images/ticket/general-label-illustration.webp';
	import bulkTicketIllustration from '$lib/images/ticket/bulk-illustration.webp';
	import infoIcon from '$lib/images/ticket/info-icon.svg';

	export let discount: {
		code: string;
		newPrice: string;
		discount: string;
	} | null = null;
</script>

<section class="tickets-section" id="tickets">
	<div class="header">
		<h2 class="title">Tickets</h2>

		<div class="foods-and-drinks">
			<span class="title-asterisk">*</span>
			<p class="foods-and-drinks_title">
				Food and drinks (yes, that also includes alcoholic beverages) are included in the ticket
				price.
			</p>
		</div>
	</div>

	<div class="tickets">
		<a
			href={discount ? `${links.regularTicket}/discount/${discount.code}` : links.regularTicket}
			class="ticket general-ticket"
		>
			<div class="ticket-content">
				<div class="ticket-description">
					<h4 class="ticket-name">General</h4>

					{#if discount}
						<div class="ticket-new-price-wrapper">
							<div class="ticket-old-price">
								<span>€699</span>
							</div>

							<h3 class="ticket-price">{discount.newPrice}</h3>
						</div>
					{:else}
						<h3 class="ticket-price">€699</h3>
					{/if}
				</div>

				<div class="ticket-cta">
					{#if discount}
						<span class="ticket-cta-discount">Get your {discount.discount} off</span>
					{/if}
					<span>Get a ticket</span>
				</div>
			</div>

			<img src={generalLabelIllustration} alt="" class="ticket-illustration" />

			<div class="ticket-back-gradient general-ticket-gradient" />
		</a>

		<a href={links.bulkTicket} class="ticket last-minute-ticket">
			<div class="ticket-content">
				<div class="ticket-description">
					<h4 class="ticket-name">Bulk Ticket</h4>
					<span class="ticket-hot-disclaimer">Buy more, pay less.<br />Save up to 85%</span>
					<div class="ticket-price-wrap">
						<h3 class="ticket-price">€99</h3>
						<FloatingLabel
							fontSize="small"
							isDark
							label="€699 for 1, €649 for 2, €599 for 3, €499 for 4, €399 for 5, €299 for 6, €199 for 7, and €99 for 8+. Bulk tickets are not applicable for already purchased tickets."
						>
							<img class="ticket-price-info" src={infoIcon} alt="Info" />
						</FloatingLabel>
					</div>
				</div>

				<div class="ticket-cta">
					<span>Get a ticket</span>
				</div>
			</div>

			<img src={bulkTicketIllustration} alt="" class="ticket-illustration" />

			<div class="ticket-back-gradient earlybird-gradient" />
		</a>
	</div>
</section>

<style lang="scss">
	@import '$styles/variables';

	$l-breakpoint: 1400px;
	$m-breakpoint: 1020px;
	$s-breakpoint: 600px;

	.tickets-section {
		display: flex;
		flex-direction: column;
		margin-bottom: 50px;
	}

	.header {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		gap: 30px;
		margin-bottom: 30px;

		@media screen and (max-width: $tablet-breakpoint) {
			gap: 20px;
			margin-bottom: 30px;
		}
	}

	.title {
		font-family: 'Bebas Neue', sans-serif;
		text-transform: uppercase;
		font-size: 100px;
		font-weight: 400;
		line-height: 1;
		color: var(--clr-white);

		@media screen and (max-width: $mobile-breakpoint) {
			font-size: 80px;
		}
	}

	.foods-and-drinks {
		flex: 1;
		display: flex;
		align-items: center;
		gap: 10px;
		max-width: 420px;
		min-width: 300px;
		margin-bottom: 30px;
		transform: translateY(10px);

		@media screen and (max-width: $s-breakpoint) {
			align-items: flex-start;
			transform: translateY(0);
			margin-bottom: 10px;
			margin-top: -20px;
		}
	}

	.foods-and-drinks_title {
		opacity: 0.6;
	}

	.title-asterisk {
		font-family: 'Bebas Neue', sans-serif;
		font-size: 70px;
		line-height: 0.6;

		@media screen and (max-width: $s-breakpoint) {
			transform: translateY(12px);
		}
	}

	// TICKETS

	.tickets {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: 40px;

		@media screen and (max-width: 1500px) {
			gap: 30px;
		}

		@media screen and (max-width: $m-breakpoint) {
			grid-template-columns: 1fr;
			gap: 40px;
		}

		@media screen and (max-width: $tablet-breakpoint) {
			gap: 24px;
		}
	}

	// GENERAL

	.ticket {
		user-select: none;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		position: relative;
		height: 360px;
		padding: 30px 40px 40px;
		border-radius: 20px;
		text-decoration: none;
		overflow: hidden;
		transition: transform 0.1s ease-in-out;

		@media screen and (min-width: $mobile-breakpoint) {
			&:hover {
				transform: scale(1) translateY(-4px);

				.ticket-cta {
					background-color: var(--clr-background-hover);
				}
			}
		}

		@media screen and (max-width: $tablet-breakpoint) {
			height: 560px;
		}

		@media screen and (max-width: $m-breakpoint) {
			height: 360px;
		}

		@media screen and (max-width: $s-breakpoint) {
			height: 560px;
			padding: 20px;
		}
	}

	.ticket-content {
		position: relative;
		z-index: 3;
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: space-between;
		gap: 16px;

		@media screen and (max-width: $tablet-breakpoint) {
			height: fit-content;
			justify-content: flex-start;
		}

		@media screen and (max-width: $m-breakpoint) {
			height: 100%;
			justify-content: space-between;
		}

		@media screen and (max-width: $mobile-breakpoint) {
			height: fit-content;
			//
		}
	}

	.ticket-name {
		position: relative;
		z-index: 1;
		font-size: 46px;
		line-height: 1;
		font-weight: 700;
		color: var(--clr-background);

		@media screen and (max-width: $tablet-breakpoint) {
			font-size: 40px;
		}

		@media screen and (max-width: $s-breakpoint) {
			font-size: 36px;
		}
	}

	.ticket-disclaimer {
		position: relative;
		z-index: 2;
		font-size: 16px;
		font-weight: 500;
		color: var(--clr-background);
		padding: 4px 8px;
		background-color: rgb(255, 255, 254);
		width: fit-content;
		border-radius: 6px;
		margin-top: -15px;
		margin-bottom: -3px;
		transform: rotate(-2deg) translateY(9px);
	}

	.ticket-hot-disclaimer {
		position: relative;
		z-index: 2;
		font-size: 24px;
		font-weight: 700;
		line-height: 1.2;
		padding: 10px;
		background-color: #f0516d;
		width: fit-content;
		border-radius: 14px;
		color: var(--clr-white);
		margin-top: -15px;
		margin-bottom: -3px;
		transform: rotate(-2deg) translateY(9px);
	}

	.ticket-new-price-wrapper {
		display: flex;
		width: fit-content;
		flex-direction: row-reverse;
		margin-top: 10px;
		margin-bottom: 15px;
	}

	.ticket-old-price {
		position: relative;
		width: fit-content;
		height: fit-content;
		transform: translateY(-10px);

		span {
			font-size: 40px;
			font-weight: 700;
			letter-spacing: -1px;
			color: var(--clr-background);
		}

		&::after {
			width: 100%;
			height: 4px;
			background-color: #f0516d;
			content: '';
			position: absolute;
			top: 55%;
			left: 0;
			transform: translateY(-50%) rotate(7deg);
		}
	}

	.ticket-price-wrap {
		position: relative;
		display: flex;
		gap: 6px;
		width: fit-content;
	}

	.ticket-price {
		position: relative;
		z-index: 3;
		font-size: 72px;
		line-height: 1;
		font-weight: 700;
		color: var(--clr-background);
		letter-spacing: -2px;
	}

	.ticket-price-info {
		z-index: 3;
		position: absolute;
		top: 6px;
		right: -22px;
	}

	.ticket-description {
		display: flex;
		flex-direction: column;
	}

	.ticket-illustration {
		z-index: 1;
		position: absolute;
		top: -25px;
		left: 42%;
		width: 470px;

		@media screen and (max-width: $tablet-breakpoint) {
			width: 480px;
			top: -70px;
			left: 70%;
			transform: translateX(-50%);
		}

		@media screen and (max-width: $m-breakpoint) {
			transform: translateX(0);
			left: 45%;
		}

		@media screen and (max-width: $s-breakpoint) {
			min-width: 430px;
			left: 60%;
			transform: translateX(-50%);
		}
	}

	.ticket-back-gradient {
		z-index: 0;
		position: absolute;
		bottom: -280px;
		left: -280px;
		width: 550px;
		height: 550px;
		background-image: url('$lib/images/noise-gradient-background.png');
		background-size: cover;
	}

	.ticket-cta {
		position: relative;

		width: fit-content;

		display: flex;
		align-items: center;
		justify-content: center;

		background-color: var(--clr-background);
		border-radius: var(--controls-radius);
		padding: 14px 24px;
		height: 64px;
		transition: background-color 0.1s ease-in-out;

		font-size: 32px;
		font-weight: 600;
		text-decoration: none;
		color: var(--clr-white);

		@media screen and (max-width: $s-breakpoint) {
			width: 100%;
		}
	}

	.ticket-cta-discount {
		pointer-events: none;
		position: absolute;
		font-size: 18px;
		font-weight: 700;
		background-color: #f0516d;
		padding: 4px 8px;
		border-radius: 10px;
		top: -20px;
		left: 30px;
		transform: rotate(1deg);
	}

	// EARLY BIRD TICKET

	.last-minute-ticket {
		background: #b2ffda;
	}

	.earlybird-gradient {
		filter: hue-rotate(280deg) saturate(3) brightness(1.2);
		opacity: 0.3;
	}

	// GENERAL TICKET PRICE

	.general-ticket {
		background: #f7efa4;
	}

	.general-ticket-gradient {
		filter: hue-rotate(-190deg) saturate(1.1) brightness(2.2);
		opacity: 0.5;
	}

	// NOTCH
</style>
