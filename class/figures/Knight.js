import Board from '../Board.js'
import Figure from './Figure.js';

class Knight extends Figure {

    access_move() {
        let enemy = []

        if (this.color == 'black') {
            enemy = 'white';
        }
        else {
            enemy = 'black';
        }


        // ===================== Доступные ходы =====================

        try {
            let row = this.row-2;
            let column = this.column-1;
            if (Board.data[row][column] == '' || Board.data[row][column].color == enemy) {
                let access_move = String(row) + String(column);
                this.moves.push(access_move);
            };
        }
        catch (error) {
            console.log('Позиция недоступна');
        }

        try {
            let row = this.row-2;
            let column = this.column+1;
            if (Board.data[row][column] == '' || Board.data[row][column].color == enemy) {
                let access_move = String(row) + String(column);
                this.moves.push(access_move);
            };
        }
        catch (error) {
            console.log('Позиция недоступна');
        }

        try {
            let row = this.row+2;
            let column = this.column-1;
            if (Board.data[row][column] == '' || Board.data[row][column].color == enemy) {
                let access_move = String(row) + String(column);
                this.moves.push(access_move);
            };
        }
        catch (error) {
            console.log('Позиция недоступна');
        }

        try {
            let row = this.row+2;
            let column = this.column+1;
            if (Board.data[row][column] == '' || Board.data[row][column].color == enemy) {
                let access_move = String(row) + String(column);
                this.moves.push(access_move);
            };
        }
        catch (error) {
            console.log('Позиция недоступна');
        }

        try {
            let row = this.row+1;
            let column = this.column-2;
            if (Board.data[row][column] == '' || Board.data[row][column].color == enemy) {
                let access_move = String(row) + String(column);
                this.moves.push(access_move);
            };
        }
        catch (error) {
            console.log('Позиция недоступна');
        }

        try {
            let row = this.row+1;
            let column = this.column+2;
            if (Board.data[row][column] == '' || Board.data[row][column].color == enemy) {
                let access_move = String(row) + String(column);
                this.moves.push(access_move);
            };
        }
        catch (error) {
            console.log('Позиция недоступна');
        }

        try {
            let row = this.row-1;
            let column = this.column-2;
            if (Board.data[row][column] == '' || Board.data[row][column].color == enemy) {
                let access_move = String(row) + String(column);
                this.moves.push(access_move);
            };
        }
        catch (error) {
            console.log('Позиция недоступна');
        }

        try {
            let row = this.row-1;
            let column = this.column+2;
            if (Board.data[row][column] == '' || Board.data[row][column].color == enemy) {
                let access_move = String(row) + String(column);
                this.moves.push(access_move);
            };
        }
        catch (error) {
            console.log('Позиция недоступна');
        }
    }
    

}

export default Knight