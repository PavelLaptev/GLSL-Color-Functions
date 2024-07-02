export function usePortal(node: HTMLElement, to: string) {
	const target = document.querySelector(to);
	target && target.appendChild(node);

	return {};
}
