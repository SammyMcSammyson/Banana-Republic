console.log(`Welcome to the Republic`);

window.onload = function () {
  //   let bananaCount = localStorage.getItem(`bananaCount`);
  let BpS = localStorage.getItem(`BpS`);
  console.log(BpS);
};
setInterval(function () {
  localStorage.setItem(`bananaCount`, bananaCount);
  localStorage.setItem(`BpS`, BpS);
}, 1000); // trying to work out local storage of the count but I think I am going down the wrong path I got it updating however struggling to reload the info on refreshing the page 15/09/2024 1150

//we need to store 2 global values: banana count and BpS
let BpS = 0;
// global variable which is setting the count at 0 - will use throughout.
let bananaCount = 0 + BpS; // global variable which is setting the count at 0 - will use throughout.

let bananaAutoClickerButton = document.getElementById(
  "bananaAutoClickerButton"
); // DOM to use in event listner for "buy"
let bananaEnhancedOvenButton = document.getElementById(
  "bananaEnhancedOvenButton"
);
let bananaCookieFarmButton = document.getElementById("bananaCookieFarmButton");
let bananaRobotBakerButton = document.getElementById("bananaRobotBakerButton");
let bananaCookieFactoryButton = document.getElementById(
  "bananaCookieFactoryButton"
);
let bananaMagicFlowerButton = document.getElementById(
  "bananaMagicFlowerButton"
);
let bananaTimeMachineButton = document.getElementById(
  "bananaTimeMachineButton"
);
let bananaQuantumOvenButton = document.getElementById(
  "bananaQuantumOvenButton"
);
let bananaAlienTechnologyButton = document.getElementById(
  "bananaAlienTechnologyButton"
);
let bananaInterdimensionalBakerButton = document.getElementById(
  "bananaInterdimensionalBakerButton"
); //I ahve copied all the code and brute forcing the buttons in place it was only when I saw Katherines code my brain clicked that I could use a for each function for the information especially since I am already getting the information from the API as an array in my code. Just need to place it in the right place. Once I have completed it I will try the for each method and see if I can get it to work.

let bananaBpS = document.getElementById("BpS"); //DOM to use in event listner for BpS - going to use a similar format as the button.
let bananaShop = document.getElementById("bananaShop");
let resetButton = document.getElementById("resetButton");

function userName() {
  let userName = prompt("What is your Name?");
  document.getElementById("personliseMessage").innerHTML =
    userName + ` world domination is a few clicks away...`;
}
userName(); //creating a place that where you enter a name and edits the words on screen

function liveBananaCount() {
  //code which shows the value of the banana count and replaces the words.
  document.getElementById("BananaTotal").textContent = bananaCount;
}

function liveBpS() {
  //code which shows the value of the BpS and replaces the words.
  document.getElementById("BpS").textContent = BpS;
}

bananaButton.addEventListener("click", handleBananaClick);

function liveBananaCount() {
  //code which shows the value of the banana count and replaces the words.
  document.getElementById("BananaTotal").textContent = bananaCount;
}
function handleBananaClick() {
  //when i click on this the value of the banana counter goes up by 1

  bananaCount = bananaCount + 1;
  //   document.getElementById("BananaTotal").textContent = bananaCount;
  liveBananaCount(); //replacing words with live counter - looks good and is simple to do plus it makes sense in my head to do it this way. Initial problem was when I put it to +1 it was adding 2 to the counter I assume since its running it twice due to live banna count function also using bananaCount as a variable. The pure coder in me would spend 20 minutes fixing this so they wouldn't interfere with each other. The lazy man in me says they should only add 0.5 at a time if it is getting doubled... I assume when I start messing around with BpS I will have to come back and fix this. Heres hoping I don't though. 12/09/24 2024 UPDATE for some reason presson my rest button also adds to the counter but only by 0.5... wierd but I havn't coded it yet to Reset so heres hoping the lazy plan still works. 12/09/2024 2026. UPDATE Really confused now when I click the image it adds +1 as wanted however if I click around the pictue it clicks +0.5 which is wild I have not a clue why suspect its something to do with .innerHTML function but if I take it out the code breaks... 12/09/24 2040 ---UPDATE--- spoke with manny for 20 minutes we could not figure out what was going on he then went away and worked out it was all my notes at the bottom effecting the code. Once I commented the code out it worked exactly how I thought it would and I have the +1 now as well. 13/09/2024 1048.
  document.getElementById(`masterbanana`).innerHTML = ``;
  let autoclickimage = document.createElement("img");
  autoclickimage.src =
    "https://static.vecteezy.com/system/resources/thumbnails/044/248/896/small_2x/cute-banana-cartoon-emoji-icon-character-illustration-png.png";
  autoclickimage.width = 50;
  autoclickimage.height = 50;
  autoclickimage.className = "bananaFloat";
  document.getElementById("masterbanana").appendChild(autoclickimage);
  //adding some code so that when I click the image it makes a smaller image appear then in CSS make it disappers slowly. Code is pretty janky will probly have to fix in the morning when I am not inebriated 15/09/24 0352
}

