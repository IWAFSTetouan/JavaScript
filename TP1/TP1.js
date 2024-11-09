var movable=false

function showHello(){
    var nom=document.getElementById("nom").value
    console.log("Hello "+nom)
}

//Exercice1:
//a- Ecrire une fonction qui accepte deux paramètres a et b
//et qui affiche leur somme sur la console
//b- Améliorer cette fonction pour qu'elle affiche le 
//résultat directement sur le document web

function somme(){
    var a=parseInt(document.getElementById("a").value)
    var b=parseInt(document.getElementById("b").value)
    var resultat = document.getElementById("resultat")
    resultat.innerHTML=a+b
}

//Exercice2:
//a- Ecrire une fonction qui change la couleur
//d'arrière plan d'un objet DIV selon la couleur choisie
// par l'utilisateur
function changeColor(){
    var divColor=document.getElementById("divColor")
    var colorPicker=document.getElementById("colorPicker")
    divColor.style.backgroundColor=colorPicker.value
}

//Exercice3:
//a- Ecrire une fonction qui permet de déplacer un cercle
//par le mouvement de la souris
//b- Améliorer la fonction pour qu'on puisse déplacer
// le cercle à n'importe quelle position en relachant la souris
//c- Améliorer le programme en remplaçant le cercle par une image 
// Gif animée

function updatePosition(event){
    var image=document.getElementById('image')
    if (movable){
        image.src='images/animated_image.gif'
        var xpos=document.getElementById('xpos')
        var ypos=document.getElementById('ypos')
        xpos.innerHTML=event.clientX
        ypos.innerHTML=event.clientY
        image.style.top=(event.clientY-image.clientHeight/2)+"px"
        image.style.left=(event.clientX-image.clientWidth/2)+"px"
    }else{
        image.src='images/static_image.png'
    }
}

function move(){
movable=!movable
}

function deposit(e){
    var cat=document.getElementById('cat')
    cat.appendChild(e.target)
    console.log(e.target)
}