// Nous allons te donner une liste contenant la hauteur (en étages) d'immeubles appartenant 
// à une rue, d'est en ouest. Un agent immobilier voudrait que tu écrives un algorithme qui 
// retourne combien de bâtiments de cette rue ont au moins un appartement avec une vue sur 
// le soleil couchant (à l'ouest), afin de bien évaluer la valeur des bâtiments de la rue.

// COMPUTATIONAL COMPLEXITY : O(n) with several passes on the list

const list1 = [3, 7, 8, 3, 6, 1];   // algo should output 3 (for 8, 6, and 1)
const list2 = [1, 4, 5, 8];         // algo should output 1 (for 8)

const biggerAfter = (array) => {
  let highests = [];
  for (let i = 0; i < array.length; i++) {
    let nextHighestValue = array
      .slice(i)
      .find(element => element > array[i]);
    let iIsHighest = nextHighestValue === undefined ? true : false;
    if (iIsHighest === true) highests.push(array[i]);
  }
  return highests;
}


console.log(`Avec [${list1}], l'algo retourne : ` + biggerAfter(list1));
console.log(`Avec [${list2}], l'algo retourne : ` + biggerAfter(list2));