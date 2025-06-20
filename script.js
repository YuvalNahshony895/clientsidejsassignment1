const charList = document.getElementById("char");
const actList = document.getElementById("act");
const adjList = document.getElementById("adj");
const charList1 = document.getElementById("char1");
const locList = document.getElementById("loc");
const charBtn = document.getElementById("charbtn");
const actBtn = document.getElementById("actbtn");
const adjBtn = document.getElementById("adjbtn");
const charBtn1 = document.getElementById("charbtn1");
const locBtn = document.getElementById("locbtn");
const randomBtn = document.getElementById("randombtn");
const finalizeBtn = document.getElementById("finalizebtn");

let chars = [
    "Astronaut",
    "Detective",
    "Pirate",
    "Chef",
    "Scientist",
    "Librarian",
    "Knight",
    "Teacher",
    "Cat",
    "Spider",
    "Dragon",
    "Dog",
    "Frog",
];

let acts = [
    "Discovers",
    "Escapes from",
    "Hides from",
    "Invents",
    "Betrays",
    "Rescues",
    "Searches for",
    "Destroys",
    "Protects",
    "Transforms into",
    "Challenges",
    "Makes a deal with",
    "Is Looking For"
];

let adjs = [
    "Mysterious",
    "Brave",
    "Ancient",
    "Lonely",
    "Glitchy",
    "Cursed",
    "Enchanted",
    "Arrogant",
    "Invisible",
    "Rebellious",
    "Forgotten",
    "Charming",
    "Vengeful"
];

let chars1 = [
    "Inventor",
    "Twin",
    "Pet",
    "Alien",
    "Sword",
    "Clone",
    "AI",
    "Spirit",
    "Mentor",
    "Prince",
    "Historian",
    "Queen",
    "Wizard"
];

let locs = [
    "In an Abandoned Theme Park",
    "On a floating city",
    "In an underground lab",
    "In a haunted mansion",
    "In a cave",
    "In a medieval village",
    "In the airport",
    "In the library",
    "Outside",
    "On a mountain",
    "In a dark alley",
    "In the forests",
    "On the moon"
];
let counter = 0;
let itemRow = new Array();
let itemDetail = new Array();
chars.forEach((char) => {
    char = char.split(",");
    itemRow[counter] = document.createElement("tr");
    itemDetail[counter] = `<td>${char}</td>`;
    itemRow[counter].innerHTML = itemDetail[counter];
    charList.append(itemRow[counter]);
    counter++;
});
charList.style.color="white";
charList.style.backgroundColor="purple";
charList.style.fontSize="20px";
acts.forEach((act) => {
    act = act.split(",");
    itemRow[counter] = document.createElement("tr");
    itemDetail[counter] = `<td>${act}</td>`;
    itemRow[counter].innerHTML = itemDetail[counter];
    actList.append(itemRow[counter]);
    counter++;
});
actList.style.color="white";
actList.style.backgroundColor="blue";
actList.style.fontSize="20px";
adjs.forEach((adj) => {
    adj = adj.split(",");
    itemRow[counter] = document.createElement("tr");
    itemDetail[counter] = `<td>${adj}</td>`;
    itemRow[counter].innerHTML = itemDetail[counter];
    adjList.append(itemRow[counter]);
    counter++;
});
adjList.style.color="white";
adjList.style.backgroundColor="green";
adjList.style.fontSize="20px";
chars1.forEach((char1) => {
    char1 = char1.split(",");
    itemRow[counter] = document.createElement("tr");
    itemDetail[counter] = `<td>${char1}</td>`;
    itemRow[counter].innerHTML = itemDetail[counter];
    charList1.append(itemRow[counter]);
    counter++;
});
charList1.style.color="white";
charList1.style.backgroundColor="orange";
charList1.style.fontSize="20px";
locs.forEach((loc) => {
    loc = loc.split(",");
    itemRow[counter] = document.createElement("tr");
    itemDetail[counter] = `<td>${loc}</td>`;
    itemRow[counter].innerHTML = itemDetail[counter];
    locList.append(itemRow[counter]);
    counter++;
});
locList.style.color="white";
locList.style.backgroundColor="pink";
locList.style.fontSize="20px";

/* when clicking on buttons they do something. 
cycle through  */

