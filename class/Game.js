import Pawn from './figures/Pawn.js'
import Board from './Board.js'

function printBoard(board) {
  console.log(board.map(row => row.map(cell => cell ? 'P' : '.').join(' ')).join('\n'));
}


// сначала ряд, потом столбец
let black_pawn_0 = new Pawn('black', '10');
let black_pawn_1 = new Pawn('black', '11');
let black_pawn_2 = new Pawn('black', '12');
let black_pawn_3 = new Pawn('black', '13');
let black_pawn_4 = new Pawn('black', '14');
let black_pawn_5 = new Pawn('black', '15');
let black_pawn_6 = new Pawn('black', '16');
let black_pawn_7 = new Pawn('black', '17');

let white_pawn_0 = new Pawn('white', '60')
let white_pawn_1 = new Pawn('white', '61')
let white_pawn_2 = new Pawn('white', '62')
let white_pawn_3 = new Pawn('white', '63')
let white_pawn_4 = new Pawn('white', '64')
let white_pawn_5 = new Pawn('white', '65')
let white_pawn_6 = new Pawn('white', '66')
let white_pawn_7 = new Pawn('white', '67')



printBoard(Board.data);
black_pawn_1.move();
printBoard(Board.data);
