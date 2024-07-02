<script lang="ts">
	import Video from '$lib/components/video.svelte';

	let hoveredVideoId = 'tom-video';
</script>

<section class="video-section" id="video">
	<Video
		name="Tom Preston Werner"
		position="Co-founder, GitHub"
		videoSrc="https://d3brppdydubvmf.cloudfront.net/videos/merge/tom-interview.mp4"
		posterSrc="/video/tom-poster.webp"
		isUnfolded={hoveredVideoId === 'tom-video'}
		ytLink="https://youtu.be/Y28pai40SBU"
		on:hover={() => {
			hoveredVideoId = 'tom-video';
		}}
	/>
	<Video
		name="David Cramer"
		position="Co-founder and CTO of Sentry"
		videoSrc="https://d3brppdydubvmf.cloudfront.net/videos/merge/david-interview.mp4"
		posterSrc="/video/david-poster.webp"
		isUnfolded={hoveredVideoId === 'david-video'}
		ytLink="https://youtu.be/RhYDbcDJUuk"
		on:hover={() => {
			hoveredVideoId = 'david-video';
		}}
	/>
	<Video
		name="Jana Iris"
		position="Former director of Community Hashicorp, Investor at TQ Ventures"
		videoSrc="https://d3brppdydubvmf.cloudfront.net/videos/merge/jana-interview.mp4"
		posterSrc="/video/jana-poster.webp"
		isUnfolded={hoveredVideoId === 'jana-video'}
		on:hover={() => {
			hoveredVideoId = 'jana-video';
		}}
	/>
</section>

<style lang="scss">
	$breakpoint-l: 1280px;

	.video-section {
		display: flex;
		gap: 16px;

		@media screen and (max-width: $breakpoint-l) {
			flex-direction: column;
		}
	}
</style>
