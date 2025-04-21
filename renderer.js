import Board from "./class/Board.js";

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







