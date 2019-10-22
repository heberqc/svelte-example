<script>
	import Dog from './Dog.svelte'
	export let name
	let goodDogs = []
	const dogs = [
		'Roger',
		'Syd',
		'Dino',
		'Fido',
	]
</script>

<style>
	h1 {
		color: red;
	}
</style>

<h1>Hello <mark>{name}</mark>!</h1>
<Dog name="Fido"/>

<h2>Who's a good dog?</h2>

<ul>
	{#each dogs as dog}
		<li><label><input type="checkbox" bind:group={goodDogs} value={dog}>&nbsp;{dog}</label></li>
	{/each}
</ul>

<h2>Good dogs for me</h2>

<ul>
{#each goodDogs as dog}
	<li>{dog}</li>
{/each}
</ul>
