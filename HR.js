const body = document.querySelector("body");
const form = document.querySelector("#form");


form.addEventListener("submit", handleSubmit);


function handleSubmit(e) {
    e.preventDefault();
    let DPSInput = document.querySelector("#dps");
    let TankInput = document.querySelector("#tank");
    let SupportInput = document.querySelector("#support")


    // Hero is printed regardless of the if statement, you can create a hero variable set it in the if statement and always print hero.
    if (DPSInput.checked) {

        let hero = getDPS();
        printResult(hero);
    }
    if (TankInput.checked) {

        let hero = getTank();
        printResult(hero);
    }
    if (SupportInput.checked) {
        let hero = getSupport();
        printResult(hero);
    }
}



function getDPS() {
    // These let variables are not changing and should be const, you should just be able to return dpsHeroPool[Math.floor(Math.random() * 16)] instead of a variable as well lose_context.
    const dpsHeroPool = ["Ashe", "Bastion", "Cassidy", "Echo", "Genji", "Hanzo", "Junkrat", "Mei", "Pharah", "Reaper", "Sojourn", "Soilder 76", "Sombra", "Symmetra", "Torbjorn", "Tracer", "Widowmaker"];
    // Instead of using a hardcoded number like 16 consider using the array length.
    let newLocal = dpsHeroPool[Math.floor(Math.random() * 16)];
    let dpsHero = newLocal;
    return dpsHero


}

function getTank() {
    const tankHeroPool = ["Doomfist", "D.Va", "Orisa", "Wrecking Ball", "Reinhardt", "Sigma", "Junker Queen", "Roadhog", "Winston", "Zarya"];
    let newLocal2 = tankHeroPool[Math.floor(Math.random() * 9)];
    let tankHero = newLocal2
    return tankHero

}

function getSupport() {
    const supportHeroPool = ["Ana", "Baptiste", "Brigitte", "Kiriko", "Lucio", "Mercy", "Moira", "Zenyatta"];
    let newLocal3 = supportHeroPool[Math.floor(Math.random() * 7)];
    let supportHero = newLocal3
    return supportHero

}


function printResult(hero) {
    //    Should this be an append or replace a current element?
    let result = document.createElement("h1");
    result.innerText = `Your random hero is ${hero}!`;
    body.append(result);


}


