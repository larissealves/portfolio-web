import { active_button_by_click } from './active_button_by_click.js';

export function show_content_selected(in_option_selected) {
    const items = document.querySelectorAll('.screen-view > *');

    //ToDo: melhorar lógica para ocultar o item que já está em tela
    items.forEach(el => {
        el.style.display = 'none';
    });

    const positionButtonWillForActive = { value: in_option_selected.slice(-1) };
    console.log('File JS:show_content_selected -- Content selected:', in_option_selected, '------', positionButtonWillForActive.value);

    active_button_by_click('option_0' + positionButtonWillForActive.value);
    const element = document.querySelector('.' + 'option_0' + positionButtonWillForActive.value);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }

}

window.show_content_selected = show_content_selected;