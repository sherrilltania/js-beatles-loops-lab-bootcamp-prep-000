// add solution here
function theBeatlesPlay(musicians, instruments) {
  var phrases = [];
  for (var i = 0; i < musicians.length; i++) {
    phrases.push(musicians[i] + " plays " + instruments[i]);
  }
  return phrases;
}

function johnLennonFacts(facts){
  var newFacts = []
  while(i < facts.length){
    newFacts.push(facts[i] + "!!!")
  }
  return newFacts
}
