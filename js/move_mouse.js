import { show_content_selected } from './show_content_selected.js';
import { active_button_by_click } from './active_button_by_click.js';

function move_mouse(in_moviment) {
    const active = document.querySelector('.screen-menu .item.active');
    const items = document.querySelectorAll('.screen-menu .item');

    const div = document.querySelector('.screen-menu');
    const countItems = div.querySelectorAll(':scope > .item').length;

    const rowNumberItemSelected = { valor: 1 };

    if (in_moviment === "top") {
        rowNumberItemSelected.valor = Array.from(items).indexOf(active) - 2;
    }

    if (in_moviment === 'down') {
        rowNumberItemSelected.valor = Array.from(items).indexOf(active) + 2;
    }

    if (in_moviment === "right" ) {
        rowNumberItemSelected.valor = Array.from(items).indexOf(active) + 1;
    }

    if (in_moviment === "left" ) {
        rowNumberItemSelected.valor = Array.from(items).indexOf(active) - 1;
    }

    console.log("'File JS:move_mouse -- Row number selected: ", rowNumberItemSelected.valor)

    if ((in_moviment === "top" || in_moviment === "left") && rowNumberItemSelected.valor >= 0) {
        show_content_selected('option_0' + (rowNumberItemSelected.valor + 1));
        active_button_by_click('option_0' + (rowNumberItemSelected.valor));
    }

    if ((in_moviment === 'down' || in_moviment === "right" ) && rowNumberItemSelected.valor <= (countItems - 1)) {
        show_content_selected('option_0' + (rowNumberItemSelected.valor));
        active_button_by_click('option_0' + (rowNumberItemSelected.valor));
    }
}

window.move_mouse = move_mouse;

export { move_mouse };