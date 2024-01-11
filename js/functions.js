console.log("functions-JS-OK");

const startGame = () => {
    //* Inside fuction creating cell element
    const createCell = cellNumber => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.append(cellNumber);
        return cell;
    }

    //*Changing button text when clicked
    button.innerText = 'RESTART';

    //*Resetting grid content
    grid.innerText = '';

    //* Loop generating cell and injecting on DOM
    for (let i = 1; i <= 100; i++) {
        //* Creating cell with counter number
        const cell = createCell(i);

        //*Printing cell number on console and adding cell bg color
        cell.addEventListener('click', (event) => {
            //*Verifying clicked class for one and only console output
            if (cell.classList.contains('clicked')) return;

            console.log(event.target.innerText);
            //*Injecting clicked class for cell bg color on click eventS
            cell.classList.add('clicked');
        });

        //*Injecting on grid
        grid.appendChild(cell);
    }


}