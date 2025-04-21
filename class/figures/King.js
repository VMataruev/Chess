import Board from '../Board.js'

class King {
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

    move(square) {
        const team_black = [
            'black_bishop',
            'black_king',
            'black_knight',
            'black_pawn',
            'black_queen',
            'black_rook'
        ];

        const team_white = [
            'white_bishop',
            'white_king',
            'white_knight',
            'white_pawn',
            'white_queen',
            'white_rook'
        ]

        this.moves = [];
        let enemy = []

        if (this.color == 'black') {
            enemy = team_white;
        }
        else {
            enemy = team_black;
        }

        if (Board.data[this.row+1][this.column] == '' || enemy.includes(Board.data[this.row+1][this.column])) {
            let access_move = String(this.row+1) + String(this.column);
            this.moves.push(access_move);
        };

        if (Board.data[this.row+1][this.column+1] == '' || enemy.includes(Board.data[this.row+1][this.column+1])) {
            let access_move = String(this.row+1) + String(this.column+1);
            this.moves.push(access_move);
        };

        if (Board.data[this.row+1][this.column-1] == '' || enemy.includes(Board.data[this.row+1][this.column-1])) {
            let access_move = String(this.row+1) + String(this.column-1);
            this.moves.push(access_move);
        };

        if (Board.data[this.row][this.column+1] == '' || enemy.includes(Board.data[this.row][this.column+1])) {
            let access_move = String(this.row) + String(this.column+1);
            this.moves.push(access_move);
        };

        if (Board.data[this.row][this.column-1] == '' || enemy.includes(Board.data[this.row][this.column-1])) {
            let access_move = String(this.row) + String(this.column-1);
            this.moves.push(access_move);
        };

        if (Board.data[this.row-1][this.column] == '' || enemy.includes(Board.data[this.row-1][this.column])) {
            let access_move = String(this.row-1) + String(this.column);
            this.moves.push(access_move);
        };

        if (Board.data[this.row-1][this.column+1] == '' || enemy.includes(Board.data[this.row-1][this.column+1])) {
            let access_move = String(this.row-1) + String(this.column+1);
            this.moves.push(access_move);
        };

        if (Board.data[this.row-1][this.column-1] == '' || enemy.includes(Board.data[this.row-1][this.column-1])) {
            let access_move = String(this.row-1) + String(this.column-1);
            this.moves.push(access_move);
        };

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
        return `${this.color}_king`;
    }
    

}

export default King