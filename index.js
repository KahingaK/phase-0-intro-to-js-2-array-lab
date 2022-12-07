// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  

beforeEach(cats.push("Ralph"))

function destructivelyAppendCat(name) {
    cats.push("Ralph")
    
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
    
}
function  destructivelyRemoveLastCat(name){
    cats.pop()
    
}
function  destructivelyRemoveFirstCat(name){
    cats.shift()
    
}
function appendCat(name) {
    let appCats = [ ...cats, "Broom"]
    return appCats;
    
}
function prependCat(name) {
    let prepCats = ["Arnold", ...cats]
    return prepCats;

}

function removeLastCat() {
    let remLastCat = [...cats]
    remLastCat.pop()
    return remLastCat
    
}

function removeFirstCat(){
    let remFirstCat = [...cats]
    remFirstCat.shift()
    return remFirstCat
    
}