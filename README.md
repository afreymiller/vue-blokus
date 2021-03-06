# vue-blokus
Blokus is a four-player strategy game in which players choose a color and take turns placing polyominoes of said color on a 20x20 tile board. Each polyomino is a permutation of laterally connected tiles which follow every possible configuration permutation from 1 to 5 tiles. 

For ease of reference, we will define some terms. The line segments that comprise the border of a polyomino will be referred
to as edges, and the meeting of these edges will be referred to as a vertex.

![Alt text](/src/assets/terms_diagram.png "Optional Title")

Polyominoes of the same color are only allowed to touch at vertices on the board, but not at the edges. For polyominoes of different colors,
there is no such restriction.

![Alt text](/src/assets/valid_2.png "Valid move")

A player who places down a 5-tile polyomino receives 5 points, 4 points for a 4-tile polyomino, and so on. As
the board fills up, the available spaces on the board becomes limited such that players will most likely not be able
to place all of their pieces. The winner of the game is s/he who obtains the greatest number of points. 

## installation

If you haven't already installed yarn, install it following the instructions [here](https://yarnpkg.com/en/docs/install#mac-stable).

1. yarn install
2. yarn serve
3. Game will be running on localhost port 8080

## tech
- AWS Lambda
- AWS Cognito
- CSS
- HTML Canvas
- Mocha
- Postman
- Trello
- VueJS
- Vuex

## acknowledgements
Blokus as a physical board game was created in 2000 by Sekkoïa, a French game company. Before I release
this to production I will ask them for permission to publish this. I intend for the game to be free-to-play
for all users.

I'd like to thank ekcrisp, ..., for their project mentorship.



