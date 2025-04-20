class Pawn {
    constructor(color, start_position) {
        this.color = color;
        this.position = start_position; // id_12
        const square = document.getElementById(start_position);
        if (this.color == 'black') {
            square.classList.add('bw');
        }
        else {
            square.classList.add('ww');
        };

        this.selectedSquare = null;

        const boardSquares = document.querySelectorAll('.square');
        boardSquares.forEach(square => {
            square.addEventListener('click', handleSquareClick);
          });

    }; 

    check_access_move = () => {
        const access_moves = [];
        const number = parseInt(this.position.slice(3)); // 12
        if (this.color == 'black') {
            for (let i = number; i < 88; i += 10) {
                access_moves.push(i);
            }
        }
        else {
            for (let i = number; i < 88; i -= 10) {
                access_moves.push(i);
            }
        }

        return access_moves;
    };



    move_figure = (move_from, move_to) => {
        const element_move_from = document.getElementById(move_from);
        const element_move_to = document.getElementById(move_to);
        if (element_move_from.className !== 'square selected') {
          const temp = element_move_from.className;
          element_move_from.className = 'square';
          element_move_to.className = temp;
          element_move_to.classList.remove('selected');
        }
    };


    

    handleSquareClick = (event) => {
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


    // Функция для выделения клетки
    selectSquare = (square) => {
        if (this.selectedSquare) {
        // Если клетка уже была выбрана, убираем выделение
        this.selectedSquare.classList.remove('selected');
        }
    
        // Выделяем новую клетку
        square.classList.add('selected');
        this.selectedSquare = square; // Сохраняем выбранную клетку
    };


}

export default Pawn