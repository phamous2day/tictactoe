# tictactoe

It was tough to come up with ways to make tic tac toe look cool.
Integrated Google fonts to give the X O characters a more digital look. Used chalk background texture make a shoutout to elementary school roots.

Future Goals:
I'm planning on making a reset/start over button to clear the values. If time permits I may check of it's possible to enable sound effects with the "on.click" 

-Reset button made. I thought about clearing the values in the game, but my workaround was to make the reset button "refresh the page" as a way to renew the game.

New goal is to make a sort of AI to play against the user and to keep score.

Might want to make the fonts change color. Found this nifty trick on stackoverflow:

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
