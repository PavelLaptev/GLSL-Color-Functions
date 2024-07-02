<script lang="ts">
	import { enhance } from '$app/forms';
	import copy from 'copy-to-clipboard';

	import SubscriptionSuccsessText from '$lib/components/subscriptionSuccsessText.svelte';
	import FloatingLabel from '$lib/components/floating-label.svelte';

	import btnArrowImg from '$lib/images/arrow-button.svg';
	import logoImg from '$lib/images/footer-logo.svg';

	const generalEmail = 'themerge@gitbutler.com';
	const sponsorshipEmail = 'themerge-sponsorship@gitbutler.com';
	const discountEmail = 'megan@gitbutler.com';

	let generalEmailCopied = false;
	let sponsorshipEmailCopied = false;
	let discountEmailCopied = false;

	const onGeneralEmailClick = (event: MouseEvent) => {
		event.preventDefault();

		copy(generalEmail);
		generalEmailCopied = true;

		setTimeout(() => {
			generalEmailCopied = false;
		}, 2000);
	};

	const onSponsorshipEmailClick = (event: MouseEvent) => {
		event.preventDefault();

		copy(sponsorshipEmail);

		sponsorshipEmailCopied = true;

		setTimeout(() => {
			sponsorshipEmailCopied = false;
		}, 2000);
	};

	const ondiscountEmailClick = (event: MouseEvent) => {
		event.preventDefault();

		copy(discountEmail);

		discountEmailCopied = true;

		setTimeout(() => {
			discountEmailCopied = false;
		}, 2000);
	};

	let subscriptionEmail = '';
	let isSubscriptionEmailValid = true;
	let isSendingSubscriptionEmailSuccess = false;
</script>