resetButton.addEventListener("click", resetHandler);

function resetHandler() {
  BpS = 0;
  bananaCount = 0 + BpS;
  //   console.log(BpS);
  //   console.log(bananaCount);
  //   liveBananaCount();
  liveBpS();
  document.getElementById(`bananaAutoClickerImage`).innerHTML = ``;
  document.getElementById(`bananaEnhancedOvenImage`).innerHTML = ``;
  document.getElementById(`bananaCookieFarmImage`).innerHTML = ``;
  document.getElementById(`bananaRobotBakerImage`).innerHTML = ``;
  document.getElementById(`bananaCookieFactoryImage`).innerHTML = ``;
  document.getElementById(`bananaMagicFlowerImage`).innerHTML = ``;
  document.getElementById(`bananaTimeMachineImage`).innerHTML = ``;
  document.getElementById(`bananaQuantumOvenImage`).innerHTML = ``;
  document.getElementById(`bananaAlienTechnologyImage`).innerHTML = ``;
  document.getElementById(`bananaInterdimensionalBaker`).innerHTML = ``;

  localStorage.clear();
}

bananaAutoClickerButton.addEventListener("click", function () {
  //found it easier to create an if function since it allowed me to say no if the person did not have enought bananas.
  if (bananaCount < 100) {
    alert(`you do not have the facilities for that bruv`);
  } else {
    BpS = BpS + 1;
    bananaCount = bananaCount - 100;
    liveBpS();
    let autoclickimage = document.createElement("img");
    autoclickimage.src =
      "https://static.vecteezy.com/system/resources/thumbnails/044/248/896/small_2x/cute-banana-cartoon-emoji-icon-character-illustration-png.png";
    autoclickimage.width = 20;
    autoclickimage.height = 20;
    document
      .getElementById("bananaAutoClickerImage")
      .appendChild(autoclickimage);

    //this counts as using local storage... I class it as "relevant game information"
    let alerted = localStorage.getItem("alerted") || "";
    if (alerted != "yes") {
      alert("The world domination begins...");
      localStorage.setItem("alerted", "yes");
    }
  }
});

