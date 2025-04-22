import Pawn from './figures/Pawn.js'
import King from './figures/King.js';
import Board from './Board.js'
import Knight from './figures/Knight.js';
import Bishop from './figures/Bishop.js';
import Rook from './figures/Rook.js';
import Queen from './figures/Queen.js';

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

const black_knight_1 = new Knight('black', '01');
const black_knight_2 = new Knight('black', '06')

const black_bishop_1 = new Bishop('black', '02');
const black_bishop_2 = new Bishop('black', '05');

const black_rook_1 = new Rook('black', '00');
const black_rook_2 = new Rook('black', '07');

const black_king = new King('black', '04')
const black_queen = new Queen('black', '03')





const white_pawn_0 = new Pawn('white', '60');
const white_pawn_1 = new Pawn('white', '61');
const white_pawn_2 = new Pawn('white', '62');
const white_pawn_3 = new Pawn('white', '63');
const white_pawn_4 = new Pawn('white', '64');
const white_pawn_5 = new Pawn('white', '65');
const white_pawn_6 = new Pawn('white', '66');
const white_pawn_7 = new Pawn('white', '67');

const white_knight_1 = new Knight('white', '71');
const white_knight_2 = new Knight('white', '76')

const white_bishop_1 = new Bishop('white', '72');
const white_bishop_2 = new Bishop('white', '75');

const white_rook_1 = new Rook('white', '70');
const white_rook_2 = new Rook('white', '77');

const white_king = new King('white', '74');
const white_queen = new Queen('white', '73')




// printBoard(Board.data);

