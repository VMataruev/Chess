import Board from '../Board.js'

class Pawn {
    constructor(color, start_position) {
        this.color = color;
        this.moves = [];
        // position - '00' - строка
        this.position = start_position;
        // row && column - числа
        this.row = Number(this.position[0]);
        this.column = Number(this.position[1]);

        Board.data[start_position[0]][start_position[1]] = this;

    }; 

    move(square) {

        let enemy = []

        if (this.color == 'black') {
            enemy = 'white';
        }
        else {
            enemy = 'black';
        }


        if (this.color == 'black') {
            try {
                let row = this.row+1;
                let column = this.column;
                if (Board.data[row][column] == '') {
                    let access_move = String(row) + String(column);
                    this.moves.push(access_move);
                };
            }
            catch (error) {
                console.log('Позиция недоступна');
            }
        }
        else {
            try {
                let row = this.row-1;
                let column = this.column;
                if (Board.data[row][column] == '') {
                    let access_move = String(row) + String(column);
                    this.moves.push(access_move);
                };
            }
            catch (error) {
                console.log('Позиция недоступна');
            }
        }



        if (Board.data[Number(square[0])][Number(square[1])].color == enemy) {
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


        if (this.moves.includes(square)) {
            Board.data[this.row][this.column] = '';
            this.position = square;
            this.row = Number(square[0]);
            this.column = Number(square[1]);
            Board.data[this.row][this.column] = this;
            this.moves = [];
        }
        else {
            console.log("Позиция недоступна")
        }


        
    };

    // eat(square) {
    //     if (Board.data[Number(square[0])][Number(square[1])] != '') {
    //         this.moves_eatable = [];
    
    //         if (this.color == 'black') {
    //             // Черные пешки бьют вниз по диагонали
    //             this.moves_eatable.push(String(this.row + 1) + String(this.column - 1));
    //             this.moves_eatable.push(String(this.row + 1) + String(this.column + 1));
    //         } else {
    //             // Белые пешки бьют вверх по диагонали
    //             this.moves_eatable.push(String(this.row - 1) + String(this.column - 1));
    //             this.moves_eatable.push(String(this.row - 1) + String(this.column + 1));
    //         }
        
    //         if (this.moves_eatable.includes(square)) {
    //             Board.data[this.row][this.column] = '';
    //             Board.data[Number(square[0])][Number(square[1])] = this;
    
    //             this.row = Number(square[0]);
    //             this.column = Number(square[1]);
    //             this.position = String(this.row) + String(this.column);
    //         } else {
    //             console.log("Невозможно съесть фигуру на этой клетке");
    //         }
    //     }
    //     else {
    //         console.log("Нет фигуры для поедания");
    //     }

    // };

    toString() {
        return `${this.color}_pawn`;
    }
    

}

export default Pawn