var $ = require('jquery');

export default function(xOffSet, yOffset) {
  //let canvas = document.getElementById('grid')
  var bw = 400;
  var bh = 400;
  //padding around grid
  let x;

  $("#board").attr({width: bw + 1, height: bh + 1});

  let canvas = document.getElementById("board");

  let ctx = canvas.getContext("2d");
  for (x = 0; x <= bw; x += 20) {
    ctx.moveTo(0.5 + x, 0);
    ctx.lineTo(0.5 + x, bh);
  }

  for (x = 0; x <= bh; x += 20) {
    ctx.moveTo(0, 0.5 + x);
    ctx.lineTo(bw, 0.5 + x);
  }

  ctx.strokeStyle = "black";
  ctx.stroke();

  ctx.fillStyle = '#DCDCDC';

  let xBox = Math.floor(xOffSet/20);
  let yBox = Math.floor(yOffset/20);

  let config = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];

  let i, j = 0;

  /* TODO: Annotate this function */

  for (i = 0; i < 5; i++) {
    for (j = 0; j < 5; j++) {
      if (config[i][j] === 1) {
        let xDel = 2 - i;
        let yDel = 2 - j;

        ctx.fillRect(((xBox + xDel) * 20) + 1, ((yBox + yDel) * 20) + 1, 19, 19);
      }
    }
  }
}