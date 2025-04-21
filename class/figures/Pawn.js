import Board from '../Board.js'

class Pawn {
    constructor(color, start_position) {
        this.color = color;
        this.move_count = 0;

        // position - '00' - строка
        this.position = start_position;
        // row && column - числа
        this.row = Number(this.position[0]);
        this.column = Number(this.position[1]);

        Board.data[start_position[0]][start_position[1]] = this;

    }; 

    move() {
        try {
            Board.data[this.row][this.column] = '';
            if (this.color == 'black') {
                this.row++;
            }
            else {
                this.row--;
            }
            Board.data[this.row][this.column] = this;
            this.position = String(this.row) + String(this.column);
            
        }
        catch (error) {
            console.log(error);
        }
        
    };

    eat(square) {
        if (Board.data[Number(square[0])][Number(square[1])] != '') {
            this.moves_eatable = [];
    
            if (this.color == 'black') {
                // Черные пешки бьют вниз по диагонали
                this.moves_eatable.push(String(this.row + 1) + String(this.column - 1));
                this.moves_eatable.push(String(this.row + 1) + String(this.column + 1));
            } else {
                // Белые пешки бьют вверх по диагонали
                this.moves_eatable.push(String(this.row - 1) + String(this.column - 1));
                this.moves_eatable.push(String(this.row - 1) + String(this.column + 1));
            }
        
            if (this.moves_eatable.includes(square)) {
                Board.data[this.row][this.column] = '';
                Board.data[Number(square[0])][Number(square[1])] = this;
    
                this.row = Number(square[0]);
                this.column = Number(square[1]);
                this.position = String(this.row) + String(this.column);
            } else {
                console.log("Невозможно съесть фигуру на этой клетке");
            }
        }
        else {
            console.log("Нет фигуры для поедания");
        }

    };

    toString() {
        return `${this.color}_pawn`;
    }
    

}

export default Pawn