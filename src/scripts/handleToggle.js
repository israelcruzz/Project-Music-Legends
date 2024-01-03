const hambDom = {
    button: document.querySelector('.menu-hamb'),
    nav: document.querySelector('.navigation'),
    exitButton: '<i class="bi bi-x-lg"></i>',
    filterLeftIcon: '<i class="bi bi-filter-left"></i>',

    changeNav(){
        this.nav.classList.toggle('active')
    },

    changeButton(){
        this.button.innerHTML.includes(this.filterLeftIcon) ? this.button.innerHTML = this.exitButton : this.button.innerHTML = this.filterLeftIcon
    }
}

hambDom.button.addEventListener('click', () => {
    hambDom.changeNav()
    hambDom.changeButton()
})