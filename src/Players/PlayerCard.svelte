<script>
  export let playerName
  export let allianceName 
  export let allianceRank 
  export let crewDonation
  export let crewRequested
  export let trophiesCount
  export let starsCount
  export let lastLogin
</script>

<style>
  .player-name{
    font-size: 28px;
    padding-left: 0;
    padding-right: 30px;
  }
  .alliance-name{
    font-size: 23px
  }
  .alliance-rank{
    font-size: 14px;
    color: #666;
    padding-right: 30px;
  }

  .alliance-crew{
    padding-right: 30px;
  }
  
  .stars-count{
    padding-right: 30px;
  }
  
  .trophies-count{
    padding-right: 30px;
  }

  .alliance-crew-donated{
    color: #16a516;  
  }
  
  .alliance-crew-requested{
    color: #b71a1a;
  }

  .last-login-text{
    font-size: 12px;
    color: #666;
  }
</style>

<td class="player-name">{playerName}</td>
<td class="alliance-name">{allianceName}</td>
<td class="alliance-rank">{allianceRank}</td>
<td class="alliance-crew"><span class="alliance-crew-donated">👨‍✈️{crewDonation}</span>/<span class="alliance-crew-requested">{crewRequested}</span></td>
<td class="trophies-count">🏆{trophiesCount}</td>
<td class="stars-count">⭐️{starsCount}</td>
<td class="last-login">📲<span class="last-login-text">{lastLogin}</span></td>

