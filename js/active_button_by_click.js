
export function active_button_by_click(in_option_selected) {
    const items = document.querySelectorAll('.screen-menu .item');
    const active = document.querySelector('.screen-menu .item.active');

    const div = document.querySelector('.screen-menu');
    const countItems = div.querySelectorAll(':scope > .item').length;

    const valorteste = in_option_selected.slice(-1)
    console.log('slice: ', valorteste)

    if (valorteste > countItems) {
        console.log('Valor fora do tamanho da lista. N é possível "ativar" nenhuma opção do menu');
    } else {
        let getNewElement = items[(valorteste)] || null
        active.classList.remove('active');
        getNewElement.classList.add('active');
    }

}

window.active_button_by_click = active_button_by_click;