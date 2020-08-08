
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. 
//But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product

 let num1 = parseInt(prompt('Enter number 1'));
 let num2 = parseInt(prompt('Enter number 2'));
 let answer = 0;
const multiplication = (num1, num2) => {
      for(let i = 1; i <= num2; i++){
        answer += num1;
      }
  return answer
}

const answer1 = multiplication(num1, num2)
console.log('answer1', answer1)

const htmlTarget = document.getElementById('a-1')
htmlTarget.innerHTML = answer1



//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate 
//if the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels 
//and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants 
//first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters
const str = prompt('Type a phrase or a word');
vowelOrConsonant = (str) => {
const vowels =['a','e','i','o','u', 'A', 'E','I', 'O', 'U'];
let consonantsFound = [];
let vowelsFound = [];
let finalString =[];
      for (let i = 0; i <= str.length; i++){
        if (vowels.includes(str[i])) {
          vowelsFound.push(str[i]);
          console.log(vowelsFound);
        }else{
          consonantsFound.push(str[i]);
          console.log(consonantsFound);
        }
      }
      let question = prompt('Do you want Vowels or constants first? Answer:1 = Vowels, 2 = Consonants');
        if (question === '1') {
          finalString = vowelsFound.concat(consonantsFound);
          console.log(finalString);
        }else {
        finalString = consonantsFound.concat(vowelsFound);
        console.log(finalString);
        }
     return finalString.filter((item) => item != ' ');
}
const answer2 = vowelOrConsonant(str);

const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2

//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player 
//(ask the user for the name).The player has 3 oportunities 
//to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an 
//alert and stop the game, but if the player finds the number, 
//then the program must show a congratulations message (alert) 
//with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. 
//The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents 
//the remaining oportunities each time the player fails. Fail_numbers, 
//is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted 
//the three oportunities showing the fails numbers or the name if the player wins
guessTheNumber  = () => {
  let randomNumber = Math.floor(Math.random() * 40) + 10 ;
  let player = {
    name:'',
    lives: 3,
    fail_numbers:[]
  };
  console.log(randomNumber);
  player.name = prompt('What is your name?');
  let final_Message =``;
    for (let i = 0; i = player.lives; i++){
        let guess = parseInt(prompt(`Guess a number from 10 to 50, you have ${player.lives} lives left`));
         if(player.lives == 0){
           alert(`Game Over!`);
           break;  
         }else if (parseInt(guess) == randomNumber){
            alert(`Congratulation ${player.name}`.toUpperCase());
            return final_Message =`Congratulations! ${player.name}. 
            The Random Number was ${randomNumber}, you had ${player.lives} lives left 
            and failed ${player.fail_numbers.length} times`;
            break;
          }else if(parseInt(guess) !== randomNumber && player.lives > 0){
            console.log(randomNumber);
            console.log(player);
            player.lives --;
            player.fail_numbers.push(i);
            alert(`Try again, you have ${player.lives} lives left and failed ${player.fail_numbers.length} times`);
          }
    }
    return final_Message =`Game Over! The Random Number was ${randomNumber}. Your have ${player.lives} lives left and failed ${player.fail_numbers.length} times`;
}


const answer3 = guessTheNumber()

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3


//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. 
//Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. 
//In the case of a string, the criteria to sort must be the length of the string. 
//The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the 
//third one based on the library property. finally, the return value has to be the 
//string sorted of the property selected separeted with a semicolon. 
//Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: 
//"Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"

sort = (sortAnswer) => {
  
  var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
      if (sortAnswer === 2){
          library.sort(compare_Author);
          let authors = library.map(item => item.author);
          let author_String = authors.join(', ');
          return sort_Message =` You choose to sort by N. ${sortAnswer}, the string is: ${author_String}`;
          console.log (library);
     }else if (sortAnswer === 3){
          library.sort(compareID);
          let ids = library.map(item => item.libraryID);
           let id_String = ids.join(', ');
           return sort_Message =` You choose to sort by N. ${sortAnswer}, the string is: ${id_String}`;
          console.log(library);
     }else if (sortAnswer === 1){
          library.sort(compare_Title);
              let titles = library.map(item => item.title);
              let title_String = titles.join(', ');
              return sort_Message =` You choose to sort by N. ${sortAnswer}, the string is: ${title_String}`;
              console.log(library);
      }else {
        return sort_Message = `Option not valid`;
      }
  };
  function compareID(x, y) {
    return x.libraryID - y.libraryID;
  }

  function compare_Title(x, y) {
    let a = x.title.toUpperCase(),
    b = y.title.toUpperCase();
    return a == b ? 0 : a > b ? 1 : -1;
  }
   function compare_Author(a, b) {
      // Use toUpperCase() to ignore character casing
      const authorA = a.author.toUpperCase();
      const authorB = b.author.toUpperCase();
      let comparison = 0;
      if (authorA > authorB) {
        comparison = 1;
      } else if (authorA < authorB) {
        comparison = -1;
      }
      return comparison;
    }
  


const answer4 = sort(parseInt(prompt(`Sort by 1. Title, 2. Author, 3.LibraryID?`)))

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4
