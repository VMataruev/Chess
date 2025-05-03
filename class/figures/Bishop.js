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

        for (let i = 0; i < 7; i++) {
            try {
                let row = this.row-i;
                let column = this.column-i;
                if (Board.data[row][column] == '' || Board.data[row][column].color == enemy) {
                    let access_move = String(row) + String(column);
                    this.moves.push(access_move);
                    if (Board.data[row][column].color == enemy) {
                        break;
                    }
                }
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
                    if (Board.data[row][column] != '') {
                        break;
                    }
                };
            }
            catch (error) {
                console.log('Позиция недоступна'); // 'Позиция недоступна'
            }
        };

        for (let i = 0; i < 7; i++) {
            try {
                let row = this.row+i;
                let column = this.column-i;
                if (Board.data[row][column] == '' || Board.data[row][column].color == enemy) {
                    let access_move = String(row) + String(column);
                    this.moves.push(access_move);
                    if (Board.data[row][column] != '') {
                        break;
                    }
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
                    if (Board.data[row][column] != '') {
                        break;
                    }
                };
            }
            catch (error) {
                console.log('Позиция недоступна');
            }
        };

        // =======================================================
    }
    

}

export default Bishop