bananaEnhancedOvenButton.addEventListener("click", function () {
  //just copying the code for my previous buy function...again a for each function would be sooooooo much easier.
  if (bananaCount < 500) {
    alert(`you do not have the facilities for that bruv`);
  } else {
    BpS = BpS + 5;
    bananaCount = bananaCount - 500;
    liveBpS();
    let autoclickimage = document.createElement("img");
    autoclickimage.src =
      "https://static.vecteezy.com/system/resources/thumbnails/044/248/896/small_2x/cute-banana-cartoon-emoji-icon-character-illustration-png.png";
    autoclickimage.width = 20;
    autoclickimage.height = 20;
    document
      .getElementById("bananaEnhancedOvenImage")
      .appendChild(autoclickimage);
    //this counts as using local storage... I class it as "relevant game information"
    let alertedOven = localStorage.getItem("alertedOven") || "";
    if (alertedOven != "yes") {
      alert("Pimping out those ovens...");
      localStorage.setItem("alertedOven", "yes");
    }
  }
});
bananaCookieFarmButton.addEventListener("click", function () {
  //just copying the code for my previous buy function...again a for each function would be sooooooo much easier.
  if (bananaCount < 1000) {
    alert(`you do not have the facilities for that bruv`);
  } else {
    BpS = BpS + 10;
    bananaCount = bananaCount - 1000;
    liveBpS();
    let autoclickimage = document.createElement("img");
    autoclickimage.src =
      "https://static.vecteezy.com/system/resources/thumbnails/044/248/896/small_2x/cute-banana-cartoon-emoji-icon-character-illustration-png.png";
    autoclickimage.width = 20;
    autoclickimage.height = 20;
    document
      .getElementById("bananaCookieFarmImage")
      .appendChild(autoclickimage);
    //this counts as using local storage... I class it as "relevant game information"
    let alertedFarm = localStorage.getItem("alertedFarm") || "";
    if (alertedFarm != "yes") {
      alert("Make sure you pay those workers a fair wage...");
      localStorage.setItem("alertedFarm", "yes");
    }
  }
});
bananaRobotBakerButton.addEventListener("click", function () {
  //just copying the code for my previous buy function...again a for each function would be sooooooo much easier.
  if (bananaCount < 2000) {
    alert(`you do not have the facilities for that bruv`);
  } else {
    BpS = BpS + 20;
    bananaCount = bananaCount - 2000;
    liveBpS();
    let autoclickimage = document.createElement("img");
    autoclickimage.src =
      "https://static.vecteezy.com/system/resources/thumbnails/044/248/896/small_2x/cute-banana-cartoon-emoji-icon-character-illustration-png.png";
    autoclickimage.width = 20;
    autoclickimage.height = 20;
    document
      .getElementById("bananaRobotBakerImage")
      .appendChild(autoclickimage);
    //this counts as using local storage... I class it as "relevant game information"
    let alertedBakers = localStorage.getItem("alertedBakers") || "";
    if (alertedBakers != "yes") {
      alert("We are coming for you, Greggs...");
      localStorage.setItem("alertedFarm", "yes");
    }
  }
});
bananaCookieFactoryButton.addEventListener("click", function () {
  //just copying the code for my previous buy function...again a for each function would be sooooooo much easier.
  if (bananaCount < 5000) {
    alert(`you do not have the facilities for that bruv`);
  } else {
    BpS = BpS + 50;
    bananaCount = bananaCount - 5000;
    liveBpS();
    let autoclickimage = document.createElement("img");
    autoclickimage.src =
      "https://static.vecteezy.com/system/resources/thumbnails/044/248/896/small_2x/cute-banana-cartoon-emoji-icon-character-illustration-png.png";
    autoclickimage.width = 20;
    autoclickimage.height = 20;
    document
      .getElementById("bananaCookieFactoryImage")
      .appendChild(autoclickimage);
    //this counts as using local storage... I class it as "relevant game information"
    let alertedFactory = localStorage.getItem("alertedFactory") || "";
    if (alertedFactory != "yes") {
      alert("Willy Wonka eat your heart out...");
      localStorage.setItem("alertdFactory", "yes");
    }
  }
});
bananaMagicFlowerButton.addEventListener("click", function () {
  //just copying the code for my previous buy function...again a for each function would be sooooooo much easier.
  if (bananaCount < 10000) {
    alert(`you do not have the facilities for that bruv`);
  } else {
    BpS = BpS + 100;
    bananaCount = bananaCount - 10000;
    liveBpS();

    let autoclickimage = document.createElement("img");
    autoclickimage.src =
      "https://static.vecteezy.com/system/resources/thumbnails/044/248/896/small_2x/cute-banana-cartoon-emoji-icon-character-illustration-png.png";
    autoclickimage.width = 20;
    autoclickimage.height = 20;
    document
      .getElementById("bananaMagicFlowerImage")
      .appendChild(autoclickimage);

    //this counts as using local storage... I class it as "relevant game information"
    let alertedFlower = localStorage.getItem("alertedFlower") || "";
    if (alertedFlower != "yes") {
      alert("May have used some Dark Arts Magic here...");
      localStorage.setItem("alertdFlower", "yes");
    }
  }
});
bananaTimeMachineButton.addEventListener("click", function () {
  //just copying the code for my previous buy function...again a for each function would be sooooooo much easier.
  if (bananaCount < 20000) {
    alert(`you do not have the facilities for that bruv`);
  } else {
    BpS = BpS + 200;
    bananaCount = bananaCount - 20000;
    liveBpS();

    let autoclickimage = document.createElement("img");
    autoclickimage.src =
      "https://static.vecteezy.com/system/resources/thumbnails/044/248/896/small_2x/cute-banana-cartoon-emoji-icon-character-illustration-png.png";
    autoclickimage.width = 20;
    autoclickimage.height = 20;
    document
      .getElementById("bananaTimeMachineImage")
      .appendChild(autoclickimage);
    //this counts as using local storage... I class it as "relevant game information"
    let alertedTimeMachine = localStorage.getItem("alertedTimeMachine") || "";
    if (alertedTimeMachine != "yes") {
      alert("Marty we have to go back...");
      localStorage.setItem("alertedTimeMachine", "yes");
    }
  }
});
bananaQuantumOvenButton.addEventListener("click", function () {
  //just copying the code for my previous buy function...again a for each function would be sooooooo much easier.
  if (bananaCount < 50000) {
    alert(`you do not have the facilities for that bruv`);
  } else {
    BpS = BpS + 500;
    bananaCount = bananaCount - 50000;
    liveBpS();
    let autoclickimage = document.createElement("img");
    autoclickimage.src =
      "https://static.vecteezy.com/system/resources/thumbnails/044/248/896/small_2x/cute-banana-cartoon-emoji-icon-character-illustration-png.png";
    autoclickimage.width = 20;
    autoclickimage.height = 20;
    document
      .getElementById("bananaQuantumOvenImage")
      .appendChild(autoclickimage);
    //this counts as using local storage... I class it as "relevant game information"
    let alertedQuantum = localStorage.getItem("alertedQuantum") || "";
    if (alertedQuantum != "yes") {
      alert("We REALLY pimping out the oven now...");
      localStorage.setItem("alertedQuantum", "yes");
    }
  }
});
bananaAlienTechnologyButton.addEventListener("click", function () {
  //just copying the code for my previous buy function...again a for each function would be sooooooo much easier.
  if (bananaCount < 100000) {
    alert(`you do not have the facilities for that bruv`);
  } else {
    BpS = BpS + 1000;
    bananaCount = bananaCount - 100000;
    liveBpS();

    let autoclickimage = document.createElement("img");
    autoclickimage.src =
      "https://static.vecteezy.com/system/resources/thumbnails/044/248/896/small_2x/cute-banana-cartoon-emoji-icon-character-illustration-png.png";
    autoclickimage.width = 20;
    autoclickimage.height = 20;
    document
      .getElementById("bananaAlienTechnologyImage")
      .appendChild(autoclickimage);

    //this counts as using local storage... I class it as "relevant game information"
    let alertedAlien = localStorage.getItem("alertedAlien") || "";
    if (alertedAlien != "yes") {
      alert(
        "We should of used the tech to have world peace but instead we repurposed it for the republic..."
      );
      localStorage.setItem("alertedAlien", "yes");
    }
  }
});

