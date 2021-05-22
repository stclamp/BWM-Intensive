document.addEventListener('DOMContentLoaded', () => {

    const moreElems = document.querySelectorAll('.more');
    const modalElem = document.querySelector('.modal');

    const openModal = () => {
        modalElem.classList.remove('hidden');
        modalElem.classList.add('modal_animation');
        disableScroll();
    };

    const closeModal = () => {
        modalElem.classList.add('hidden');
        modalElem.classList.remove('modal_animation');
        enableScroll();
    };

    moreElems.forEach(item => {
        item.addEventListener('click', openModal);
    });

    modalElem.addEventListener('click', (event) => {
        const target = event.target;

        if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
            closeModal();
        }
    });
});