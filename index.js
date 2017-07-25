function dwarfRollCall(dwarves) {
//   var numDwarves = [];
//   for (var i = 0; i < dwarves.length; i++) {
//     numDwarves.push(i + 1 + '. ' + dwarves[i]);
//   }
//   return numDwarves.join(' ')
// }
  var numDwarves = '';
  for (var i = 0; i < dwarves.length; i++) {

    if (i === 0)
    numDwarves += `${i + 1}. ${dwarves[i]}`;

    if (i > 0) {
      numDwarves += ` ${i + 1}. ${dwarves[i]}`;

    }
  }
  return numDwarves + ' '
}

function summonCaptainPlanet(planeteerCalls){
  var upperCall = [];

  for (var i = 0; i < planeteerCalls.length; i++) {
    upperCall.push(planeteerCalls[i].toString().toUpperCase() + '!')
  }

  return upperCall
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var letters = word.split('');
      if (letters.length > 4) {
        return true;
      }
      else return false
    }
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === 'gouda') {
      return foods[i];
    }
    if (foods[i] === 'cheddar') {
      return foods[i];
    }
    if (foods[i] === 'camembert') {
      return foods[i];
    }
  }
  return 'no cheese!'
}
