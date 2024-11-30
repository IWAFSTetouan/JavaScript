topPosition=0
i=0
function ajouterBoule(){
    boule=document.createElement('div')
    boule.setAttribute('id','boule'+i)
    boule.style.left=Math.floor(Math.random()*window.innerWidth)+'px'
    area=document.getElementById('area')
    area.appendChild(boule)
    setInterval(()=>{
        boule.style.top=(topPosition++)+'px'
    },100)
    i++
}