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

}printResult(hero);
    


function getDPS(){
    const dpsHeroPool = ["Ashe", "Bastion", "Cassidy", "Echo", "Genji", "Hanzo", "Junkrat", "Mei", "Pharah", "Reaper", "Sojourn", "Soilder 76", "Sombra", "Symmetra", "Torbjorn", "Tracer", "Widowmaker"];
    return dpsHeroPool[Math.floor(Math.random() * 16)];
    }

function getTank(){
    const tankHeroPool = ["Doomfist", "D.Va", "Orisa", "Wrecking Ball", "Reinhardt", "Sigma", "Junker Queen", "Roadhog", "Winston", "Zarya"];
    return tankHeroPool[Math.floor(Math.random() * 9)];
    }

function getSupport(){
    const supportHeroPool = ["Ana", "Baptiste", "Brigitte", "Kiriko", "Lucio", "Mercy", "Moira", "Zenyatta"];
    return supportHeroPool[Math.floor(Math.random() * 7)];
    }


function printResult(hero){
   let result = document.createElement("h1");
   result.innerText = `Your random hero is ${hero}!`;
   body.append(result);
}


