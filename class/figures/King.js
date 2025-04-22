import Board from '../Board.js'

class King {
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





        // ===================== Доступные ходы =====================


        try {
            let row = this.row+1;
            let column = this.column;
            if (Board.data[this.row+1][this.column] == '' || Board.data[row][column].color == enemy) {
                let access_move = String(this.row+1) + String(this.column);
                this.moves.push(access_move);
            };
        }
        catch (error) {
            console.log('Позиция недоступна');
        }


        try {
            let row = this.row+1;
            let column = this.column+1;
            if (Board.data[this.row+1][this.column+1] == '' || Board.data[row][column].color == enemy) {
                let access_move = String(this.row+1) + String(this.column+1);
                this.moves.push(access_move);
            };
        }
        catch (error) {
            console.log('Позиция недоступна');
        }

        try {
            let row = this.row+1;
            let column = this.column-1;
            if (Board.data[this.row+1][this.column-1] == '' || Board.data[row][column].color == enemy) {
                let access_move = String(this.row+1) + String(this.column-1);
                this.moves.push(access_move);
            };
        }
        catch (error) {
            console.log('Позиция недоступна');
        }

        try {
            let row = this.row;
            let column = this.column+1;
            if (Board.data[this.row][this.column+1] == '' || Board.data[row][column].color == enemy) {
                let access_move = String(this.row) + String(this.column+1);
                this.moves.push(access_move);
            };
        }
        catch (error) {
            console.log('Позиция недоступна');
        }

        try {
            let row = this.row;
            let column = this.column-1;
            if (Board.data[this.row][this.column-1] == '' || Board.data[row][column].color == enemy) {
                let access_move = String(this.row) + String(this.column-1);
                this.moves.push(access_move);
            };
        }
        catch (error) {
            console.log('Позиция недоступна');
        }

        try {
            let row = this.row-1;
            let column = this.column;
            if (Board.data[this.row-1][this.column] == '' || Board.data[row][column].color == enemy) {
                let access_move = String(this.row-1) + String(this.column);
                this.moves.push(access_move);
            };
        }
        catch (error) {
            console.log('Позиция недоступна');
        }

        try {
            let row = this.row-1;
            let column = this.column+1;
            if (Board.data[this.row-1][this.column+1] == '' || Board.data[row][column].color == enemy) {
                let access_move = String(this.row-1) + String(this.column+1);
                this.moves.push(access_move);
            };
        }
        catch (error) {
            console.log('Позиция недоступна');
        }

        try {
            let row = this.row-1;
            let column = this.column-1;
            if (Board.data[this.row-1][this.column-1] == '' || Board.data[row][column].color == enemy) {
                let access_move = String(this.row-1) + String(this.column-1);
                this.moves.push(access_move);
            };
        }
        catch (error) {
            console.log('Позиция недоступна');
        }




        // =========================================




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

    toString() {
        return `${this.color}_king`;
    }
    

}

export default King