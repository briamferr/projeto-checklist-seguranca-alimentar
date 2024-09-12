let itemMenu = document.querySelectorAll('.side-item');

function selectLink(){
    itemMenu.forEach((item) => item.classList.remove('active'))

    this.classList.add('active');
}

itemMenu.forEach((item) => item.addEventListener('click', selectLink));