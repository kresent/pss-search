<script>
	import AlliancesFetch from "./AlliancesFetch.svelte";
	import AlliancesList from "./AlliancesList.svelte";
	import PlayerTable from "../Players/PlayerTable.svelte";
  let allianceSearch = '';
  let selectedAlliance = null;

  function onAllianceSelect(alliance) {
    selectedAlliance = alliance;
  }
</script>

<style>
	select, input, button {
		display: block;
		margin: 0.5em 0;
		font-size: inherit;
    margin-left: 8px;
	}

	.search-input{
		min-width: 20%;
		width: 100%;
	}

  .selected-alliance{
    margin-left: 8px;
  }
</style>


<AlliancesFetch {selectedAlliance} let:alliancesData let:alliancePlayersData let:err>

  <input class="search-input" bind:value={allianceSearch} placeholder="Filter alliances">
  
  {#if alliancesData}
    <AlliancesList 
      {selectedAlliance} 
      {alliancesData} 
      {allianceSearch} 
      onSelect={onAllianceSelect}/>
  {/if}
  
  {#if selectedAlliance}
    <h3 class="selected-alliance">{selectedAlliance.allianceName}:</h3>
  {/if}

  {#if alliancePlayersData}
    <PlayerTable playerData={alliancePlayersData}/>
  {/if}

  {#if err}
    <p>Error: {err}</p>
  {/if}
</AlliancesFetch>
