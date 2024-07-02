<script>
	export let className = '';
	export let zIndex = 10;

	let left = 0;
	let top = 0;
	let moving = false;

	function onMouseDown() {
		moving = true;
	}

	function onMouseMove(e) {
		if (moving) {
			left += e.movementX;
			top += e.movementY;
		}
	}

	function onMouseUp() {
		moving = false;
	}

	// 	$: console.log(moving);
</script>

<div
	on:mousedown={onMouseDown}
	style="transform: translate({left}px, {top}px); z-index: {zIndex};"
	role="banner"
	class="draggable {className}"
>
	<slot />
</div>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
	.draggable {
		user-select: none;
		cursor: grab;
		position: absolute;
	}
</style>
