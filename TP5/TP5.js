function getData(){
    const promesse=new Promise((myResolve,myReject)=>{
        setTimeout(()=>myResolve('Good Job'),5000)
        setTimeout(()=>myReject('Erreur'),4000)
    })

    promesse.then((value)=>{
        document.querySelector('#result').innerHTML=value
    }).catch((value)=>{
        document.querySelector('#result').innerHTML=value
    })
        document.querySelector('#result').innerHTML="Waiting"
}