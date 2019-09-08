<script>
  import {Link} from "svelte-routing";
</script>

<style>
  .nav-bar{
    padding: 10px 8px 5px;
    display: flex;
  }

  .separator{
    width: 15px;
  }
</style>

<nav class="nav-bar">
  <Link to="/">Alliances</Link>
  <div class="separator"></div>
  <Link to="players">Players</Link>
</nav>