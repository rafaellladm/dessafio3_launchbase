const cards = document.querySelectorAll(".card")
const modalOverlay = document.querySelector(".modal-overlay")
const modal = document.querySelector(".modal")


for (let card of cards) {
    card.addEventListener("click", function(){

        // // ativação do modal com clique no card
        // modalOverlay.classList.add('active')

        // criação de url mudável com clique em card
        const pageId = card.getAttribute('id')
        window.location.href = `/courses/${pageId}`
        // modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${pageId}`

    })
}

// // encerramento do modal
// document.querySelector(".close-modal").addEventListener("click", function(){
//     modalOverlay.classList.remove('active')
//     modal.classList.remove('maximize')
// })

// // maximizar modal
// document.querySelector(".maximize-modal").addEventListener("click", function(){
    
//     // utilizando o método contains
//     if (modal.classList.contains('maximize')) {
//         modal.classList.remove('maximize')
//     } else {
//         modal.classList.add('maximize')
//     }
// })