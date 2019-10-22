import House from './House.svelte';

const app = new House({
	target: document.body,
	props: {
		name: 'mundo'
	}
});

export default app;