bananaInterdimensionalBakerButton.addEventListener("click", function () {
  //just copying the code for my previous buy function...again a for each function would be sooooooo much easier.
  if (bananaCount < 200000) {
    alert(`you do not have the facilities for that bruv`);
  } else {
    BpS = BpS + 2000;
    bananaCount = bananaCount - 200000;
    liveBpS();
    let autoclickimage = document.createElement("img");
    autoclickimage.src =
      "https://static.vecteezy.com/system/resources/thumbnails/044/248/896/small_2x/cute-banana-cartoon-emoji-icon-character-illustration-png.png";
    autoclickimage.width = 20;
    autoclickimage.height = 20;
    document
      .getElementById("bananaInterdimensionalBaker")
      .appendChild(autoclickimage);

    //this counts as using local storage... I class it as "relevant game information"
    let alertedIBaker = localStorage.getItem("alertedIBaker") || "";
    if (alertedIBaker != "yes") {
      alert("Sorry you did not get the job we hired someone else...");
      localStorage.setItem("alertedIBaker", "yes");
    }
  }
});

setInterval(function () {
  //orginally had this in the handler but it messed with timing now putting it outside fixes time this was because I was causing a recursive loop whihc exponetially got bigger.
  bananaCount = bananaCount + BpS;
  console.log(BpS);
  console.log(bananaCount);
  liveBananaCount();
}, 1000);

async function getShop() {
  //creating api fetch function.
  const response = await fetch(
    `https://cookie-upgrade-api.vercel.app/api/upgrades`
  );
  console.log(response);

  const json = await response.json(); //changing daata into jason
  console.log(json);

  json.forEach(function (a) {
    //for each function takes the information and places it in the html document.
    //creat an html element to contain the data from the API
    //make sure there is an individual element per peice of data
    //managed to solve it but needed a lot of help, I looked over for each functions again and had to really talk through the process of what was going on - note for future self when doing something like this really think through each step - will try apply same thought process to local storage since I am not very confident with that either at the moment. 13/09/24 1241
    const shopNames = document.createElement("p");
    const shopCost = document.createElement("p");
    const shopBpSIncrease = document.createElement("p");

    shopNames.textContent = a.name;
    shopCost.textContent = a.cost;
    shopBpSIncrease.textContent = a.increase;

    shopNames.className = "shopNames";
    shopCost.className = "shopCost";
    shopBpSIncrease.className = "shopBpSIncrease";

    bananaShop.appendChild(shopNames);
    bananaShop.appendChild(shopCost);
    bananaShop.appendChild(shopBpSIncrease);

    // buyButton.addEventListener("click", function (a) {
    //   //found it easier to create an if function since it allowed me to say no if the person did not have enought bananas.
    //   if (bananaCount < a.cost) {
    //     alert(`you do not have the facilities for that bruv`);
    //   } else {
    //     BpS = BpS + a.increase;
    //     bananaCount = bananaCount - a.cost;
    //     liveBpS();

    //     //this counts as using local storage... I class it as "relevant game information"
    //     let alerted = localStorage.getItem("alerted") || "";
    //     if (alerted != "yes") {
    //       alert("The world domination begins...");
    //       localStorage.setItem("alerted", "yes");
    //     }
    //   }
    // });
    //super annoying since the code gets peoples name in etc. however I have the buy buttons deep in other parts of my code so unless I edit it all of them to make it work. I would rather focus on local storage and media qureys first. May come back to it later however the information is there to build on. Also had to reset from Github because the code was that broken...probably should figure how and what is connected. 14/09/2024 2040
  });
}

getShop();
