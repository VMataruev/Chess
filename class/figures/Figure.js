import Board from '../Board.js'

class Figure {
    constructor(color, start_position) {
        this.color = color;
        this.moves = [];
        // position - '00' - строка
        this.position = start_position;
        // row && column - числа
        this.row = Number(this.position[0]);
        this.column = Number(this.position[1]);
        this.access_move();

        Board.data[start_position[0]][start_position[1]] = this;

    }; 

    move(square) {

        if (this.moves.includes(square)) {
            Board.data[this.row][this.column] = '';
            this.position = square;
            this.row = Number(square[0]);
            this.column = Number(square[1]);
            Board.data[this.row][this.column] = this;
            this.moves = [];
            this.access_move();
        }
        else {
            console.log("Позиция недоступна")
        }
            
    };

    toString() {
        return `${this.color}_${this.constructor.name.toLowerCase()}`;
    }

    access_move() {
        // Задаётся в наследуемом классе
    }
    

}

export default Figure