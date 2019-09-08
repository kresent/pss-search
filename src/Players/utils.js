export function userAdapter(users) {
  if (!Array.isArray(users)) {
    users = [users];
  }

  return users.map(({ _attributes: u }) => ({
    playerName: u.Name,
    allianceName: u.AllianceName || '––',
    allianceRank: u.AllianceMembership || '',
    crewDonation: u.CrewDonated,
    crewRequested: u.CrewReceived,
    trophiesCount: u.Trophy,
    starsCount: u.TournamentRewardPoints,
    lastLogin: dateFormatter(u.LastLoginDate),
  }))
}

function dateFormatter(dt) {
  const [date, time] = new Date(dt).toISOString().substring(0, 19).split('T');
  return `${date} ${time}`;
}