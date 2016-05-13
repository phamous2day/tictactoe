
$(function () {
  $('#message-panel').text('Your turn');

  $('.square')
    .addClass('open')
    .click(function () {
      // human move
      makeMove(this, 'O');
      if (gameEnded()) {
        $('.open').prop('disabled', true);
        return;
      }

      // computer move
      setTimeout(function() {
        var openSquares = $('.square.open');
        var chosen = openSquares[Math.floor(Math.random() * openSquares.length)];
        makeMove(chosen, 'X');
        if (gameEnded()) {
          $('.open').prop('disabled', true);
          return;
        }
      }, 1000);
    });

});

function makeMove(square, symbol) {
  $(square)
    .removeClass('open')
    .addClass(symbol)
    .text(symbol)
    .prop('disabled', true);
}

var winningCombinations = [
  ['A1', 'B1', 'C1'],
  ['A2', 'B2', 'C2'],
  ['A3', 'B3', 'C3'],
  ['A1', 'A2', 'A3'],
  ['B1', 'B2', 'B3'],
  ['C1', 'C2', 'C3'],
  ['A1', 'B2', 'C3'],
  ['A3', 'B2', 'C1']
];

function gameEnded() {
  var Os = $('.O').map(function() {
    return this.id;
  }).toArray();
  var Xs = $('.X').map(function() {
    return this.id;
  }).toArray();
  if (hasWinningCombination(Os)) {
    $('#message-panel').text('You won!');
    return true;
  }
  if (hasWinningCombination(Xs)) {
    $('#message-panel').text('You lose!');
    return true;
  }
  if ($('.open').length === 0) {
    $('#message-panel').text('Draw.');
    return true;
  }
}

function hasWinningCombination(ids) {
  for (var i = 0; i < winningCombinations.length; i++) {
    var matchCount = 0;
    for (var j = 0; j < winningCombinations[i].length; j++) {
      for (var k = 0; k < ids.length; k++) {
        if (ids[k] === winningCombinations[i][j]) {
          matchCount = matchCount + 1;
        }
      }
    }
    if (matchCount === 3) {
      return true;
    }
  }
  return false;
}
