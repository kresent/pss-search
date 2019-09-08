<script>
  import MarketFetch from "./MarketFetch.svelte";
</script>

<style>
  .market-table > tr{
		vertical-align: baseline;
	}

  .is-bux{
    color: green;
  }

  .is-gas{
    color: purple;
  }

  .is-min{
    color: #1599e6;
  }

  .user{
    font-size: 11px;
    padding-right: 10px;
  }

  .goods{
    font-size: 20px;
    padding-right: 10px;
  }
  .quantity{
    font-size: 20px;
  }
  .price{ 
    font-size: 23px;
  }
</style>


<MarketFetch let:marketData let:err>
  {#if marketData}
    <table class="market-table">
    {#each marketData as marketEntry}
      <tr>
        <td class="user">{marketEntry.user}</td>  
        <td class="quantity">{marketEntry.quantity}</td> 
        <td class="goods">{marketEntry.goods}</td> 
        <td>{marketEntry.price}</td>
        <td 
          class="price"
          class:is-bux={ marketEntry.currency === 'starbux'}
          class:is-gas={ marketEntry.currency === 'gas'}
          class:is-min={ marketEntry.currency === 'mineral'}
        >{marketEntry.currency}</td> 
      </tr>
    {/each}
    </table>
  {/if}

  {#if err}
    <p>Error: {err}</p>
  {/if}
</MarketFetch>
