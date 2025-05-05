import Pawn from './figures/Pawn.js';
import King from './figures/King.js';
import Board from './Board.js';
import Knight from './figures/Knight.js';
import Bishop from './figures/Bishop.js';
import Rook from './figures/Rook.js';
import Queen from './figures/Queen.js';
import updateBoard from '../renderer.js';

function printBoard(board) {
  console.log(board.map(row => row.map(cell => cell ? 'P' : '.').join(' ')).join('\n'));
}

// ======================
// Создание фигур
// ======================
const figures_on_board = [
  new King('black', '04'),
  new King('white', '74'),

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

// ======================
// Глобальные переменные
// ======================
let selected = null;
let selectedID = null;
let figure = null;
let checkmate = false;

let selected_before = null;
let selected_after = null;

let log = [];
let move_count = 0;

let div_team_move = document.getElementById('team_move');
div_team_move.textContent = `Ходят: ${move_count % 2 == 0 ? 'Белые' : 'Чёрные'}`;

let div_move_count = document.getElementById('move_count');
div_move_count.textContent = `Количество ходов: ${move_count}`;

// ======================
// Бот для чёрных
// ======================
function botMove() {
  if (checkmate) {
    // Найти черного короля
    const blackKing = figures_on_board.find(f => f instanceof King && f.color === 'black');

    if (!blackKing || blackKing.moves.length === 0) return;

    // Приоритет — съесть вражескую фигуру
    const attackMoves = blackKing.moves.filter(move => {
      const row = Number(move[0]);
      const col = Number(move[1]);
      const target = Board.data[row][col];
      return target !== '' && target.color === 'white';
    });

    if (attackMoves.length > 0) {
      const move = attackMoves[Math.floor(Math.random() * attackMoves.length)];
      const oldPosition = blackKing.position;
      blackKing.move(move);

      const sound = new Audio('sounds/move.mp3');
      sound.play().catch(e => console.log("Не удалось воспроизвести звук:", e));

      const newBlock = document.createElement('div');
      newBlock.textContent = `Король (бот) съел: ${oldPosition} -> ${move}`;
      document.getElementById('logs').appendChild(newBlock);

      move_count++;
      div_move_count.textContent = `Количество ходов: ${move_count}`;
      div_team_move.textContent = `Ходят: ${move_count % 2 === 0 ? 'Белые' : 'Чёрные'}`;

      for (let i = 0; i < figures_on_board.length; i++) {
        figures_on_board[i].access_move();
      }

      updateBoard();
      return;
    }

    // Иначе — просто безопасные ходы
    const safeMoves = blackKing.moves.filter(move => {
      return !figures_on_board.some(enemy =>
        enemy.color === 'white' && enemy.moves.includes(move)
      );
    });

    if (safeMoves.length === 0) return;

    const move = safeMoves[Math.floor(Math.random() * safeMoves.length)];
    const oldPosition = blackKing.position;
    blackKing.move(move);

    const sound = new Audio('sounds/move.mp3');
    sound.play().catch(e => console.log("Не удалось воспроизвести звук:", e));

    const newBlock = document.createElement('div');
    newBlock.textContent = `Король (бот): ${oldPosition} -> ${move}`;
    document.getElementById('logs').appendChild(newBlock);

    move_count++;
    div_move_count.textContent = `Количество ходов: ${move_count}`;
    div_team_move.textContent = `Ходят: ${move_count % 2 === 0 ? 'Белые' : 'Чёрные'}`;

    for (let i = 0; i < figures_on_board.length; i++) {
      figures_on_board[i].access_move();
    }

    updateBoard();
    return;
  }

  // Обычное поведение — любой ход
  const blackFigures = figures_on_board.filter(f => f.color === 'black');
  const movableFigures = blackFigures.filter(f => f.moves.length > 0);

  if (movableFigures.length === 0) return;

  const figure = movableFigures[Math.floor(Math.random() * movableFigures.length)];
  const move = figure.moves[Math.floor(Math.random() * figure.moves.length)];

  const oldPosition = figure.position;
  figure.move(move);

  const sound = new Audio('sounds/move.mp3');
  sound.play().catch(e => console.log("Не удалось воспроизвести звук:", e));

  const newBlock = document.createElement('div');
  newBlock.textContent = `${figure.toString()}: ${oldPosition} -> ${move}`;
  document.getElementById('logs').appendChild(newBlock);

  move_count++;
  div_move_count.textContent = `Количество ходов: ${move_count}`;
  div_team_move.textContent = `Ходят: ${move_count % 2 === 0 ? 'Белые' : 'Чёрные'}`;

  for (let i = 0; i < figures_on_board.length; i++) {
    figures_on_board[i].access_move();
  }

  updateBoard();
}



// ======================
// Обработка кликов
// ======================
document.querySelectorAll('.square').forEach(square => {
  square.addEventListener('click', () => {
    let team_move = move_count % 2 === 0 ? 'white' : 'black';

    if (!selected && Board.data[Number(square.id[0])][Number(square.id[1])].color === team_move && !checkmate) {
      selectedID = square.id;
      if (Board.data[Number(selectedID[0])][Number(selectedID[1])] !== '') {
        figure = Board.data[Number(selectedID[0])][Number(selectedID[1])];
        selected = square;
        square.classList.add('selected');

        for (let i = 0; i < figure.moves.length; i++) {
          let elem = document.getElementById(figure.moves[i]);
          elem.classList.add('access_move');
        }

        log.push(figure);
        log.push(selectedID);
      }
    }

    else if (!selected && Board.data[Number(square.id[0])][Number(square.id[1])].color === team_move && checkmate) {
      selectedID = square.id;
      if (Board.data[Number(selectedID[0])][Number(selectedID[1])] instanceof King) {
        figure = Board.data[Number(selectedID[0])][Number(selectedID[1])];
        selected = square;
        square.classList.add('selected');

        for (let i = 0; i < figure.moves.length; i++) {
          let elem = document.getElementById(figure.moves[i]);
          elem.classList.add('access_move');
        }

        log.push(figure);
        log.push(selectedID);
      }
    }

    else if (selected) {
      selectedID = square.id;
      selected_before = Board.data[Number(selectedID[0])][Number(selectedID[1])];
      figure.move(selectedID);
      selected_after = Board.data[Number(selectedID[0])][Number(selectedID[1])];

      if (selected_before !== selected_after) {
        const sound = new Audio('sounds/move.mp3');
        sound.play().catch(e => console.log("Не удалось воспроизвести звук:", e));

        log.push(selectedID);

        const newBlock = document.createElement('div');
        newBlock.textContent = `${log[0]}: ${log[1]} -> ${log[2]}`;
        document.getElementById('logs').appendChild(newBlock);

        move_count++;
        div_move_count.textContent = `Количество ходов: ${move_count}`;
        div_team_move.textContent = `Ходят: ${move_count % 2 === 0 ? 'Белые' : 'Чёрные'}`;

        if (figure instanceof King) {
          checkmate = false;
          document.getElementById('checkmate').textContent = '';
        }

        for (let i = 0; i < figures_on_board.length; i++) {
          figures_on_board[i].access_move();
        }

        for (let i = 0; i < Board.data.length; i++) {
          for (let j = 0; j < Board.data.length; j++) {
            let figure = Board.data[i][j];
            if (
              (figure.color === 'black' && figure.moves.includes(figures_on_board[1].position)) ||
              (figure.color === 'white' && figure.moves.includes(figures_on_board[0].position))
            ) {
              let king = figure.color === 'black' ? figures_on_board[1] : figures_on_board[0];

              let safeMoves = king.moves.filter(move => {
                return !figures_on_board.some(enemy => {
                  return enemy.color !== king.color && enemy.moves.includes(move);
                });
              });

              if (safeMoves.length === 0) {
                let div = document.getElementById('checkmate');
                div.textContent = `Шах и мат ${king.color === 'white' ? 'белому' : 'чёрному'} королю!`;

                const newBlock = document.createElement('div');
                newBlock.textContent = `Шах и мат ${king.color === 'white' ? 'белому' : 'чёрному'} королю!`;
                document.getElementById('logs').appendChild(newBlock);

                let elem = document.getElementById('end_game');
                elem.style.display = 'flex';
                let elem1 = document.getElementById('end_game_text');
                elem1.textContent = `Победа ${king.color === 'white' ? "чёрных!" : "белых!"}`;

                checkmate = true;
              } else {
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

        // === Вызов бота ===
        if (move_count % 2 === 1 && !checkmate) {
          setTimeout(botMove, 500); // задержка для реалистичности
        }
      }

      // Очистка выбранной клетки и подсветки
      selected.classList.remove('selected');
      document.querySelectorAll('.access_move').forEach(elem => elem.classList.remove('access_move'));
      selected = null;
      selectedID = null;
      log = [];

      updateBoard();
    }
  });
});

