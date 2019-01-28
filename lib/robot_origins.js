pry = require('pryjs')

function returnsToOrigin(sequence) {
  sequence = normalizeSequence(sequence);
  finalCoords = evaluateMovement(sequence);
  return (finalCoords[0] == 0) && (finalCoords[1] == 0);
}

function normalizeSequence(sequence) {
  return sequence.toLowerCase()
                 .replace("lr", "")
                 .replace("rl", "")
                 .replace(" ",  "");
}

function evaluateMovement(sequence) {
  // Directions: 0 = up, 1 = right, 2 = down, 3 = left.
  // Increment on right turn, decrement on left turn.
  var dir= 0;
  var x = 0;
  var y = 0;
  for (var i = 0; i < sequence.length; i++) {
    switch (sequence[i]) {
      case 'g':
        var movement = move(dir);
        x += movement[0];
        y += movement[1];
        break;
      case 'r': dir += 1;
        break;
      case 'l': dir -= 1;
        break;
      default: break;
    }
  }
  return [x, y];
}

function move(dir) {
  dir = (4 + (dir % 4)) % 4; // converts numbers to positive mod 4
  switch (dir) {
    case 0: return [0, 1];
      break;
    case 1: return [1, 0];
      break;
    case 2: return [0, -1];
      break;
    case 3: return [-1, 0];
      break;
  }
}

module.exports = returnsToOrigin;
