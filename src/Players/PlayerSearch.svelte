<script>
	import PlayerTable from './PlayerTable.svelte';
	import PlayerFetch from "./PlayerFetch.svelte";
	let playerNames = '';
</script>

<style>
	select, input, button {
		display: block;
		margin: 0.5em 0;
		font-size: inherit;
		margin-left: 8px;
	}

	.search-input{
		min-width: 30%;
		width: 100%;
	}

	.search-submit{
		min-width: 20%;
	}
</style>

<PlayerFetch {playerNames} let:playerData let:err let:fetchPlayers>
	<input class="search-input" bind:value={playerNames} placeholder="Player Name (separate by comma)">
	<button class="search-submit" disabled={!playerNames} on:click={fetchPlayers}>
			<span>Find</span>
	</button>

	{#if playerData}
		<PlayerTable {playerData}/>
	{/if}

	{#if err}
		<p>Error: {err}</p>
	{/if}
</PlayerFetch>
