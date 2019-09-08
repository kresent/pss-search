<script>
	import {onDestroy} from 'svelte';
  import {xmlToJson, strToXml} from '../utils';
  import {marketAdapter} from './utils';
	
	let marketData = null;
	let err = null;

	async function fetchMarketData() {
    const results = await sendMarketRequest()

    marketData = results;
	}

  function sendMarketRequest() {
    return fetch(`API_MARKET`)
			.then(response => response.text())
  		.then(data => {
				const res = xmlToJson(strToXml(data));

				try {
					const marketEntries = res.MessageService.ListActiveMarketplaceMessages.Messages.Message;
					if(!marketEntries) {
						return null;
					}

					return marketAdapter(marketEntries);
				} catch(error) {
					console.log(error)
				}
			})
			.catch(error => {
				console.log(error)
			});
  }
  
  const interval = setInterval(() => fetchMarketData(), 1000);

  onDestroy(() => clearInterval(interval));
  // fetchMarketData()
</script>

<slot {marketData} {fetchMarketData}/>