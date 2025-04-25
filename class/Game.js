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



const figures_on_board = [
  // сначала ряд, потом столбец
  new Pawn('black', '10'),
  new Pawn('black', '11'),
  new Pawn('black', '12'),
  new Pawn('black', '13'),
  new Pawn('black', '14'),
  new Pawn('black', '15'),
  new Pawn('black', '16'),
  new Pawn('black', '17'),

  new Knight('black', '01'),
  new Knight('black', '06'),

  new Bishop('black', '02'),
  new Bishop('black', '05'),

  new Rook('black', '00'),
  new Rook('black', '07'),

  new King('black', '04'),
  new Queen('black', '03'),

  // ==============

  new Pawn('white', '60'),
  new Pawn('white', '61'),
  new Pawn('white', '62'),
  new Pawn('white', '63'),
  new Pawn('white', '64'),
  new Pawn('white', '65'),
  new Pawn('white', '66'),
  new Pawn('white', '67'),

  new Knight('white', '71'),
  new Knight('white', '76'),

  new Bishop('white', '72'),
  new Bishop('white', '75'),

  new Rook('white', '70'),
  new Rook('white', '77'),

  new King('white', '74'),
  new Queen('white', '73')
];

// printBoard(Board.data);

