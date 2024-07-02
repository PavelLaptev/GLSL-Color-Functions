import { onMount } from 'svelte';

function loadImages(imageUrls: string[]) {
	return Promise.all(
		imageUrls.map((imageUrl) => {
			return new Promise((resolve, reject) => {
				const img = new Image();
				img.src = imageUrl;
				img.onload = resolve;
				img.onerror = reject;
			});
		})
	);
}

export const useOnImagesLoaded = (images: string[], callback?: () => void) => {
	onMount(() => {
		loadImages(images)
			.then(() => {
				if (callback) {
					callback();
				}
			})
			.catch(() => {
				console.error('One or more images failed to load');
			});
	});
};
