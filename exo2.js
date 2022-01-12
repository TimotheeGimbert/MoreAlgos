// Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant 
// à une rue, d'est en ouest. Un agent immobilier voudrait que tu écrives un algorithme qui 
// retourne combien de bâtiments de cette rue ont au moins un appartement avec une vue sur 
// le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.

const list1 = [3, 7, 8, 3, 6, 1];   // algo should output 3 (for 8, 6, and 1)
const list2 = [1, 4, 5, 8];         // algo should output 1 (for 8)

const biggerAfter = (array) => {
  let highests = [];
  for (let i = 0; i < array.length; i++) {
    let iIsHighest = true;
    for (let k = i+1; k < array.length; k++) {
      if (array[k] > array[i]) iIsHighest = false;
    }
    if (iIsHighest === true) highests.push(array[i]);
  }
  return highests;
}

console.log(biggerAfter(list2));