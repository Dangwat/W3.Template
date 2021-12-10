    const buyBtns = document.querySelectorAll('.js-plance-buy')
    const modal = document.querySelector('.js-modal')
    const close = document.querySelector('.js-lose')
    const modalcontainer = document.querySelector('.js-modal-container')

    function Showmodal () {
        modal.classList.add('open')

    }
    function Removemodal () {
        modal.classList.remove('open')
    }
    
    for ( const buyBtn of buyBtns){
        buyBtn.addEventListener('click', Showmodal)
    }

    close.addEventListener('click', Removemodal)
    modal.addEventListener('click', Removemodal)
    modalcontainer.addEventListener('click', function(Event) {
        Event.stopPropagation()
    })
