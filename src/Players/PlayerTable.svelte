<script>
	import PlayerCard from './PlayerCard.svelte';

	export let playerData;
</script>

<style>
	.player-table{
		margin-top: 30px;	
		border-spacing: 0;
		margin-left: 8px;
	}

	.player-table > tr{
		vertical-align: baseline;
	}
</style>

<table class="player-table">
	{#each playerData as player}
		<tr>
			<PlayerCard {...player} />
		</tr>
	{/each}
</table>