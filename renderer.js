// const func = async () => {
//   const response = await window.versions.ping()
//   console.log(response) // prints out 'pong'
// }

// func()


for (let i = 11; i < 88; i++) {
  const element = document.getElementById(`id_${i}`);
  
  if (element) {
      element.addEventListener('click', function() {
          let square_id = this.id;
          console.log(square_id);
          // Дополнительная логика при клике
      });
  } else {
      // console.warn(`Element with ID 'id_${i}' not found`);
  }
}



const move_figure = (move_from, move_to) => {
  const element_move_from = document.getElementById(move_from);
  const element_move_to = document.getElementById(move_to);
  if (element_move_from.className !== 'square selected') {
    const temp = element_move_from.className;
    element_move_from.className = 'square';
    element_move_to.className = temp;
    element_move_to.classList.remove('selected');
  }
}


let selectedSquare = null; // Переменная для хранения выбранной клетки

// Функция для выделения клетки
const selectSquare = (square) => {
  if (selectedSquare) {
    // Если клетка уже была выбрана, убираем выделение
    selectedSquare.classList.remove('selected');
  }

  // Выделяем новую клетку
  square.classList.add('selected');
  selectedSquare = square; // Сохраняем выбранную клетку
};

// Обработчик кликов на клетки
const handleSquareClick = (event) => {
  const clickedSquare = event.target;

  // Если фигура уже выбрана, перемещаем её на новое место
  if (selectedSquare) {
    move_figure(selectedSquare.id, clickedSquare.id);
    selectedSquare.classList.remove('selected');
    selectedSquare = null; // Очищаем выбранную клетку
  } else {
    // Если клетка не выбрана, то выбираем её
    selectSquare(clickedSquare);
  }
};

// Добавление обработчиков событий на все клетки доски
const boardSquares = document.querySelectorAll('.square');
boardSquares.forEach(square => {
  square.addEventListener('click', handleSquareClick);
});





import Pawn from './class/Pawn.js'; // обязательно указывать .js

const white_pawn = new Pawn('black', 'id_12');
console.log(white_pawn.check_access_move())

let figures = {
  black_pawn == new Pawn('white', 'id_22')
}

