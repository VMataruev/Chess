// const func = async () => {
//   const response = await window.versions.ping()
//   console.log(response) // prints out 'pong'
// }



// func()


// for (let i = 11; i < 88; i++) {
//   const element = document.getElementById(`id_${i}`);
  
//   if (element) {
//       element.addEventListener('click', function() {
//           let square_id = this.id;
//           console.log(square_id);
//           // Дополнительная логика при клике
//       });
//   } else {
//       // console.warn(`Element with ID 'id_${i}' not found`);
//   }
// }



// const move_figure = (move_from, move_to) => {
//   const element_move_from = document.getElementById(move_from);
//   const element_move_to = document.getElementById(move_to);
//   if (element_move_from.className !== 'square selected') {
//     const temp = element_move_from.className;
//     element_move_from.className = 'square';
//     element_move_to.className = temp;
//     element_move_to.classList.remove('selected');
//   }
// }


// let selectedSquare = null; // Переменная для хранения выбранной клетки

// // Функция для выделения клетки
// const selectSquare = (square) => {
//   if (selectedSquare) {
//     // Если клетка уже была выбрана, убираем выделение
//     selectedSquare.classList.remove('selected');
//   }

//   // Выделяем новую клетку
//   square.classList.add('selected');
//   selectedSquare = square; // Сохраняем выбранную клетку
// };

// // Обработчик кликов на клетки
// const handleSquareClick = (event) => {
//   const clickedSquare = event.target;

//   // Если фигура уже выбрана, перемещаем её на новое место
//   if (selectedSquare) {
//     move_figure(selectedSquare.id, clickedSquare.id);
//     selectedSquare.classList.remove('selected');
//     selectedSquare = null; // Очищаем выбранную клетку
//   } else {
//     // Если клетка не выбрана, то выбираем её
//     selectSquare(clickedSquare);
//   }
// };

// // Добавление обработчиков событий на все клетки доски
// const boardSquares = document.querySelectorAll('.square');
// boardSquares.forEach(square => {
//   square.addEventListener('click', handleSquareClick);
// });





// import Pawn from './class/Pawn.js'; // обязательно указывать .js

// const white_pawn = new Pawn('black', 'id_12');
// console.log(white_pawn.check_access_move())





import Pawn from "./class/Pawn.js";
import Board from "./class/Board.js"

function printBoard(board) {
  console.log(board.map(row => row.map(cell => cell ? 'P' : '.').join(' ')).join('\n'));
}

// // создаём поле 8 на 8 (от 0 до 7)
// let board = [];

// for (let i = 0; i < 8; i++) {
//     let row = [];
//     for (let j = 0; j < 8; j++) {
//         row.push(''); // или любое другое начальное значение
//     }
//     board.push(row);
// }

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

// printBoard(Board.data);
// // black_pawn_1.move();
// // printBoard(Board.data);
// // black_pawn_1.move();
// // printBoard(Board.data);
// black_pawn_1.eat('20');
// printBoard(Board.data);
// black_pawn_1.move();
// printBoard(Board.data);

printBoard(Board.data);
black_pawn_1.move();
printBoard(Board.data);
white_pawn_1.move();
printBoard(Board.data);
black_pawn_1.move();
printBoard(Board.data);
black_pawn_1.move();
printBoard(Board.data);





