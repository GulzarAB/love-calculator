
function love() {
    // let name1 = prompt("Your name");
    // let name2 = prompt("Your crush name")
    let loveScore = Math.random();
    loveScore = Math.floor(loveScore) + 1 ;
    

  if (loveScore < 30) {
      alert ("Your Love Score is "+loveScore+" %. You should find another one!");
  } else if (loveScore < 60) {
      alert ("Your Love Score is "+loveScore+" %. You should make romantic dinner to your lover!");
  } else {
      alert ("Your Love Score is "+loveScore+" %. You perfectly match each other!");
  }
}