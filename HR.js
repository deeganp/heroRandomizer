   const body = document.querySelector("body");
   const form = document.querySelector("#form");


   form.addEventListener("submit", handleSubmit);


  function handleSubmit(e) {
     e.preventDefault();
    let  DPSInput = document.querySelector("#dps");
    let  TankInput = document.querySelector("#tank");
    let  SupportInput = document.querySelector("#support")
    

     if (DPSInput.checked){
        
        let hero = getDPS();
        printResult(hero);
    }
    if (TankInput.checked){
        
        let hero = getTank();
        printResult(hero);
    }
    if(SupportInput.checked) { 
        let hero = getSupport();
        printResult(hero);
    }
}
    


function getDPS(){
    const dpsHeroPool = ["Ashe", "Bastion", "Cassidy", "Echo", "Genji", "Hanzo", "Junkrat", "Mei", "Pharah", "Reaper", "Sojourn", "Soilder 76", "Sombra", "Symmetra", "Torbjorn", "Tracer", "Widowmaker"];
    let newLocal = dpsHeroPool[Math.floor(Math.random() * 16)];
    let dpsHero = newLocal;
    return dpsHero

    
}

function getTank(){
    const tankHeroPool = ["Doomfist", "D.Va", "Orisa", "Wrecking Ball", "Reinhardt", "Sigma", "Junker Queen", "Roadhog", "Winston", "Zarya"];
    let newLocal2 = tankHeroPool[Math.floor(Math.random() * 9)];
    let tankHero = newLocal2
    return tankHero

}

function getSupport(){
    const supportHeroPool = ["Ana", "Baptiste", "Brigitte", "Kiriko", "Lucio", "Mercy", "Moira", "Zenyatta"];
    let newLocal3 = supportHeroPool[Math.floor(Math.random() * 7)];
    let supportHero = newLocal3
    return supportHero

}


function printResult(hero){
   let result = document.createElement("h1");
   result.innerText = `Your random hero is ${hero}!`;
   body.append(result);


}


