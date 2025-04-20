class Pawn {
    constructor(color, start_position) {
        this.color = color;
        this.position = start_position; // id_12
        const square = document.getElementById(start_position);

        this.selectedSquare = null;
    }; 

    move_figure = (move_from, move_to) => {
        const element_move_from = document.getElementById(move_from);
        const element_move_to = document.getElementById(move_to);
        if (element_move_from.className !== 'square selected') {
          const temp = element_move_from.className;
          element_move_from.className = 'square';
          element_move_to.className = temp;
          element_move_to.classList.remove('selected');
        }
    };


}

export default Pawn