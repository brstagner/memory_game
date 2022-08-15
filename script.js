const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let clickCount = 0;
let matchCount = 0;

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  
  if (event.target.classList.contains('matched')){return}
  else {

    if (event.target.classList.contains('picked')){return}
    else{

      if (document.getElementsByClassName('picked').length === 2){return}
      else{
      clickCount++;
      matchCount++;
      event.target.style.backgroundColor = `${event.target.classList.value}`;
      event.target.classList.add('picked');
    
      if (matchCount === 2){
        
        if (document.getElementsByClassName('picked')[0].style.backgroundColor ===
            document.getElementsByClassName('picked')[1].style.backgroundColor){

              document.getElementsByClassName('picked')[0].classList.add('matched');
              document.getElementsByClassName('picked')[1].classList.add('matched');

                if(document.getElementsByClassName('matched').length === 10){
                  window.setTimeout(function(){
                  alert('You won!'); window.location.reload();
                }, 1000);}
                
                else{
              document.getElementsByClassName('picked')[1].classList.remove('picked');
              document.getElementsByClassName('picked')[0].classList.remove('picked');
                }
            }
        else{
          window.setTimeout(function(){
      
            for (let i of document.getElementsByClassName('picked'))
              {i.style.backgroundColor = ''; i.classList.remove('picked')};
            for (let j of document.getElementsByClassName('picked'))
              {j.style.backgroundColor = ''; j.classList.remove('picked')};
          }, 1000);}
       
         matchCount = 0} // resets matchCounter

    }
    
  }
}}

// when the DOM loads
createDivsForColors(shuffledColors);

/* */