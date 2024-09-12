console.log(`Welcome to the Republic`);

//we need to store 2 global values: banana count and BpS

let bananaCount = 0; // global variable which is setting the count at 0 - will use throughout.
let BpS = 0; // global variable which is setting the count at 0 - will use throughout.
let bananaButton = document.getElementById("bananaButton"); // DOM to use in event listner for "clicks"
let bananaBpS = document.getElementById("BpS"); //DOM to use in event listner for BpS - going to use a similar format as the button.

function liveBananaCount() {
  //code which shows the value of the banana count and replaces the words.
  document.getElementById("BananaTotal").innerHTML = bananaCount;
}

function liveBpS() {
  //code which shows the value of the BpS and replaces the words.
  document.getElementById("BpS").innerHTML = BpS;
}

bananaButton.addEventListener("click", handleBananaClick);

function handleBananaClick() {
  //when i click on this the value of the banana counter goes up by 1

  bananaCount = bananaCount + 0.5;
  liveBananaCount(); //replacing words with live counter - looks good and is simple to do plus it makes sense in my head to do it this way. Initial problem was when I put it to +1 it was adding 2 to the counter I assume since its running it twice due to live banna count function also using bananaCount as a variable. The pure coder in me would spend 20 minutes fixing this so they wouldn't interfere with each other. The lazy man in me says they should only add 0.5 at a time if it is getting doubled... I assume when I start messing around with BpS I will have to come back and fix this. Heres hoping I don't though. 12/09/24 2024 UPDATE for some reason presson my rest button also adds to the counter but only by 0.5... wierd but I havn't coded it yet to Reset so heres hoping the lazy plan still works. 12/09/2024 2026. UPDATE Really confused now when I click the image it adds +1 as wanted however if I click around the pictue it clicks +0.5 which is wild I have not a clue why suspect its something to do with .innerHTML function but if I take it out the code breaks... 12/09/24 2040
}

// let stats = {
//   bananaCount: 0,
//   BpS: 0,
// };
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
