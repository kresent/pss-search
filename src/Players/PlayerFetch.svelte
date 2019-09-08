<script>
  import {xmlToJson, strToXml, flatten} from '../utils';
  import {userAdapter} from './utils';
	
	export let playerNames = ''
	let playerData = null;
	let err = null;

	async function fetchPlayers() {
    const players = playerNames.split(',');
    const promises = players.map(p => {
      const player = p.trim();
      return sendRequest(player);
    });
    const results = await Promise.all(promises).catch(e => {
      err = e;
    });

    playerData = flatten(results);
	}

  function sendRequest(name) {
    return fetch(`API?searchString=${name}`)
			.then(response => response.text())
  		.then(data => {
				const res = xmlToJson(strToXml(data));

				try {
					const users = res.UserService.SearchUsers.Users.User;
					if(!users) {
						return null;
					}

					return [...userAdapter(users)];
				} catch(error) {
					console.log(error)
				}
			})
			.catch(error => {
				console.log(error)
			});
  }
</script>

<slot {playerData} {err} {fetchPlayers}/>