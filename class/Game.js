import Pawn from './figures/Pawn.js'
import King from './figures/King.js';
import Board from './Board.js'
import Knight from './figures/Knight.js';
import Bishop from './figures/Bishop.js';
import Rook from './figures/Rook.js';
import Queen from './figures/Queen.js';
import updateBoard from '../renderer.js';

function printBoard(board) {
  console.log(board.map(row => row.map(cell => cell ? 'P' : '.').join(' ')).join('\n'));
}



const figures_on_board = [
  new King('black', '04'),
  new King('white', '74'),
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

  new Queen('white', '73')
];

printBoard(Board.data);
console.log(Board.data);


updateBoard();


let selected = null;
let selectedID = null;
let figure = null
let checkmate = false;

let selected_before = null;
let selected_after = null;

let log = [];

let move_count = 0;

let div_team_move = document.getElementById('team_move');
div_team_move.textContent = `Ходят: ${move_count % 2 == 0 ? 'Белые' : 'Чёрные'}`;

let div_move_count = document.getElementById('move_count');
div_move_count.textContent = `Количество ходов: ${move_count}`

// Вложенный массив сплющиваем до одноуровневого массива, а потом считаем сколько значений != ''
const figures_on_board_count = Board.data.flat().filter(item => item !== '').length;
console.log(figures_on_board_count);

document.querySelectorAll('.square').forEach(square => {
  square.addEventListener('click', () => {
    // первый клик
    let team_move = '';
    if (move_count % 2 == 0) {
      team_move = 'white';
    }
    else {
      team_move = 'black';
    }

    // первый клик - любая фигура (нет шаха)
    if (!selected && Board.data[Number(square.id[0])][Number(square.id[1])].color == team_move && !checkmate) {
      // console.log(Board.data[Number(square.id[0])][Number(square.id[1])].color == team_move);
      selectedID = square.id;
      if (Board.data[Number(selectedID[0])][Number(selectedID[1])] != '') {
        figure = Board.data[Number(selectedID[0])][Number(selectedID[1])];
        selected = square;
        square.classList.add('selected');

        // подсветка ходов, нахождение куда можно ходить надо найти заранее
        for (let i = 0; i < figure.moves.length; i++) {
          let elem = document.getElementById(figure.moves[i]);
          elem.classList.add('access_move');
        };

        log.push(figure);
        log.push(selectedID);
        console.log(square);
      }
    }

    // первый клик - король (шах)
    else if (!selected && Board.data[Number(square.id[0])][Number(square.id[1])].color == team_move && checkmate) {
      selectedID = square.id;
      if (Board.data[Number(selectedID[0])][Number(selectedID[1])] instanceof King) {
        figure = Board.data[Number(selectedID[0])][Number(selectedID[1])];
        selected = square;
        square.classList.add('selected');

        // подсветка ходов, нахождение куда можно ходить надо найти заранее
        for (let i = 0; i < figure.moves.length; i++) {
          let elem = document.getElementById(figure.moves[i]);
          elem.classList.add('access_move');
        };

        log.push(figure);
        log.push(selectedID);
        console.log(square);
      }
    }



      
    
    // второй клик
    else if (selected) {
      selectedID = square.id;
      selected_before = Board.data[Number(selectedID[0])][Number(selectedID[1])];
      figure.move(selectedID);
      // updateBoard();
      selected_after = Board.data[Number(selectedID[0])][Number(selectedID[1])];

      if (selected_before != selected_after) {
        // Простое воспроизведение звука
        const sound = new Audio('sounds/move.mp3');
        sound.play().catch(e => console.log("Не удалось воспроизвести звук:", e));

        log.push(selectedID);

        const newBlock = document.createElement('div');
        newBlock.textContent = `${log[0]}: ${log[1]} -> ${log[2]}`
        document.getElementById('logs').appendChild(newBlock);

        move_count++;
        div_move_count.textContent = `Количество ходов: ${move_count}`
        div_team_move.textContent = `Ходят: ${move_count % 2 == 0 ? 'Белые' : 'Чёрные'}`;

        // если походил король — сбросить флаг шаха
        if (figure instanceof King) {
          checkmate = false;

          // очистить уведомление
          document.getElementById('checkmate').textContent = '';
        }

        // Вложенный массив сплющиваем до одноуровневого массива, а потом считаем сколько значений != ''
        const figures_on_board_count = Board.data.flat().filter(item => item !== '').length;
        console.log(figures_on_board_count);




        // выдаёт ходы всем фигурам
        for (let i = 0; i < figures_on_board.length; i++) {
          figures_on_board[i].access_move();
        }





        // проверка на шах
        for (let i = 0; i < Board.data.length; i++) {
          for (let j = 0; j < Board.data.length; j++) {
            let figure = Board.data[i][j];
            // если фигура угрожает королю
            if (
              (figure.color === 'black' && figure.moves.includes(figures_on_board[1].position)) ||
              (figure.color === 'white' && figure.moves.includes(figures_on_board[0].position))
            ) {
              let king = (figure.color === 'black') ? figures_on_board[1] : figures_on_board[0];

              // найти все ходы короля, которые НЕ находятся под атакой
              let safeMoves = king.moves.filter(move => {
                // проверим, не находится ли эта клетка под ударом какой-либо вражеской фигуры
                return !figures_on_board.some(enemy => {
                  return enemy.color !== king.color && enemy.moves.includes(move);
                });
              });

              if (safeMoves.length === 0) {
                // Мат
                let div = document.getElementById('checkmate');
                div.textContent = `Шах и мат ${king.color === 'white' ? 'белому' : 'чёрному'} королю!`;

                const newBlock = document.createElement('div');
                newBlock.textContent = `Шах и мат ${king.color === 'white' ? 'белому' : 'чёрному'} королю!`;
                document.getElementById('logs').appendChild(newBlock);

                let elem = document.getElementById('end_game');
                elem.style.display = 'flex';
                let elem1 = document.getElementById('end_game_text');
                elem1.textContent = `Победа ${king.color === 'white' ? "чёрных!" : "белых!"}`

                checkmate = true;
              } else {
                // Только шах
                let div = document.getElementById('checkmate');
                div.textContent = `Шах ${king.color === 'white' ? 'белому' : 'чёрному'} королю!`;

                const newBlock = document.createElement('div');
                newBlock.textContent = `Шах ${king.color === 'white' ? 'белому' : 'чёрному'} королю!`;
                document.getElementById('logs').appendChild(newBlock);

                checkmate = true;
              }
            }
          }
        }
      };



      
      selected.classList.remove('selected');
      selected = null;
      selectedID = null;
      log = [];
      updateBoard();


    }
  })
})