console.log(`Welcome to the Republic`);

//we need to store 2 global values: banana count and BpS

let bananaCount = 0;
let BpS = 0;

let stats = {
  bananaCount: 0,
  BpS: 0,
};
// we can save either as an object or as variables both ave pros and cons for me I am leaning towards 2 different variables since I find that easier to manipulate.

//Dom Manipulation
//Select the DOM elements (buttons, imgs, p, ...)

//a way to store the shop upgrades that come from the API
let shopUpgrades = []; //store as an array since it is the same as the API.

function getShopUpgrades() {
  //fetch the data
  //translate into JSON
  //PUSH the items the shopUpgrades array above
}

//an event listner to click on the banana button.
//select the banana button/img
//write yyour event handler and event listner

function handleBananaClick() {
  //when i click on this the value of the banana counter goes up by 1
}

addEventListener("click", handleBananaClick);

//we need a timer that increases the Banana Count value by one every second.
setInterval(function () {
  //I want to incearse the value of bananaCount by one every second
  //I want to update the value displayed on the page.
  //Update cookieCount
  //I want to store this as a local value.
}, 1000);

function renderShopUpgrades() {
  //create DOM elements
  //you will use a loop or array mehtod
  shopUpgrades.forEach(function (upgraede) {
    //for eacj item in the array, assign the value to a DOM element
    //append the elelment to the DOM
  });
}
