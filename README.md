# vue-blokus
Blokus is a four-player strategy game in which players place polyominoes on a 20x20 tile board which are allowed to be
adjacent at the corners but not at the edges of another polyomino of the same color. Each polyomino is 
a permutation of laterally connected tiles which follow every possible configuration permutation from 1 to 5 tiles. 

For ease of reference, we will define some terms. The line segments that comprise the border of a polyomino will be referred
to as edges, and the meeting of these edges will be referred to as a vertex.

![Alt text](/src/assets/terms_diagram.png "Optional Title")

Polyominoes of the same color are only allowed to touch at vertices on the board. For polyominoes of different colors,
there is no such restriction.

![Alt text](/src/assets/valid_1.png "Valid move")

A player who places down a 5-tile polyomino receives 5 points, 4 points for a 4-tile polyomino, and so on. As
the board fills up, the available spaces on the board becomes limited such that players will most likely not be able
to place all of their pieces. 

The winner of the game is s/he who receives the greatest number of points. Although tiles are allowed to 
be touching only at the vertices of common color pieces, there is no such restriction on pieces of other colors,
as we see below.

[ show some more tiles ]

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
Blokus as a physical board game was created in #### by 



