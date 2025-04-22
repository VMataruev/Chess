import Board from '../Board.js'

class Bishop {
    constructor(color, start_position) {
        this.color = color;

        // position - '00' - строка
        this.position = start_position;
        // row && column - числа
        this.row = Number(this.position[0]);
        this.column = Number(this.position[1]);

        Board.data[start_position[0]][start_position[1]] = this;

    }; 

    move(square) {
        this.moves = [];
        let enemy = []

        if (this.color == 'black') {
            enemy = 'white';
        }
        else {
            enemy = 'black';
        }


        // ===================== Доступные ходы =====================





        for (let i = 0; i < 7; i++) {
            try {
                let row = this.row-i;
                let column = this.column-i;
                if (Board.data[row][column] == '' || Board.data[row][column].color == enemy) {
                    let access_move = String(row) + String(column);
                    this.moves.push(access_move);
                };
            }
            catch (error) {
                console.log('Позиция недоступна');
            }
        };

        for (let i = 0; i < 7; i++) {
            try {
                let row = this.row-i;
                let column = this.column+i;
                if (Board.data[row][column] == '' || Board.data[row][column].color == enemy) {
                    let access_move = String(row) + String(column);
                    this.moves.push(access_move);
                };
            }
            catch (error) {
                console.log('Позиция недоступна');
            }
        };

        for (let i = 0; i < 7; i++) {
            try {
                let row = this.row+i;
                let column = this.column-i;
                if (Board.data[row][column] == '' || Board.data[row][column].color == enemy) {
                    let access_move = String(row) + String(column);
                    this.moves.push(access_move);
                };
            }
            catch (error) {
                console.log('Позиция недоступна');
            }
        };

        for (let i = 0; i < 7; i++) {
            try {
                let row = this.row+i;
                let column = this.column+i;
                if (Board.data[row][column] == '' || Board.data[row][column].color == enemy) {
                    let access_move = String(row) + String(column);
                    this.moves.push(access_move);
                };
            }
            catch (error) {
                console.log('Позиция недоступна');
            }
        };






        // =======================================================




        if (this.moves.includes(square)) {
            Board.data[this.row][this.column] = '';
            this.position = square;
            this.row = Number(square[0]);
            this.column = Number(square[1]);
            Board.data[this.row][this.column] = this;
        }
        else {
            console.log("Позиция недоступна")
        }
            
    };

    toString() {
        return `${this.color}_bishop`;
    }
    

}

export default Bishop