var qwertyHTML = document.querySelector('#qwerty');
const startBtn = document.querySelector('.btn__reset');
let phraseUL = document.querySelector('#phrase ul');
const button = document.getElementsByTagName('button');

let missed = 0;
let phraseArray = '';

//3. hides the start screen overlay
startBtn.addEventListener('click', () =>{
    var start = document.querySelector('.start');
    start.style.display = "none";
    const inPhraseArray = getRandomPhraseAsArray(phrases);
    phraseArray = inPhraseArray;
    addPhraseToDisplay(inPhraseArray);
});

//4. creates an arary with 5 different strings.
var phrases = [
    "thank you next",
    "goodnight n go",
    "bloodline",
    "just like magic",
    "into you"
];
//5. creates getRandomPhraseAsArray function.
function getRandomPhraseAsArray(arr){
    const innerPhrase = arr[Math.floor(Math.random()*arr.length)];
    const splitPhrase = innerPhrase.split('');
    return splitPhrase;
}
  
//6. create an addPhraseToDisplay function.
function addPhraseToDisplay(arr){
    for (let i = 0; i< arr.length; i++){
        let makeLI = document.createElement('li');
        let splitChar = arr[i];
    
        makeLI.textContent = splitChar;
        if(splitChar == ' '){
            makeLI.className = "space";
        } else { 
            makeLI.className = "letter";
        }
        phraseUL.append(makeLI);
}}

//7. create a checkLetter function.
function checkLetter(letter){
    //get all elements with class "letter"
    let check = document.getElementsByClassName('letter');
    //loop over letters and check for matches
    for (let i=0; i< phraseArray.length; i++){
        let targetLetter = phraseArray[i];
        //if there's a match
        //add "show" class to li
        //store matching letter inside of a variable
        //return the letter
    if(letter.textContent = targetLetter){
        targetLetter.className = "show";
        return targetLetter;
    }
    console.log(check);
}}

//8. add an event listener to the keyboard.
qwerty.addEventListener('click',(e) => {
    //when letter is picked add the “chosen” class to that button
    //set “disabled” attribute to true
    if (e.target.tagName === 'BUTTON'){
        e.target.className = 'chosen';
        e.target.disabled = true;
        checkLetter(e.target);
        let letterFound = checkLetter(e.target);
    }
    //pass the button to the checkLetter function
    //store the letter returned inside of a variable called letterFound
});