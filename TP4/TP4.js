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
    document.getElementById('modal').close()
}

function deleteEtudiant(event){ 
    ligne=event.target.parentElement.parentElement
    id=ligne.children[0].innerHTML
    localStorage.removeItem(id)
    ligne.remove()
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
    deleteImg.setAttribute("onclick","deleteEtudiant(event)")
    //Ajouter chaque élément HTML à son élément parent
    actionCell.appendChild(deleteImg)
    ligne.appendChild(idCell);ligne.appendChild(nomCell);
    ligne.appendChild(ageCell);ligne.appendChild(actionCell)
    liste_etudiants.appendChild(ligne)
}

function openModal(){
    document.getElementById('modal').showModal()
}

function closeModal(){
    console.log("hhhh")
    document.getElementById('modal').close()
}