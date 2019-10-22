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
	const dogNames = [
		{ name: 'Roger' },
		{ name: 'Syd' },
		{ name: 'Dino' },
		{ name: 'Fido' },
	]
	let goodDogNames = []
	let selected
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

<h2>Wich are good dog names?</h2>

<select multiple bind:value={goodDogNames}>
	{#each dogNames as dogName}
		<option value={dogName}>{dogName.name}</option>
	{/each}
</select>

{#if goodDogNames.length}
	<h2>Good dog names selected</h2>
	{#each goodDogNames as dogName}
		<li>{dogName.name}</li>
	{/each}
{/if}

<h2>Select a number</h2>

<select bind:value={selected}>
	<option value="1">1</option>
	<option value="2">2</option>
	<option value="3">3</option>
	<option value="4">4</option>
	<option value="5">5</option>
</select>

<p>Selected number: {selected}</p>
