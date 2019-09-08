export function alliancesAdapter(alliances) {
  return alliances.map(({ _attributes: a }) => ({
    allianceName: a.AllianceName,
    id: a.AllianceId,
    members: a.NumberOfApprovedMembers,
    trophies: a.Trophy,
  }))
}
