// Avec une liste de nombres entiers relatifs et un nombre k, 
// crée une méthode retournant un booléen qui affiche si deux  
// nombres de cette liste ont k comme résultat de leur somme.

// COMPUTATIONAL COMPLEXITY : O(n) with several passes on the list

const list1 = [10, 15, 3, 7];
const k1 = 17;
const list2 = [1, 8, 10, 21];
const k2 = 19;

const twoNumbersEnough = (array, number) => {
  let valueToFind = undefined;
  for(let i = 0; i < array.length; i++) {
    valueToFind = number - array[i]; // value to be find in the array in order to return true
  }
  for(let i = 0; i < array.length; i++) {
    return array[i] === valueToFind ? true : false;
  }
}

console.log("Avec [10, 15, 3, 7] et k = 17, l'algo retourne : " + twoNumbersEnough(list1, k1));
console.log("Avec [1, 8, 10, 21] et k = 19, l'algo retourne : " + twoNumbersEnough(list2, k2));