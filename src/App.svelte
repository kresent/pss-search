<script>
	import PlayerTable from './Players/PlayerTable.svelte';
	import PlayerFetch from "./Players/PlayerFetch.svelte";
	let playerNames = '';
</script>

<style>
	select, input, button {
		display: block;
		margin: 0.5em 0;
		font-size: inherit;
	}

	.search-input{
		min-width: 30%;
	}

	.search-submit{
		min-width: 20%;
		height: 30px;
	}
</style>

<PlayerFetch {playerNames} let:playerData let:err let:fetchPlayers>
	<input class="search-input" bind:value={playerNames} placeholder="Player Name">
	<button class="search-submit" disabled={!playerNames} on:click={fetchPlayers}>
			Request
	</button>

	{#if playerData}
		<PlayerTable {playerData}/>
	{/if}

	{#if err}
		<p>Error: {err}</p>
	{/if}
</PlayerFetch>
