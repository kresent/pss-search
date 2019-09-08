<script>
  import { Router, Route } from "svelte-routing";
  import NavBar from "./NavBar.svelte";
  import PlayerSarch from "./Players/PlayerSearch.svelte";
  import Market from "./Market/Market.svelte";
  import AllianceSarch from "./Alliances/AllianceSearch.svelte";
</script>

<style>
	:global(body) {
		font-family: 'Roboto', sans-serif;
		padding: 0;
	}
</style>


<svelte:head>
	<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
</svelte:head>
<Router>
  <NavBar/>
	<Route path="players" component="{PlayerSarch}" />
	<Route path="try" component="{Market}" />
	<Route path="/"><AllianceSarch /></Route>
</Router>