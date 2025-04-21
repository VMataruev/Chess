// class Pawn {
//     constructor(color, start_position) {
//         this.color = color;
//         this.position = start_position; // id_12
//         const square = document.getElementById(start_position);
//         if (this.color == 'black') {
//             square.classList.add('bw');
//         }
//         else {
//             square.classList.add('ww');
//         };

//         this.selectedSquare = null;

//         const boardSquares = document.querySelectorAll('.square');
//         boardSquares.forEach(square => {
//             square.addEventListener('click', handleSquareClick);
//           });

//     }; 

//     check_access_move = () => {
//         const access_moves = [];
//         const number = parseInt(this.position.slice(3)); // 12
//         if (this.color == 'black') {
//             for (let i = number; i < 88; i += 10) {
//                 access_moves.push(i);
//             }
//         }
//         else {
//             for (let i = number; i < 88; i -= 10) {
//                 access_moves.push(i);
//             }
//         }

//         return access_moves;
//     };



//     move_figure = (move_from, move_to) => {
//         const element_move_from = document.getElementById(move_from);
//         const element_move_to = document.getElementById(move_to);
//         if (element_move_from.className !== 'square selected') {
//           const temp = element_move_from.className;
//           element_move_from.className = 'square';
//           element_move_to.className = temp;
//           element_move_to.classList.remove('selected');
//         }
//     };


    

//     handleSquareClick = (event) => {
//         const clickedSquare = event.target;
      
//         // Если фигура уже выбрана, перемещаем её на новое место
//         if (selectedSquare) {
//           move_figure(selectedSquare.id, clickedSquare.id);
//           selectedSquare.classList.remove('selected');
//           selectedSquare = null; // Очищаем выбранную клетку
//         } else {
//           // Если клетка не выбрана, то выбираем её
//           selectSquare(clickedSquare);
//         }
//     };


//     // Функция для выделения клетки
//     selectSquare = (square) => {
//         if (this.selectedSquare) {
//         // Если клетка уже была выбрана, убираем выделение
//         this.selectedSquare.classList.remove('selected');
//         }
    
//         // Выделяем новую клетку
//         square.classList.add('selected');
//         this.selectedSquare = square; // Сохраняем выбранную клетку
//     };


// }

// export default Pawn

import Board from './Board.js'

class Pawn {
    constructor(color, start_position) {
        this.color = color;
        this.position = start_position;
        this.moves = [];
        this.move_count = 0;

        Board.data[start_position[0]][start_position[1]] = this;

        if (this.color == 'black') {
            this.moves.push(String(Number(this.position[0])+1) + this.position[1]);
        }
        else {
            this.moves.push(String(Number(this.position[0])-1) + this.position[1]);
        }
        // console.log(this.moves)
        this.row = this.position[0];
        this.column = this.position[1];
    }; 

    move_counting() {
        this.move_count++;
        this.row = Number(this.moves[this.move_count][0]);
        this.column = Number(this.moves[this.move_count][1]);
    };

    move() {
        if (this.color == 'black') {
            try {

                Board.data[this.row-1][this.column] = '';
                Board.data[this.row][this.column] = this;
    
                this.moves.push(String(this.row+1) + String(this.column));

                this.move_counting();
                this.position = String(this.row) + String(this.column);
                
            }
            catch (error) {
                console.log(error);
            }
        }
    };

    eat(square) {
        this.moves_eatable = [];
    
        const current_row = Number(this.position[0]) + this.move_count;
        const current_col = Number(this.position[1]);
    
        if (this.color == 'black') {
            // Черные пешки бьют вниз по диагонали
            this.moves_eatable.push(String(current_row + 1) + String(current_col - 1));
            this.moves_eatable.push(String(current_row + 1) + String(current_col + 1));
        } else {
            // Белые пешки бьют вверх по диагонали
            this.moves_eatable.push(String(current_row - 1) + String(current_col - 1));
            this.moves_eatable.push(String(current_row - 1) + String(current_col + 1));
        }
    
        if (this.moves_eatable.includes(square)) {
            Board.data[Number(this.position[0]) + this.move_count][Number(this.position[1])] = '';
            Board.data[Number(square[0])][Number(square[1])] = this;
    
            this.row = Number(square[0]);
            this.column = Number(square[1]);
            this.moves.push(square);
            this.move_count++;
            this.position = square; // ← переместили только после проверки
        } else {
            console.log("Невозможно съесть фигуру на этой клетке");
        }
    }
    

}

export default Pawn