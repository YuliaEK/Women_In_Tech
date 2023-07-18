// grab the targrt element step1
let btnFirstName = document.querySelector("#btnFirstName"); 
let firstName = document.querySelector("#firstName");
let errMsg = document.querySelector("#errMsg");

 // write the function
function displayfirstBlock() {
 
  if (firstName.value == "") {
    errMsg.innerHTML = "Please type your name";
    document.querySelector("#errMsg").style.color = "#ff0000";
    firstName.style.borderColor = "red";
    firstName.focus();
  } else {
    errMsg.innerHTML = "";
    document.querySelector("#simleyDiv").style.display = "block";
    document.querySelector("#welcomeText").innerHTML = `Hi ${firstName.value}, Please rate your experience with us`;
  }
}

// addEventListner and call the function 3 step
btnFirstName.addEventListener("click", displayfirstBlock);



// Open the third block when the next button is click

// step 1 - grab the target element
let btnMessage = document.querySelector("#btnMessage");
let displayMessage = document.querySelector("#displayMessage")

// step 2 - type the function
function displayImgBlock (){
displayMessage.style.display="block";
let content = '<p> Thank you for your feedback! </p>';
displayMessage.innerHTML= content;
}
//step 3 - add the event listener
btnMessage.addEventListener("click", displayImgBlock);



// change the mood depending om mouseover by user;

// step 1 - grab the target element
let displayMood = document.querySelector("#displayMood");
let happy = document.querySelector("#happy");
let sad = document.querySelector ("#sad");
let angry = document.querySelector ("#angry");


// step 2 - type the function

function displaySad(){
displayMood.innerHTML = "Sad";
displayMood.style.color = "orange"

}
function displayHappy(){
  displayMood.innerHTML = "Happy";
  displayMood.style.color = "orange"
}

function displayAngry(){
  displayMood.innerHTML = "Angry";
  displayMood.style.color = "orange"
}
//step 3 - add the event listener

sad.addEventListener("mouseover", displaySad)
happy.addEventListener("mouseover", displayHappy)
angry.addEventListener("mouseover", displayAngry)

