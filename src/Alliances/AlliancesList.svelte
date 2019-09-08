<script>
	import AllianceCard from './AllianceCard.svelte';

	export let onSelect;
	export let alliancesData;
	export let selectedAlliance = null;
	export let allianceSearch = '';

	$: alliances = filterAlliances(alliancesData, allianceSearch);

	function filterAlliances(list, query) {
    if(query.length < 1 || !query) {
      return alliancesData
    }

    return list.filter(a => a.allianceName.toLowerCase().includes(query.toLowerCase()))
  }
</script>

<style>
	.alliance-list{
		margin-top: 30px;
    display: flex;
		overflow-x: auto;
    padding-bottom: 15px;
		padding-left: 8px;
	}
</style>

<div class="alliance-list">
	{#each alliances as alliance}
		<AllianceCard {...alliance} {selectedAlliance} {onSelect}/>
	{/each}
</div>
