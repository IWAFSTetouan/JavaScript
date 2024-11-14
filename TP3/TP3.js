window.addEventListener('load',()=>{
    modal=document.getElementById('modal')
    btnModal=document.getElementById('openModal')

    //Ouvrir la modale lorsque le bouton est cliqué
    btnModal.addEventListener('click',()=>{
        modal.style.display="block"
    })
    //Fermer la modale
    closeModal.addEventListener('click',()=>{
        modal.style.display='none'
    })
})