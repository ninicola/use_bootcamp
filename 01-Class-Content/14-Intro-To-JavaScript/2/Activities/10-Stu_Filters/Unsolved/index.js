// @TODO: Uncomment the following file and complete the code
//        according to the instructions in README.md.

// Roster of player
var roster = [{
  name: "Doug",
  position: "Quarterback",
  madeTeam: true
},
{
  name: "Antonio",
  position: "Tight End",
  madeTeam: true
},
{
  name: "Nick",
  position: "Kicker",
  madeTeam: false
},
{
  name: "Ereck",
  position: "Offensive Live",
  madeTeam: false
},
{
  name: "AJ",
  position: "Line Backer",
  madeTeam: true
}];

// YOUR CODE HERE

var teamplayer=roster.filter((r)=> {
    return r.madeTeam
});
console.log(teamplayer);
//* Print out the number of players who made the team, and of players who did not.
var teamNumner;
var nonteam;
teamNumber=teamplayer.length;
console.log(teamNumber);
var nonplayer=roster.filter((r)=> {
    return r.madeTeam==false;
});
nonteam=nonplayer.length;
