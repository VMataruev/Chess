import Board from '../Board.js';

class Pawn {
    constructor(color, start_position) {
        this.color = color;
        this.position = start_position;
        this.row = Number(start_position[0]);
        this.column = Number(start_position[1]);
        this.moves = [];

        Board.data[this.row][this.column] = this;
        this.access_move();
    }

    access_move() {
        this.moves = [];
        const direction = this.color === 'black' ? 1 : -1;
        const startRow = this.color === 'black' ? 1 : 6;
        const enemyColor = this.color === 'black' ? 'white' : 'black';
    
        const forwardRow = this.row + direction;
    
        // Обычный ход вперёд
        if (this.inBounds(forwardRow, this.column) && Board.data[forwardRow][this.column] === '') {
            this.moves.push(`${forwardRow}${this.column}`);
    
            // Двойной ход, только с начальной позиции и если обе клетки пустые
            const doubleForward = this.row + direction * 2;
            if (this.row === startRow && Board.data[doubleForward][this.column] === '') {
                this.moves.push(`${doubleForward}${this.column}`);
            }
        }
    
        // Атака по диагонали
        for (let offset of [-1, 1]) {
            const col = this.column + offset;
            if (this.inBounds(forwardRow, col)) {
                const target = Board.data[forwardRow][col];
                if (target !== '' && target.color === enemyColor) {
                    this.moves.push(`${forwardRow}${col}`);
                }
            }
        }
    }
    

    move(targetSquare) {
        this.access_move();

        if (!this.moves.includes(targetSquare)) {
            console.log("Невозможный ход для пешки.");
            return;
        }

        const targetRow = Number(targetSquare[0]);
        const targetCol = Number(targetSquare[1]);

        // Удаляем себя со старой клетки
        Board.data[this.row][this.column] = '';

        // Атака
        const targetPiece = Board.data[targetRow][targetCol];
        if (targetPiece !== '' && targetPiece.color !== this.color) {
            console.log(`${this.color} pawn съел ${targetPiece.color} ${targetPiece.toString()}`);
        }

        // Обновляем координаты
        this.row = targetRow;
        this.column = targetCol;
        this.position = targetSquare;
        Board.data[this.row][this.column] = this;

        this.access_move();
    }

    inBounds(row, col) {
        return row >= 0 && row < 8 && col >= 0 && col < 8;
    }

    toString() {
        return `${this.color}_pawn`;
    }
}

export default Pawn;
