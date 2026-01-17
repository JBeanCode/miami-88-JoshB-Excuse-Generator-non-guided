import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let whos = ["My Grandpa","Batman","My chubby Aunt","George W. Bush", "The Rolling Stones", "Yoshi"]
let actions = ["ate","trampled","torched","crushed", "peed on", "ran off with"]
let whats = ["my phone","my TV","my car","my computer", "my house", "my girlfriend"]
let whens = ["when I was sleeping","when I was at McDonalds","when I was at the movies","when I was in class", "when I was 14"]

function getRandomIndex(array){
  return Math.floor(Math.random() * array.length)
}
  
const whoValue = whos[getRandomIndex(whos)]
const actionValue = actions[getRandomIndex(actions)]
const whatValue = whats[getRandomIndex(whats)]
const whenValue = whens[getRandomIndex(whens)]

const entireExcuse = `${whoValue} ${actionValue} ${whatValue} ${whenValue}`

console.log(entireExcuse)

let excuseLine = this.document.querySelector("#excuse")
  excuseLine.textContent = entireExcuse;
};

const refreshButton = document.getElementById("bigRedButton");

function handleClick() {
  location.reload(); // refreshes the page
}
refreshButton.addEventListener("click", handleClick);

