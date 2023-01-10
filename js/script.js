let numbers = [5,0,9,1,7,4,2,6,3,8];

console.log('-------------- convertissons le tableau en chaîne de caractère avec toString() ----------------')
console.log(numbers.toString())

console.log('-------------- convertissons le tableau en chaîne de caractère avec join() ----------------')
console.log(numbers.join(" "))
console.log(numbers.join("+"))
console.log(numbers.join(""))


// trions le tableau par ordre decroissant
let interaction = 0
 while (interaction < numbers.length) {
    for (let index = 0; index <= numbers.length; index++) {
        if(numbers[index+1]){
            if(numbers[index+1] > numbers[index]){
                temp = numbers[index]
                numbers[index] = numbers[index+1]
                numbers[index+1]= temp
            }
        }
    }
    interaction++
 }

console.log('----- Affichage du tableau trier par ordre decroissante ------')
console.log(numbers)