let storyArray = [];
let locationOfRowChar = 0;
const charRows = charList.querySelectorAll("tr");
charBtn.addEventListener('click', function() {
    charRows.forEach(row => row.style.color = "white");
    charRows.forEach(row => row.style.backgroundColor = "purple");
    charRows[locationOfRowChar].style.color ="black";
    charRows[locationOfRowChar].style.backgroundColor = "yellow";
    storyElement = charRows[locationOfRowChar].textContent;
    storyArray[0]= storyElement;
    console.log(storyArray);
    let voice = new SpeechSynthesisUtterance(storyElement);
    window.speechSynthesis.speak(voice);
    locationOfRowChar = (locationOfRowChar + 1) % charRows.length;
});
let locationOfRowAct = 0;
const actRows = actList.querySelectorAll("tr");
actBtn.addEventListener('click', function() {
    actRows.forEach(row => row.style.color = "white");
    actRows.forEach(row => row.style.backgroundColor = "blue");
    actRows[locationOfRowAct].style.color ="black";
    actRows[locationOfRowAct].style.backgroundColor = "yellow";
    storyElement = actRows[locationOfRowAct].textContent;
    storyArray[1]= storyElement;
    console.log(storyArray);
    let voice = new SpeechSynthesisUtterance(storyElement);
    window.speechSynthesis.speak(voice);
    locationOfRowAct = (locationOfRowAct + 1) % actRows.length;
});
let locationOfRowAdj = 0;
const AdjRows = adjList.querySelectorAll("tr");
adjBtn.addEventListener('click', function() {
    AdjRows.forEach(row => row.style.color = "white");
    AdjRows.forEach(row => row.style.backgroundColor = "green");
    AdjRows[locationOfRowAdj].style.color ="black";
    AdjRows[locationOfRowAdj].style.backgroundColor = "yellow";
    storyElement = AdjRows[locationOfRowAdj].textContent;
    storyArray[2]= storyElement;
    console.log(storyArray);
    let voice = new SpeechSynthesisUtterance(storyElement);
    window.speechSynthesis.speak(voice);
    locationOfRowAdj = (locationOfRowAdj + 1) % AdjRows.length;
});
let locationOfRowChar1 = 0;
const char1Rows = charList1.querySelectorAll("tr");
charBtn1.addEventListener('click', function() {
    char1Rows.forEach(row => row.style.color = "white");
    char1Rows.forEach(row => row.style.backgroundColor = "orange");
    char1Rows[locationOfRowChar1].style.color ="black";
    char1Rows[locationOfRowChar1].style.backgroundColor = "yellow";
    storyElement = char1Rows[locationOfRowChar1].textContent;
    storyArray[3]= storyElement;
    console.log(storyArray);
    let voice = new SpeechSynthesisUtterance(storyElement);
    window.speechSynthesis.speak(voice);
    locationOfRowChar1 = (locationOfRowChar1 + 1) % char1Rows.length;
});
let locationOfRowLoc = 0;
const locRows = locList.querySelectorAll("tr");
locBtn.addEventListener('click', function() {
    locRows.forEach(row => row.style.color = "white");
    locRows.forEach(row => row.style.backgroundColor = "pink");
    locRows[locationOfRowLoc].style.color ="black";
    locRows[locationOfRowLoc].style.backgroundColor = "yellow";
    storyElement = locRows[locationOfRowLoc].textContent;
    storyArray[4]= storyElement;
    console.log(storyArray);
    let voice = new SpeechSynthesisUtterance(storyElement);
    window.speechSynthesis.speak(voice);
    locationOfRowLoc = (locationOfRowLoc + 1) % locRows.length;
});


let output = document.getElementById("output");
finalizeBtn.addEventListener('click', function() {
    let stringStory = storyArray.join(" ");
    output.textContent = stringStory;
    let voice = new SpeechSynthesisUtterance(stringStory);
    window.speechSynthesis.speak(voice);
    console.log(stringStory);
});

randomBtn.addEventListener('click', function() {
    let randChar = chars[Math.floor(Math.random() * chars.length)];
    let randAct = acts[Math.floor(Math.random() * acts.length)];
    let randAdj = adjs[Math.floor(Math.random() * adjs.length)];
    let randChar1 = chars1[Math.floor(Math.random() * chars1.length)];
    let randLoc = locs[Math.floor(Math.random() * locs.length)];
    let randStory = `${randChar} ${randAct} ${randAdj} ${randChar1} ${randLoc}`;
    let voice = new SpeechSynthesisUtterance(randStory);
    window.speechSynthesis.speak(voice);
    output.textContent = randStory;
});