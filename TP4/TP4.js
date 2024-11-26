ligne=""
function ajouterEtudiant(){
    /* Première méthode
    id=document.getElementById('id').value
    nom=document.getElementById('nom').value
    age=document.getElementById('age').value
    etudiant={id:id,nom:nom,age:age}
    console.log(JSON.stringify(etudiant))
    */
   //Deuxième méthode
    const formData=new FormData(document.getElementById('form_etudiant'))
    etudiant=Object.fromEntries(formData.entries())
    console.log(etudiant)

    addToTable(etudiant)
    //Vider les zones de texte
    document.getElementById('form_etudiant').reset()
    //Enregistrer l'étudiant dans localStorage
    persist(etudiant)
}

function persist(etudiant){
    localStorage.setItem(etudiant.id,JSON.stringify(etudiant))
}

function loadData(){
    for(i=0;i<localStorage.length;i++){
        key=localStorage.key(i)
        etudiantJson= localStorage.getItem(key)
        etudiant=JSON.parse(etudiantJson)
        addToTable(etudiant)
    } 
}

window.addEventListener('load',()=>{
    loadData()
})

function addToTable(etudiant){
    //Ajouter l'étudiant dans le tableau
    liste_etudiants=document.getElementById('liste_etudiants')
    ligne=document.createElement("tr")
    //Créer les cellules de la ligne à ajouter
    idCell=document.createElement("td"); idCell.innerHTML=etudiant.id
    nomCell=document.createElement("td"); nomCell.innerHTML=etudiant.nom
    ageCell=document.createElement("td"); ageCell.innerHTML=etudiant.age
    actionCell=document.createElement("td")
    //Créer l'image de suppression d'une ligne
    deleteImg=document.createElement("img")
    deleteImg.setAttribute("src","https://files.softicons.com/download/toolbar-icons/vista-base-software-icons-2-by-icons-land/png/256x256/DeleteRed.png")
    deleteImg.setAttribute("onclick","openDeleteModal(event)")
    //Créer l'image de modification d'une ligne
    updateImg=document.createElement("img")
    updateImg.setAttribute("src","https://cdn3.iconfinder.com/data/icons/3d-printing-icon-set/512/Refresh.png")
    updateImg.setAttribute("onclick","openUpdateModal(event)")
    //Ajouter chaque élément HTML à son élément parent
    actionCell.appendChild(deleteImg)
    actionCell.appendChild(updateImg)
    ligne.appendChild(idCell);ligne.appendChild(nomCell);
    ligne.appendChild(ageCell);ligne.appendChild(actionCell)
    liste_etudiants.appendChild(ligne)
}


function openModal(e){
    document.getElementById('modal').showModal()
    document.getElementById('actionBTN').innerHTML="Ajouter"
    document.getElementById('actionTitle').innerHTML="Ajouter"
    document.getElementById('form_etudiant').reset()
}

function closeModal(nomModal){
    document.getElementById(nomModal).close()
}

function openDeleteModal(event){
    document.getElementById('deleteModalDialog').showModal()
    ligne=event.target.parentElement.parentElement
    id=ligne.children[0].innerHTML
    document.getElementById('idEtudiant').innerHTML=id
}

function deleteEtudiant(){ 
    id=document.getElementById('idEtudiant').innerHTML
    localStorage.removeItem(id)
    ligne.remove()
    closeModal('deleteModalDialog')
}

function openUpdateModal(event){
    document.getElementById('modal').showModal()
    ligne=event.target.parentElement.parentElement
    id=ligne.children[0].innerHTML
    nom=ligne.children[1].innerHTML
    age=ligne.children[2].innerHTML
    document.getElementById('id').value=id
    document.getElementById('nom').value=nom
    document.getElementById('age').value=age
    document.getElementById('actionBTN').innerHTML="Modifier"
    document.getElementById('actionTitle').innerHTML="Modifier"
}

function modifierEtudiant(){
    ligne.children[0].innerHTML=document.getElementById('id').value
    ligne.children[1].innerHTML=document.getElementById('nom').value
    ligne.children[2].innerHTML=document.getElementById('age').value
}

function actionEtudiant(){
    if (document.getElementById('actionBTN').innerHTML=="Modifier"){
        modifierEtudiant()
    }
    else{
        ajouterEtudiant
    }
    document.getElementById('modal').close()
}