<footer class="footer-section">
	<div class="links-block">
		<a href="https://gitbutler.com" target="_blank"><img src={logoImg} alt="" class="logo" /></a>

		<ul class="links-list">
			<li>
				<a
					href="https://gitbutler.notion.site/The-MERGE-Code-of-Conduct-331a85e62586443ab9c877350bf5585a?pvs=4"
					target="_blank"
					class="link"
				>
					<span>Code of conduct</span>
				</a>
			</li>
			<li>
				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSeSB_sM8Z_c7g3YI5CPQfiiRUcK8hPoi1glklB3Li6v1zFf4g/viewform"
					target="_blank"
					class="link"
				>
					<span>Become a volunteer</span>
				</a>
			</li>
			<li>
				<a
					href="https://app.termly.io/document/terms-of-service/4a9ab579-1b9a-42c1-8412-9133ff0c9135"
					target="_blank"
					class="link"
				>
					<span>Terms</span>
				</a>
			</li>
			<li>
				<a
					href="https://app.termly.io/document/privacy-policy/c1c4328e-0784-4586-9a70-7fb1dd656eb4"
					target="_blank"
					class="link"
				>
					<span>Privacy</span>
				</a>
			</li>
			<li>
				<FloatingLabel label="Copy email 🔗" disabled={generalEmailCopied}>
					<span
						class="link links-block_emailus"
						class:remove-after={generalEmailCopied}
						role={'email'}
						on:click={onGeneralEmailClick}>{generalEmailCopied ? 'Copied! 🎉' : 'Email us'}</span
					>
				</FloatingLabel>
			</li>
		</ul>
	</div>

	<div class="contact-block">
		<div class="subscribe-block">
			<span
				class="subscribe-block_label"
				style={`opacity: ${isSendingSubscriptionEmailSuccess ? 0.3 : 1}`}
				>Stay current with The Merge conference updates:</span
			>

			{#if !isSendingSubscriptionEmailSuccess}
				<form
					class="subscribe-block_form"
					method="POST"
					action="?/signup"
					use:enhance={() => {
						return async ({ result }) => {
							if (result.type === 'success') {
								console.log('email sent!');
								isSendingSubscriptionEmailSuccess = true;
							} else {
								console.warn('something went wrong!');
								isSubscriptionEmailValid = false;
							}
						};
					}}
				>
					<input
						required
						name="email"
						type="email"
						placeholder="Your email"
						class="subscribe-block_input"
						class:invalid-field={!isSubscriptionEmailValid}
						bind:value={subscriptionEmail}
						on:input={() => (isSubscriptionEmailValid = true)}
					/>
					<button class="subscribe-block_cta" type="submit">
						<span>Subscribe</span>
						<img src={btnArrowImg} alt="" />
					</button>
				</form>
			{:else}
				<SubscriptionSuccsessText />
			{/if}
		</div>

		<div class="other-links">
			<div class="sponsorship-block">
				<h3 class="sponsorship-block_title">
					Explore exclusive partnership opportunities —
					<FloatingLabel label="Copy email 🔗" disabled={sponsorshipEmailCopied}>
						{#if sponsorshipEmailCopied}
							<span
								class="sponsorship-block_link"
								class:remove-after={sponsorshipEmailCopied}
								style="text-decoration: none">email copied! 🎉</span
							>
						{:else}
							<span class="sponsorship-block_link" role={'email'} on:click={onSponsorshipEmailClick}
								>contact now!</span
							>
						{/if}
					</FloatingLabel>
				</h3>
			</div>

			<div class="suggestion-block">
				<h3 class="suggestion-block_title">
					Are you a student, startup, or in between jobs? Email us at
					<FloatingLabel label="Copy email 🔗" disabled={discountEmailCopied}>
						{#if discountEmailCopied}
							<span
								class="suggestion-block_link"
								class:remove-after={discountEmailCopied}
								style="text-decoration: none">email copied! 🎉</span
							>
						{:else}
							<span class="suggestion-block_link" role={'email'} on:click={ondiscountEmailClick}
								>megan@gitbutler.com</span
							>
						{/if}
						for a special discount!
					</FloatingLabel>
				</h3>
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	@import '$styles/variables';

	$l-breakpoint: 1500px;
	$m-breakpoint: 1300px;
	$s-breakpoint: 880px;

	.footer-section {
		width: 100%;
		z-index: 1;
		position: relative;
		display: flex;
		justify-content: space-between;
		gap: 120px;
		margin-top: 40px;
		padding: 60px 50px;
		background-color: #383556;
		background-image: url('$lib/images/footer-background.svg');
		background-size: cover;
		background-position: center;
		border-radius: 20px 20px 0 0;

		@media screen and (max-width: $l-breakpoint) {
			gap: 80px;
		}

		@media screen and (max-width: $s-breakpoint) {
			flex-direction: column-reverse;
			background-image: url('$lib/images/footer-background-mobile.svg');
		}

		@media screen and (max-width: $mobile-breakpoint) {
			margin-left: -20px;
			margin-right: -20px;
			margin-top: 50px;
			width: calc(100% + 40px);
			padding: 30px 20px 80px;
			border-radius: 0;
		}
	}

	.other-links {
		display: flex;
		gap: 40px;

		@media screen and (max-width: $l-breakpoint) {
			gap: 60px;
		}

		@media screen and (max-width: $m-breakpoint) {
			flex-direction: column;
		}
	}

	.logo {
		width: 180px;
	}

	.links-block {
		display: flex;
		flex-direction: column-reverse;
		gap: 60px;

		&_emailus {
			position: relative;
			&::after {
				content: '';
				position: absolute;
				top: 100%;
				left: 0;
				width: 100%;
				height: 2px;
				background-image: linear-gradient(
					90deg,
					#9e9cc3,
					#9e9cc3 40%,
					transparent 40%,
					transparent 100%
				);
				background-size: 5px 1px;
			}
		}
	}

	.links-list {
		display: flex;
		flex-direction: column;
		min-width: 200px;

		li {
			margin-bottom: 20px;
		}

		li:last-child {
			margin-bottom: 0;
		}

		a {
			&:hover {
				text-decoration: underline;
			}
		}

		@media screen and (max-width: $l-breakpoint) {
			min-width: 260px;
		}

		@media screen and (max-width: 1000px) {
			min-width: 200px;
		}
	}

	.link {
		display: flex;
		gap: 6px;
		width: fit-content;

		cursor: pointer;
		font-size: 20px;
		font-weight: 600;
		color: #9e9cc3;
		text-decoration: none;
		line-height: 26px;

		&_external-icon {
			width: 12px;
			height: 12px;
			transform: translateY(4px);
		}
	}

	.contact-block {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 60px;

		@media screen and (max-width: $l-breakpoint) {
			flex-direction: column;
			gap: 80px;
		}
	}

	.sponsorship-block {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-width: 480px;

		&_title {
			font-size: 28px;
			font-weight: 600;
			line-height: 1.3;
			color: var(--clr-white);

			@media screen and (max-width: $l-breakpoint) {
				font-size: 24px;
			}
		}

		&_link {
			position: relative;
			cursor: pointer;
			color: #fff59a;

			&::after {
				content: '';
				position: absolute;
				top: 100%;
				left: 0;
				width: 100%;
				height: 2px;
				background-image: linear-gradient(
					90deg,
					#fff59a,
					#fff59a 40%,
					transparent 40%,
					transparent 100%
				);
				background-size: 5px 1px;
			}
		}
	}

	.suggestion-block {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 20px;
		max-width: 440px;

		&_title {
			font-size: 22px;
			font-weight: 400;
			line-height: 1.3;
			color: var(--clr-white);

			@media screen and (max-width: $l-breakpoint) {
				font-size: 24px;
			}
		}

		&_link {
			position: relative;
			cursor: pointer;
			color: #fff59a;

			&::after {
				content: '';
				position: absolute;
				top: 100%;
				left: 0;
				width: 100%;
				height: 2px;
				background-image: linear-gradient(
					90deg,
					#fff59a,
					#fff59a 40%,
					transparent 40%,
					transparent 100%
				);
				background-size: 5px 1px;
			}
		}
	}

	.subscribe-block {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 24px;
		max-width: 640px;

		@media screen and (max-width: $l-breakpoint) {
			width: 100%;
		}

		@media screen and (max-width: $s-breakpoint) {
			max-width: 100%;
		}

		&_label {
			font-size: 32px;
			font-weight: 700;
			max-width: 600px;

			@media screen and (max-width: $mobile-breakpoint) {
				font-size: 28px;
			}
		}

		&_form {
			display: flex;
			gap: 12px;
			transition: opacity 0.12s ease-in-out;

			@media screen and (max-width: $tablet-breakpoint) {
				flex-direction: column;
			}
		}

		&_input {
			width: 100%;
			height: 72px;
			padding: 0 20px;
			border-radius: var(--controls-radius);
			background-color: var(--clr-white);
			font-size: 24px;
			font-weight: 600;
			outline: none;
			border: 3px solid transparent;

			&::placeholder {
				color: var(--clr-placeholder);
			}

			@media screen and (max-width: $mobile-breakpoint) {
				padding: 0 16px;
			}
		}

		$cta-color: #ffd15a;
		$cta-color-hover: #fef285;

		&_cta {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 8px;
			height: 72px;
			padding: 20px 32px;
			border-radius: var(--controls-radius);
			border: none;
			background-color: $cta-color;
			font-size: 24px;
			font-weight: 600;
			color: #000;
			cursor: pointer;
			transition: background-color 0.12s ease-in-out, color 0.12s ease-in-out;

			&:hover {
				background-color: $cta-color-hover;
				color: #000;
			}

			img {
				width: 28px;
				height: 24px;
				max-width: unset;
			}
		}
	}

	.remove-after {
		&::after {
			display: none;
		}
	}
</style>
