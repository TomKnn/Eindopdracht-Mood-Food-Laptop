// IMPORTEER VARIABELEN
import axios from 'axios';
import {recipeByPreferenceResults} from "./javascript/fetchApiData/getRecipeByPreference";


// const recipeIdArray = async function (){
//   const arr = await axios(recipeByPreferenceResults);
//   return arr.data.results.slice(0, 2).map(({id}) => id);
//     console.log(recipeIdArray());
// }

// (async()=> {
//   const arr = await recipeByPreferenceResults;
//   const recipeArray = arr.data.results.slice(0, 2).map(({id}) => id);
//   console.log(recipeArray); })();

let recipeIdArray;
(async()=> {
  const arr = await recipeByPreferenceResults;
  return recipeIdArray = arr.data.results.slice(0, 2).map(({id}) => id);
  })();
console.log(recipeIdArray);




import cuisineChecklist from "./javascript/browseLists/cuisineChecklist";
import intoleranceChecklist from "./javascript/browseLists/intoleranceChecklist";
import inclusiveChecklist from "./javascript/browseLists/inclusiveChecklist";
// import maxReadyTimeChecklist from "./javascript/browseLists/maxReadyTimeChecklist;
import createCuisineChecklist from "./javascript/browseLists/cuisineChecklist";
// import insertFirstImageRow from "./javascript/insertEmojiImages/insertImagesQuestions";


// IMPORTEER FUNCTIES EMOJI SELECTIE

// import getHappyAndNeutralEndpoint from ".javascript/emojiSelection/functionHappyAndNeutralEmotion";


// IMPORTEER fetchApiData

import getRecipeByCard from "./javascript/fetchApiData/getRecipeByCard";
import getRecipeByPreference from "./javascript/fetchApiData/getRecipeByPreference";
import recipeArray from "./javascript/fetchApiData/getRecipeByPreference";
// import createCuisineChecklist from "./javascript/browseLists/cuisineChecklist";


// INJECTEREN CHECKLISTEN BROWSE.HTML

// cuisineChecklist;
// intoleranceChecklist;
// inclusiveChecklist;
// maxReadyTimeChecklist;


// FUNCTIES CHECKLIJSTEN BROWSE.HTML CREËREN

// createCuisineChecklist();


// FUNCTIES AANROEPEN


// getRecipeByCard();
// createRecipeArray();

// console.log(arrayForRecipeCard);

// createCuisineChecklist();

// TIJDELIJKE CODE TRY-OUT




// let currentEntry = results.data.results[0];
// let currentEntry = 0;
// let endOfArray = getEndOfArray.length;
//
//
// nextButton.addEventListener('click',()=>{
//     currentEntry = currentEntry + 1
// });
//
// previousButton.addEventListener('click',()=>{
//     console.log('button pressed');
// });










