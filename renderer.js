import Board from "./class/Board.js";

function updateBoard() {

  document.querySelectorAll('.square').forEach(square => {
    square.className = 'square';
  });

  for (let row = 0; row < Board.data.length; row++) {
    for (let col = 0; col < Board.data[row].length; col++) {
      // console.log(`row: ${row}, col: ${col}, value: ${Board.data[row][col]}`);
  
      switch (Board.data[row][col].toString()) {
        case 'black_bishop':
          const black_bishop = document.getElementById(`${row}${col}`);
          black_bishop.classList.add('black_bishop');
          break;
  
        case 'black_king':
          const black_king = document.getElementById(`${row}${col}`);
          black_king.classList.add('black_king');
          break;
  
        case 'black_knight':
          const black_knight = document.getElementById(`${row}${col}`);
          black_knight.classList.add('black_knight');
          break;
  
        case 'black_pawn':
          const black_pawn = document.getElementById(`${row}${col}`);
          black_pawn.classList.add('black_pawn');
          break;
  
        case 'black_queen':
          const black_queen = document.getElementById(`${row}${col}`);
          black_queen.classList.add('black_queen');
          break;
  
        case 'black_rook':
          const black_rook = document.getElementById(`${row}${col}`);
          black_rook.classList.add('black_rook');
          break;
  
        case 'white_bishop':
          const white_bishop = document.getElementById(`${row}${col}`);
          white_bishop.classList.add('white_bishop');
          break;
  
        case 'white_king':
          const white_king = document.getElementById(`${row}${col}`);
          white_king.classList.add('white_king');
          break;
  
        case 'white_knight':
          const white_knight = document.getElementById(`${row}${col}`);
          white_knight.classList.add('white_knight');
          break;
  
        case 'white_pawn':
          const white_pawn = document.getElementById(`${row}${col}`);
          white_pawn.classList.add('white_pawn');
          break;
  
        case 'white_queen':
          const white_queen = document.getElementById(`${row}${col}`);
          white_queen.classList.add('white_queen');
          break;
  
        case 'white_rook':
          const white_rook = document.getElementById(`${row}${col}`);
          white_rook.classList.add('white_rook');
          break;
  
        default:
          break;
      }
    }
  }
};


updateBoard();

let selected = null;
let selectedID = null;
let figure = null

let selected_before = null;
let selected_after = null;

let log = [];

let move_count = 0;

let div_team_move = document.getElementById('team_move');
div_team_move.textContent = `Ходят: ${move_count % 2 == 0 ? 'Белые' : 'Чёрные'}`;

let div_move_count = document.getElementById('move_count');
div_move_count.textContent = `Количество ходов: ${move_count}`


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

    if (!selected && Board.data[Number(square.id[0])][Number(square.id[1])].color == team_move) {
      // console.log(Board.data[Number(square.id[0])][Number(square.id[1])].color == team_move);
      selectedID = square.id;
      if (Board.data[Number(selectedID[0])][Number(selectedID[1])] != '') {
        figure = Board.data[Number(selectedID[0])][Number(selectedID[1])];
        selected = square;
        square.classList.add('selected');

        // TODO: подсветка ходов, нахождение куда можно ходить надо найти заранее
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
      updateBoard();
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
      };
      selected.classList.remove('selected');
      selected = null;
      selectedID = null;
      log = [];
    }
  })
})






