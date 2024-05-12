function goals (laLigaGoals, BundesligaGoals, championLeagueGoals) {

    return laLigaGoals + BundesligaGoals + championLeagueGoals
  }
  
  let laLigaGoals = 20
  let BundesligaGoals = 25
  let championLeagueGoals = 8
  let totalGoals = goals(laLigaGoals, BundesligaGoals, championLeagueGoals)
  document.write(totalGoals + " GOALS")