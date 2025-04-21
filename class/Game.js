import Pawn from './figures/Pawn.js'
import King from './figures/King.js';
import Board from './Board.js'

function printBoard(board) {
  console.log(board.map(row => row.map(cell => cell ? 'P' : '.').join(' ')).join('\n'));
}


// сначала ряд, потом столбец
const black_pawn_0 = new Pawn('black', '10');
const black_pawn_1 = new Pawn('black', '11');
const black_pawn_2 = new Pawn('black', '12');
const black_pawn_3 = new Pawn('black', '13');
const black_pawn_4 = new Pawn('black', '14');
const black_pawn_5 = new Pawn('black', '15');
const black_pawn_6 = new Pawn('black', '16');
const black_pawn_7 = new Pawn('black', '17');

const black_king = new King('black', '04')

const white_pawn_0 = new Pawn('white', '60');
const white_pawn_1 = new Pawn('white', '61');
const white_pawn_2 = new Pawn('white', '62');
const white_pawn_3 = new Pawn('white', '63');
const white_pawn_4 = new Pawn('white', '64');
const white_pawn_5 = new Pawn('white', '65');
const white_pawn_6 = new Pawn('white', '66');
const white_pawn_7 = new Pawn('white', '67');

const white_king = new King('white', '74');




// printBoard(Board.data);

