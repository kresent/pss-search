<script>
	import {onMount} from 'svelte';
	import {xmlToJson, strToXml} from '../utils';
  import {alliancesAdapter} from './utils';
  import {userAdapter} from '../Players/utils';
	
	let alliancesData = null;
	let err = null;

	async function fetchAlliances() {
    const results = await sendAlliancesRequest()

    alliancesData = results;
	}

  function sendAlliancesRequest() {
    return fetch(`API_ALLIANCES`)
			.then(response => response.text())
  		.then(data => {
				const res = xmlToJson(strToXml(data));

				try {
					const alliances = res.AllianceService.ListAlliancesByRanking.Alliances.Alliance;
					if(!alliances) {
						return null;
					}

					return alliancesAdapter(alliances);
				} catch(error) {
					console.log(error)
				}
			})
			.catch(error => {
				console.log(error)
			});
	}

	// TODO: move to another file
	export let selectedAlliance = null;
	let alliancePlayersData = null;

	async function fetchAlliancePlayers(allianceId) {
    const results = await sendAlliancePlayerRequest(allianceId)

    alliancePlayersData = results;
	}

  function sendAlliancePlayerRequest(allianceId) {
    return fetch(`API_ALLIANCE_PLAYERS&allianceId=${allianceId}`)
			.then(response => response.text())
  		.then(data => {
				const res = xmlToJson(strToXml(data));
				try {
					console.log(res)
					const alliances = res.AllianceService.ListUsers.Users.User;
					if(!alliances) {
						return null;
					}

					return userAdapter(alliances);
				} catch(error) {
					console.log(error)
				}
			})
			.catch(error => {
				console.log(error)
			});
	}

	onMount(async () => {
		fetchAlliances();
	});

	$: if(!!selectedAlliance) {
		fetchAlliancePlayers(selectedAlliance.id)
	}
</script>

<slot {alliancesData} {fetchAlliancePlayers} {alliancePlayersData}/>