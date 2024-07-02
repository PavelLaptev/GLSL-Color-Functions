<script lang="ts">
	import PartnerSponsorItem from '$lib/components/partnerSponsorItem.svelte';
	import { sponsors, partners } from '$lib/config';
</script>

<section class="section sponsors-section">
	<div class="header">
		<h2 class="title">Sponsors</h2>
	</div>

	<div class="logos-wrap">
		{#each sponsors as sponsor}
			<PartnerSponsorItem
				link={sponsor.link}
				imgSrc={sponsor.imgSrc}
				name={sponsor.name}
				about={sponsor.about}
			/>
		{/each}
	</div>
</section>

<section class="section partners-section">
	<div class="header">
		<h2 class="title">Partners</h2>
	</div>

	<div class="logos-wrap">
		{#each partners as partner}
			<PartnerSponsorItem link={partner.link} imgSrc={partner.imgSrc} name={partner.name} />
		{/each}
	</div>
</section>

<style lang="scss">
	@import '$styles/variables.scss';

	$border-width: 1px solid var(--section-color);

	.sponsors-section {
		--section-color: #d0cc6b;
	}

	.partners-section {
		--section-color: #9c5fd8;
	}

	.section {
		display: flex;
		flex-direction: column;

		border: $border-width;
		overflow: hidden;
		border-radius: 20px;
		margin-bottom: 20px;
	}

	.header {
		display: inline;
		padding: 30px;
	}

	.title {
		display: inline;
		font-family: 'Bebas Neue', sans-serif;
		text-transform: uppercase;
		font-size: 60px;
		font-weight: 400;
		line-height: 0.8;
		color: var(--section-color);
	}

	.logos-wrap {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		margin: -1px;

		@media screen and (max-width: 1000px) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media screen and (max-width: 720px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
