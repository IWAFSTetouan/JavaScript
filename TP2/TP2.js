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

    //Ajouter l'étudiant dans le tableau
    liste_etudiants=document.getElementById('liste_etudiants')
    ligne=document.createElement("tr")
    idCell=document.createElement("td"); idCell.innerHTML=etudiant.id
    nomCell=document.createElement("td"); nomCell.innerHTML=etudiant.nom
    ageCell=document.createElement("td"); ageCell.innerHTML=etudiant.age
    actionCell=document.createElement("td")
    deleteImg=document.createElement("img")
    deleteImg.setAttribute("src","https://files.softicons.com/download/toolbar-icons/vista-base-software-icons-2-by-icons-land/png/256x256/DeleteRed.png")
    deleteImg.setAttribute("onclick","deleteEtudiant(event)")
    actionCell.appendChild(deleteImg)
    ligne.appendChild(idCell);ligne.appendChild(nomCell);
    ligne.appendChild(ageCell);ligne.appendChild(actionCell)
    liste_etudiants.appendChild(ligne)
    document.getElementById('form_etudiant').reset()
}

function deleteEtudiant(e){ 
    ligne=e.target.parentElement.parentElement
    ligne.remove()
}