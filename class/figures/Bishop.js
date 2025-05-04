import Board from '../Board.js'
import Figure from './Figure.js';

class Bishop extends Figure{

    access_move() {
        let enemy = null;
        let team = null;

        if (this.color == 'black') {
            enemy = 'white';
            team = 'black'
        }
        else {
            enemy = 'black';
            team = 'white'
        };


        // ===================== Доступные ходы =====================

        for (let i = 1; i < 7; i++) {
            let row = this.row-i;
            let column = this.column-i;

            if (row < 0 || row > 7 || column < 0 || column > 7) {break};

            if (Board.data[row][column] == '') {
                let access_move = String(row) + String(column);
                this.moves.push(access_move);
            }
            else if (Board.data[row][column].color == enemy) {
                let access_move = String(row) + String(column);
                this.moves.push(access_move);
                break;
            }
            else if (Board.data[row][column].color == team) {
                break;
            }
        }

        for (let i = 1; i < 7; i++) {
            let row = this.row-i;
            let column = this.column+i;

            if (row < 0 || row > 7 || column < 0 || column > 7) {break};

            if (Board.data[row][column] == '') {
                let access_move = String(row) + String(column);
                this.moves.push(access_move);
            }
            else if (Board.data[row][column].color == enemy) {
                let access_move = String(row) + String(column);
                this.moves.push(access_move);
                break;
            }
            else if (Board.data[row][column].color == team) {
                break;
            }
        }

        for (let i = 1; i < 7; i++) {
            let row = this.row+i;
            let column = this.column-i;

            if (row < 0 || row > 7 || column < 0 || column > 7) {break};

            if (Board.data[row][column] == '') {
                let access_move = String(row) + String(column);
                this.moves.push(access_move);
            }
            else if (Board.data[row][column].color == enemy) {
                let access_move = String(row) + String(column);
                this.moves.push(access_move);
                break;
            }
            else if (Board.data[row][column].color == team) {
                break;
            }
        }

        for (let i = 1; i < 7; i++) {
            let row = this.row+i;
            let column = this.column+i;

            if (row < 0 || row > 7 || column < 0 || column > 7) {break};

            if (Board.data[row][column] == '') {
                let access_move = String(row) + String(column);
                this.moves.push(access_move);
            }
            else if (Board.data[row][column].color == enemy) {
                let access_move = String(row) + String(column);
                this.moves.push(access_move);
                break;
            }
            else if (Board.data[row][column].color == team) {
                break;
            }
        }

        // =======================================================
    }
    

}

export default Bishop