// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase(word);
	let letterPoints = "";
  let score=0;
	for (let i = 0; i < word.length; i++) {
 	  for (const pointValue in oldPointStructure) {
 		 if (oldPointStructure[pointValue].includes(word[i])) {
			//letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      score = score + parseInt(pointValue,10);           
		 }
 	  }
	}
	//return letterPoints;
    return score;
  }

function transform(oldPointStructure) {
  let newPointStructure = {};
  for (const pointValue in oldPointStructure) {
    for (let i = 0; i < oldPointStructure[pointValue].length; i++) {
      newPointStructure[oldPointStructure[pointValue][i].toLowerCase()] = pointValue;
      //console.log(newPointStructure[oldPointStructure[pointValue][i].toLowerCase()]+ " " + pointValue);
    }
  }
  return newPointStructure;
}

function scrabbleScore(word)  {
  word = word.toLowerCase(word);
 	let letterPoints = "";
  let score=0;
	for (let i = 0; i < word.length; i++) {//loop for each letter in word     
    for (const letter in newPointStructure) {//loop for every letter(key) in new point structure
            if (word[i] === letter) {
        score = score + parseInt(newPointStructure[letter],10);
        //matches the letter in the owrd to the letter in the new point sctructure
        //when matched,adds the point value associated with the letter key to the score note that this is the rfer to point value:newPointStructure[letter]
        //letterPoints += `Points for '${word[i]}': ${newPointStructure[letter]}\n`
      }
    }
	}
	//return letterPoints;
  return score;
}

function simpleScore(word){
  word = word.toUpperCase(word);
  let numericalScore;
  numericalScore = word.length;
  return numericalScore;
}

function vowelBonusScore(word){
  word = word.toUpperCase(word);
  let score=0;
  for (let i = 0; i < word.length; i++){
    if ((word[i] ==='E') || (word[i] ==='A')||(word[i] ==='I') || (word[i] ==='O')|| (word[i] ==='U'))
      score = score+3;
    else
      score = score+1;
  } 
  return score 
}
   
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!  \n");
   let word="";
   word = input.question("Enter a word to score: ");
   return word
};

let bonusVowelsObject= {
  'name':'Bonus Vowels',
  'description':'Vowels are 3 pts, consonants are 1 pt.',
  'scoringFunction':vowelBonusScore
  };

let scrabbleObject= {
  'name':'Scrabble',
  'description':'The traditional scoring algorithm.',
  //'scoringFunction':oldScrabbleScorer
  'scoringFunction':scrabbleScore
};

let simpleScoreObject = {
  'name':'Simple Score',
  'description':'Each letter is worth 1 point.',
  'scoringFunction':simpleScore
};

function scorerPrompt() {
   let scrabbleScoringMethodNumber;

  
   console.log("Which scoring algorithm would you like to use? \n ")
   for (i = 0; i < scoringAlgorithms.length; i++){
   console.log(`${i}:${scoringAlgorithms[i].name} : ${scoringAlgorithms[i].description}`)
   }
   scrabbleScoringMethodNumber = input.question("Enter 0, 1, or 2: ");
   return scrabbleScoringMethodNumber;
}
      

//let simpleScore;

//let vowelBonusScore;

// let scrabbleScore = function (word,scrabbleScoringMethodNumber) {
//  console.log("Score For '" + word + "' : " + scoringAlgorithms[scrabbleScoringMethodNumber].scoringFunction(word));
// }

// function scrabbleScore(word,scrabbleScoringMethodNumber) {
//  console.log("Score For '" + word + "' : " + scoringAlgorithms[scrabbleScoringMethodNumber].scoringFunction(word));

// }


const scoringAlgorithms = [simpleScoreObject,bonusVowelsObject,scrabbleObject];

//function scorerPrompt() {}

//function transform() {};

let newPointStructure;

function runProgram() {
   let word;//create bucket for word coming back from function initialPrompt
   let letterPoints;//create a bucket for letter points coming back from function oldScrabbleScorer
   let numericalScore;//catches the value returning from simpleScore
   let score;//catches the value returnng from vowelBonusScore
   let scrabbleScoringMethodNumber;//catche the scoring method that is retruned by scrabbleMethod
   word = initialPrompt();//calls initialPromtpt to fill word bucket
   scrabbleScoringMethodNumber = scorerPrompt();
   newPointStructure = transform(oldPointStructure);//create new point structure based on old point struct
   console.log("Score For '" + word + "' : " + scoringAlgorithms[scrabbleScoringMethodNumber].scoringFunction(word));
  //console.log(scrabbleScore("vitamin"));


   //console.log("algorithm name: ", scoringAlgorithms[scrabbleScoringMethodNumber].name);
  //console.log("scoringFunction result: ", scoringAlgorithms[scrabbleScoringMethodNumber].scoringFunction(word));
  // word = initialPrompt();//calls initialPromtpt to fill word bucket
  // letterPoints = oldScrabbleScorer(word);//call oldScrabblescorer and passes word from word bucket into function oldscrabblescorer to fill the letterPoints bucket
  // console.log(letterPoints);//prints the value of letterPoints bucket
   //numericalScore = simpleScore(word);
   //console.log(numericalScore);
   //score = vowelBonusScore(word);
  // console.log(score);
  //  scrabbleScoringMethodNumber = scorerPrompt();
  //  console.log(scrabbleScoringMethodNumber);
  //  console.log("algorithm name: ", scoringAlgorithms[scrabbleScoringMethodNumber].name);
  //  console.log("scoringFunction result: ", scoringAlgorithms[scrabbleScoringMethodNumber].scoringFunction(word));

}  

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
