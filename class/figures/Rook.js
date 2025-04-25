import Board from '../Board.js'
import Figure from './Figure.js';

class Rook extends Figure{

    access_move() {
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
                let column = this.column;
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
                let column = this.column;
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
                let row = this.row;
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
                let row = this.row;
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
    }    

}

export default Rook