import Board from '../Board.js'
import Figure from './Figure.js';

class King extends Figure {

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
    }

    

}

export default King