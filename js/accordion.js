document.addEventListener('DOMContentLoaded', () => {

    const featureLinkElems = document.querySelectorAll('.feature__link'),
        featureSubElems = document.querySelectorAll('.feature-sub');

    featureLinkElems.forEach((btn, i) => {
        btn.addEventListener('click', () => {

            if (btn.classList.contains('feature__link_active')) {
                btn.classList.remove('feature__link_active');
                featureSubElems[i].classList.add('hidden');
            } else {
                featureSubElems.forEach((featureSubElem) => {
                    featureSubElem.classList.add('hidden');
                    
                });
                featureLinkElems.forEach((featureLinkElem) => {
                    featureLinkElem.classList.remove('feature__link_active');
                });
    
                featureSubElems[i].classList.remove('hidden');
                btn.classList.add('feature__link_active');
            }
        });
    });
});

