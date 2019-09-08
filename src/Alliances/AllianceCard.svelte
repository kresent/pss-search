<script>
  export let allianceName
  export let id 
  export let members 
  export let trophies
  export let onSelect
  export let selectedAlliance;
</script>

<style>
  .alliance-card{
    padding: 10px 15px;
    border: 1px solid #666;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    min-width: 110px;
    height: 120px;
    justify-content: space-between;
  }

  .is-active{
    background: #98c2f7;
    font-weight: bold;
  }

  .title{
    font-size: 20px;
  }

  .alliance-info{
    display: flex;
    flex-direction: column;
  }
</style>

<div class="alliance-card" class:is-active={selectedAlliance && selectedAlliance.id === id} on:click={() => onSelect({id, allianceName})}>
  <span class="title">{allianceName}</span>
  <div class="alliance-info">
    <span>👨‍✈️ {members}</span>
    <span>🏆 {trophies}</span>
  </div>
</div>

