const contents = document.querySelectorAll('.content')
const lis = document.querySelectorAll('li');

const hideAll = () => {
    contents.forEach(content => content.classList.remove('show'))
    lis.forEach(content => content.classList.remove('active'))
}


lis.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAll();
        item.classList.add('active');
        contents[idx].classList.add('show');
    });
});